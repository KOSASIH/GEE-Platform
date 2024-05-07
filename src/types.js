interface IContract {
  name: string;
  symbol: string;
  totalSupply: string;
}

interface ICreateContract {
  name: string;
  symbol: string;
  totalSupply: string;
}

module.exports = {
  IContract,
  ICreateContract,
};
