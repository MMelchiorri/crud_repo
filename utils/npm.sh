#!/usr/bin/env bash

SCRIPT=$(readlink -f "$0")
SCRIPT_PATH=$(dirname "$SCRIPT")

ABSOLUTE_PROJECT_PATH="$SCRIPT_PATH"/..

docker run -ti \
  -v ${ABSOLUTE_PROJECT_PATH}/src:/project \
  -w /project \
  node:20 npm $@


