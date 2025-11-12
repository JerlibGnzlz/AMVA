# Dockerfile (Desarrollo)
FROM node:22-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias primero (para aprovechar cache de Docker)
COPY package*.json ./

# Instalar dependencias (evita errores con peer deps)
RUN npm install --legacy-peer-deps

# Copiar el resto del código fuente
COPY . .

# Limpiar la carpeta dist ANTES de levantar el servidor
RUN npx rimraf dist

# Exponer el puerto de NestJS
EXPOSE 3002

# Comando por defecto en desarrollo (watch mode)
CMD ["sh", "-c", "npx rimraf dist && npm run start:dev"]
