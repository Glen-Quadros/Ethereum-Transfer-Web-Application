require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: process.env.url,
      accounts: [process.env.private_key],
    },
  },
};
