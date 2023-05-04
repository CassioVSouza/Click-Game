pontos = 0;
upgrade = 0;

function Clicar(){
    var score = document.getElementById('score');
    if(upgrade == 0){
        pontos += 1;
        score.innerHTML = `${pontos}`
    }else if(upgrade == 1){
        pontos += 2;
        score.innerHTML = `${pontos}`
    }else if(upgrade == 2){
    pontos += 8;
    score.innerHTML = `${pontos}`
    }else if(upgrade == 3){
        pontos += 16;
        score.innerHTML = `${pontos}`
    }
}
function Upgrade1(){
    var upgradetext = document.getElementById('upgradetext')
    var buttonup = document.getElementById('buttonup1')
    if(pontos >= 10){
        buttonup.disabled = true;
        upgrade += 1;
        upgradetext.innerHTML = `${upgrade}`
    }else{
        alert('Você não tem pontos o suficiente!')
    }
}
function Upgrade2(){
    var upgradetext = document.getElementById('upgradetext')
    var buttonup = document.getElementById('buttonup2')
    if(pontos >= 50 && upgrade == 1){
        buttonup.disabled = true;
        upgrade += 1;
        upgradetext.innerHTML = `${upgrade}`
    }else{
        alert('Você não tem pontos o suficiente ou ainda não possui o upgrade anterior')
    }
}
function Upgrade3(){
    var upgradetext = document.getElementById('upgradetext')
    var buttonup = document.getElementById('buttonup3')
    if(pontos >= 100 && upgrade == 2){
        buttonup.disabled = true;
        upgrade += 1;
        upgradetext.innerHTML = `${upgrade}`
    }else{
        alert('Você não tem pontos o suficiente ou ainda não possui os upgrades anteriores')
    }
}