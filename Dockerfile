# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build app
RUN npm run build

# Stage 2: Serve
FROM node:18-alpine

WORKDIR /app

# Install serve to serve the static files
RUN npm install -g serve

# Copy build output from builder
COPY --from=builder /app/dist ./dist
# If using CRA instead of Vite, change "dist" to "build"
# COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
