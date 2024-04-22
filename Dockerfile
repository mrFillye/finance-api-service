FROM node:18

WORKDIR /app

COPY . /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000
ENTRYPOINT [ "npm", "run", "start" ]