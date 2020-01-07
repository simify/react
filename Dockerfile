FROM node:lts-alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn build

FROM node:lts-slim

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build .

RUN yarn global add http-server

EXPOSE 4000

CMD http-server /usr/src/app -d false -i false --gzip --port 4000