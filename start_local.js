const debug = require('debug')('GEE-Platform:start_local');
const app = require('../src/index');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  debug(`Listening on port ${port}...`);});
