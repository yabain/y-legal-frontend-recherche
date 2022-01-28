FROM node:16 as build

RUN apt-get update -y && \
    apt-get install -y git

WORKDIR /app

RUN git clone https://github.com/yabain/y-legal-frontend-recherche.git .

RUN npm install

RUN npm run build



FROM nginx:latest

COPY --from=build /app/dist/frontend-recherche /usr/share/nginx/html

EXPOSE 80
