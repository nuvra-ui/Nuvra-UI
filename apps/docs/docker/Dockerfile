ARG NODE_VERSION=24.13.0-slim

# ============================================
# STAGE 1: PRUNE REPOSITORY
# ============================================
FROM node:${NODE_VERSION} AS pruner
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune @nuvra-ui/docs --docker

# ============================================
# STAGE 2: INSTALLATION
# ============================================
FROM node:${NODE_VERSION} AS dependencies
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable pnpm && pnpm install --frozen-lockfile;

# ============================================
# STAGE 3: BUILD APPLICATION
# ============================================
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=dependencies /app/ .
COPY --from=pruner /app/out/full/ .
ENV NODE_ENV=production
RUN --mount=type=cache,target=/app/.next/cache corepack enable pnpm && pnpm build --filter @nuvra-ui/docs;

# ============================================
# STAGE 4: RUN APPLICATION
# ============================================
FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder --chown=node:node /app/apps/docs/public ./apps/docs/public
COPY --from=builder --chown=node:node /app/apps/docs/.next/standalone ./
COPY --from=builder --chown=node:node /app/apps/docs/.next/static ./apps/docs/.next/static
USER node
EXPOSE 3000
CMD ["node", "apps/docs/server.js"]
