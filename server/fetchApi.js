const async = require('express-async-await');
const fetch = require('node-fetch');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const btcFetch = () => {
    fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC')
      .then((response) => response.json())
      .then((data) => {
        console.log('this is data from router', data.data.rates.USD);
        res.locals.btc = data.data.rates.USD;
        console.log('res.locals.btc', res.locals.btc);
        res.status(200).json(res.locals.btc);
      });
  };
  setInterval(btcFetch(), 5000);

  // const btcFetch = async () => {
  //   const coinbase = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC');
  //   const responseData = await coinbase.json();
  //   console.log('this is api data', responseData.data.rates.USD);
  //   res.locals.btc = responseData.data.rates.USD;
  //   console.log('res.locals.btc', res.locals.btc)
  // };
  // btcFetch();
  // res.status(200).json(res.locals.btc);
});

module.exports = router;
