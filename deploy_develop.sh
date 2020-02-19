#!/bin/bash
yarn global add firebase-tools
firebsae deploy --project=develop --token $FIREBASE_CI
