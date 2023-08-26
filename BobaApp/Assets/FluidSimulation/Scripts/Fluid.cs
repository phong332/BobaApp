using System;
using UnityEngine;

namespace Fluid.Simulation
{
    public class Fluid : MonoBehaviour
    {
        [SerializeField] private CircleCollider2D circleCollider2D;
        [SerializeField] private SpriteRenderer spriteRenderer;
        [SerializeField] private Rigidbody2D rb;
        [SerializeField] private float scaleConstant = 0.1953096449527987f;

        public CircleCollider2D CircleCollider2D => circleCollider2D;

        private Vector3 stretchVelocity;
        private Vector3 visualInitialScale;
        private Transform spriteTransform;

        private void Reset()
        {
            spriteRenderer = GetComponentInChildren<SpriteRenderer>();
            rb = GetComponent<Rigidbody2D>();
        }

        public Color Color
        {
            get => spriteRenderer.color;
            set => spriteRenderer.color = value;
        }

        public int Order
        {
            get => spriteRenderer.sortingOrder;
            set => spriteRenderer.sortingOrder = value;
        }

        private void Awake()
        {
            spriteTransform = spriteRenderer.transform;
            visualInitialScale = spriteTransform.localScale;
        }

        // private void FixedUpdate()
        // {
        //     var currentScale = spriteTransform.localScale;
        //     var velocity = rb.velocity * 5;
        //     velocity = new Vector2(Mathf.Abs(velocity.x), Mathf.Abs(velocity.y));
        //
        //
        //     var targetScale = visualInitialScale + (Vector3)velocity;
        //     targetScale = Vector3.SmoothDamp(currentScale, targetScale, ref stretchVelocity, 0.1f,
        //         float.PositiveInfinity, Time.deltaTime);
        //
        //     spriteTransform.localScale = targetScale;
        //     spriteTransform.localPosition = (targetScale - visualInitialScale) / scaleConstant;
        // }
    }
}