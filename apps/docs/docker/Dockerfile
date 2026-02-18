FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS pruner
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune @nuvra-ui/docs --docker

FROM base AS builder
WORKDIR /app

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

COPY --from=pruner /app/out/full/ .

RUN pnpm run build --filter @nuvra-ui/docs

FROM nginx:latest
COPY --from=builder /app/apps/docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
