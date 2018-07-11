import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/layout';

class RequestIndex extends Component{
    
    static async getInitialProps(props){
        const { address } = props.query;

        return { address: address };
    }
    render(){
        return(
            <Layout>
                <h3> RequestIndex </h3>

                <Link route={`/campaigns/${this.props.address}/requests/new`}>

                    <a>
                        <Button primary> Add request </Button>

                    </a>

                </Link>
            </Layout>
        );
    }
}

export default RequestIndex;