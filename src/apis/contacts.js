import { fetchJson } from './helper'

const CONTACTS_ENDPOINT = '/324d-f2ec-4905-949a'

export async function getContacts(signal) {
  return fetchJson(CONTACTS_ENDPOINT, signal)
}

export { CONTACTS_ENDPOINT }
