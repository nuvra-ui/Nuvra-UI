FROM node:25-alpine as build

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build-storybook

FROM nginx:alpine

COPY --from=build /app/storybook-static /usr/share/nginx/html/docs

CMD ["nginx", "-g", "daemon off;"]