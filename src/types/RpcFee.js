/**
 * RPC Fee Object -- Returned from RPC.getFees(){@link RPC}
 * @typedef { Object } RpcFee
 * @property { Hex32 } MinTxFee - Minimum Transaction Fee
 * @property { Hex32 } ValueStoreFee - The fee for each ValueStore in submitted transction vector outs 
 * @property { Hex32 } DataStoreFee - The fee for each DataStore in submitted transction vector outs
 * @property { Hex32 } AtomicStoreFee - The fee for each AtomicStore submitted transction vector outs
 */