FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm install -g gulp # add other tools that you use too, e.g. `gulp`

RUN groupadd -r node \
&&  useradd -r -m -g node node

COPY . /usr/src/app/
RUN chown -R node:node /usr/src/app

USER node

ENV NODE_ENV development # production for staging
CMD [ "node", "server/app.js" ]
EXPOSE 8080