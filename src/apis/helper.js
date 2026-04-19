export function buildApiUrl(path) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  if (!baseUrl) {
    throw new Error('Missing VITE_API_BASE_URL environment variable.')
  }

  return `${baseUrl.replace(/\/$/, '')}${path}`
}

export async function fetchJson(path, signal) {
  const response = await fetch(buildApiUrl(path), { signal })

  if (!response.ok) {
    throw new Error(`Failed to load resource: ${path}`)
  }

  return response.json()
}
