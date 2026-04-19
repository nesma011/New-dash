import { fetchJson } from './helper'

const SUMMARY_ENDPOINT = '/3722-67e5-4903-a2d6'

export async function getDashboardSummary(signal) {
  return fetchJson(SUMMARY_ENDPOINT, signal)
}

export { SUMMARY_ENDPOINT }
