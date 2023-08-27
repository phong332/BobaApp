using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
public class SexyShow : MonoBehaviour
{
    public List<Image> bodyPart;
    public float[] fillAmountValue;

    //0.379
    //0.408
    //0.408
    //0.609
    //1
    int index = 0;
    private void Start()
    {
        this.RegisterListener(EventID.Unlock, (param) => ActiveBodyPart());
        // StartCoroutine(StarFill());
    }
    IEnumerator StarFill()
    {
        while (index != 5)
        {
            yield return new WaitForSeconds(1);
            ActiveBodyPart();
            index += 1;
        }
    }
    public void ActiveBodyPart()
    {
        bodyPart[index].DOFillAmount(fillAmountValue[index], 0.5f);
    }
}
