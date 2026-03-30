// ─────────────────────────────────────────────────────────────────────────────
// papers.js  —  Edit this file to add / remove / reorder papers and projects.
//
// Author fields:
//   { name: "Full Name", self: true }                        → bold (you)
//   { name: "Full Name", self: true, equalContrib: true }    → bold with * (equal contribution)
//   { name: "Full Name", url: "https://..." }                → hyperlinked
//   { name: "Full Name" }                                    → plain text
//
// description: array of strings, one string per bullet point.
//
// imageFullUrl (optional): if set, clicking the thumbnail opens the full image.
//
// bibtex (optional): BibTeX string shown in a collapsible block.
// ─────────────────────────────────────────────────────────────────────────────

const PAPERS = [
  {
    image:    "assets/images/06_quicksamp/quicksamp_320.png",
    imageAlt: "QuickSamp Teaser",
    title:    "QuickSamp: Towards simple, real-time-optimized Sampling Patterns for 3D Accelerated MRI",
    titleUrl: "https://archive.ismrm.org/2025/1367.html",
    authors: [
      { name: "Jaehyeok Bae",      self: true },
      { name: "Cagan Alkan",        url: "https://scholar.google.com/citations?hl=en&user=IpQzwWIAAAAJ" },
      { name: "Shreyas Vasanawala", url: "https://scholar.google.com/citations?hl=en&user=n9mOA2IAAAAJ" },
      { name: "John M. Pauly",      url: "https://scholar.google.com/citations?hl=en&user=Fc6GIIQAAAAJ" },
      { name: "Kawin Setsompop",    url: "https://scholar.google.com/citations?hl=en&user=bYDAyV4AAAAJ" },
    ],
    venue: "International Society for Magnetic Resonance in Medicine (<strong>ISMRM</strong>), 2025 <strong>(MAGNA CUM LAUDE)</strong>",
    links: [
      { text: "abstract",     url: "https://drive.google.com/file/d/1EQy3WMqub1dQiBN6MyubxA1bR4Zp2lfA/view?usp=drive_link" },
      { text: "presentation", url: "https://drive.google.com/file/d/1y24kWiYPd6gD6vEEKtZvfU80Wyl1uTNG/view?usp=drive_link" },
    ],
    bibtex: `@article{baequicksamp,
  title  = {QuickSamp: Towards simple, real-time-optimized Sampling Patterns for 3D Accelerated MRI},
  author = {Bae, Jaehyeok and Alkan, Cagan and Vasanawala, Shreyas and Pauly, John M and Setsompop, Kawin}
}`,
    description: [
      "Our method simplifies the complexity and drastically improve the speed of sampling pattern generation using only a few parameters. This eliminates extensive retraining, offering a practical alternative for optimizing MRI acquisition across different configurations and use cases.",
    ],
  },

  {
    image:    "assets/images/07_nstm/nstm_320.png",
    imageAlt: "NSTM Teaser",
    title:    "Neural Space-Time Modeling for Motion-Corrected MR Reconstruction",
    titleUrl: "https://link.springer.com/chapter/10.1007/978-3-032-06103-4_12",
    authors: [
      { name: "Aizada Nurdinova",        url: "https://profiles.stanford.edu/aizada-nurdinova" },
      { name: "Wenqi Huang",             url: "https://scholar.google.com/citations?hl=en&user=to2zNj4AAAAJ" },
      { name: "Daniel Raz Abraham",      url: "https://scholar.google.com/citations?hl=en&user=wL4ptVkAAAAJ" },
      { name: "Jaehyeok Bae",            self: true },
      { name: "Yimeng Lin",              url: "https://profiles.stanford.edu/yimeng-lin" },
      { name: "Kawin Setsompop",         url: "https://scholar.google.com/citations?hl=en&user=bYDAyV4AAAAJ" },
      { name: "Brian Andrew Hargreaves", url: "https://scholar.google.com/citations?hl=en&user=aBxHVEQAAAAJ" },
    ],
    venue: "International Workshop on Reconstruction and Imaging Motion Estimation at Medical Image Computing and Computer Assisted Intervention (<strong>MICCAI RIME</strong>), 2025",
    links: [
      { text: "paper", url: "https://drive.google.com/file/d/1IPIKXB8L2kKoKulEprEatWYIRMk4F0l2/view?usp=drive_link" },
    ],
    bibtex: `@inproceedings{nurdinova2025neural,
  title        = {Neural Space-Time Modeling for Motion-Corrected MR Reconstruction},
  author       = {Nurdinova, Aizada and Huang, Wenqi and Abraham, Daniel Raz and Bae, Jaehyeok and Lin, Yimeng and Setsompop, Kawin and Hargreaves, Brian Andrew},
  booktitle    = {International Workshop on Reconstruction and Imaging Motion Estimation},
  pages        = {118--128},
  year         = {2025},
  organization = {Springer}
}`,
    description: [
      "NSTM introduces an unsupervised, navigator-free framework using Implicit Neural Representations to jointly learn and disentangle motion from image content without pre-training, enabling robust dynamic MRI reconstruction for complex free-breathing acquisitions directly from undersampled k-space data.",
    ],
  },

  {
    image:    "assets/images/03_adapsel/adapsel_320.png",
    imageAlt: "Adaptive Selection Teaser",
    title:    "Adaptive Selection of Sampling-Reconstruction in Fourier Compressed Sensing",
    titleUrl: "https://smhongok.github.io/ada-sel.html",
    authors: [
      { name: "Seongmin Hong", url: "https://smhongok.github.io/" },
      { name: "Jaehyeok Bae",  self: true },
      { name: "Jongho Lee",    url: "https://list.snu.ac.kr/jongho-lee" },
      { name: "Se Young Chun", url: "https://icl.snu.ac.kr/pi" },
    ],
    venue: "European Conference on Computer Vision (<strong>ECCV</strong>), 2024",
    links: [
      { text: "paper",   url: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/08236.pdf" },
      { text: "arXiv",   url: "https://arxiv.org/abs/2409.11738" },
      { text: "project", url: "https://smhongok.github.io/ada-sel.html" },
      { text: "github",  url: "https://github.com/smhongok/ada-sel" },
    ],
    bibtex: `@inproceedings{hong2024adaptive,
  title        = {Adaptive Selection of Sampling-Reconstruction in Fourier Compressed Sensing},
  author       = {Hong, Seongmin and Bae, Jaehyeok and Lee, Jongho and Chun, Se Young},
  booktitle    = {European Conference on Computer Vision},
  pages        = {307--322},
  year         = {2024},
  organization = {Springer}
}`,
    description: [
      "Proposed a novel adaptive selection of sampling-reconstruction framework that selects the best sampling mask and reconstruction network for each input data in Fourier Compressed Sensing.",
    ],
  },

  {
    image:    "assets/images/04_pni/pni_320.png",
    imageAlt: "PNI Anomaly Detection Teaser",
    title:    "PNI : Industrial anomaly detection using position and neighborhood information",
    titleUrl: "https://openaccess.thecvf.com/content/ICCV2023/html/Bae_PNI__Industrial_Anomaly_Detection_using_Position_and_Neighborhood_Information_ICCV_2023_paper.html",
    authors: [
      { name: "Jaehyeok Bae", self: true, equalContrib: true },
      { name: "Jaehan Lee",   url: "https://scholar.google.com/citations?user=WuQaZMAAAAAJ", equalContrib: true },
      { name: "Seyun Kim",    url: "https://scholar.google.com/citations?user=QqFLZQIAAAAJ" },
    ],
    venue: "International Conference on Computer Vision (<strong>ICCV</strong>), 2023",
    links: [
      { text: "paper",  url: "https://openaccess.thecvf.com/content/ICCV2023/html/Bae_PNI__Industrial_Anomaly_Detection_using_Position_and_Neighborhood_Information_ICCV_2023_paper.html" },
      { text: "video",  url: "https://drive.google.com/file/d/1gAKqNGhNr72A-16541fAw_A3jDkiB2oI/view?usp=drive_link" },
      { text: "poster", url: "https://drive.google.com/file/d/1nyMVOhn7wFfPfBISoD5zziJUmIHGPdyY/view?usp=drive_link" },
      { text: "github", url: "https://github.com/wogur110/PNI_anomaly_detection" },
    ],
    bibtex: `@inproceedings{bae2023pni,
  title     = {PNI: Industrial anomaly detection using position and neighborhood information},
  author    = {Bae, Jaehyeok and Lee, Jae-Han and Kim, Seyun},
  booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision},
  pages     = {6373--6383},
  year      = {2023}
}`,
    description: [
      "Proposed a novel anomaly detection and localization alogrithm for industrial datasets, by training a normal feature distribution using position and neighborhood information of local features.",
    ],
  },

  {
    image:    "assets/images/02_nimagenet/nimagenet_320.png",
    imageAlt: "N-ImageNet Teaser",
    title:    "N-ImageNet: Towards robust, fine-grained object recognition with event cameras",
    titleUrl: "https://82magnolia.github.io/n_imagenet/",
    authors: [
      { name: "Junho Kim",    url: "https://scholar.google.com/citations?user=u1Sz3YMAAAAJ" },
      { name: "Jaehyeok Bae", self: true },
      { name: "Gangin Park",  url: "https://www.linkedin.com/in/gangin-park-4b83911a4/" },
      { name: "Dongsu Zhang", url: "https://scholar.google.com/citations?user=ydEYx7QAAAAJ" },
      { name: "Youngmin Kim", url: "https://scholar.google.com/citations?user=TjYQs-AAAAAJ" },
    ],
    venue: "International Conference on Computer Vision (<strong>ICCV</strong>), 2021",
    links: [
      { text: "paper",   url: "https://openaccess.thecvf.com/content/ICCV2021/html/Kim_N-ImageNet_Towards_Robust_Fine-Grained_Object_Recognition_With_Event_Cameras_ICCV_2021_paper.html" },
      { text: "video",   url: "https://youtu.be/7mWPYGRfk-I" },
      { text: "project", url: "https://82magnolia.github.io/n_imagenet/" },
      { text: "dataset", url: "https://github.com/82magnolia/n_imagenet?tab=readme-ov-file#downloading-n-imagenet" },
      { text: "github",  url: "https://github.com/82magnolia/n_imagenet" },
    ],
    bibtex: `@inproceedings{kim2021n,
  title     = {N-imagenet: Towards robust, fine-grained object recognition with event cameras},
  author    = {Kim, Junho and Bae, Jaehyeok and Park, Gangin and Zhang, Dongsu and Kim, Young Min},
  booktitle = {Proceedings of the IEEE/CVF international conference on computer vision},
  pages     = {2146--2156},
  year      = {2021}
}`,
    description: [
      "Introduced N-ImageNet, a large-scale dataset targeted for robust, fine-grained object recognition with event cameras.",
      "Empirically showed that pretraining on N-ImageNet improves the performance of event-based classifiers.",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS = [
  /* hidden: SNU FastMRI Challenge
  {
    image:        "assets/images/05_fastmri/fastmri_320.png",
    imageAlt:     "FastMRI Challenge Teaser",
    imageFullUrl: "assets/images/05_fastmri/fastmri.png",
    title:    "SNU FastMRI Challenge",
    titleUrl: "https://fastmri.snu.ac.kr/",
    authors: [
      { name: "Jaehyeok Bae",  self: true },
      { name: "Sungkyung Kim", url: "https://www.linkedin.com/in/skkim0428/" },
    ],
    venue: "<em>Electrical and Computer Engineering, Seoul National University</em>, 2022~2023",
    links: [
      { text: "homepage",                   url: "https://fastmri.snu.ac.kr/" },
      { text: "ppt",                        url: "https://drive.google.com/file/d/1VXQu_P9zLPz2fmoryc2ZVyRncr1eoQdY/view?usp=drive_link" },
      { text: "video (<em>in Korean</em>)", url: "https://youtu.be/figDLtEMdaM" },
      { text: "github",                     url: "https://github.com/LISTatSNU/FastMRI_challenge" },
    ],
    description: [
      "Proposed an algorithm to restore aliased images from accelerated MRI scans into aliasing-free images, 2nd place award in the 2022 competiton.",
      "Served as the contest coordinator for the 2023 competition, evaluating and analyzing the participants' models.",
    ],
  },
  */ // end hidden: SNU FastMRI Challenge
];
