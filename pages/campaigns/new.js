import React , {Component} from 'react';
import Layout from '../../components/layout';
import {Form , Button, Input} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
    state ={
        minimuContribution: ''
    };

    onSubmit = async (event) =>{
        // prevents the browser from rendering the form direct to 
        // the backend

        // when
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();
        await factory.methods
        .creatCampaign(this.state.minimuContribution)
        .send({
            from: accounts[0]
        });

    };
    render(){
        return(
        <Layout>
        <h3> Create a Campaign </h3>
        <Form>
            <Form.Field>
                <label> Minum Contribution </label>
                <Input 
                label="wei" labelPosition="right"
                value = {this.state.minimuContribution}
                onChange = {event => this.setState ({
                    minimuContribution: event.target.value
                })} 
                
                />
            </Form.Field>
            <Button primary> Create </Button>
        </Form>
        </Layout>
        ); 
    }
}
export default CampaignNew;