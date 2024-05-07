import { ChainId } from './types';

export interface IBlock {
  number: number;
  hash: string;
  parentHash: string;
  nonce: string;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: number;
  uncles: string[];
}

export interface ITransaction {
  hash: string;
  nonce: string;
  blockHash: string;
  blockNumber: number;
  transactionIndex: number;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  input: string;
  creates: string;
  v: string;
  r: string;
  s: string;
  raw: string;
}

export class Block implements IBlock {
  constructor(
    public number: number,
    public hash: string,
    public parentHash: string,
    public nonce: string,
    public sha3Uncles: string,
    public logsBloom: string,
    public transactionsRoot: string,
    public stateRoot: string,
    public receiptsRoot: string,
    public miner: string,
    public difficulty: string,
    public totalDifficulty: string,
    public extraData: string,
    public size: string,
    public gasLimit: string,
    public gasUsed: string,
    public timestamp: number,
    public uncles: string[]
  ) {}

  static fromJson(json: any): Block {
    return new Block(
      json.number,
      json.hash,
      json.parentHash,
      json.nonce,
      json.sha3Uncles,
      json.logsBloom,
      json.transactionsRoot,
      json.stateRoot,
      json.receiptsRoot,
      json.miner,
      json.difficulty,
      json.totalDifficulty,
      json.extraData,
      json.size,
      json.gasLimit,
      json.gasUsed,
      json.timestamp,
      json.uncles
    );
  }
}

export class Transaction implements ITransaction {
  constructor(
    public hash: string,
    public nonce: string,
    public blockHash: string,
    public blockNumber: number,
    public transactionIndex: number,
    public from: string,
    public to: string,
    public value: string,
    public gas: string,
    public gasPrice: string,
    public input: string,
    public creates: string,
    public v: string,
    public r: string,
    public s: string,
    public raw: string
  ) {}

  static fromJson(json: any): Transaction {
    return new Transaction(
      json.hash,
      json.nonce,
      json.blockHash,
      json.blockNumber,
      json.transactionIndex,
      json.from,
      json.to,
      json.value,
      json.gas,
      json.gasPrice,
      json.input,
      json.creates,
      json.v,
      json.r,
      json.s,
      json.raw
    );
  }
}
class Contract {
  constructor(
    public name: string,
    public symbol: string,
    public totalSupply: string
  ) {}
}

module.exports = Contract;
