using System;
using System.Collections.Generic;
using UnityEngine;

public class FaucetManager : MonoBehaviour
{
    [field: SerializeField] public CanvasGroup CanvasGroup { get; private set; }
    [SerializeField]
    private Faucet faucetPrefab;

    private List<Faucet> faucets = new List<Faucet>();

    public List<Faucet> Faucets => faucets;

    private void Awake()
    {
        faucets.Add(faucetPrefab);
    }

    public void SetColors(params Color[] colors)
    {
        if (colors.Length == 0)
        {
            colors = new[] { Liquid.defaultColor };
        }

        CreateFaucetWithAmount(colors.Length);

        for (int i = 0; i < faucets.Count; i++)
        {
            var faucet = faucets[i];
            if (i >= colors.Length)
            {
                faucet.gameObject.SetActive(false);
                continue;
            }

            faucet.gameObject.SetActive(true);
            faucet.SetColor(colors[i]);
        }
    }

    private void CreateFaucetWithAmount(int count)
    {
        for (int i = faucets.Count; i < count; i++)
        {
            faucets.Add(Instantiate(faucetPrefab, transform));
        }

        for (int i = faucets.Count - 1; i > count; i--)
        {
            Destroy(faucets[i].gameObject);
            faucets.RemoveAt(i);
            Debug.LogError(i);
        }
    }

    public void Clean()
    {
        for (int i = 0; i < faucets.Count; i++)
        {
            faucets[i].Clean();
        }
    }
}