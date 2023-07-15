#!/bin/bash

mkdir /var/app/super_app_test

cd /var/app/super_app_test

npm install -g pm2

npx pm2 describe main --namespace super_app_test &> /dev/null && npx pm2 delete super_app_test

export NODE_ENV=production

npx pm2 start -f dist/src/main.js --namespace super_app_test
