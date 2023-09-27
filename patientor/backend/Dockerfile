FROM node:16

RUN mkdir /usr/src/app && chown node:node /usr/src/app 

WORKDIR /usr/src/app

USER node

COPY --chown=node:node . .

RUN npm ci

RUN npm run tsc

CMD npm run start
