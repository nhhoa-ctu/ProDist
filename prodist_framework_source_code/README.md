# ProDist Framework Source Code

This directory contains the source code and experiment notebooks for the ProDist framework. It includes visual-only baseline training, single-teacher knowledge distillation, diagnostic distillation cases, and supporting utilities for compact image-only recognition.

ProDist is a profile-guided semantic distillation framework for compact cultural heritage recognition. During training, the student model learns from visual teacher supervision and class-level semantic profile guidance. During deployment, only the image-based student classifier is retained.

## Directory structure

```text
prodist_framework_source_code/
├── README.md
├── visual_only_baseline_training/
└── distillation_training/
    ├── README.md
    ├── single_teacher_kd/
    └── diagnostic_cases/
```

## Main components

### Visual-only baseline training

The `visual_only_baseline_training/` directory contains notebooks for independently trained image-only classifiers. These models provide the appearance-based baselines used for comparison with distillation-based methods.

### Distillation training

The `distillation_training/` directory contains teacher-student distillation experiments. The current release includes single-teacher knowledge distillation and diagnostic teacher-student cases.

### Single-teacher KD

The `distillation_training/single_teacher_kd/` directory contains single-teacher distillation notebooks organized by deployed student backbone.

### Diagnostic cases

The `distillation_training/diagnostic_cases/` directory contains selected teacher-student configurations used to inspect transfer behavior and teacher-student compatibility.

## Backbone aliases

The repository follows the same backbone aliases used in the manuscript.

| Alias | Backbone |
|---|---|
| `rn50` | ResNet50 |
| `vgg16` | VGG16 |
| `vgg19` | VGG19 |
| `mnet` | MobileNet |
| `mnetv2` | MobileNetV2 |
| `dn121` | DenseNet121 |
| `dn201` | DenseNet201 |
| `incv3` | InceptionV3 |
| `xcep` | Xception |
| `nasmob` | NASNetMobile |
| `vit` | Vision Transformer |

## Naming convention

Visual-only notebooks follow this pattern:

```text
visual_only_<backbone_alias>.ipynb
```

Single-teacher distillation notebooks follow this pattern:

```text
st_kd_<teacher_alias>_to_<student_alias>.ipynb
```

Examples:

```text
visual_only_dn121.ipynb
st_kd_dn121_to_mnet.ipynb
st_kd_vgg16_to_mnetv2.ipynb
```

## Reproducibility notes

The notebooks are provided as experiment records. Before running them, update the dataset path, split metadata path, checkpoint path, and output directory in the corresponding configuration cells.

The manuscript results are computed from validation-selected checkpoints and held-out test predictions. Teacher models are used only during training. The deployed classifier contains only the student feature extractor and classification head.

## Review anonymity

This directory is prepared for double-anonymized review. Author names, affiliations, institutional URLs, and identifying local paths are intentionally omitted.