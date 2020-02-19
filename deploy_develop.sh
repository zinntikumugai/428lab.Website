#!/bin/bash
yarn global add firebase-tools
firebase deploy --project=develop --token $FIREBASE_CI --only hosting,functions
