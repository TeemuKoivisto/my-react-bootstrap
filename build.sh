#!/bin/bash -xe

NAMESPACE="teemukoivisto"
IMAGE_NAME="my-react-bootstrap"
VERSION_TAG="$(git tag -l | awk 'END{print}')"

IMAGE="${NAMESPACE}"/"${IMAGE_NAME}":"${VERSION_TAG}"

# Remove old images with the same name and tag
docker images | grep ${IMAGE} | awk '{print $3}' | xargs docker rmi -f || true

docker build -t "${NAMESPACE}"/"${IMAGE_NAME}":"${VERSION_TAG}" .
