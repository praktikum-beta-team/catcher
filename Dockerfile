FROM node:lts-alpine3.9 AS build-stage
WORKDIR /app
COPY ./ /app
ENV HUSKY_SKIP_INSTALL=1
RUN npm ci && npm run build

FROM nginx:1.19
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./config/nginx/default.conf.template /etc/nginx/templates/default.conf.template
