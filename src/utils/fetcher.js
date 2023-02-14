// type Methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
// type Body = Object | FormData
// type Options = FetcherOptions & {
//   headers?: Record<string, string>
//   body?: Object | FormData
//   isTypeOfBlob?: boolean
// }

export class Fetcher {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  get(url, options) {
    return this._fetch('GET', url, options)
  }

  post(url, body, options) {
    const opts = Object.assign({}, options, { body })
    return this._fetch('POST', url, opts)
  }

  put(url, body, options) {
    const opts = Object.assign({}, options, { body })
    return this._fetch('PUT', url, opts)
  }

  patch(url, body, options) {
    const opts = Object.assign({}, options, { body })
    return this._fetch('PATCH', url, opts)
  }

  delete(url, options) {
    return this._fetch('DELETE', url, options)
  }

  resolveUrl(route, searchParams = new URLSearchParams()) {
    if (route.startsWith('/')) {
      route = route.replace('/', '')
    }

    const url = new URL(`${this.baseUrl}/${route}`)

    if (!(searchParams instanceof URLSearchParams)) {
      throw Error('search params must be an instance of URLSearchParams')
    }

    for (const key of searchParams.keys()) {
      const value = searchParams.get(key)
      if (value) {
        url.searchParams.append(key, value)
      }
    }

    return url.toString()
  }

  resolveBody(body) {
    if (!body) {
      return undefined
    }

    if (body instanceof FormData) {
      return body
    }

    return JSON.stringify(body)
  }

  async _fetch(method, url, options) {
    const body = this.resolveBody(options.body)

    if (
      (!options.headers ||
        (options.headers && !options.headers['Content-Type'])) &&
      !(body instanceof FormData)
    ) {
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
      }
    }

    const response = await fetch(this.resolveUrl(url, options.searchParams), {
      method,
      body,
      headers: options.headers,
    })

    let res
    try {
      res = await response.json()
    } catch (error) {
      res = {}
    }

    if (!response.ok) {
      throw new Error(res?.error?.key || res?.code || response.statusText)
    }

    return res
  }
}
