import Account from "./Account.js";
import Transaction from "./Transaction.js";
import RPC from "./RPC.js";
import utils from "./Util";

//TODO replace with Account, Transaction, RPC, UtilityCollection, etc

type WalletParams = {
    chainId: Number;
    Account: any;
    Transaction: any;
    RPC: any;
    Utils: any;
    rpcServer: any;
    rpcTimeout: any;
}

/**
 * Wallet handler
 * @class
 * @alias module:Wallet
 * @property {Number} chainId - ChainID of the network to be connected to
 * @property {Account} Account - Main Account Handler Instance
 * @property {Transaction} Transaction - Main Transaction Handler Instance
 * @property {RPC} RPC - Main RPC Handler Instance
 * @property {UtilityCollection} Utils - Utility Collection
 */
class Wallet {
    private chainId: Number;
    public Account: any;
    private Transaction: any;
    private Rpc: any;
    private Utils: any;

    /**
     * Creates an instance of Wallet.
     * @param {WalletParams} params
     */
    constructor(...params: WalletParams[]) {
        const { chainId, rpcServer, rpcTimeout } = this._initializeParams(params)
        this.chainId = chainId ? utils.isNumber(chainId) : undefined;
        this.Account = new Account(this);
        this.Transaction = new Transaction(this);
        this.Rpc = new RPC(this, rpcServer, rpcTimeout);
        this.Utils = utils;
    }

    /**
     * Initializes Wallet parameters.
     * @param {WalletParams} params - Accepts a chainId and rpcServer arguments for backwards compatibility, a shorthand instancing w/ RPC endpoint only or object Based configuration
     * @returns {Object<WalletParams>} Wallet parameters
     */
    _initializeParams(params: WalletParams[]) {
        let chainId, rpcServer, rpcTimeout;

        // Backwards compatibility catch
        if (params.length === 2) {
            chainId = params[0];
            rpcServer = params[1];
        }
        // Object Based configuration
        if (params.length === 1 && typeof params[0] === "object") {
            chainId = params[0].chainId;
            rpcServer = params[0].rpcServer;
            rpcTimeout = params[0].rpcTimeout;
        }
        // Shorthand instancing w/ RPC only
        if (params.length === 1 && typeof params[0] === "string") {
            rpcServer = params[0];
        }

        if (!rpcServer) {
            console.warn('The RPC requests will not work properly if an endpoint is not provided.');
        }

        return {
            chainId,
            rpcServer,
            rpcTimeout
        }
    }
}
module.exports = Wallet;