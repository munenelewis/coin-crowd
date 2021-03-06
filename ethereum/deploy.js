const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compliedFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
  'over broccoli chunk laundry copy law umbrella gain social lecture tobacco knife',
  'https://rinkeby.infura.io/kjf1oV2vl7wd2ZaMQ9KU'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compliedFactory.interface))
    .deploy({ data:'0x' + compliedFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  console.log(compliedFactory.interface);
  
};
deploy();