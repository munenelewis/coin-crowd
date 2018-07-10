import React, {Component} from 'react';

import factory from '../ethereum/factory'


class CamapaignIdex extends Component{

    static async getInitialProps(){
        const campaigns =  await factory.methods.getDeployedCampaings().call();

        return { campaigns };

    }

    render(){
        return <div> { this.props.campaigns[0] } </div>
    }

}

export default CamapaignIdex;