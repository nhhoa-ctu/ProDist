# Distillation Training

This directory contains teacher-student distillation experiments for compact image-only cultural heritage recognition.

Distillation uses one or more teacher models during training to guide a deployed student model. At inference time, only the student classifier is retained.

## Directory structure

```text
distillation_training/
├── README.md
├── single_teacher_kd/
└── diagnostic_cases/
```

## Current contents

### `single_teacher_kd/`

This directory contains single-teacher knowledge distillation notebooks. The notebooks are organized by deployed student backbone.

### `diagnostic_cases/`

This directory contains selected teacher-student configurations used for diagnostic comparison. These cases support analysis of teacher-student compatibility and transfer behavior.

## Distillation setting

In the single-teacher setting, a frozen teacher model provides softened class distributions to guide a compact student. The student is trained using supervised classification and teacher-guided distillation signals.

The teacher is used only during training. The deployed checkpoint contains only the student feature extractor and classification head.

## Notebook naming

Single-teacher KD notebooks follow this pattern:

```text
st_kd_<teacher_alias>_to_<student_alias>.ipynb
```

Examples:

```text
st_kd_dn121_to_mnet.ipynb
st_kd_dn201_to_mnetv2.ipynb
st_kd_incv3_to_nasmob.ipynb
```

## Backbone aliases

| Alias | Backbone |
|---|---|
| `vgg16` | VGG16 |
| `vgg19` | VGG19 |
| `mnet` | MobileNet |
| `mnetv2` | MobileNetV2 |
| `dn121` | DenseNet121 |
| `dn201` | DenseNet201 |
| `incv3` | InceptionV3 |
| `xcep` | Xception |
| `nasmob` | NASNetMobile |
