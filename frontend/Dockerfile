FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install

# add app
COPY . ./

EXPOSE 3000
# start app
CMD ["npm", "start"]