FROM mhart/alpine-node:7.10

MAINTAINER Mike Lutz / Luis Malavé

RUN npm set progress=false && \
    npm config set depth 0
RUN npm install -g yarn
RUN mkdir /usr/src && mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY . /usr/src/app
CMD ["node", "start.js"]