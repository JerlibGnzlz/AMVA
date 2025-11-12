#!/bin/bash
set -e

echo "🚀 Limpiando node_modules y lockfiles..."
rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml

echo "🧹 Limpiando cache de npm..."
npm cache clean --force

echo "🧹 Limpiando compilaciones previas..."
rm -rf dist
rm -rf .next

echo "🐳 Limpiando Docker..."
docker compose down
docker container prune -f
docker image prune -f
docker volume prune -f
docker builder prune -f

echo "📦 Reinstalando dependencias..."
npm install

echo "🔧 Instalando TypeScript 6.5..."
npm install --save-dev typescript@^6.5.0

echo "✅ Limpieza y setup completado."
echo "💡 Ahora podés levantar Docker Compose con: docker compose up --build"

