import { fetchJson } from './helper'

const ROADMAP_ENDPOINT = '/1f9b-d64f-467b-8671'

export async function getRoadmap(signal) {
  return fetchJson(ROADMAP_ENDPOINT, signal)
}

export { ROADMAP_ENDPOINT }
