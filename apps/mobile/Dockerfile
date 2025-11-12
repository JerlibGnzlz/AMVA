FROM node:22-alpine

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install -g expo-cli && npm install

COPY . .

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Comando para desarrollo con túnel (acceso desde el celular)
CMD ["npx", "expo", "start", "--tunnel"]
