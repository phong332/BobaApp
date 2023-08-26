using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
[Serializable]
public class AudioConfig
{
    public string keySound;
    public AudioClip clip;
    public AudioSource audioSource;
    [Range(0, 1)]
    public float volume;
}


public class SoundManager : Singleton<SoundManager>
{
    public List<AudioConfig> audioConfigs;
    public AudioSource pouring;
    public void PlaySound(int i)
    {
        audioConfigs[i].audioSource.PlayOneShot(audioConfigs[i].clip, audioConfigs[i].volume);
    }
   
}
