#!/bin/bash -xe

rm-images() {
  local GREP_STRING=$1
  rm-containers "${GREP_STRING}"
  docker images | grep "${GREP_STRING}" | awk '{print $3}' | xargs docker rmi -f
}

rm-containers() {
  local GREP_STRING=$1
  docker ps -a | grep "${GREP_STRING}" | awk '{print $1}' | xargs docker stop
  docker ps -a | grep "${GREP_STRING}" | awk '{print $1}' | xargs docker rm
}
