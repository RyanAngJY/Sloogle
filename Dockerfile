FROM node:8

ENV DATABASE_URL=postgres://pmsfxksgdmuiyx:b8c33ddf0f153e650fce8bdf2f50cf3e4b79f10fdc50c753076e8f857cbfb6d5@ec2-54-204-46-236.compute-1.amazonaws.com:5432/d1iocaha5bgpvb

ENV UNSPLASH_API_KEY=7bb02574f463dc1abb63fecf4941c51d5a2178af1cb85e6de38486c3d42d83a8

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]