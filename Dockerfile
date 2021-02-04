FROM node:12
WORKDIR /usr/src/app
ENV HUSKY_SKIP_INSTALL=1
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD [ "node", "dist/server.js" ]
