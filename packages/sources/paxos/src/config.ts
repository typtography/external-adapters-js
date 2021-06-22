import { Requester } from '@chainlink/ea-bootstrap'
import { Config } from '@chainlink/types'

export const NAME = 'PAXOS'

export const DEFAULT_ENDPOINT = 'assetAttestation'
export const DEFAULT_BASE_URL = 'https://api.paxos.com/v1/'

export const makeConfig = (prefix?: string): Config => {
    const config = Requester.getDefaultConfig(prefix, true)
    config.api.baseURL = config.api.baseURL || DEFAULT_BASE_URL
    return config
  }
