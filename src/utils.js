const formatDate = (date) => date.toLocaleString();

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const toWei = (value, decimals) =>
  web3.utils.toWei(value.toString(), decimals.toString());

const fromWei = (value, decimals) =>
  web3.utils.fromWei(value.toString(), decimals.toString());

export { formatDate, generateRandomNumber, toWei, fromWei };
const { ethers } = require('ethers');

const toWei = (value) => ethers.utils.parseEther(value.toString());
const fromWei = (value) => ethers.utils.formatEther(value.toString());

module.exports = {
  toWei,
  fromWei,
};
