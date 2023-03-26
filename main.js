document.getElementById('#tempoReal');

let time0 = new Date();
let tempoCiclo = new Date();
let tempoIntervalo = new Date();
let stop = false;
let intervaloOuCiclo = 'Ciclo';

function resetTime(whatTime){
    whatTime.setHours(0);
    whatTime.setMinutes(0);
    whatTime.setSeconds(0);
    whatTime.setMilliseconds(0);
}

resetTime(time0);
resetTime(tempoCiclo);
resetTime(tempoIntervalo);

tempoCiclo.setMinutes(25);
tempoIntervalo.setMinutes(5);

let minutesLimit = tempoCiclo.getMinutes();

function horaCorrendo(){
    if(intervaloOuCiclo == 'Ciclo'){
        minutesLimit = tempoCiclo.getMinutes();
    }else{
        minutesLimit = tempoIntervalo.getMinutes();
    }
    document.getElementById('tempoReal').innerHTML = time0.toLocaleTimeString();
    time0.setSeconds(time0.getSeconds()+ 1);
    var stopwatch = setTimeout(horaCorrendo, 1000);
    if(time0.getMinutes() === minutesLimit || stop){
        clearTimeout(stopwatch);
        if(time0.getMinutes() === minutesLimit){
            document.getElementById('alarmSound').play();
            alert(intervaloOuCiclo + ' Finalizado!');
        } 
        resetTime(time0);
        document.getElementById('tempoReal').innerHTML = time0.toLocaleTimeString();
        stop = false;
        if(intervaloOuCiclo == 'Ciclo'){
            intervaloOuCiclo = 'Intervalo'
        }else{
            intervaloOuCiclo = 'Ciclo';
        }
        document.getElementById('titulo').innerHTML = intervaloOuCiclo;
        
    }
}

function stopTimer(){
    stop = true;
}

function aumentarCiclo(){
    tempoCiclo.setMinutes(tempoCiclo.getMinutes()+1);
    document.getElementById('tempoCiclo').innerHTML = tempoCiclo.toLocaleTimeString();
}

function diminuiCiclo(){
    tempoCiclo.setMinutes(tempoCiclo.getMinutes()-1);
    document.getElementById('tempoCiclo').innerHTML = tempoCiclo.toLocaleTimeString();
}

function aumentarIntervalo(){
    tempoIntervalo.setMinutes(tempoIntervalo.getMinutes()+1);
    document.getElementById('tempoIntervalo').innerHTML = tempoIntervalo.toLocaleTimeString();
}

function diminuiIntervalo(){
    tempoIntervalo.setMinutes(tempoIntervalo.getMinutes()-1);
    document.getElementById('tempoIntervalo').innerHTML = tempoIntervalo.toLocaleTimeString();
}

function alterThemer(){
    let alter = document.querySelector('.center-page');
    let alterBody = document.querySelector('body');
    if(alter.style.backgroundColor == "rgb(150, 150, 150)"){
        alter.style.backgroundColor = "red";
        alterBody.style.backgroundImage = "linear-gradient(180deg, #f39885 0, #e8857a 25%, #d86c6c 50%, #c85360 75%, #ba3e5a 100%)"
    }else{
        alter.style.backgroundColor = "rgb(150, 150, 150)";
        alterBody.style.backgroundImage = "radial-gradient(circle at 12.5% 12.5%, #516468 0, #4c595b 16.67%, #454c4c 33.33%, #3c3b3b 50%, #332b2b 66.67%, #2b1e20 83.33%, #241519 100%)";
    }
    

}

document.getElementById('diminuiCiclo').onclick = diminuiCiclo;
document.getElementById('aumentaCiclo').onclick = aumentarCiclo;
document.getElementById('diminuiIntervalo').onclick = diminuiIntervalo;
document.getElementById('aumentarInervalo').onclick = aumentarIntervalo;
document.getElementById('start').onclick = horaCorrendo;
document.getElementById('stop').onclick = stopTimer;
document.querySelector('.themer').onclick = alterThemer;
document.getElementById('titulo').innerHTML = intervaloOuCiclo;

