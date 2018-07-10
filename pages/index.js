import React, {Component} from 'react';

import { Card, Button } from 'semantic-ui-react';

import factory from '../ethereum/factory';

import Layout from '../components/layout';

import { Link } from '../routes';

class CamapaignIdex extends Component{
//defines a class function no need to create a class instance
    static async getInitialProps(){
        const campaigns =  await factory.methods.getDeployedCampaings().call();

        return { campaigns }

    }


    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header : address,
                description:(
                    <Link route={ `campaigns/${address}` }>
                    <a> View campaigns </a>
                    </Link>
                ),
                fluid: true
            };
        });

        return < Card.Group items ={items} />;
    }

    render(){
        return(
            <Layout> 
        
        <div>

            <Link route='/campaigns/new'>
            <a>
            <Button style ={{ marginTop: "15px" }}
                floated = "right"
                content = "Create Campaign"
                icon = "add circle"
                primary
             />  
            </a>
             </Link> 
    
    { this.renderCampaigns() } 

            </div>
            </Layout>

        ); 
    }

}

export default CamapaignIdex;