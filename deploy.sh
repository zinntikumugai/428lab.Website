#!/bin/bash

if [ $# -ne 1 ]; then
  echo "引数エラー"
  exit 1
fi

PROJECT=$1
FIREBASE_ARG=" --project ${PROJECT}"
if [ -n "$FIREBASE_CI" ]; then
  yarn global add firebase-tools # HACK: Need only CI build?
  FIREBASE_ARG="${FIREBASE_ARG} --token ${FIREBASE_CI}"
fi
PROJECT_ID=$(firebase use ${FIREBASE_ARG})

BASE_URL="https://${PROJECT_ID}.web.app"
yarn build
firebase deploy ${FIREBASE_ARG} --only hosting,functions
