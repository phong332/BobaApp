using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class ButtonBeverage : MonoBehaviour
{
    public TypeBeverage typeBeverage;

    public void OnClick()
    {

        if (!GameManager1.Instance.CheckShowEndcard())
        {
            EffectOnClick();
            GameManager1.Instance.OnFill(this.typeBeverage);
        }
        else
        {
            Luna.Unity.LifeCycle.GameEnded();
            Luna.Unity.Playable.InstallFullGame();
            GameManager1.Instance.btnAll.SetActive(true);
        }
    }

    public void EffectOnClick()
    {
        Sequence sequence = DOTween.Sequence();
        sequence.Append(transform.DOScale(Vector3.one * 0.6f, 0.5f).SetEase(Ease.Linear));
        sequence.AppendInterval(0.2f);
        sequence.Append(transform.DOScale(Vector3.one * 0.5f, 0.1f).SetEase(Ease.Linear));

    }

}
