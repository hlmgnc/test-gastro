FROM node:13.12

WORKDIR /app

ADD tsconfig.json .
ADD package.json .
ADD package-lock.json .

RUN npm ci

VOLUME ["/app/src"]

CMD ["npm", "run", "dev"]
