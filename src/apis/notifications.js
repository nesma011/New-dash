import { fetchJson } from './helper'

const NOTIFICATIONS_ENDPOINT = '/29ff-ff61-40dc-ac9d'

export async function getNotifications(signal) {
  return fetchJson(NOTIFICATIONS_ENDPOINT, signal)
}

export { NOTIFICATIONS_ENDPOINT }
