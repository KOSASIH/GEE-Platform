const { ethers } = require('ethers');

const toWei = (value) => ethers.utils.parseEther(value.toString());
const fromWei = (value) => ethers.utils.formatEther(value.toString());

module.exports = {
  toWei,
  fromWei,
};
