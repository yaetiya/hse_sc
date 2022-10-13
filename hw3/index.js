const Web3 = require("web3");
var web3 = new Web3(
  "https://goerli.infura.io/v3/0564f653e826478281df498a504adf51"
);
const address = "0x7F007E9Bfd0f188a93EA8944c6812Bd85c17a779";
const ABI = require("./abi.json");
const myContract = new web3.eth.Contract(ABI, address);
myContract.methods
  .balanceOf("0x40A1209DcD64f625b5dCA5F7bD9Ef9C59EF3DAB6")
  .call()
  .then(console.log);
