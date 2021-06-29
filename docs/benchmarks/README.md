# Benchmarks

We conduct experiments on several benchmark ST datasets using [NeurST](https://github.com/bytedance/neurst) and list the performance with other counterparts and studies. We try to make fair comparsions and facilitate future research works.

## End-to-End ST 

We present BLEU scores ([Papineni et al., 2002](https://www.aclweb.org/anthology/P02-1040.pdf)) for end-to-end ST models, tokenized BLEU using [tokenizer.perl](https://github.com/moses-smt/mosesdecoder/blob/master/scripts/tokenizer/tokenizer.perl)+[multi-bleu.perl](https://github.com/moses-smt/mosesdecoder/blob/master/scripts/generic/multi-bleu.perl) or detokenized BLEU by [sacrebleu](https://github.com/mjpost/sacrebleu).

### libri-trans

[libri-trans](https://github.com/alicank/Translation-Augmented-LibriSpeech-Corpus) is a small EN->FR ST corpus, originally started from the LibriSpeech corpus. There are 236 hours of English speech aligned to French translations from e-books at the utterance level. As most previous studies did, the training data consists of the clean 100-hour portion plus the augmented MT from Google Translate.

All kinds of BLEU scores are reported.

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


|Model|external Audio|external ASR|external MT|case-sensitive tok BLEU|case-sensitive detok BLEU|
|---|:---:|:---:|:---:|:---:|:---:|
|NeurST transf-s ([Zhao et al., 2020](https://arxiv.org/abs/2012.10018))|×|×|×|17.8|16.3|
|ST+AFS(t,f) transf-m ([Zhang et al., 2020](https://www.aclweb.org/anthology/2020.findings-emnlp.230/))|×|×|×|18.6|17.2|
|Chimera (w2v2 transf-m) ([Han et al., 2021](https://arxiv.org/abs/2105.03095))|√|×|√|-|19.4|
---

</font>


<font size=3>


|Model|external ASR|external MT|case-insensitive tok BLEU|case-insensitive detok BLEU|
|---|:---:|:---:|:---:|:---:|
|NeurST transf-s ([Zhao et al., 2020](https://arxiv.org/abs/2012.10018))|×|×|18.7|17.2|
|Espnet-ST transf-s ([Inaguma et al., 2020](https://www.aclweb.org/anthology/2020.acl-demos.34/)) |×|×|-|16.7|
|transf-s + KD ([Liu et al., 2019](https://www.isca-speech.org/archive/Interspeech_2019/abstracts/2582.html)) |×|×|17.0|-|
|TCEN-LSTM ([Wang et al., 2020](https://ojs.aaai.org//index.php/AAAI/article/view/6452)) |×|×|-|17.1|
|transf-s + curriculum pre-train ([Wang et al., 2020](https://www.aclweb.org/anthology/2020.acl-main.344.pdf)) |×|×|17.7|-|
|LUT (transf-m + bert KD + mtl) ([Dong et al., 2021](https://ojs.aaai.org/index.php/AAAI/article/view/17509)) |×|×|17.8|-|
|COSTT ([Dong et al., 2021b](https://ojs.aaai.org/index.php/AAAI/article/view/17508))|×|×|17.8|-|
|transf-m + curriculum pre-train ([Wang et al., 2020](https://www.aclweb.org/anthology/2020.acl-main.344.pdf)) |√|×|18.0|-|
|LUT (transf-m + bert KD + mtl) ([Dong et al., 2021a](https://ojs.aaai.org/index.php/AAAI/article/view/17509)) |√|×|18.3|-|
|COSTT ([Dong et al., 2021b](https://ojs.aaai.org/index.php/AAAI/article/view/17508))|×|√|18.2|-|
|SATE transf-s ([Xu et al., 2021](https://arxiv.org/abs/2105.05752))|×|×|-|18.3|
|SATE conformer-m ([Xu et al., 2021](https://arxiv.org/abs/2105.05752))|√|√|-|20.8|
---

</font>

### MuST-C

[MuST-C](https://ict.fbk.eu/must-c/) is a multilingual speech translation corpus whose size and quality facilitates the training of end-to-end systems for speech translation from English into several languages. For each target language, MuST-C comprises several hundred hours of audio recordings from English TED Talks, which are automatically aligned at the sentence level with their manual transcriptions and translations.

We report **case-sensitive detokenized BLEU** via sacrebleu toolkit.

<font size=3>

|Model|ext audio|ext ASR|ext MT|DE|ES|FR|IT|NL|PT|RO|RU|
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|NeurST transf-s ([Zhao et al., 2020](https://arxiv.org/abs/2012.10018))|×|×|×|22.8|27.4|33.3|22.9|27.2|28.7|22.2|15.1|
|Espnet-ST transf-s ([Inaguma et al., 2020](https://www.aclweb.org/anthology/2020.acl-demos.34/))|×|×|×|22.9|28.0|32.8|23.8|27.4|28.0|21.9|15.8|
|fairseq s2t transf-s ([Wang et al., 2020](https://www.aclweb.org/anthology/2020.aacl-demo.6/))|×|×|×|22.7|27.2|32.9|22.7|27.3|28.1|21.9|15.3|
|ST+AFS(t,f) transf-m ([Zhang et al., 2020](https://www.aclweb.org/anthology/2020.findings-emnlp.230/))|×|×|×|22.4|26.9|31.6|23.0|24.9|26.3|21.0|14.7|
|Chimera (w2v2 transf-m) ([Han et al., 2021](https://arxiv.org/abs/2105.03095))|√|×|√|27.1|30.6|35.6|25.0|29.2|30.2|24.0|17.4|
|XSTNet (w2v2 transf-m mtl) ([Ye et al., 2021](https://arxiv.org/abs/2104.10380))|√|×|×|25.5|36.0|-|-|-|-|-|16.9|
|XSTNet (w2v2 transf-m mtl) ([Ye et al., 2021](https://arxiv.org/abs/2104.10380))|√|×|√|27.1|38.0|-|-|-|-|-|18.4|
|SATE transf-s ([Xu et al., 2021](https://arxiv.org/abs/2105.05752))|×|×|×|25.2|-|-|-|-|-|-|-|
|SATE conformer-m ([Xu et al., 2021](https://arxiv.org/abs/2105.05752))|×|√|√|28.1|-|-|-|-|-|-|-|
---

</font>

