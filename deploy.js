const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const { abi, evm } = require('./compile');

provider = new HDWalletProvider(
  'draft enable party alley poet sniff indicate remember glow quarter arrest turtle',
  'https://rinkeby.infura.io/v3/7581e8e82d064f0698f6c9152378b000'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });
  console.log(abi);
  console.log('Contract deployed to', result.options.address);
  //provider.engine.stop();
};
deploy();
