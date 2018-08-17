FROM nginx:1.15.0

LABEL maintainer="https://github.com/teemukoivisto"

ENV HTTP_PORT 80
ENV HTTPS_PORT 443

COPY ./build /usr/share/nginx/html

EXPOSE ${HTTP_PORT}
EXPOSE ${HTTPS_PORT}