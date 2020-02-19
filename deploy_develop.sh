#!/bin/bash
yarn global add firebase-tools
pwd
ls
firebase deploy --project=develop --token $FIREBASE_CI --only hosting,functions
