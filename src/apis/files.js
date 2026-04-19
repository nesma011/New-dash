import { fetchJson } from './helper'

const FILES_ENDPOINT = '/6fc7-2555-4753-956b'

export async function getLatestFiles(signal) {
  return fetchJson(FILES_ENDPOINT, signal)
}

export { FILES_ENDPOINT }
