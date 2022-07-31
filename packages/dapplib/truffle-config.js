require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain essay hidden clinic sun trash'; 
let testAccounts = [
"0xd34b39a465b3c0b284aa0983444acc90d248884336e1ff959f4ebccc25f760ea",
"0x8d0537299347e3eb4a3b5deca82fe2eb85a4b7f35c750526d80f013236ee0b1d",
"0xd711f64e21635ca2d9fc06052d906ba723ebfefc93b2336e309b32c0c0a8bb66",
"0x8f9515ef9781aece52778463aaeb78e045ba9848de1c4c8d81c9cc5a27f54955",
"0xa5577635efcc551629d8556f5ac1f9a23bd259d00173d56e22ffcb320d735d59",
"0x48dc160e8cb9499adfd2f3d0dcd3eca88b31fb3685ce5d6c25daa7acfe11a1fe",
"0xd4770697ed6e639f8a42222c62363bbc0fb05bfb1fd59c0b3d6c43d77ce444de",
"0x820edeca202f79943f194758ba6b81cfac85744f6d56379ec63d1ae0dccae6e0",
"0xb70f48fd40f70f0aae571ae6022fe1fbe40c3cab93457083f97a3dd457f39cc8",
"0xb773ef58fe2f8c9ceeb85bd26a28c69bc12592402bbd4419d3a4a62be694c7e1"
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


