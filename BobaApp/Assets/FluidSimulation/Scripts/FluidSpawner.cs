using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Serialization;
using UnityEngine.Pool;
namespace Fluid.Simulation
{
    public class 
    FluidSpawner : MonoBehaviour
    {
        [SerializeField] private float rate = 0.1f;
        [SerializeField] private Color color = Color.cyan;
        [SerializeField] private Fluid fluidDropPrefab;
        [SerializeField] private UnityEvent<FluidSpawner, Fluid> onSpawnerEmitingParticle;

        private YieldInstruction _waitForDelayInstruction;
        private Transform _parent;
        private static ObjectPool<Fluid> _fluidPool;
        private static Dictionary<Fluid, FluidSpawner> activeFluids = new Dictionary<Fluid, FluidSpawner>();

        public UnityEvent<FluidSpawner, Fluid> OnSpawnerEmitingParticle => onSpawnerEmitingParticle;

        public Color Color
        {
            get => color;
            set => color = value;
        }

        public bool IsSpawning { get; private set; }

        public int Count { get; private set; }

        public float Rate
        {
            get => rate;
            set
            {
                rate = value;
                _waitForDelayInstruction = new WaitForSeconds(rate);
            }
        }

#if UNITY_EDITOR
        [RuntimeInitializeOnLoadMethod]
#endif
        private static void RunTimeReset()
        {
            _fluidPool = null;
            activeFluids = new Dictionary<Fluid, FluidSpawner>();
        }

        private void Awake()
        {
            _parent = null;
            _fluidPool ??= new ObjectPool<Fluid>(
                createFunc: () => Instantiate(fluidDropPrefab, _parent),
                actionOnGet: fluid =>
                {
                    fluid.gameObject.SetActive(true);
                    // fluidTransform.SetParent(_parent);
                },
                actionOnRelease: o =>
                {
                    // o.transform.SetParent(_parent);
                    o.gameObject.SetActive(false);
                }, collectionCheck: true
            );

            Rate = rate;
        }

        public void SpawnCount(int count)
        {
            StartCoroutine(SpawnCountCoroutine(count));
        }

        private IEnumerator SpawnCountCoroutine(int count)
        {
            IsSpawning = true;
            for (int i = 0; i < count; i++)
            {
                Spawn();
                yield return _waitForDelayInstruction;
            }

            IsSpawning = false;
        }

        /// <summary>
        /// </summary>
        /// <param name="time">Set to -1 to spawn infinitely until stop is called</param>
        public void SpawnFor(float time = -1)
        {
            StartCoroutine(SpawnForCoroutine(time));
        }

        private IEnumerator SpawnForCoroutine(float time = -1)
        {
            IsSpawning = true;
            var timeElapsed = 0f;
            var lastSpawnTime = 0f;
            while (timeElapsed < time || time < 0)
            {
                if (Time.time - lastSpawnTime > rate)
                {
                    Spawn();
                    lastSpawnTime = Time.time;
                }

                yield return null;
                timeElapsed += Time.deltaTime;
            }

            IsSpawning = false;
        }

        private void Spawn()
        {
            var fluidDrop = _fluidPool.Get();
            Count++;
            activeFluids.Add(fluidDrop, this);
            Transform fluidTransform = fluidDrop.transform;
            fluidTransform.localScale = fluidDropPrefab.transform.localScale * transform.lossyScale.x;
            fluidTransform.position = transform.position;
            fluidDrop.Color = color;
            fluidDrop.Order = transform.parent.GetSiblingIndex();
            OnSpawnerEmitingParticle?.Invoke(this, fluidDrop);
        }


        public void Stop()
        {
            StopAllCoroutines();
            OnDisable();
        }

        private void OnDisable()
        {
            IsSpawning = false;
        }

        public static void Release(Fluid fluid)
        {
            if (activeFluids.ContainsKey(fluid))
            {
                activeFluids[fluid].Count--;
                activeFluids.Remove(fluid);
                _fluidPool.Release(fluid);
            }
        }

        public void Clean()
        {
            foreach (var fluid in activeFluids)
            {
                _fluidPool.Release(fluid.Key);
            }

            activeFluids.Clear();
        }
    }
}