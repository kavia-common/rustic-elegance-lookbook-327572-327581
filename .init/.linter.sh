#!/bin/bash
cd /home/kavia/workspace/code-generation/rustic-elegance-lookbook-327572-327581/furniture_lookbook_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

