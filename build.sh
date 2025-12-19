#!/bin/bash

echo "Étape 1: Compilation Sass..."
npx sass src/styles/main.scss public/temp.css

echo "Étape 2: Application de Tailwind..."
npx tailwindcss -i public/temp.css -o public/style.css --minify

echo "Étape 3: Vérification..."
echo "Taille: $(ls -lh public/style.css | awk '{print $5}')"
echo "Contient edulink-header: $(grep -q "edulink-header" public/style.css && echo "✅ OUI" || echo "❌ NON")"

echo "Terminé !"
