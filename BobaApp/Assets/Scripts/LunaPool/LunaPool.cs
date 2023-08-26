using System.Collections.Generic;
using UnityEngine;

// A simple pool manager implemented as a Luna workaround
// Please make sure LunaPool object exists in the scene (drag & drop the prefab)
public class LunaPool : MonoBehaviour
{
    public static LunaPool Instance { get; private set; }
    private Dictionary<GameObject, Queue<GameObject>> pooledObjects = new Dictionary<GameObject, Queue<GameObject>>();
    private const int POOL_SIZE = 5;

    private void Awake()
    {
        if (!Instance || Instance != this) Instance = this;
    }

    public GameObject Spawn(GameObject prefab, Vector3 position, Quaternion rotation)
    {
        if (pooledObjects.ContainsKey(prefab))
        {
            // Extract the first one from the pool, set its parameters then move to the end
            GameObject obj = pooledObjects[prefab].Dequeue();
            obj.transform.position = position;
            obj.transform.rotation = rotation;
            obj.SetActive(true);
            pooledObjects[prefab].Enqueue(obj);
            return obj;
        }
        else
        {
            Queue<GameObject> pool = new Queue<GameObject>();
            GameObject instance;
            for (int i = 0; i < POOL_SIZE; i++)
            {
                instance = Instantiate(prefab);
                instance.SetActive(false);
                pool.Enqueue(instance);
            }
            pooledObjects.Add(prefab, pool);
            return Spawn(prefab, position, rotation);
        }
    }

    public void Despawn(GameObject obj)
    {
        obj.SetActive(false);
    }
}