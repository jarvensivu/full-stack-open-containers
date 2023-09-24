# Stage 1: Base
FROM node:16 AS base

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN CI=true npm test

RUN REACT_APP_BACKEND_URL=//localhost:8080/api/ npm run build

# Stage 2: Final
FROM nginx:1.20-alpine

COPY --from=base /usr/src/app/build /usr/share/nginx/html
