FROM bitnami/node:16 AS builder
MAINTAINER "Jason Ross <algorythm@gmail.com>"

ENV NODE_ENV="production"
COPY . /app
WORKDIR /app
RUN ["npm", "install"]


FROM bitnami/node:16-prod
ENV NODE_ENV="production"
COPY --from=builder /app /app
WORKDIR /app
EXPOSE 9001
CMD ["npm", "start"]
