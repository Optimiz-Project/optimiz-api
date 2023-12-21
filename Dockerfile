FROM node:lts-alpine as builder
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-slim
ENV NODE_ENV production
USER node
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3000
CMD [ "npm", "start" ]