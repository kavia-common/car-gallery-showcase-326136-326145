#!/bin/bash
cd /home/kavia/workspace/code-generation/car-gallery-showcase-326136-326145/car_gallery_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

