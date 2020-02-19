#!/bin/bash
yarn global add firebase-tools
pwd
echo `dirname $0`
firebase deploy --project=develop --token $FIREBASE_CI
