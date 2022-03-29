# Resources

We list the links to toolkits and available datasets here.

## Toolkits

- [NeurST](https://github.com/bytedance/neurst) ([Zhao et al., 2020](https://arxiv.org/abs/2012.10018))
- [Espnet-ST](https://github.com/espnet/espnet) ([Inaguma et al., 2020](https://www.aclweb.org/anthology/2020.acl-demos.34/))
- [Fairseq S2T](https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text) ([Wang et al., 2020](https://www.aclweb.org/anthology/2020.aacl-demo.6/))


## Datasets

### ST

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

| Dataset | Languages | Duration | Domain |
|---|:---:|:---:|---|
| [GigaST](https://github.com/bytedance/neurst/tree/master/datasets/GigaST)   | EN→ZH, EN→DE | 10,000hrs | diverse|
| [LIBRI-TRANS](https://github.com/alicank/Translation-Augmented-LibriSpeech-Corpus) ([Kocabiyikoglu et al., 2018](https://arxiv.org/abs/1802.03142))   | EN→FR | 236hrs | read audiobooks|
| [MuST-C](https://ict.fbk.eu/must-c/) ([Cattoni et al., 2021](https://www.sciencedirect.com/science/article/pii/S0885230820300887)) | EN→ 14 lang.| 237-504hrs | TED talks |
| [CoVoST](https://github.com/facebookresearch/covost)([Wang et al., 2020](https://arxiv.org/abs/2002.01320)) | EN→15 lang. ,<br/>21 lang. →EN |929hrs, 30-311hrs | read, Common Voice   |
| [Europarl-ST](https://www.mllp.upv.es/europarl-st/) ([Iranzo-Sanchez et al., 2020](https://ieeexplore.ieee.org/abstract/document/9054626/))  | 9 lang. | 10-90hrs | EP proceedings|
| [Multilingual TEDx](http://openslr.org/100) ([Salesky et al., 2021](https://arxiv.org/abs/2102.01757)) | 8 lang.→6 lang. | 11-69hrs | TED talks|
| [IWSLT 2018](http://i13pc106.ira.uka.de/~mmueller/iwslt-corpus.zip) ([Niehues et al., 2018](https://www.aclweb.org/anthology/2020.iwslt-1.1/)) | EN→DE | 273hrs | TED talks|
| [CIAIR](http://slp.el.itc.nagoya-u.ac.jp/sidb/) ([Tohyama et al., 2005](https://www.isca-speech.org/archive/archive_papers/interspeech_2005/i05_1585.pdf))  | EN→JA  | 182hrs  | travel conversation  |
| [EPIC](http://sslmitdev-online.sslmit.unibo.it/corpora/corpora.php) ([Bendazzoli et al., 2005](http://www.euroconferences.info/proceedings/2005_Proceedings/2005_Bendazzoli_Sandrelli.pdf))| IT↔EN↔ES | 18hrs | parliament interpret.|
| [Fisher--CALLHOME](https://joshua.incubator.apache.org/data/fisher-callhome-corpus/) ([Post et al., 2013](http://cs.jhu.edu/~gkumar/papers/post2013improved.pdf))  | ES→EN | 160hrs| phone conversations  |
| [STC](https://ahcweb01.naist.jp/resource/stc/) ([Shimizu et al., 2014](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.675.4180&rep=rep1&type=pdf))  | EN↔JA | 22hrs | simult. interpret.|
| [How2](https://github.com/srvk/how2-dataset) ([Sanabria et al., 2018](https://arxiv.org/abs/1811.00347))| EN→PT | 300hrs | instructional videos |
| [Griko](http://goo.gl/EWa15G) ([Boito et al., 2018](https://arxiv.org/pdf/1807.10740.pdf))| GR→IT |18min |conversation (linguists)|
| [LibriVoxDeEn](https://www.cl.uni-heidelberg.de/statnlpgroup/librivoxdeen/) ([Beilharz et al. 2020](https://arxiv.org/abs/1910.07924))  | DE→EN | 100hrs|read audiobooks|
| [MaSS](https://github.com/getalp/mass-dataset) ([Boito et al., 2020](https://arxiv.org/abs/1907.12895)) | 8 lang. | 20hrs | Bible readings |
| [BSTC](https://ai.baidu.com/broad/subordinate?dataset=bstc) ([Zhang et al., 2020](https://arxiv.org/abs/2104.03575)) | ZH→EN | 50hrs  | simult. interpret.|
| [HPN](http://www.openslr.org/92) ([Shi et al., 2021](https://www.aclweb.org/anthology/2021.americasnlp-1.7.pdf)) | Hpn→Es | 36hrs| conversation (plant)|

</font>

### ASR

<font size=3>

| Dataset | Languages | Duration | Domain    |
|---|:---:|:---:|---|
| [GigaSpeech](https://github.com/SpeechColab/GigaSpeech/) ([Cheng et al., 2021](https://arxiv.org/abs/2106.06909))   | EN | 10,000hrs | diverse|
| [Wenet](https://wenet.org.cn/WenetSpeech/) ([Zhang et al., 2021](https://arxiv.org/abs/2110.03370))   | ZH | 10,000hrs | diverse|
| [LibriSpeech](https://www.openslr.org/12) ([Panayotov et al., 2015](http://www.danielpovey.com/files/2015_icassp_librispeech.pdf)) | EN | 1,000hrs | read audiobooks |
| [TED-LIUM 3](https://www.openslr.org/51/) ([Hernandez et al., 2018](https://arxiv.org/abs/1805.04699)) |EN|452hrs| TED talks|
| [Common Voice en_2181h_2020-12-11](https://commonvoice.mozilla.org/en/datasets) ([Ardila et al., 2019](https://arxiv.org/abs/1912.06670))|EN|1,686hrs validated| |
| [VoxForge EN](http://www.voxforge.org/home/Downloads) | EN | 120hrs| |
| [AISHELL-2](http://www.aishelltech.com/aishell_2) ([Du et al., 2018](https://arxiv.org/abs/1808.10583))|ZH|1,000hrs|smart house, industry, ...| 
|[BAAI Magic Chinese Data](https://www.biendata.xyz/competition/magicdata/data/) | ZH | 100hrs | real-life dialogues |

</font>

### MT

<font size=3>

| Dataset | Domain |
|---|---|
|[WMT2020](http://www.statmt.org/wmt20/translation-task.html)| news, europarl, common crawl, paracrawl, UN|
|[OpenSubtitles2018](https://opus.nlpl.eu/OpenSubtitles-v2018.php) | movie subtitles |
|[CCAligned](https://opus.nlpl.eu/MultiCCAligned-v1.php) ([El-Kishky et al., 2020](https://www.aclweb.org/anthology/2020.emnlp-main.480/)) | common crawl|
[TED 2020](https://opus.nlpl.eu/TED2020.php) | TED talks |


</font>
