#!/bin/bash -xe

NAMESPACE="teemukoivisto"
IMAGE_NAME="my-react-bootstrap"
VERSION_TAG="$(git tag -l | awk 'END{print}')"

IMAGE="${NAMESPACE}"/"${IMAGE_NAME}":"${VERSION_TAG}"

# Stop and remove previously running same containers
OLD_CONTAINER_ID="$(docker ps -a | grep ${IMAGE} | awk '{print $1}')"
docker stop "${OLD_CONTAINER_ID}" || true
docker rm "${OLD_CONTAINER_ID}" || true

# Remove old images with the same name and tag
docker images | grep ${IMAGE} | awk '{print $3}' | xargs docker rmi -f || true

docker build -t "${NAMESPACE}"/"${IMAGE_NAME}":"${VERSION_TAG}" .
