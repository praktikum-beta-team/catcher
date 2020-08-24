FROM node:12.18.3-alpine3.9 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN CI=true npm test
RUN npm run build:prod

FROM nginx:1.15
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
