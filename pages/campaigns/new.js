import React , {Component} from 'react';
import Layout from '../../components/layout';
import {Form , Button, Input} from 'semantic-ui-react';

class CampaignNew extends Component {
    render(){
        return(
        <Layout>
        <h3> Create a Campaign </h3>
        <Form>
            <Form.Field>
                <label> Minum Contribution </label>
                <Input label="wei" labelPosition="right" />
            </Form.Field>
            <Button primary> Create </Button>
        </Form>
        </Layout>
        ); 
    }
}
export default CampaignNew;