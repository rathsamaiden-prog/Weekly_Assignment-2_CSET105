let tempGame = document.getElementById(`gameTemplate`);
let cloneGame = tempGame.content.cloneNode(true);
let app = document.createElement('div');
app.id = 'app';
app.appendChild(cloneGame);
document.body.appendChild(app);

let player = {input: null, wins: 0}
let computer = {input: null, wins: 0}
function moveSelect(btn){
    player.input = btn.id
}

let round = 0
let ties = 0
let score = 0
function shoot(){
    changeTemplate(`resultTemplate`)
    let winLossImg = document.getElementById(`winLoseImg`)
    let inputType = [`rock`, `paper`, `scissor`]
    let randSelect = inputType[Math.floor((Math.random()*3))]
    computer.input = randSelect
    if(player.input === computer.input){
        ties++
        winLossImg.src = `images/playerWin2.png`
    }else if(player.input === `rock` && computer.input === `scissor` ||
        player.input === `paper` && computer.input === `rock` ||
        player.input === `scissor` && computer.input === `paper`
    ){
        player.wins++
        winLossImg.src = `images/playerWin2.png`
    }else{
        computer.wins++
        winLossImg.src = `images/playerLost.png`
    }
    document.getElementById(`playerInput`).src = `images/${player.input}.png`
    document.getElementById(`cpuInput`).src = `images/${computer.input}.png`
    score = `Score: Player - ${player.wins}, Computer - ${computer.wins}, Tie - ${ties}`;
    round = `Player - ${player.input}, Computer - ${computer.input}`
}

function changeTemplate(templateId){
    let template = document.getElementById(templateId);
    let content = template.content.cloneNode(true);
    let appEl = document.getElementById('app');
    appEl.innerHTML = '';
    appEl.appendChild(content);
    if(templateId === `resultTemplate`){
        let scoreBlock = document.getElementById('scoreblock');
        scoreBlock.innerHTML = `<p>${score}</p><p>${round}</p>`;
    }
}
