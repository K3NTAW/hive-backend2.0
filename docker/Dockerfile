FROM node:18.14.2
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV MYSQL_ALLOW_EMPTY_PASSWORD true
CMD ["npm", "start"]


