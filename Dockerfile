# 版本
FROM node:16.14.2 
COPY . /app
WORKDIR /app
ENV HOST 0.0.0.0 
# RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD node bootstrap.js