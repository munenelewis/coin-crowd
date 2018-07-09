import web3 from './web3';
import CampaignFactory from './build/CampaignFactory';

const instance = new.web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x9CcE0a2FC6d95943A3A10593ba35d3CF7d7f74d5'
)

export default instance;