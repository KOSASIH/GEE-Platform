const { execSync } = require('child_process');

execSync('npm run build');

// Add additional deployment steps here as needed

const HDWalletProvider = require('truffle-hdwallet-provider');
const { interface, bytecode } = require('../build/contracts/GEEPlatform.json');

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.INFURA_ENDPOINT
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
