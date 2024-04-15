#!/bin/bash

docker exec -i db-container mysql -uroot -pexample <<EOF

CREATE DATABASE IF NOT EXISTS db_marco;

use db_marco;

create table if not exists User (name varchar(255), surname varchar(255), email varchar(255), password varchar(255));

EOF