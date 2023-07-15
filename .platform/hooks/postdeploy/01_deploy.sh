#!/bin/bash

rm -rf /var/app/super_app_test

mkdir -p /var/app/super_app_test

cd /var/app/

cp -r /var/app/current/* /var/app/super_app_test/

npm install -g pm2

npx pm2 describe main --namespace super_app_test &> /dev/null && npx pm2 delete super_app_test

export NODE_ENV=production

cp /var/app/super_app_test/.env /var/app/super_app_test/dist/

ls /var/app/super_app_test/dist/

cat /var/app/super_app_test/dist/.env

npx pm2 start -f /var/app/super_app_test/dist/src/main.js --namespace super_app_test
