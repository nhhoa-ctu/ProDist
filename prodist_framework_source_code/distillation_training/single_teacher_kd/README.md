# Single-Teacher Knowledge Distillation

This directory contains single-teacher knowledge distillation notebooks. Each notebook trains one deployed student model under the guidance of one frozen teacher model.

The notebooks are grouped by student backbone. This organization makes it easier to compare how different teachers affect the same deployed student.

## Directory structure

```text
single_teacher_kd/
├── README.md
├── student_dn201/
├── student_mnet/
├── student_mnetv2/
├── student_nasmob/
└── same_backbone_kd/
```

## Student groups

### `student_dn201/`

This directory contains single-teacher KD notebooks with DenseNet201 as the deployed student.

```text
st_kd_vgg19_to_dn201.ipynb
```

### `student_mnet/`

This directory contains single-teacher KD notebooks with MobileNet as the deployed student.

```text
st_kd_dn121_to_mnet.ipynb
st_kd_dn201_to_mnet.ipynb
st_kd_incv3_to_mnet.ipynb
st_kd_vgg16_to_mnet.ipynb
st_kd_vgg19_to_mnet.ipynb
st_kd_xcep_to_mnet.ipynb
```

### `student_mnetv2/`

This directory contains single-teacher KD notebooks with MobileNetV2 as the deployed student.

```text
st_kd_dn121_to_mnetv2.ipynb
st_kd_dn201_to_mnetv2.ipynb
st_kd_incv3_to_mnetv2.ipynb
st_kd_vgg16_to_mnetv2.ipynb
st_kd_vgg19_to_mnetv2.ipynb
st_kd_xcep_to_mnetv2.ipynb
```

### `student_nasmob/`

This directory contains single-teacher KD notebooks with NASNetMobile as the deployed student.

```text
st_kd_dn121_to_nasmob.ipynb
st_kd_dn201_to_nasmob.ipynb
st_kd_incv3_to_nasmob.ipynb
st_kd_vgg16_to_nasmob.ipynb
st_kd_vgg19_to_nasmob.ipynb
st_kd_xcep_to_nasmob.ipynb
```

### `same_backbone_kd/`

This directory contains single-teacher KD notebooks where the teacher and student use the same backbone family.

```text
st_kd_incv3_to_incv3.ipynb
st_kd_mnet_to_mnet.ipynb
st_kd_nasmob_to_nasmob.ipynb
st_kd_xcep_to_xcep.ipynb
```

## Training role

Single-teacher KD transfers softened class distributions from one frozen teacher to one deployed student. This setting provides a direct reference for measuring teacher-guided training before adding multi-teacher aggregation or profile-guided semantic supervision.

## Naming convention

Each notebook name identifies the teacher and student:

```text
st_kd_<teacher_alias>_to_<student_alias>.ipynb
```

Example:

```text
st_kd_dn121_to_mnet.ipynb
```

This means that DenseNet121 is used as the teacher and MobileNet is used as the deployed student.

## Deployment note

Teacher models are not part of the deployed classifier. After training, the deployed checkpoint contains only the student feature extractor and classification head.