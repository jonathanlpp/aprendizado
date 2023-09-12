const previousOperationtext = document.querySelector("#previous-Operation")
const currentOperationText=document.querySelector("#current-Operation")
const buttons=document.querySelectorAll("#buttons-container")

class calculator{
    constructor(previousOperationtext,currentOperationText){
        this.previousOperationText=previousOperationtext
        this.currentOperationText= currentOperationText;
        this.currentOperation= "";
    }

    //adicionando digitos no visor
    addDigit(digit){
        //checando se a operaçã ja possui um "."
        if(digit==="."&& this.currentOperationText.innerText.includes(".")){
            return;
        }
        this.currentOperation = digit;
        this.updateScreen()
    }
    //processar todas as operações da calculadora
    processOperation(operation){
        
        // verificando se o curent está vazio
        if(this.currentOperationText.innerText===""){
            //mudança de operação
            if(this.previousOperationText.innerText !==""){
                this.changeOperation(operation)
            }
            return
        }
        //obtendo os valores anteriores e atuais
        let operationValue
        const previous= +this.previousOperationText.innerText.split(" ")[0]
        const current= +this.currentOperationText.innerText

        switch(operation){
                case "+":
                    operationValue = previous + current
                    this.updateScreen(operationValue,operation,current,previous)
                    break;
                case "-":
                    operationValue = previous - current;
                    this.updateScreen(operationValue,operation,current,previous);
                    break;
                case "/":
                    operationValue = previous / current;
                    this.updateScreen(operationValue,operation,current,previous);
                    break;
                case "*":
                    operationValue = previous * current;
                    this.updateScreen(operationValue,operation,current,previous);
                    break; 
                case  "DEL":
                    this.processDelOperator();
                    break;   
                case "CE":
                this.processClearCurrentOperator();
                     break;
                case "C":
                    this.processClearOperator()
                    break
                case "=":
                    this.processEqualOperator();
                    break
                default:
                    return;
            }        

        }

    //mudando os valores no visor da calculadora
    updateScreen(operationValue=null, 
        operation=null,
        current=null,
        previous=null
        ) {
            
            if(operationValue=== null){
                this.currentOperationText.innerText += this.currentOperation         
            } else {
                // checagem se o valor é 0 se sim adicione o valor 1 vez 
                if(previous===0){
                    operationValue = current
                }

                // jogando o valor de baixo la em cima no previous
                this.previousOperationText.innerText = `${operationValue} ${operation}`
                this.currentOperationText.innerText = "";

            }
        
    }
// mudando operaçoes matematicas
changeOperation(operation){
    const mathOperation= ["*","/","+","-"]
    if(!mathOperation.includes(operation)){
        return
    }
        this.previousOperationText.innerText=this.previousOperationText.innerText.slice(0,-1) + operation
    } // apagando o ultimo digito
    processDelOperator(){
        this.currentOperationText.innerText=this.currentOperationText.innerText.slice(0,-1)
    }
    // apagando os digitos atuais
    processClearCurrentOperator() {
        this.currentOperationText.innerText = "";
      }
    
    // apagando todos os digitos
    processClearOperator(){
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText="";
    }

    processEqualOperator(){

        let operation= this.previousOperationText.innerText.split(" ")[1];

        this.processOperation(operation);
    }
    }


const calc= new calculator (previousOperationtext,currentOperationText);

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        if(+value >= 0 || value==="." ){
            console.log(value)
            calc.addDigit(value)

        }else{
            calc.processOperation(value)
        }
    })
})
