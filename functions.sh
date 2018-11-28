#!/bin/bash -xe

rm-images() {
  local GREP_STRING=$1
  rm-containers "${GREP_STRING}"
  docker images | grep "${GREP_STRING}" | awk '{print $3}' | xargs docker rmi -f
}

rm-containers() {
  local GREP_STRING=$1
  OLD_CONTAINER_ID="$(docker ps -a | grep ${GREP_STRING} | awk '{print $1}')"
  docker stop "${OLD_CONTAINER_ID}" || true
  docker rm "${OLD_CONTAINER_ID}" || true
}
