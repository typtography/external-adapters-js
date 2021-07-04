import { Requester, Validator } from '@chainlink/ea-bootstrap'
import { Config, ExecuteWithConfig } from '@chainlink/types'
// import { NAME as AdapterName } from '../config'

export const NAME = 'channels' // This should be filled in with a lowercase name corresponding to the API endpoint

const customError = (data: any) => data.Response === 'Error'

const customParams = {
  username: ['username'],
}

export const execute: ExecuteWithConfig<Config> = async (request, config) => {
  const validator = new Validator(request, customParams)
  if (validator.error) throw validator.error

  const jobRunID = validator.validated.id
  const username = validator.validated.data.username
  const url = `channels`

  const params = {
    forUsername: username,
    key: config.apiKey,
    part: 'snippet'
  }

  const options = { ...config.api, params, url }

  const response = await Requester.request(options, customError)
  response.data.result = response.data.items

  return Requester.success(jobRunID, response, config.verbose)
}
