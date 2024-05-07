const { toWei } = require('./utils');

const contractAddress = '0x1234567890123456789012345678901234567890';
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const contract = new ethers.Contract(contractAddress, [], provider);

const toContractUnits = (value, decimals) => toWei(value).div(toWei(10).pow(decimals));

module.exports = {
  contractAddress,
  provider,
  contract,
  toContractUnits,
};
