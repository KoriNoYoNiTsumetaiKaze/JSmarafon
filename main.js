function renderHP() {
    this.health.innerText = this.currentHP+' / '+this.maxHP;
    this.progressbarHP.style.width = this.currentHP+'%';
    }

function setDamageHP(attack) {
    if (attack<=0) return;
    this.currentHP -= attack;
    if (this.currentHP<0) this.currentHP = 0;
    this.renderHP();
    }

function assault(enemy) {
    if (this.currentHP==0) return;
    let a = Math.random()*this.attack;
    a = Math.round(a);
    a += this.luck;
    enemy.setDamageHP(a);
    }

const character = {
    name: 'Pickachu',
    maxHP: 100,
    currentHP: 100,
    attack:10,
    luck: 10,
    progressbarHP: document.getElementById('progressbar-character'),
    health: document.getElementById('health-character'),
    renderHP: renderHP,
    assault: assault,
    setDamageHP: setDamageHP
    }

const enemy = {
    name: 'Charmander',
    maxHP: 100,
    currentHP: 100,
    attack: 10,
    luck: 10,
    progressbarHP: document.getElementById('progressbar-enemy'),
    health: document.getElementById('health-enemy'),
    renderHP: renderHP,
    assault: assault,
    setDamageHP: setDamageHP
    }

function init(){
    character.renderHP();
    enemy.renderHP();
    }

init();

function btnKickClick() {
    character.assault(enemy);
    enemy.assault(character);
    if (character.currentHP==0 && enemy.currentHP>0) alert(enemy.name+' WINNER!');
    else if (character.currentHP>0 && enemy.currentHP==0) alert(character.name+' WINNER!');
    else if (character.currentHP==0 && enemy.currentHP==0) alert('ALL DEAD!');
}

const btnKick = document.getElementById('btn-kick');
btnKick.addEventListener('click', btnKickClick);
