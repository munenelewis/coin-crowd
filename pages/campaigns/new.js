import React , {Component} from 'react';
import Layout from '../../components/layout';
import {Form , Button, Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';


class CampaignNew extends Component {
    state ={
        minimuContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) =>{
        // prevents the browser from rendering the form direct to 
        // the backend

        // when
        event.preventDefault();

        this.setState({ loading: true, errorMessage:'' });

        try {
        const accounts = await web3.eth.getAccounts();
        await factory.methods
        .creatCampaign(this.state.minimuContribution)
        .send({
            from: accounts[0]
        });

        Router.pushRoute('/');
            
        } catch (err) {
            this.setState ({errorMessage: err.message});
        }
        this.setState({ loading: false });    
    };
    render(){
        return(
        <Layout>
        <h3> Create a Campaign </h3>
        <Form  onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
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
            <Message error header="oooops" content={this.state.errorMessage} />
           
            <Button loading={this.state.loading} primary> Create </Button>
        </Form>
        </Layout>
        ); 
    }
}
export default CampaignNew;