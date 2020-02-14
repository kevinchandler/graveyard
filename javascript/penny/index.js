// can i buy?
//    how much usd do i have
//    how much of coin currency can i buy
//    place order

// can i sell?
//    how much coin currency do i have
//    place order
//

const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient('LTC-USD');

function currentPrice(orderType) {
  validateOrderType(orderType)

  publicClient.getProductTicker(function(err, succ, body) {
   return console.log(body[orderType])
  });
}

function myOpenOrders(orderType) {
  validateOrderType(orderType)
}

function myBalance(currency) {}

function validateOrderType(orderType) {
  if (!['ask', 'bid'].includes(orderType)) {
    throw new Error('Invalid orderType must be one of `ask` `bid`')
  }
}

function sell() {}
function buy() {}
