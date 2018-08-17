#!/bin/bash -xe

LOCAL_PORT=9666
CONTAINER_PORT=80

NAMESPACE="teemukoivisto"
IMAGE_NAME="my-react-bootstrap"
LATEST_LOCAL_TAG="$(docker images | grep "${NAMESPACE}"/"${IMAGE_NAME}" | awk 'NR==1{print $2}')"

docker run -p ${LOCAL_PORT}:${CONTAINER_PORT} "${NAMESPACE}"/"${IMAGE_NAME}":"${LATEST_LOCAL_TAG}"
