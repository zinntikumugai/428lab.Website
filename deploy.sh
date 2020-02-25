#!/bin/bash
if [ $# -ne 1 ]; then
  echo "引数エラー"
  exit
fi
PROJECT=$1
yarn global add firebase-tools
cross-env BASE_URL=https:\/\/`firebase use --project $PROJECT | grep $PROJECT`.web.app yarn build
firebase deploy --project=$PROJECT --token $FIREBASE_CI --only hosting,functions
