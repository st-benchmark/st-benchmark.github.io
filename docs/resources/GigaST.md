# GigaST

**GigaST** is a large-scale speech translation corpus, by translating the transcriptions in *GigaSpeech*, a multi-domain English speech recognition corpus with 10,000 hours of labeled audio. The training data is translated by a strong machine translation system and the test data is produced by professional human translators.

## Download 

The GigaST dataset can be downloaded from: 

<style>
table th,td {
    border: 0px;
}
table th:first-of-type {
    width: 8px;
}

table td:nth-child(1) {
    white-space: nowrap; 
}
</style>

<font size=3>

| Language | Version | Link |
|:---:|:---:|:---:|
|En-De|v1.0.0| [GigaST.de.json](https://lf3-nlp-opensource.bytetos.com/obj/nlp-opensource/datasets/GigaST/GigaST.de.json)|
|En-Zh|v1.0.0| [GigaST.zh.json](https://lf3-nlp-opensource.bytetos.com/obj/nlp-opensource/datasets/GigaST/GigaST.zh.json)|

</font>


The corresponding audio recordings and transcriptions can be found in [*GigaSpeech*](https://github.com/SpeechColab/GigaSpeech). 


## Preparation Guidelines
See [github](https://github.com/bytedance/neurst/tree/master/datasets/GigaST). 


## Citation

```
@Article{gigast,
  author  = {Ye, Rong and Zhao, Chengqi and Ko, Tom and Meng, Chutong and Wang, Tao and Wang, Mingxuan and Cao, Jun},
  journal = {arXiv preprint arXiv:2204.03939},
  title = {GigaST: A 10,000-hour Pseudo Speech Translation Corpus},
  year    = {2022},
}
```


## License
The GigaST dataset is available to download for non-commercial purposes under a [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/legalcode).


## Acknowledgement
*GigaSpeech* dataset is essential for the creation of GigaST. The authors are extremely grateful to the *GigaSpeech*'s contributors.

