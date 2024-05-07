const logError = (error) => console.error(error);

const formatError = (error) => error.message;

const throwError = (message) => {
  throw new Error(message);
};

export { logError, formatError, throwError };
const { ContractRejected } = require('web3-core-helpers');

const handleError = (err, res) => {
  if (err instanceof ContractRejected) {
    res.status(400).json({ message: 'Transaction rejected by the network' });
  } else {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  handleError,
};
