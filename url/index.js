const url = require('url')
const address= 'https//www.meusite.com.br/catalog'
const parseUrl= new url.URL(address)

console.log(parseUrl.host)
console.log(parseUrl.pathname)