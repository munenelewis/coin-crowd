import React, {Component} from 'react';

import factory from '../ethereum/factory'


class CamapaignIdex extends Component{
   async componentDidMount(){
   const campaigns =  await factory.methods.getDeployedCampaings().call();

   console.log(campaigns);
   
    }

    render(){
        return <div> campaigns index </div>
    }

}

export default CamapaignIdex;