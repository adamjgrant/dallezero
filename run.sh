#!/bin/bash

cd $HOME/repos/stable-diffusion
. venv/bin/activate
python3 scripts/txt2img.py \
  --prompt "$1" \
  --n_samples 1 --n_iter 1 --plms
