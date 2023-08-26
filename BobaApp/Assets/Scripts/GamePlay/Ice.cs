using System;
using System.Linq;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(Rigidbody2D))]
[RequireComponent(typeof(BoxCollider2D))]
public class Ice : DrinkMaterial
{
    [SerializeField] private float lerpDistance = 0.2f;
    [SerializeField] private Vector2 feetOffset = new Vector2(0, 0.1f);
    [SerializeField] private Vector2 size = new Vector2(0.5f, 0.1f);

    [SerializeField] private float maxVelocityY = 0.3f;
    [SerializeField] private float buoyancyForce = 500;

    [SerializeField] private Sprite[] sprites;
    [SerializeField] private Image image;


    private readonly Collider2D[] collider2Ds = new Collider2D[3];

    private readonly ContactFilter2D contactFilter2D = new ContactFilter2D() { layerMask = 1 << 4, useLayerMask = true };

    private Vector2 gravityDirection => Physics2D.gravity.normalized;

    private void OnValidate()
    {
        if (image == null)
        {
            image = GetComponent<Image>();
        }
    }

    private void OnDrawGizmosSelected()
    {
        Gizmos.DrawCube(transform.position - (Vector3)feetOffset, size);
    }

    protected override void OnEnable()
    {
        base.OnEnable();
        if (!sprites.IsEmpty())
        {
            image.sprite = sprites.GetRandom();
        }
    }
    private void FixedUpdate()
    {
        Collider2D[] hit = Physics2D.OverlapCircleAll((Vector2)transform.position - feetOffset, 3f);

        int feetCount = hit.Length;
        //int feetCount = Physics2D.OverlapBox(
        //    (Vector2)transform.position - feetOffset,
        //    size,
        //    0,
        //    contactFilter2D,
        //    collider2Ds);

        if (feetCount == 0)
        {
            // Debug.LogError("Drop");
            return;
        }


        var lerp = DOVirtual.EasedValue(0, 1, Mathf.Clamp01(GetDistance(feetCount) / lerpDistance), Ease.OutQuart);
        var rb = Rb;
        if (feetCount == 1 || feetCount == 2)
        {
            rb.AddForce(-Physics2D.gravity);
            // Debug.LogError("pause");
        }
        else
        {
            rb.AddForce(Vector2.up * (buoyancyForce * lerp) -
                        Physics2D.gravity);
        }

        rb.velocity = new Vector2(Mathf.Min(rb.velocity.x, maxVelocityY * lerp),
            Mathf.Min(rb.velocity.y, maxVelocityY * lerp));
    }

    private float GetDistance(int colliderCount)
    {
        var currentPosition = (transform.position - (Vector3)feetOffset).Set(z: 0);
        var maxDistance = 0f;
        var gravityDir = gravityDirection;
        var gravityNormal = new Vector3(gravityDir.y, -gravityDir.x).normalized;
        //for (int i = 0; i < colliderCount && i < collider2Ds.Length; i++)
        //{
        //    var colliderPosition =
        //        collider2Ds[i].transform.position.Set(z: 0) - (Vector3)gravityDir * 0.375f;
        //    var dir = colliderPosition - currentPosition;
        //    var dot = Vector3.Dot(gravityDir, dir);
        //    var distance = Vector3.Cross(gravityNormal, dir).magnitude;
        //    distance *= -Mathf.Sign(dot);
        //    maxDistance = Mathf.Max(maxDistance, distance);
        //}

        return maxDistance;
    }
}