using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Drop : MonoBehaviour
{
    private const int IceLayer = 8;
    Rigidbody2D rb;
    public float speed;
    public SpriteRenderer icon;

    private void OnEnable()
    {
    }

    public void Init(float initSpeed)
    {
        this.speed = initSpeed;
        if (rb == null) rb = GetComponent<Rigidbody2D>();
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Glass"))
        {
            PlaySound();
            SimplePool.Despawn(gameObject);
        }
    }

    private void PlaySound()
    {
        if (gameObject.layer == IceLayer)
        {
            SoundManager.Instance.PlaySound(2);
            return;
        }
        else
        {
            SoundManager.Instance.PlaySound(1);
        }
    }

    private void Update()
    {
        icon.sortingOrder = (int)transform.position.y;
    }

    private void FixedUpdate()
    {
        if (rb != null)
            rb.velocity = Vector2.down * speed * Time.fixedDeltaTime;
    }
}