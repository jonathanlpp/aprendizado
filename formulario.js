const form = document.querySelector("#form")
const nomeInput = document.querySelector("#nome")
const nascimentoInput = document.querySelector("#nascimento")
const cpfInput = document.querySelector("#cpf")
const rgInput = document.querySelector("#rg")
const enderecoInput = document.querySelector("#endereco")
const cursoInput = document.querySelector("#curso")
const numeroInput = document.querySelector("#numero")

form.addEventListener("submit",  (event) => {
    event.preventDefault () 
// variavel que acha erros 
    let achaErro= false
    //validação nome
    if(nomeInput.value==="") {
        alert("Por favor , preencha seu nome")
        achaErro=true
    }

// verificar se a data de nascimento esta preenchida e se é valida
    if(nascimentoInput.value===""  || !isnascimentoValid(nascimentoInput.value)){
    alert("Por favor digite sua data de nascimento")
    achaErro=true
}


 // Função que valida a data de nascimento
function isnascimentoValid(nascimento) {
    // Regex para validar a data de nascimento no formato dd/mm/aaaa
    const nascimentoRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    return nascimentoRegex.test(nascimento);
}

// validação cpf para o formulario 
if(cpfInput.value ===""){
    alert("Por favor digite seu cpf")   
    achaErro=true
}
// verificação do cpf (Regex)
const cpfRegex = /^\d{11}$/; // CPF tem 11 dígitos numéricos
if(!cpfRegex.test(cpfInput.value)) {
    alert("Cpf invalido. Por favor insira apenas numeros")
    achaErro=true
}
// validação rg
if(rgInput.value===""){
    alert("Por vaor digite seu rg")
    achaErro=true
}
//verificação do rg ( Regex)
const rgRegex = /^(\d{1,3}(\.\d{3})*(,\d+)?|\d+)$/
if(!rgRegex.test(rgInput.value)){
    alert("rg invalido. Por favor insira apenas numeros")
    achaErro=true
}
//validação endereço

if(enderecoInput.value===""){
    alert("Por favor digite seu endereço")
    achaErro=true
}
// validação whatsapp

if(numeroInput.value===""){
    alert("Por favor digite seu whatsapp")
    achaErro=true
}
// Verificação do número de WhatsApp usando regex
const whatsappRegex = /^(\+55|55|0)?\d{2}\d{9}$/; // Número de WhatsApp brasileiro
if (!whatsappRegex.test(numeroInput.value)) {
    alert("Número de WhatsApp inválido. Insira um número válido no Brasil.");
    achaErro=true
}

if(achaErro){
    // se houver erros retorne
    return 
}else{
    alert("Seu cadastro foi concluido")
}
form.submit()
})