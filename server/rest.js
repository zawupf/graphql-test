const fetch = require('isomorphic-unfetch')
const get = (...args) => {
  const url = [`http://localhost:3000`, ...args].join('/')
  return fetch(url).then(res => res.json())
}

module.exports = { get }
