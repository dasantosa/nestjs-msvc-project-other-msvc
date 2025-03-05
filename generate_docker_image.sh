#!/bin/bash

VERSION=$(cat version)

docker build -t other-microservice:$VERSION .
docker tag other-microservice:$VERSION other-microservice:latest

echo "Docker image other-microservice:$VERSION has been created successfully"