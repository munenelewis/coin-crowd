import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6Ba1d531B3d34e8b8b94bCfC4efEfAd4f9124084'
);

export default instance;