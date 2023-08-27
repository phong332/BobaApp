using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class SpawnRandom : MonoBehaviour
{
    public List<Drop> dropPrefab;
    [Range(1, 100)] [SerializeField] private float speedSpawn;
    public float delayTime;
    private Vector3 randomPos;
    private SpriteRenderer icon;
    private Drop prefab;
    float offsetX;
    public float offsetY;
    private Vector3 spawnPointInWorld;
    public float baseSpeed;
    private float bonusSpeed;
    private float multi;

    private void Start()
    {
        float randomViewportX = Random.Range(0f, 1f);
        float randomViewportY = Random.Range(0f, 1f);
        spawnPointInWorld = Camera.main.ViewportToWorldPoint(new Vector3(randomViewportX, randomViewportY,
            Camera.main.nearClipPlane));
    }

    void Update()
    {
        if (!GameManager3.Instance.endGame)
        {
            SpawnDropObject();
        }
    }

    private GameObject drop;

    void SpawnDropObject()
    {
        delayTime += Time.deltaTime;
        if (delayTime + Time.deltaTime > speedSpawn)
        {
            prefab = dropPrefab[Random.Range(0, dropPrefab.Count - 1)];
            prefab.Init(RandomSpeed());
            delayTime = 0;
            drop = SimplePool.Spawn(prefab.gameObject, RanDomPos(),
                Quaternion.Euler(0, 0, Random.Range(-60f, 60f)));
            drop.transform.parent = transform;
        }
    }


    Vector3 RanDomPos()
    {
        icon = prefab.icon;
        offsetX = icon.bounds.size.x / 2;
        randomPos.x = Random.Range(-spawnPointInWorld.x / 2 + offsetX, spawnPointInWorld.x / 2 - offsetX);
        randomPos.y = spawnPointInWorld.y - offsetY;
        return randomPos;
    }

    public void PaceSpawn(float newPace)
    {
        delayTime = newPace;
    }

    private float speed;

    float RandomSpeed()
    {
        baseSpeed += bonusSpeed;
        return baseSpeed;
    }

    void RandomBonusSpeed()
    {
        
    }
}