#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssConfig = require('./postcss.config.js');

const inputPath = './public/styles.css';
const outputPath = './public/output.css';

fs.readFile(inputPath, 'utf8', async (err, input) => {
  if (err) {
    console.error('Erro ao ler arquivo CSS:', err);
    process.exit(1);
  }

  try {
    const processor = postcss(Object.values(postcssConfig.plugins).map((plugin, index) => {
      const pluginName = Object.keys(postcssConfig.plugins)[index];
      return require(pluginName);
    }));

    const result = await processor.process(input, { from: inputPath, to: outputPath });

    fs.writeFileSync(outputPath, result.css);
    console.log('✅ CSS compilado com sucesso em: ' + outputPath);
  } catch (error) {
    console.error('Erro ao compilar CSS:', error);
    process.exit(1);
  }
});

