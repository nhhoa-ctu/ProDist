# Diagnostic Cases

This directory contains selected single-teacher distillation configurations used for diagnostic comparison. These notebooks document teacher-student settings that help analyze transfer behavior and teacher-student compatibility.

The purpose of this directory is to keep the main single-teacher KD structure clean while preserving additional experiments that support interpretation and auditability.

## Included notebooks

```text
st_kd_mnetv2_to_dn201.ipynb
st_kd_mnetv2_to_incv3.ipynb
st_kd_mnet_to_dn201.ipynb
st_kd_mnet_to_incv3.ipynb
st_kd_mnet_to_vgg16.ipynb
```

## Naming convention

Each notebook follows this pattern:

```text
st_kd_<teacher_alias>_to_<student_alias>.ipynb
```

Example:

```text
st_kd_mnet_to_dn201.ipynb
```

This means that MobileNet is used as the teacher and DenseNet201 is used as the deployed student.

## Why these cases are separated

These notebooks are separated from the main `single_teacher_kd/` directory because they serve a diagnostic role. They help inspect transfer asymmetry, teacher-student compatibility, and configurations that may not provide the strongest deployment trade-off.

## Expected outputs

Each diagnostic notebook may produce:

```text
distilled student checkpoint
validation and test metrics
held-out prediction file
confusion matrix or error summary
checkpoint metadata
```

## Notes

These cases should be interpreted as diagnostic experiments rather than the main reported ProDist configurations. They are retained to make the experimental record more transparent and easier to audit.