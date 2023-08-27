using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager3 : Singleton<GameManager3>
{
    [Header("Boolean")]
    public bool endGame;


    [Header("CanvasReference")]
    [Space(5)]
    public GameObject canvasEndcardLose;
    public GameObject canvasEndcardWin;
    // Start is called before the first frame update
    void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        this.RegisterListener(EventID.EndGame, (param) => ShowEndcard((bool)param));
    }

    void EndGame()
    {
        Luna.Unity.LifeCycle.GameEnded();

    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    void ShowEndcard(bool isWin)
    {
        EndGame();
        if (isWin)
        {
            canvasEndcardWin.SetActive(true);
        }
        else { 
            canvasEndcardLose.SetActive(true);
        }

    }
}
