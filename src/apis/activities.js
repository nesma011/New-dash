import { fetchJson } from './helper'

const ACTIVITIES_ENDPOINT = '/72f4-9358-4779-af3b'

export async function getActivities(signal) {
  return fetchJson(ACTIVITIES_ENDPOINT, signal)
}

export { ACTIVITIES_ENDPOINT }
