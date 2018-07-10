import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x874f1033dfb9fab949321B2B7aD9ff51606979fc'
);

export default instance;