from node:20-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm build