using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class GameManager2 : Singleton<GameManager2>
{
    public List<Faucet> lstFaucet;
    private Faucet faucet;
    private Faucet faucet1;
    private Faucet faucet2;

    public GameObject canvasEndcard;
    void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        Luna.Unity.LifeCycle.GameEnded();
        StartCoroutine(FillGlass());
    }

    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    IEnumerator FillGlass()
    {
        yield return new WaitForSeconds(1);
        StartCoroutine(StartFillGlass(0, 1f));
        yield return new WaitForSeconds(1);
        StartCoroutine(StartFillGlass(2, 1f));
        yield return new WaitForSeconds(1);
        StartCoroutine(StartFillGlass(1, 1f));
        yield return new WaitForSeconds(1);
        canvasEndcard.SetActive(true);
    }

    IEnumerator StartFillGlass(int i, float timeFillWater)
    {
        SoundManager.Instance.pouring.Play();
        float _timeFillWater = timeFillWater;
        faucet = lstFaucet[i];
        while (_timeFillWater > 0)
        {
            yield return new WaitForSeconds(Time.deltaTime);
            _timeFillWater -= Time.deltaTime;
            faucet.Spawn();
        }

        if (_timeFillWater < 0)
        {
            faucet.StopSpawning();
            SoundManager.Instance.pouring.Stop();
            yield break;
        }
    }
}