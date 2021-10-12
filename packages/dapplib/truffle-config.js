require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure title film return situate color hunt praise army genius'; 
let testAccounts = [
"0x4c4f4842ab62666d5380a8d873471e94b38e8409c97043f44cde412902ca6c9c",
"0xe94acb3b30ece6bdcc83ecf41e3c6d79a31e528927d95617fd92bd9707cfda0d",
"0x8689907fc7f422dc9b52baf0630c0ccc0b9ce14bf59d741152e54c24e49c0122",
"0x562c26cb144498a7b90df60a0c406068f597b0209701ea58885942708b65637b",
"0xe8bed1738ebf1583d1cb5a98cd9f35c4743fda5d24d53d934f5e2fdb6808d2d3",
"0x37df9f393c9962680096c143b6c9a938bcfdea4c670a9b3a778e874440e3b55c",
"0x1988dbf674110aefbd1ea3f5f8a7796908be117d71d171a37d34207b520ea590",
"0x05a8313723b960424455bc0d7849cf12e4efd6b559906813240347b7712797c3",
"0xea52aa9a009d2fe7803584b255ab7d5a80c46e83937de0a4cc0002a2e2c989c9",
"0x4fd6a6fb0a3f5afa0ed7ccba5c136c8be1797efb4b415a0668b1c19a8f6dbb53"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


