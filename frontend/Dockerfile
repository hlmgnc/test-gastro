FROM node:16-alpine3.11

WORKDIR /app
RUN apk add python make g++
ADD package.json package-lock.json ./
RUN npm install

VOLUME ["/app/src"]
VOLUME ["/app/public"]

CMD ["npm", "start"]
