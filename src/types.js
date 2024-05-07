export interface ITransaction {
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
}

export enum ChainId{
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
}
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
