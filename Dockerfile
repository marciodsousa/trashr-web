FROM node:0.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g grunt-cli bower gulp # add other tools that you use too, e.g. `gulp`

RUN groupadd -r node \
&&  useradd -r -m -g node node

COPY . /usr/src/app/
RUN chown -R node:node /usr/src/app

USER node
RUN npm install \
 && npm start # required for staging

ENV NODE_ENV development # production for staging
CMD [ "gulp", "dev" ]
EXPOSE 8080 # change to whatever port is to be used