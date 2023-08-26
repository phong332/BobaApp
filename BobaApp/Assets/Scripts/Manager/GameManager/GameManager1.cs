using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public enum TypeBeverage
{
    Coca,
    Lemon,
    MilkTea
}

[Serializable]
public class ElementTopping
{

    public GameObject prefebTopping;
    public int number;
}

[Serializable]
public class Ingredient
{
    public TypeBeverage typeBeverage;
    public List<ElementTopping> lstTopping;
    public Color waterColor;
    public Glass glass;

    public float timeFillWater;
    public float timeFillTopping;
}

public class GameManager1 : Singleton<GameManager1>
{
    public bool endGame;
    public GameObject panelChoose;
    public Faucet faucet;
    public List<Ingredient> lstIngredient;


    public GameObject toppingHolder;
    public GameObject btnAll;

    public GameObject guide;
    public GameObject btnDrink;


    public int currentIndexBeverage = 0;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
    }

    public void InitBeverageToFill(int i)
    {
        // panelChoose.SetActive(false);
        faucet.SetColor(lstIngredient[i].waterColor);
        lstIngredient[i].glass.gameObject.SetActive(true);
        faucet.gameObject.SetActive(true);
    }

    public void OnClickBtnDrink()
    {
        Luna.Unity.LifeCycle.GameEnded();
        btnAll.SetActive(true);
        InstallFullGame();
    }

    bool firstTouch;

    public void OnFill(TypeBeverage typeBeverage)
    {
        if (!firstTouch)
        {
            guide.SetActive(false);
            btnDrink.SetActive(true);
            firstTouch = true;
            Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.TutorialComplete);
        }
        Luna.Unity.Analytics.LogEvent("Choose Beverage", 1);
        SoundManager.instance.PlaySound(0);
        ResetBeverage();
        switch (typeBeverage)
        {
            case TypeBeverage.Coca:
                currentIndexBeverage = 0;
                StartCoroutine(StartFill(0));
                break;
            case TypeBeverage.Lemon:
                currentIndexBeverage = 1;
                StartCoroutine(StartFill(1));
                break;
            case TypeBeverage.MilkTea:
                currentIndexBeverage = 2;
                StartCoroutine(StartFill(2));

                break;
            default: break;
        }

    }

    IEnumerator StartFillGlass(int i)
    {
        SoundManager.Instance.pouring.Play();
        float _timeFillWater = lstIngredient[i].timeFillWater;

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

    bool canSpawn = true;
    IEnumerator StartDropTopping(int i)
    {
        int lengtLstTopping = lstIngredient[i].lstTopping.Count;
        float timeToSpanwNewTopping = lstIngredient[i].timeFillTopping;
        int index = 0;
        while (index < lengtLstTopping)
        {
            if (timeToSpanwNewTopping < 0)
            {
                yield return new WaitForSeconds(UnityEngine.Random.Range(0.1f, 0.2f));
                index += 1;
                timeToSpanwNewTopping = lstIngredient[i].timeFillTopping;
                canSpawn = true;
            }
            else
            {
                yield return new WaitForSeconds(Time.deltaTime);
                timeToSpanwNewTopping -= Time.deltaTime;
                GameObject prefab = lstIngredient[i].lstTopping[index].prefebTopping;
                int amount = lstIngredient[i].lstTopping[index].number;
                if (canSpawn)
                {
                    StartCoroutine(SpawnTopping(prefab, amount));
                    canSpawn = false;
                }
                //  Instantiate(lstIngredient[i].lstTopping[index].gameObject, faucet.transform.position + Vector3.down * 0.2f, Quaternion.identity, toppingHolder.transform);
            }
        }
    }

    public IEnumerator SpawnTopping(GameObject prefab, int amount)
    {
        while (amount > 0)
        {
            amount -= 1;
            yield return new WaitForSeconds(0.05f);
            Instantiate(prefab, faucet.GetComponent<RectTransform>().position + Vector3.down * 0.2f, Quaternion.identity, toppingHolder.transform);

        }
        if (amount <= 0)
        {
            yield break;
        }
        //for (int i = 0; i < amount; i++)
        //{
        //    Instantiate(prefab, faucet.transform.position + Vector3.down * 0.2f, Quaternion.identity, toppingHolder.transform);
        //}
    }

    IEnumerator StartFill(int i)
    {

        InitBeverageToFill(i);
        yield return new WaitForSeconds(0.5f);
        StartCoroutine(StartFillGlass(i));
        yield return new WaitForSeconds(0.5f);
        StartCoroutine(StartDropTopping(i));
    }

    public void ResetBeverage()
    {
        StopAllCoroutines();
        lstIngredient[currentIndexBeverage].glass.gameObject.SetActive(false);
        for (int i = 0; i < toppingHolder.transform.childCount; i++)
        {
            if (toppingHolder.transform.GetChild(i).GetComponent<DrinkMaterial>())
            {
                toppingHolder.transform.GetChild(i).GetComponent<DrinkMaterial>().Destroying();
            }
        }
        //GameObject waterHolder = GameObject.Find("Liquid_");
        //if (waterHolder != null)
        //    Destroy(waterHolder);
         faucet.Clean();

    }

    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    int count = 0;
    public bool CheckShowEndcard()
    {
        count += 1;
        return count > 2;

    }
}
