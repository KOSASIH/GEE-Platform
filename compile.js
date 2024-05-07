const babel = require('@babel/core');
const fs = require('fs-extra');

const inputDir = 'src';
const outputDir = 'lib';

async function compile() {
  await fs.remove(outputDir);
  await fs.ensureDir(outputDir);

  const { code } = await babel.transformFileAsync(`${inputDir}/index.js`);
  await fs.writeFile(`${outputDir}/index.js`, code);

  // Add additional files to compile here as needed
}

compile();
