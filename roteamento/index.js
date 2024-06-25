const http = require('http') 
const fs = require('fs')
const url = require('url') // puxando a url


const port = 3000

const server = http.createServer((req,res) =>{
  const q = url.parse(req.url, true)
  const filename = q.pathname.substring(1)
  

  if(filename.includes('html')){
    if(fs.existsSync(filename)){
    fs.readFile(filename, function(err, data){
      res.write(200, {'content-type': 'text/html'})
      res.write(data)
      return res.end()
    })      

    } else{
        //404 
        fs.readFile('404.html', function(err, data){
          res.write(404, {'content-type': 'text/html'})
          res.write(data)
          return res.end()
    })    
  } 
}
})



server.listen(port,() =>{
        console.log(`O servidor rodando na porta: ${port}`)
})