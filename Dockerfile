# build the app
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# serve the angular app with nginx
FROM nginx:1.23-alpine
WORKDIR /usr/shared/nginx/html
RUN rm -rf *

#copy the buyilt angular app from the build stage
COPY --from=build /app/dist/hello-world/browser /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]