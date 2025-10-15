let tempGame = document.getElementById(`gameTemplate`);
let cloneGame = tempGame.content.cloneNode(true);
let app = document.createElement('div');
app.id = 'app';
app.appendChild(cloneGame);
document.body.appendChild(app);

let player = {input: null, wins: null}
let computer = {input: null, wins: null}
function moveSelect(btn){
    player.input = btn.id
}

let round = null
let ties = null
let score = null
function shoot(){
    let inputType = [`rock`, `paper`, `scissor`]
    let randSelect = inputType[Math.floor((Math.random()*3))]
    computer.input = randSelect

    if(player.input === computer.input)
        ties++
    else if(player.input === `rock` && computer.input === `scissor` ||
        player.input === `paper` && computer.input === `rock` ||
        player.input === `scissor` && computer.input === `paper`
    )
        player.wins++
    else
        computer.wins++
    score = `Score: Player - ${player.wins}, Computer - ${computer.wins}, Tie - ${ties}`;
    round = `Player - ${player.input}, Computer - ${computer.input}`
    changeTemplate(`resultTemplate`)
}

function changeTemplate(templateId){
    let template = document.getElementById(templateId);
    let content = template.content.cloneNode(true);
    let appEl = document.getElementById('app');
    appEl.innerHTML = '';
    appEl.appendChild(content);
}
