# Dockerfile-base (para web, admin, api)
FROM node:22-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --legacy-peer-deps

# Copiar todo el código
COPY . .

# Build para producción (opcional)
RUN npm run build 

# Exponer puerto (cambiar según servicio)
EXPOSE 3002

# Comando por defecto para desarrollo
CMD ["npm", "run",  "start:dev"]
