FROM ubuntu as build-step

MAINTAINER Cedric Nguendap "c.nguendap@yabain.com"

RUN apt-get update -y && \
    apt-get install -y git

WORKDIR /app
RUN git config --global user.name "Cedric-Yaba-In" && git config --global user.email "c.nguendap@yabain.com"

RUN git clone https://github.com/yabain/Y-Legal-Frontend-Recherche.git .

RUN npm install

RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine
EXPOSE 80
COPY --from=build-step /app/docs /usr/share/nginx/html