export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const NULL_BYTES = '0x';

export const EMPTY_STRING = '';

export const ZERO = 0;

export const ONE = 1;

const { toContractUnits } = require('./config');

const INITIAL_SUPPLY = toContractUnits(1000000, 18);

module.exports = {
  INITIAL_SUPPLY,
};
