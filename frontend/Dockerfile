FROM node:16-bullseye AS my-beris-fe

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm cache clean --force
RUN npm i 

EXPOSE 8000

CMD [ "npm", "run", "dev" ]
