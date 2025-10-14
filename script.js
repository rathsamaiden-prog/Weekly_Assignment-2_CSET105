let player = {input: null, wins: null}
let computer = {input: null, wins: null}
function moveSelect(btn){
    player.input = btn.id
}

let inputType = [`rock`, `paper`, `scissor`]
function shoot(){
    let randSelect = inputType[Math.floor((Math.random()*3))]
    computer.input = randSelect
}

let round = `Player - ${playerInput}, Computer - ${computerInput}`

let ties = null
if(player.input === computer.input)
    ties++
else if(player.input === `rock` && computer.input === `scissor` ||
    player.input === `paper` && computer.input === `rock` ||
    player.input === `scissor` && computer.input === `paper`
)
    player.wins++
else
    computer.wins++
let score = `Score: Player - ${player.wins}, Computer - ${computer.wins}, Tie - ${ties}`;
