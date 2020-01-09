FROM node:lts-alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn build

FROM node:lts-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build .

RUN yarn global add serve
EXPOSE 5000
CMD serve -s /usr/src/app

# RUN yarn global add http-server
# EXPOSE 4000
# CMD http-server /usr/src/app -d false -i false --port 4000 --silent