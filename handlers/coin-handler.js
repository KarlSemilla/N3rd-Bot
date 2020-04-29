const coin = require("coin-toss");

const flip = () => {
  return coin.toss();
};

module.exports = {
  flip,
};
