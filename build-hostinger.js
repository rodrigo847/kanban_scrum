#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Criar pasta dist se não existir
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copiar arquivos do public para dist
const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

files.forEach(file => {
  const srcPath = path.join(publicDir, file);
  const destPath = path.join(distDir, file);
  
  if (fs.statSync(srcPath).isFile()) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copiado: ${file}`);
  }
});

console.log('🎉 Build completo! Arquivos em ./dist/');
