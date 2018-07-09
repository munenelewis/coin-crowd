const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


/*

This is a function that creates a buils file in the contract to save the file that are compiled intead 
of waiting for the solidity compiler to compile ever time

*/

const buildPath = path.resolve(__dirname, 'build');

/*
this is  a function that deletes the build folder incase it exist
*/
fs.removeSync(buildPath);


/* buiding the path to my contract
*/
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

// reading my contract
const source = fs.readFileSync(campaignPath, 'utf8');

// saving the output after reading the contract

const output = solc.compile(source, 1).contracts;

/* 
a function that checks if the build contract exist

*/

fs.ensureDirSync(buildPath);



/* a for loop that loops through the output and create files based on the objects that are in the contracts 

*/

// for (let contract in output){
//     fs.outputJsonSync(
//         path.resolve(buildPath, contract + '.json'),
//         output[contract]
//     );
// }
for (let contract in output) {
    fs.outputJsonSync(
      path.resolve(buildPath, contract.replace(':', '') + '.json'),
      output[contract]
    );
  }