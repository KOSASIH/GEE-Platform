const { toContractUnits } = require('./config');

const INITIAL_SUPPLY = toContractUnits(1000000, 18);

module.exports = {
  INITIAL_SUPPLY,
};
