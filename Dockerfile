# FROM means we are using a base image to build our image
# node is the base image we are using
# lts-alpine is the version of node we are using
FROM node:lts-alpine

# WORKDIR sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile
WORKDIR /app

# COPY copies files from the host machine to the container
# package.json is copied to the /app directory in the container
COPY package.json .yarnrc.yml yarn.lock /app/
COPY .yarn /app/.yarn

# RUN runs a command in the container
# npm install installs the dependencies in the package.json file
RUN yarn

# COPY copies files from the host machine to the container
# . is the current directory on the host machine
# /app is the directory in the container
COPY . /app

# EXPOSE exposes a port in the container
# 3000 is the port we are exposing
EXPOSE 3000

# Before running the application, we need to build the application
# yarn build builds the application
RUN yarn build

# CMD specifies the command to run when the container starts
# yarn start starts the application
CMD yarn start
