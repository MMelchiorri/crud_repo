#!/bin/bash

mySqlCommand=$(cat <<EOF
CREATE DATABASE IF NOT EXISTS db_marco;
USE db_marco;
CREATE TABLE IF NOT EXISTS User (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
EOF
)

echo "$mySqlCommand" | mysql -h localhost -u root