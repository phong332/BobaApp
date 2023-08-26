using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using Water2D;

public class Faucet : MonoBehaviour
{
    [SerializeField] private Color color; /*= new Color(0f, 112 / 255f, 1f);
*/

    [SerializeField] private Image image;
    [SerializeField] private Water2D_Spawner spawner;
    [SerializeField] private EventTrigger eventTrigger;
    public int particleCount => spawner.transform.childCount;

    public Color Color => color;

    //public int count => spawner.parent != null ? spawner.parent.transform.childCount : 0;

    private void Awake()
    {
        var pointerDownEntry = new EventTrigger.Entry();
        pointerDownEntry.eventID = EventTriggerType.PointerDown;
        pointerDownEntry.callback.AddListener(OnPointerDown);

        var pointerUpEntry = new EventTrigger.Entry();
        pointerUpEntry.eventID = EventTriggerType.PointerUp;
        pointerUpEntry.callback.AddListener(OnPointerUp);

        eventTrigger.triggers.Add(pointerDownEntry);
        eventTrigger.triggers.Add(pointerUpEntry);
        SetColor(color);
    }

    public void Clean()
    {
        spawner.Restore();
    }

    private void OnPointerDown(BaseEventData arg0)
    {
        // Spawn();
    }

    private void OnPointerUp(BaseEventData arg0)
    {
        // StopSpawning();
    }

    public void Spawn()
    {
        spawner.Spawn();
    }

    public void StopSpawning()
    {
        spawner.StopSpawning();
    }

    public void SetColor(Color color)
    {
        this.color = color;
        spawner.FillColor = color;
        image.color = color;
    }

    private void OnValidate()
    {
        if (color != spawner.FillColor)
        {
            SetColor(color);
        }
    }
}