# MadNetJS

##### Requirements
- `Nodejs 12+`
- `NPM 6+`
##

##### Install
`npm install MadBase/MadNetJS`
##

#### Usage
> Supports SECP256k1 and BN curve types. 
> 
> SECP256k1 (curve = 1) 
> 
> BN (curve = 2)
##### Require
```
const MadWallet = require("madnetjs");
const madWallet = new MadWallet(${CHAIN_ID}, ${MADNET_RPC})
```

##### Add Account
```
await madWallet.Account.addAccount(${PRIVATE_KEY}, ${CURVE})
```
###### Example
```
await madWallet.Account.addAccount(privateKey, 1);
```

##### Create A ValueStore

```
await madWallet.Transaction.createValueStore(0x${FROM}, ${VALUE}, 0x${TO}, ${TO_CURVE})
```
###### Example
```
await madWallet.Transaction.createValueStore(0x4240A00833065c29D1EB117e200a87c95D640289, 10, 0x219D27f4DBf2831f45Dd55436dE084571Ae2cE15, 2)
--
await madWallet.Transaction.createValueStore(madWallet.Account.accounts[0]["address"], 1, madWallet.Account.accounts[0]["address"], 1)
```

##### Create A DataStore
```
await madWallet.Transaction.createDataStore(0x${FROM}, ${INDEX}, ${DURATION}, ${RAW_DATA}, !(optional){ISSUED_AT_EPOCH})
```
###### Example
```
await  madWallet.Transaction.createDataStore(0x4240A00833065c29D1EB117e200a87c95D640289, "0xA", 20, "0xC0FFEE")
--
await madWallet.Transaction.createDataStore(madWallet.Account.accounts[0]["address"], "0xA", 1, "0xC0FFEE", 1)
```

##### Send Transaction
```
await madWallet.sendTransaction(!(optional){CHANGE_ADDRESS}, !(optional){CHANGE_ADDRESS_CURVE}, !(optional)[{UTXOIDs}])
```
###### Example
```
await madWallet.Transaction.sendTx()
--
await madWallet.Transaction.sendTx(0x4240A00833065c29D1EB117e200a87c95D640289, 2)
--
await madWallet.Transaction.sendTx(0x4240A00833065c29D1EB117e200a87c95D640289, 2, [0197314d4f3e46eb7dd8cd7bcd2daf5305a4c8f9089ae6e9a1552350dfce56ac])
```
##
#### Wallet Modules
- Account 
- Transaction
- RPC
> Details on these modules can be found in the generated docs
##

#### Generate Docs
- Create the docs 
	- `npm run build-docs` 
- Open index with a browser
	- `firefox docs/index.html` 
##

#### Tests
> Create `.env` file in the root folder to specify account, chainId, and RPC.  
  It is required that your `.env` has a key `OPTIONAL_TEST_SUITE_PRIVATE_KEY` with a funded private key value.
  Some test suites need Public Keys and Signatures that you can add in the following `.env` keys respectively: `OPTIONAL_TEST_SUITE_PUBLIC_KEY_ONE`, `OPTIONAL_TEST_SUITE_PUBLIC_KEY_TWO`, `OPTIONAL_TEST_SUITE_SIGNATURE_ONE` and `OPTIONAL_TEST_SUITE_SIGNATURE_TWO`.  

- Run all tests
	- `npm test`
- Run only unit tests
	- `npm run test-unit`
- Run only integration tests
	- `npm run test-integration`
- Run a single test
	- `npm run test-single path/to/file.js`
- Run all tests with coverage
	- `npm run test-coverage`
- Run only unit tests with coverage
	- `npm run test-unit-coverage`
- Run only integration tests with coverage
	- `npm run test-integration-coverage`

#### Test Coverage
> When you run `npm run test-coverage` it generates a file under `coverage/cobertura-coverage.xml` with a general test coverage output.
