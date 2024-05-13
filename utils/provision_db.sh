#!/usr/bin/env bash

SCRIPT=$(readlink -f "$0")
SCRIPT_PATH=$(dirname "$SCRIPT")

ABSOLUTE_PROJECT_PATH="$SCRIPT_PATH/.."

docker run --rm \
  -v ${ABSOLUTE_PROJECT_PATH}/utils/scripts/create_db.sh:/project/create_db.sh \
  \
  -e AWS_ACCESS_KEY_ID=root \
  -e AWS_SECRET_ACCESS_KEY=root \
  -e AWS_DEFAULT_REGION=eu-west-1 \
  -e AWS_ENDPOINT_URL=http://sls-db-container:8000 \
  \
  --entrypoint="sh" \
  --network="crud_project_default" \
    infrastructureascode/aws-cli:latest /project/create_db.sh
