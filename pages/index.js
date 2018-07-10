import React, {Component} from 'react';

import { Card, Button } from 'semantic-ui-react';

import factory from '../ethereum/factory';


class CamapaignIdex extends Component{
//defines a class function no need to create a class instance
    static async getInitialProps(){
        const campaigns =  await factory.methods.getDeployedCampaings().call();

    

    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header : address,
                description: <a> View campaigns </a>,
                fluid: true
            };
        });

        return < Card.Group items ={items} />;
    }

    render(){
        return <div>

        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
        { this.renderCampaigns() } 
        <Button 
            content = "Create Campaign"
            icon = "add circle"
            primary
         />   


        </div>
    }

}

export default CamapaignIdex;