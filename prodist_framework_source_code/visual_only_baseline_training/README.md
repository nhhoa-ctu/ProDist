# Visual-Only Baseline Training

This directory contains notebooks for training visual-only baseline classifiers on the Vietnamese traditional-instrument dataset. These models use image input only. They do not use knowledge distillation, semantic profiles, or semantic prototype supervision.

The visual-only baselines provide the appearance-based reference models for comparison with single-teacher KD, multi-teacher KD, and ProDist.

## Notebook naming

All notebooks follow this pattern:

```text
visual_only_<backbone_alias>.ipynb
```

## Included notebooks

```text
visual_only_dn121.ipynb
visual_only_dn201.ipynb
visual_only_incv3.ipynb
visual_only_mnet.ipynb
visual_only_mnetv2.ipynb
visual_only_nasmob.ipynb
visual_only_xcep.ipynb
visual_only_vgg16.ipynb
visual_only_vgg19.ipynb
visual_only_rn50.ipynb
visual_only_vit.ipynb
```

## Backbone aliases

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

## Training role

Each notebook trains one visual-only classifier using supervised learning. These models serve three roles:

1. They provide baseline recognition performance.
2. They provide candidate teacher checkpoints for distillation experiments.
3. They support deployment-size comparison against distilled student models.
