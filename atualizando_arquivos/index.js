const http = require('http')
const fs = require('fs')
const port = 3000


// entender essa parte do codigo
const server = http.createServer((req,res) =>{
  const urlInfo= require('url').parse(req.url, true)
  const name = urlInfo.query.name 

  
// entender essa parte do codigo 
  if(!name){
    fs.readFile('index.html', function(err,data){ // lendo o arquivo
      res.writeHead(200,{'Content-type': 'text/html'})
      res.write(data);
       return res.end
  }) 

  // entender essa parte do codigo 
  } else {
    const nameNewLine =name +'\r\n'
    fs.appendFile('arquivo.txt', nameNewLine, function(err, data){
      res.writeHead(302,{
        location: '/'
      })
      return res.end()
    })
  }
})

//Entender essa parte do codigo 
server.listen(port,() =>{
        console.log(`O servidor rodando na porta: ${port}`)
})