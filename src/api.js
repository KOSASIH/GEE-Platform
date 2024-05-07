import axios from 'axios';

const get = (url) => axios.get(url);

const post = (url, data) => axios.post(url, data);

const put = (url, data) => axios.put(url, data);

const del = (url) => axios.delete(url);

export { get, post, put, del };
const express = require('express');
const router = express.Router();
const { getContracts, createContract } = require('../blockchain');

router.get('/contracts', async (req, res) => {
  const contracts = await getContracts();
  res.json(contracts);
});

router.post('/contracts', async (req, res) => {
  const { name, symbol, totalSupply } = req.body;
  const result = await createContract(name, symbol, totalSupply);
  res.json(result);
});

module.exports = router;
