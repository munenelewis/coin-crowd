import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react'

import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm  from '../../components/ContributeForm';



class CampaignShow  extends Component {

    static async getInitialProps(props) {



        const campaign = Campaign(props.query.address);


        const summary =  await campaign.methods.getSummary().call();

        


        return {
            address: props.query.address,
            minimuContribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
        
    }

    renderCards(){


        const {
            balance,
            manager,
            minimuContribution,
            requestCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'adress of the manager',
                description: 'managner created this campaign and can create request to withdraw money',
                style: { overflowWrap: ' break-word' }
            },
            {
                header: minimuContribution,
                meta: 'Minimum contribution (wei)',
                description: 'you must contribute this much wei to be a contributer',
                style: { overflowWrap: ' break-word' }
            },
            {
                header: requestCount,
                meta: 'Number of request',
                description: 'A request trying to withdraw money from the contract. Request must be approved by approvers',
                style: { overflowWrap: ' break-word' }
            },
            {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Number of people who have already donated to this campaign',
                style: { overflowWrap: ' break-word' }
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'How much money the campaign has to spend',
                style: { overflowWrap: ' break-word' }
            }
        ];
        return <Card.Group items={items} />;
    }

    render(){
        return(<Layout>
            <h3> CampaignShow </h3>
            <Grid>
                <Grid.Column width={10}>
                {this.renderCards()}

                </Grid.Column>
                <Grid.Column width={6}>
                <ContributeForm address={ this.props.address }/>

                </Grid.Column>

            </Grid>
            </Layout>
        
        );
    }
}

export default CampaignShow;