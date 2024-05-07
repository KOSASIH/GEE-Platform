const debug = require('debug')('GEE-Platform:start_local');
const app = require('../src/index');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  debug(`Listening on port ${port}...`);});
const path = require('path');
const fs = require('fs-extra');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('../build/contracts/GEEPlatform.json');

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  'http://localhost:8545'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(interface)
    .deploy({
      data: bytecode,
    })
    .send({
      gas: 4000000,
      from: accounts[0],
    });

  console.log('Contract deployed to', result.options.address);
};

deploy();
