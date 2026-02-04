FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
WORKDIR /app
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

COPY apps/docs/package.json ./apps/docs/

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build --filter @nuvra-ui/docs

FROM nginx:latest
COPY --from=builder /app/apps/docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
