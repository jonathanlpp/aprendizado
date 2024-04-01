const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res) =>{
  fs.readfile('mesangem.html', function(err,data){ // lendo o arquivo
    res.writeHead(200,{'Content-type': 'text/html'})
    res.write(data)
    return res.end()
})  
})
server.listen(port,() =>{
        console.log(`O servidor rodando na porta: ${port}`)
})