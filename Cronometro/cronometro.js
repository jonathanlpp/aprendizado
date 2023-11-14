// puxando os valores do html
const timerEl= document.querySelector("#timer")
const marksList= document.querySelector("#marks-list")
const iniciar=document.querySelector("#iniciar")
const reset= document.querySelector("#reset")
const mark=document.querySelector("#mark")
let intervalId = 0;
let timer = 0;
let marks = [];

const fomarTime= (time) => {                              // função que formata o tempo;milisegundos , segundos , minutos 
    const hours = Math.floor(time / 360000);
    const minute = Math.floor((time % 360000) /6000);
    const seconds = Math.floor((time % 6000)/ 100)
    const hundredths = time % 100

    return `${hours.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2,0)}:${hundredths.toString().padStart(2,0)}`;
}
const addMarkToList = (markIndex,markTime) => {
    marksList.innerHTML += `<p>Marca ${markIndex} ${fomarTime(markTime)} </p>`
}

const markTime = () =>{
    marks.push(timer);
    addMarkToList(marks.length,timer)
}
const toggleTime = () =>{
    const button = document.querySelector("#iniciar")
    const action = button.getAttribute('action')


    if(action == 'start' || action =='continue'){
        intervalId = setInterval(() => {
        timer +=1;
        setTimer(timer)
      }, 10)
      button.setAttribute('action','pause')
      button.innerHTML = '<i class="fa-solid fa-pause"></i>'
    } else if (action=='pause'){
        button.setAttribute('action','continue')
        button.innerHTML = '<i class="fa-solid fa-play"></i>' 
        clearInterval(intervalId); 
    }
}

const resetTime = ()  =>{
    clearInterval(intervalId);
    timer=0;
    marks=[];
    setTimer(timer);
    marksList.innerHTML= '';

    const button = document.querySelector("#iniciar");
    button.setAttribute('action','start');
    button.innerHTML = '<i class="fa-solid fa-play"></i>' ;

}

const setTimer = (time) => {
    timerEl.textContent = fomarTime(Math.round(time))
    }


iniciar.addEventListener('click',toggleTime)
mark.addEventListener('click',markTime)
reset.addEventListener('click',resetTime)