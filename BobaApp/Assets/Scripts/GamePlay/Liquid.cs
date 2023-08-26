using System;
using UnityEngine;
using Random = UnityEngine.Random;

public class Liquid : DrinkMaterial
{
    public static readonly Color defaultColor = new Color (0f, 112 / 255f, 1f);

    [SerializeField] private Collider2D collider2d;
    [SerializeField] private Collider2D collider2dLiquid;
    [SerializeField] private MetaballParticleClass metaballParticleClass;

    private bool firstHit;


    private void OnValidate()
    {
        if (collider2d == null) collider2d = GetComponent<Collider2D>();
        if (collider2dLiquid == null) collider2dLiquid = GetComponent<Collider2D>();
    }

    protected override void OnEnable()
    {
        base.OnEnable();
        firstHit = true;
        collider2d.isTrigger = true;
        collider2dLiquid.isTrigger = true;
        Rb.AddForce(new Vector2(Random.Range(-1f, 1f), 0));
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (!firstHit) return;
        if (other.isTrigger) return;
        if (other.gameObject.layer == 6) return;
        if (other.gameObject.layer == 7) return;

        firstHit = false;
        collider2d.isTrigger = false;
        collider2dLiquid.isTrigger = false;
        // Rb.AddForce(new Vector2(Random.Range(-10f, 10f), 0));
    }

    protected override void FallsOutOfView()
    {
        metaballParticleClass.Active = false;
    }
}