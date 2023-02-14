let fetcher

export function getFetcher() {
  if (!fetcher) {
    throw Error('Fetcher must be initiliaze')
  }
  return fetcher
}

export function setupFetcher(factory) {
  fetcher = factory()
}
