const axios = require('axios');
const Max = require('max-api');
getUrl =
  'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=6&interval=daily';
let myResponse;
Max.post('Loaded the script');

Max.addHandler('get', () => {
  axios
    .get(getUrl)
    .then(function (response) {
      // myResponse = JSON.stringify(response.data);
      let prices = response.data.prices.map((price) => {
        return price[1];
      });
      Max.post(prices);
      Max.outlet(prices);
    })
    .catch(function (error) {
      Max.post('error');
    })
    .then(function () {
      Max.post('END');
    });
});

// node tester (in console)
const nodeTester = () => {
  axios
    .get(getUrl)
    .then(function (response) {
      myResponse = JSON.stringify(response.data);
      let prices = response.data.prices.map((price) => {
        return price[1];
      });
      console.log(prices);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
};

///
