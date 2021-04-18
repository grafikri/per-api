FROM node:12.18.3
WORKDIR /usr/src/node-app
COPY . .
RUN npm install && npm run test
CMD npm run start