const fetch = require('isomorphic-unfetch')

const url = (...args) => (
  [`http://localhost:3000`, ...args].join('/')
)

const get = (...args) => {
  return fetch(url(...args)).then(res => res.json())
}

const post = (...args) => {
  const _url = url(...args.slice(0, args.length - 1))
  const body = JSON.stringify(args[args.length - 1])
  return fetch(_url, {
    method: 'POST',
    body,
    // mode: 'cors',
    // cache: 'no-cache',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
}

const patch = (...args) => {
  const _url = url(...args.slice(0, args.length - 1))
  const body = JSON.stringify(args[args.length - 1])
  return fetch(_url, {
    method: 'PATCH',
    body,
    // mode: 'cors',
    // cache: 'no-cache',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
}

const _delete = (...args) => {
  return fetch(url(...args), {
    method: 'DELETE',
    // mode: 'cors',
    // cache: 'no-cache',
    headers: {
      'Accept': 'application/json',
    },
  })
}

module.exports = { get, post, patch, _delete }
