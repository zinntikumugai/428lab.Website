#!/bin/bash

if [ $# -ne 1 ]; then
  echo "引数エラー"
  exit 1
fi

# exist firebase
if [ -n type "firebase" > /dev/null 2>&1 ]; then
  yarn global add firebase-tools
fi

PROJECT=$1
FIREBASE_ARG=" --project ${PROJECT}"
if [ -n "$FIREBASE_CI" ]; then
  FIREBASE_ARG="${FIREBASE_ARG} --token ${FIREBASE_CI}"
fi
PROJECT_ID=$(firebase use ${FIREBASE_ARG})

BASE_URL="https://${PROJECT_ID}.web.app"
yarn build
firebase deploy ${FIREBASE_ARG} --only hosting,functions
