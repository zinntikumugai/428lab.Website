#!/bin/bash
yarn global add firebase-tools
yarn install
cd functions
yarn install
cd ..
yarn build
pwd
ls
firebase deploy --project=develop --token $FIREBASE_CI --only hosting,functions
