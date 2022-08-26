FROM node:16-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY etc/nginx.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]