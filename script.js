let tempGame = document.getElementsByClassName(`gameTemplate`)[0];
let cloneGame = tempGame.content.cloneNode(true);
document.body.appendChild(cloneGame);

let player = {input: null, wins: null}
let computer = {input: null, wins: null}
function moveSelect(btn){
    player.input = btn.id
}


let round = `Player - ${playerInput}, Computer - ${computerInput}`
let ties = null
let score = `Score: Player - ${player.wins}, Computer - ${computer.wins}, Tie - ${ties}`;
let inputType = [`rock`, `paper`, `scissor`]
function shoot(){
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

    document.body.innerHTML = ``
    let tempResult = document.getElementsByClassName(`resultTemplate`)[0];
    let cloneResult = tempResult.content.cloneNode(true);
    document.body.appendChild(cloneResult);
}



function playGame(){
    document.body.innerHTML = ``
    let tempGame = document.getElementsByClassName(`gameTemplate`)[0];
    let cloneGame = tempGame.content.cloneNode(true);
    document.body.appendChild(cloneGame);
}
