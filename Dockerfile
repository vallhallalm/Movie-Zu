FROM node:16.15.0-alpine AS BUILD_IMAGE
WORKDIR /

# Copy app in workdir
COPY . .

RUN npm install -g typescript
RUN npm install
RUN npx tsc

# Build the static files
RUN npm run build

# Copy only binaries in a new clean layer
FROM nginx:stable-alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=BUILD_IMAGE /data/www/dist /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
