import { ExecuteCallback } from '@chainlink/types'
import { Requester } from '@chainlink/ea-bootstrap'
import { INCOMING_TOKEN, CHAINLINK_URL } from "../config"

const customError = (data: any) => data.Response === 'Error'

export const callbackHandler: ExecuteCallback = async (req: any, reqData: any) => {
    console.log(`Callback function called.`, req)
    if (!req || !reqData || Object.keys(reqData).length === 0) {
        return Requester.callbackResponse(false, "No data provided")
    }
    const runId = reqData.secret || 1
    const options = {
        url: `${CHAINLINK_URL}/v2/runs/${runId}`,
        headers: {
            "Authorization": `Bearer ${INCOMING_TOKEN}`
        },
        params: {
            data: {
                pending: false,
                data: reqData,
            },
            RunId: runId,
        },
        method: "PATCH"
    }
    try {
        await Requester.request(options, customError)
        return Requester.callbackResponse(true)
    } catch (e) {
        return Requester.callbackResponse(false, `Failed PATCH request: ${e}`)
    }
}