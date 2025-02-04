// TODO: Load these from @chainlink/ea

const environmentVariables = [
  { envKey: '1FORGE_DATA_PROVIDER_URL', value: '1forge' },
  { envKey: 'ALPHACHAIN_DATA_PROVIDER_URL', value: 'alphachain' },
  { envKey: 'ALPHAVANTAGE_DATA_PROVIDER_URL', value: 'alphavantage' },
  { envKey: 'AMBERDATA_DATA_PROVIDER_URL', value: 'amberdata' },
  { envKey: 'ANYBLOCK_GASPRICE_DATA_PROVIDER_URL', value: 'anyblock_gasprice' },
  { envKey: 'ANYBLOCK_UNISWAP_VWAP_DATA_PROVIDER_URL', value: 'anyblock_uniswap_vwap' },
  { envKey: 'BINANCE_DATA_PROVIDER_URL', value: 'binance' },
  { envKey: 'BINANCE_DEX_DATA_PROVIDER_URL', value: 'binance_dex' },
  { envKey: 'BITEX_DATA_PROVIDER_URL', value: 'bitex' },
  { envKey: 'BITSO_DATA_PROVIDER_URL', value: 'bitso' },
  { envKey: 'BLOCKCHAIN_COM_DATA_PROVIDER_URL', value: 'blockchain_com' },
  { envKey: 'BLOCKCHAIR_DATA_PROVIDER_URL', value: 'blockchair' },
  { envKey: 'BLOCKCYPHER_DATA_PROVIDER_URL', value: 'blockcypher' },
  { envKey: 'BLOCKSTREAM_DATA_PROVIDER_URL', value: 'blockstream' },
  { envKey: 'BRAVENEWCOIN_DATA_PROVIDER_URL', value: 'bravenewcoin' },
  { envKey: 'BTC_COM_DATA_PROVIDER_URL', value: 'btc_com' },
  { envKey: 'CFBENCHMARKS_DATA_PROVIDER_URL', value: 'cfbenchmarks' },
  { envKey: 'COINAPI_DATA_PROVIDER_URL', value: 'coinapi' },
  { envKey: 'COINBASE_DATA_PROVIDER_URL', value: 'coinbase' },
  { envKey: 'COINCODEX_DATA_PROVIDER_URL', value: 'coincodex' },
  { envKey: 'COINGECKO_DATA_PROVIDER_URL', value: 'coingecko' },
  { envKey: 'COINLORE_DATA_PROVIDER_URL', value: 'coinlore' },
  { envKey: 'COINMARKETCAP_DATA_PROVIDER_URL', value: 'coinmarketcap' },
  { envKey: 'COINPAPRIKA_DATA_PROVIDER_URL', value: 'coinpaprika' },
  { envKey: 'COINRANKING_DATA_PROVIDER_URL', value: 'coinranking' },
  { envKey: 'COVID_TRACKER_DATA_PROVIDER_URL', value: 'covid_tracker' },
  { envKey: 'CRYPTOAPIS_DATA_PROVIDER_URL', value: 'cryptoapis' },
  { envKey: 'CRYPTOCOMPARE_DATA_PROVIDER_URL', value: 'cryptocompare' },
  { envKey: 'CRYPTO_ID_DATA_PROVIDER_URL', value: 'crypto_id' },
  { envKey: 'CRYPTOMKT_DATA_PROVIDER_URL', value: 'cryptomkt' },
  { envKey: 'CURRENCYLAYER_DATA_PROVIDER_URL', value: 'currencylayer' },
  { envKey: 'DERIBIT_DATA_PROVIDER_URL', value: 'deribit' },
  { envKey: 'DNS_QUERY_DATA_PROVIDER_URL', value: 'dns_query' },
  { envKey: 'DWOLLA_DATA_PROVIDER_URL', value: 'dwolla' },
  { envKey: 'DXFEED_DATA_PROVIDER_URL', value: 'dxfeed' },
  { envKey: 'DXFEED_SECONDARY_DATA_PROVIDER_URL', value: 'dxfeed_secondary' },
  { envKey: 'EODHISTORICALDATA_DATA_PROVIDER_URL', value: 'eodhistoricaldata' },
  { envKey: 'ETHERCHAIN_DATA_PROVIDER_URL', value: 'etherchain' },
  { envKey: 'ETHGASSTATION_DATA_PROVIDER_URL', value: 'ethgasstation' },
  { envKey: 'EXPERT_CAR_BROKER_DATA_PROVIDER_URL', value: 'expert_car_broker' },
  { envKey: 'FCSAPI_DATA_PROVIDER_URL', value: 'fcsapi' },
  { envKey: 'FINAGE_DATA_PROVIDER_URL', value: 'finage' },
  { envKey: 'FINNHUB_DATA_PROVIDER_URL', value: 'finnhub' },
  { envKey: 'FIXER_DATA_PROVIDER_URL', value: 'fixer' },
  { envKey: 'FMPCLOUD_DATA_PROVIDER_URL', value: 'fmpcloud' },
  { envKey: 'GENESIS_VOLATILITY_DATA_PROVIDER_URL', value: 'genesis_volatility' },
  { envKey: 'GEODB_DATA_PROVIDER_URL', value: 'geodb' },
  { envKey: 'IEXCLOUD_DATA_PROVIDER_URL', value: 'iexcloud' },
  { envKey: 'INTRINIO_DATA_PROVIDER_URL', value: 'intrinio' },
  { envKey: 'JSON_RPC_DATA_PROVIDER_URL', value: 'json_rpc' },
  { envKey: 'KAIKO_DATA_PROVIDER_URL', value: 'kaiko' },
  { envKey: 'LCX_DATA_PROVIDER_URL', value: 'lcx' },
  { envKey: 'LINKPOOL_DATA_PROVIDER_URL', value: 'linkpool' },
  { envKey: 'LITION_DATA_PROVIDER_URL', value: 'lition' },
  { envKey: 'MARKETSTACK_DATA_PROVIDER_URL', value: 'marketstack' },
  { envKey: 'MESSARI_DATA_PROVIDER_URL', value: 'messari' },
  { envKey: 'METALSAPI_DATA_PROVIDER_URL', value: 'metalsapi' },
  { envKey: 'NIKKEI_DATA_PROVIDER_URL', value: 'nikkei' },
  { envKey: 'NOMICS_DATA_PROVIDER_URL', value: 'nomics' },
  { envKey: 'OILPRICEAPI_DATA_PROVIDER_URL', value: 'oilpriceapi' },
  { envKey: 'ONCHAIN_DATA_PROVIDER_URL', value: 'onchain' },
  { envKey: 'OPEN_EXCHANGE_RATES_DATA_PROVIDER_URL', value: 'open_exchange_rates' },
  { envKey: 'ORCHID_BANDWIDTH_DATA_PROVIDER_URL', value: 'orchid_bandwidth' },
  { envKey: 'PAXOS_DATA_PROVIDER_URL', value: 'paxos' },
  { envKey: 'PAYPAL_DATA_PROVIDER_URL', value: 'paypal' },
  { envKey: 'POA_GAS_PRICE_DATA_PROVIDER_URL', value: 'poa_gas_price' },
  { envKey: 'POLYGON_DATA_PROVIDER_URL', value: 'polygon' },
  { envKey: 'REDUCE_DATA_PROVIDER_URL', value: 'reduce' },
  { envKey: 'RENVM_DATA_PROVIDER_URL', value: 'renvm' },
  { envKey: 'SATOSHITANGO_DATA_PROVIDER_URL', value: 'satoshitango' },
  { envKey: 'SOCHAIN_DATA_PROVIDER_URL', value: 'sochain' },
  { envKey: 'SPORTSDATAIO_DATA_PROVIDER_URL', value: 'sportsdataio' },
  { envKey: 'STASIS_DATA_PROVIDER_URL', value: 'stasis' },
  { envKey: 'TAAPI_DATA_PROVIDER_URL', value: 'taapi' },
  { envKey: 'THERUNDOWN_DATA_PROVIDER_URL', value: 'therundown' },
  { envKey: 'TIINGO_DATA_PROVIDER_URL', value: 'tiingo' },
  { envKey: 'TRADERMADE_DATA_PROVIDER_URL', value: 'tradermade' },
  { envKey: 'TRADINGECONOMICS_DATA_PROVIDER_URL', value: 'tradingeconomics' },
  { envKey: 'TRUEUSD_DATA_PROVIDER_URL', value: 'trueusd' },
  { envKey: 'TWELVEDATA_DATA_PROVIDER_URL', value: 'twelvedata' },
  { envKey: 'UNIBIT_DATA_PROVIDER_URL', value: 'unibit' },
  { envKey: 'WBTC_DATA_PROVIDER_URL', value: 'wbtc' },
  { envKey: 'XBTO_DATA_PROVIDER_URL', value: 'xbto' },
]

function searchEnvironment() {
  for (const { envKey, defaultValue } of environmentVariables) {
    const isSetEnvVar = process.env[envKey]
    if (isSetEnvVar) return defaultValue
  }
}

function generateTestPayload() {
  const payload = {
    request: {
      source: searchEnvironment(),
      referenceContract: '0x1B58B67B2b2Df71b4b0fb6691271E83A0fa36aC5',
      operator: 'multiply',
    },
  }
  return JSON.stringify(payload)
}

module.exports = generateTestPayload()
