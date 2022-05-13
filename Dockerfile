#builder 
FROM node:16.15.0-alpine AS BUILD_IMAGE
RUN mkdir /usr/app
# Copy app in workdir
COPY . /usr/app
WORKDIR /usr/app
RUN npm install -g typescript
RUN npm install
RUN npx tsc
# Build the static files
RUN npm run build

#production
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=BUILD_IMAGE /usr/app/build .
STOPSIGNAL SIGQUIT
ENTRYPOINT ["nginx", "-g", "daemon off;"]
