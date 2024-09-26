FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install

#To restart the app if crashed
RUN npm install -g pm2

COPY . .
RUN npm test --ci --detectOpenHandles
EXPOSE 3000
#CMD ["npm", "run", "dev"]
CMD ["pm2-runtime", "server.js"]
