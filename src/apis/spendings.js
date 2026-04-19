import { fetchJson } from './helper'

const SPENDINGS_ENDPOINT = '/4004-c0c2-4017-b274'

export async function getProjectSpendings(signal) {
  return fetchJson(SPENDINGS_ENDPOINT, signal)
}

export { SPENDINGS_ENDPOINT }
