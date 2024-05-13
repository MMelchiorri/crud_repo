#!/bin/sh

AWS_ENDPOINT_URL=${AWS_ENDPOINT_URL:-http://localhost:8000}

# Delete the existing User table
aws dynamodb --endpoint-url ${AWS_ENDPOINT_URL} delete-table \
  --table-name User

# Wait for the table deletion to complete
sleep 5

# Create User table
aws dynamodb --endpoint-url ${AWS_ENDPOINT_URL} create-table \
  --table-name User \
  --attribute-definitions \
    AttributeName=username,AttributeType=S \
    AttributeName=password,AttributeType=S \
  --key-schema \
    AttributeName=username,KeyType=HASH \
    AttributeName=password,KeyType=RANGE \
  --provisioned-throughput \
    ReadCapacityUnits=1,WriteCapacityUnits=1

# Wait for table creation to complete
sleep 5

# Add email index to User table
aws dynamodb --endpoint-url ${AWS_ENDPOINT_URL} update-table \
  --table-name User \
  --attribute-definitions \
    AttributeName=email,AttributeType=S \
  --global-secondary-index-updates \
    "[{
      \"Create\": {
        \"IndexName\": \"email-index\",
        \"KeySchema\": [{
          \"AttributeName\": \"email\",
          \"KeyType\": \"HASH\"
        }],
        \"ProvisionedThroughput\": {
          \"ReadCapacityUnits\": 1,
          \"WriteCapacityUnits\": 1
        },
        \"Projection\": {
          \"ProjectionType\": \"ALL\"
        }
      }
    }]"

