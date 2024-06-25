const express = require('express')
const app = express()
const port = 3000 // variavel de ambiente 

const path = require('path')

//lendo o boddy
app.use(
    express.urlencoded({
        extended:true,

    })
)

app.use(express.json())



app.get('/users/:id',(req,res)=>{
    const id = req.params.id

})
//leitura da tabela users , resgata um usuuário do banco   
console.log(`Estamos buscando pelo usuário: ${id}`)


app.get("/",(req,res)=>{
    res.sendFile(`${basePath}/users.html`) // arquivo que eu quiser
})

app.listen(port,()=>{
    console.log("servidor rodando na porta" + " " + port )
})

