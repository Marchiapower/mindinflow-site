#!/bin/bash
# Script para atualizar _routes.json após build
# Adiciona todas as imagens .jpg, .png, .ico no exclude

cd "$(dirname "$0")"

# Gerar lista de arquivos estáticos
STATIC_FILES=$(cd dist && ls -1 *.jpg *.png *.ico 2>/dev/null | sed 's/^/,"\//; s/$/"/' | tr '\n' ' ')

# Atualizar _routes.json
echo "{\"version\":1,\"include\":[\"/*\"],\"exclude\":[\"/static/*\"${STATIC_FILES}]}" > dist/_routes.json

echo "✅ _routes.json atualizado com sucesso!"
cat dist/_routes.json
