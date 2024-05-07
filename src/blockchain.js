import Web3 from 'web3';

const web3 = new Web3(process.env.INFURA_ENDPOINT);

const getContract = (abi, address) => new web3.eth.Contract(abi, address);

const sendTransaction = (transaction) =>
  web3.eth.sendTransaction(transaction);

const getBlockNumber = () => web3.eth.getBlockNumber();

const getBalance = (address) => web3.eth.getBalance(address);

export { getContract, sendTransaction, getBlockNumber, getBalance };
const Web3 = require('web3');
const { abi } = require('../build/contracts/GEEPlatform.json');

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);
const contract = new web3.eth.Contract(abi, '0x1234567890123456789012345678901234567890');

const getContracts = async () => {
  const contracts = await contract.methods.getContracts().call();
  return contracts;
};

const createContract = async (name, symbol, totalSupply) => {const result = await contract.methods.createContract(name, symbol, totalSupply).send({ from: '0x1234567890123456789012345678901234567890' });
  return result;
};

module.exports = {
  getContracts,
  createContract,
};
