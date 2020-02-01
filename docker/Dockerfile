# 01: build stage
FROM node:lts-alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn build


# 02: working stage
FROM node:lts-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build .

RUN yarn global add serve
CMD serve -s /usr/src/app