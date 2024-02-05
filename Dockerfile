FROM node:20.10.0-alpine

ENV APP_HOME /app
RUN mkdir $APP_HOME

WORKDIR /app

COPY . .

RUN npm install

RUN npx prisma generate

RUN npm run build

EXPOSE 3101

CMD [ "npm","start" ]