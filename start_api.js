const app = require('../src/index');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const { abi } = require('../build/contracts/GEEPlatform.json');

const app = express();
const port = 3000;
const contractAddress = '0x1234567890123456789012345678901234567890';
const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);
const contract = new web3.eth.Contract(abi, contractAddress);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the GEE-Platform API!');
});

app.get('/contracts', async (req, res) => {
  const contracts = await contract.methods.getContracts().call();
  res.json(contracts);
});

app.post('/contracts', async (req, res) => {
  const { name, symbol, totalSupply } = req.body;
  const result = await contract.methods.createContract(name, symbol, totalSupply).send({ from: '0x1234567890123456789012345678901234567890' });
  res.json(result);
});

app.listen(port, () => {
  console.log(`GEE-Platform API listening at http://localhost:${port}`);
});
