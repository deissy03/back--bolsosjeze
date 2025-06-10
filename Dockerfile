FROM node:alpine
WORKDIR /app
COPY package.json ./
ENV MONGO_URI mongodb://mongo:27017/bolsos
RUN npm install
COPY . .
CMD ["node", "src/index.js"]
EXPOSE 3000
