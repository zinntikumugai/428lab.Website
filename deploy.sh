#!/bin/bash
if [ $# -ne 1 ]; then
  echo "引数エラー"
  exit
fi
yarn global add firebase-tools
firebase deploy --project=$1 --token $FIREBASE_CI --only hosting,functions
