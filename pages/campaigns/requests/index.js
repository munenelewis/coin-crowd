import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/layout';
import Campain from '../../../ethereum/campaign';
import RequestRow from '../../../components/requestRow';

class RequestIndex extends Component{
    
    static async getInitialProps(props){
        const { address } = props.query;

        const campaign = Campain(address);

        const requestCount = await  campaign.methods.getRequestsCount().call();

        const approversCount = await campaign.methods.approversCount().call()

        const requests = await Promise.all(
            Array( parseInt (requestCount)).fill().map((element, index) => {

                return campaign.methods.requests(index).call()

            })

        );

        // console.log(requests);


        
        

        return { address: address, requests, requestCount, approversCount };
    }


    renderRow(){
        return this.props.requests.map((request, index)=>{
            return <RequestRow 
                key={index}
                id={index}
                request={request}
                address={this.props.address}
                approversCount={this.props.approversCount}
            
            />;
        });
    }
    render(){

        const { Header, Row , HeaderCell , Body  } = Table;
        return(
            <Layout>
                <h3> RequestIndex </h3>

                <Link route={`/campaigns/${this.props.address}/requests/new`}>

                    <a>
                        <Button primary floated="right" style={{ marginBottom: 10 }}> Add request </Button>

                    </a>

                </Link>


                <Table>

                    <Header>
                        <Row>
                                <HeaderCell>ID</HeaderCell>
                                <HeaderCell>Description</HeaderCell>
                                <HeaderCell>Amount</HeaderCell>
                                <HeaderCell>Recipient</HeaderCell>
                                <HeaderCell>Approval</HeaderCell>
                                <HeaderCell>Approve</HeaderCell>
                                <HeaderCell>Finalize</HeaderCell>

                        </Row>   
                    </Header>


                    <Body>

                        {this.renderRow()}

                    </Body>




                </Table>


                < div > Found { this.props.requestCount } Request </div>



            </Layout>
        );
    }
}

export default RequestIndex;