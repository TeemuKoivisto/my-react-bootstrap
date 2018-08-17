#!/bin/bash -xe

NAMESPACE="teemukoivisto"
IMAGE_NAME="my-react-bootstrap"

rm-images() {
  rm-containers
  docker images | grep "${NAMESPACE}"/"${IMAGE_NAME}" | awk '{print $3}' | xargs docker rmi -f
}

rm-containers() {
  docker ps -a | grep "${NAMESPACE}"/"${IMAGE_NAME}" | awk '{print $1}' | xargs docker stop
  docker ps -a | grep "${NAMESPACE}"/"${IMAGE_NAME}" | awk '{print $1}' | xargs docker rm
}
