const http = require('http')

const port = 3000

const server = http.createServer((req,res) =>{
    res.statusCode =200
    res.setHeader('Contenty-Type','text/html')
    res.end('<h1>Ola este e meu primeiro server com html/<h1><p>Testando a atualização</p>') 
})

server.listen(port,() =>{
        console.log(`O servidor rodando na porta: ${port}`)
})