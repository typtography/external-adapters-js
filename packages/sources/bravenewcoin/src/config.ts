import { Requester } from '@chainlink/ea-bootstrap'
import { Config } from '@chainlink/types'

export const DEFAULT_ENDPOINT = 'price'

export const makeConfig = (prefix?: string): Config => Requester.getDefaultConfig(prefix)
