FROM node:erbium-buster-slim
LABEL maintainer="Glenn Skelton (https://github.com/glenn-s)"
LABEL description="Secret Santa Development Image"

USER root

ENV SERVER_PORT="8080"

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

COPY ./build .
EXPOSE 8080

USER node

CMD [ "node", "index.js" ]