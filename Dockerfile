FROM node:16

RUN apt-get update -y && \
    apt-get install -y git

WORKDIR /app

RUN git clone https://github.com/yabain/y-legal-frontend-recherche.git .

RUN npm install

EXPOSE 4200

CMD ["npm" ,"run","start"]