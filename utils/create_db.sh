#!/bin/bash

mysql -u root -e "CREATE DATABASE IF NOT EXISTS User;"

sleep 1

mysql -u root -e "SHOW DATABASES;"
