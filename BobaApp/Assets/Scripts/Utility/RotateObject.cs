using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class RotateObject : MonoBehaviour
{
    [SerializeField] private float duration;
    [SerializeField] private float angle;
    private void Start()
    {
        transform.DORotate(new Vector3(0, 0, angle), duration, RotateMode.LocalAxisAdd).SetLoops(-1).SetEase(Ease.Linear);
    }

}
