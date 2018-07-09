const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


/*

This is a function that creates a buils file in the contract to save the file that are compiled intead 
of waiting for the solidity compiler to compile ever time

*/

const buildPath = path.resolve(__dirname, 'contracts', 'build')

/*
this is  a function that deletes the build folder incase it exist
*/
fs.removeSync(buildPath);


/* buiding the path to my contract
*/
const campaignPath = path.resolve(__dirname, 'contracts', 'campaign.sol');


const source = fs.read(campaignPath, 'utf8')
