# The builder image
FROM node:8.11.0 as builder

# Set NODE_ENV to build so that all devDependencies are fetched and tslint won't fail
ENV NODE_ENV build
ENV REACT_APP_API_URL /api
# Disable creating source map so that source code isn't readable from the frontend
ENV GENERATE_SOURCEMAP false

WORKDIR /usr/my-react-bootstrap

COPY package.json yarn.lock tsconfig.json tsconfig.prod.json tslint.json ./
RUN yarn

COPY ./src ./src
COPY ./public ./public
COPY ./nginx ./nginx

# Set NODE_ENV to production so that all optimization flags from react-scripts are enabled
ENV NODE_ENV production
RUN yarn build

# The production image
FROM nginx:1.15.0

LABEL maintainer="https://github.com/teemukoivisto"

ENV HTTP_PORT 80

COPY --from=builder /usr/my-react-bootstrap/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/my-react-bootstrap/nginx/nginx.conf /etc/nginx

EXPOSE ${HTTP_PORT}
# Run the nginx without daemon to keep the process and the container bound together
# This way when nginx fails the container fails 
CMD ["nginx", "-g", "daemon off;"]