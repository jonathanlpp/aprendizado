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
const basePath= path.join(__dirname,'templates') // puxando o html por diretorio 
app.get('users/create' , (req,res) =>{
    res.sendFile(`${basePath}/usersform.html`)
})

app.post/('users/save' ,( req,res) =>{
    console.log(req.body)
     
    const name=req.name.body
    const age = req.age.body

    console.log(`O nome do usuario é : ${name}, e ele tem ${age} de idade`)
    
    res.sendFile(`${basePath}/userform.html`)
} )


app.get('/users/:id',(req,res)=>{
    const id = req.params.id

})
//leitura da tabela users , resgata um usuuário do banco   
console.log(`Estamos buscando pelo usuário: ${id}`)
res.sendFile(`${basePath}/users.html`)


app.get("/",(req,res)=>{
    res.sendFile(`${basePath}/users.html`) // arquivo que eu quiser
})

app.listen(port,()=>{
    console.log("servidor rodando na porta" + " " + port )
})

