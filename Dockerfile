# --- Build stage ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build

# --- Production stage ---
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ssl/nginx.crt /etc/nginx/ssl/nginx.crt
COPY ssl/nginx.key /etc/nginx/ssl/nginx.key

# Healthcheck (optional)
RUN apk add --no-cache curl

HEALTHCHECK CMD curl -k $LOCALHOST || exit 1

EXPOSE $HTTP_PORT $HTTPS_PORT
CMD ["nginx", "-g", "daemon off;"]