var MyToken = artifacts.require("MyToken.sol");
var MyTokenSale = artifacts.require("MyTokenSale");
require("dotenv").config({path: "../.env"});

module.exports = async function(deployer) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
  let instance = await MyToken.deployed();
  await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address);
 await instance.transfer(MyTokenSale.address, process.env.INITIAL_TOKENS);
}
