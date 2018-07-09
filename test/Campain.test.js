const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');


let accounts; //---> a list of all the accounts
let factory; //----> deployed instance of factory
let campaignAdress;
let campaign;

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// increase the limit
myEmitter.setMaxListeners(11);

for(let i = 0; i < 11; i++) {
  myEmitter.on('event', _ => console.log(i));
}

myEmitter.emit('event');


beforeEach( async () =>{
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy ({data: compiledFactory.bytecode})
    .send ( { from: accounts[0], gas: 1000000 });

    //calls the create campaign function from my contract
    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    //calls the function getddDeployedCampaigns which return a list 
    // of all deployed campaigns and assigns it to the campaignAdress variable 
    [campaignAdress] = await factory.methods.getDeployedCampaigns().call();

    campaign = await new web3.eth.Contract(

            JSON.parse(compiledCampaign.interface),
            campaignAdress
    );
});

// a function that test to see if the contract and the fac
describe('Campaigns', ()=>{
    it('deployes a factory and campaign', () =>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);


    });
});

