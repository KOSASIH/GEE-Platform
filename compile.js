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
const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const contractPath = path.resolve(__dirname, '..', 'contracts', 'GEEPlatform.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'GEEPlatform.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['GEEPlatform.sol'];
const contractName = Object.keys(output)[0];
const contractData = output[contractName];

fs.ensureDirSync(path.resolve(__dirname, '..', 'build', 'contracts'));
fs.writeJsonSync(
  path.resolve(__dirname, '..', 'build', 'contracts', contractName + '.json'),
  contractData
);
