let hora = document.querySelector('#horas')
let mim = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

setInterval(() =>{
    let date = new Date()
    let dhora = date.getHours()
    let dminu = date.getMinutes()
    let dsec = date.getSeconds()

    hora.innerHTML = `${formaTime(dhora)}`
    mim.innerHTML = `${formaTime(dminu)}`
    segundos.innerHTML = `${formaTime(dsec)}`

}, 1000)

function formaTime(time){
    return time < 10 ? '0' + time : time
}

function calcular(){
    const data = document.getElementById('ano').value;
    const res = document.querySelector('.data');
    const date = new Date();
    const anoAtual = date.getFullYear()
    if(!data){
        alert('Preencha o campo!');
    } else if(data > anoAtual){
        alert('Você não é viajante!');
    } else{
        let calculo = anoAtual - data;

        res.innerHTML = `você tem ${calculo} anos`;
    }

}