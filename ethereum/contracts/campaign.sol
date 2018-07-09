pragma solidity ^0.4.17; //version of solidity

//factory contract

contract CampaignFactory{
    address[] public deployedCampaigns;
    
    function creatCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaings() public view returns(address[]){
        return deployedCampaigns;
    }
    
    
}

// main contract
contract Campaign {
    
    //creating a struct ogf request i.e when the manager makes a new request to be funded 
    // to start a project must have description , value, adress of recipirent and complete
    
    struct Request {
        string description;
        uint value;
        address recipient;
        // true or false
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
        
        
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping (address => bool) public approvers;
    
    uint public approversCount;
    
    //modifer to restrictict get and finalize Request
    //it makes sure only the manager can do that
    
    modifier restricted () {
        require(msg.sender == manager);
        _;
    }
        
    
    
   // function that has the minimum amount required to Contribute
  // and also creates the manager of the projects
   
    constructor(uint minimum, address creator) public{
        manager = creator;
        minimumContribution = minimum;
        
    }
    
    // a function that makes payment to the managers
    function Contribute() public payable{
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    // a function that instantiates the the struct Request
    
    function CreateRequest  ( string description, uint value, address recipient ) public payable restricted{
        Request memory newRequest = Request({
            description: description,
            value:value,
            recipient:recipient,
            complete : false,
            approvalCount:0
        });
        
        requests.push(newRequest);
        
    }
    
    function approveRequest( uint index) public{
        Request storage request = requests[index];
        // making sure the person is a donator inorder to approveRequest
        require(approvers[msg.sender]);
        // making ssure that the person has not voted at all
        require(!request.approvals[msg.sender]);
        
        //adding adress to approval hashing
        request.approvals[msg.sender] == true;
        request.approvalCount ++;
        
    }
    
    function finalizeRequest(uint index) public restricted{
        
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount/2));
        
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }
    
    
}