FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install mkcert and NSS (for browser trust)
RUN apt-get update && apt-get install -y libnss3-tools \
    && curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64" \
    && chmod +x mkcert-v*-linux-amd64 \
    && mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert

# Pre-install npm dependencies (optional but speeds up CDE startup)
# COPY package*.json ./
# RUN npm install

