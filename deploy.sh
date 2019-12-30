#!/usr/bin/env bash

print_red() {
  printf "\033[1;31m$1\033[0m\n"
}

# Use export to set the environment variables system-wide (in the scope of this bash-script), to over-write local sets from .env
export BUCKET=$1
export NODE_ENV=production
export REACT_APP_API_URL=/api

if [ -z "$BUCKET" ]; then
  print_red "You have to specify the bucket before deploying eg 'example-app-dev-eu-west-1-static-b-staticbucket-1ls690ylt416l'. Look it from your CloudFormation stack outputs or AWS console"
  exit 1
fi

npm run build

# Copy the build into bucket with 30 day cache-control and delete all existing files
aws s3 sync ./build s3://"${BUCKET}"/frontend \
  --region eu-west-1 \
  --cache-control max-age=2592000 \
  --delete

aws s3 cp ./build/index.html s3://"${BUCKET}"/frontend/index.html \
  --region eu-west-1 \
  --cache-control max-age=0
