let turn = 1;
let XScore = 0;
let OScore = 0;
let isGameStart = true;

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

const XDisplayScore = document.getElementById('XScore');
const ODisplayScore = document.getElementById('OScore');

function playerTurn(btn){
    if(isGameStart){
        if(turn % 2 !== 0){
            playerX(btn);
        }else{
            playerO(btn);
        }
        checkWin();
    }
}

function playerX(btn){
    if(document.getElementById(btn).innerHTML === ''){
        document.getElementById(btn).innerHTML = 'X';
        turn++;
    }
}

function playerO(btn){
    if(document.getElementById(btn).innerHTML === ''){
        document.getElementById(btn).innerHTML = 'O';
        turn++;
    }
}

function checkWin(){
    if(btn1.innerHTML === 'X' && btn2.innerHTML === 'X' && btn3.innerHTML === 'X'){
        playerWin('X', btn1, btn2, btn3);
    }else if(btn4.innerHTML === 'X' && btn5.innerHTML === 'X' && btn6.innerHTML === 'X'){
        playerWin('X', btn4, btn5, btn6);
    }else if(btn7.innerHTML === 'X' && btn8.innerHTML === 'X' && btn9.innerHTML === 'X'){
        playerWin('X', btn7, btn8, btn9);
    }else if(btn1.innerHTML === 'X' && btn4.innerHTML === 'X' && btn7.innerHTML === 'X'){
        playerWin('X', btn1, btn4, btn7);
    }else if(btn2.innerHTML === 'X' && btn5.innerHTML === 'X' && btn8.innerHTML === 'X'){
        playerWin('X', btn2, btn5, btn8);
    }else if(btn3.innerHTML === 'X' && btn6.innerHTML === 'X' && btn9.innerHTML === 'X'){
        playerWin('X', btn3, btn6, btn9);
    }else if(btn1.innerHTML === 'X' && btn5.innerHTML === 'X' && btn9.innerHTML === 'X'){
        playerWin('X', btn1, btn5, btn9);
    }else if(btn3.innerHTML === 'X' && btn5.innerHTML === 'X' && btn7.innerHTML === 'X'){
        playerWin('X', btn3, btn5, btn7);
    }else if(btn1.innerHTML === 'O' && btn2.innerHTML === 'O' && btn3.innerHTML === 'O'){
        playerWin('O', btn1, btn2, btn3);
    }else if(btn4.innerHTML === 'O' && btn5.innerHTML === 'O' && btn6.innerHTML === 'O'){
        playerWin('O', btn4, btn5, btn6);
    }else if(btn7.innerHTML === 'O' && btn8.innerHTML === 'O' && btn9.innerHTML === 'O'){
        playerWin('O', btn7, btn8, btn9);
    }else if(btn1.innerHTML === 'O' && btn4.innerHTML === 'O' && btn7.innerHTML === 'O'){
        playerWin('O', btn1, btn4, btn7);
    }else if(btn2.innerHTML === 'O' && btn5.innerHTML === 'O' && btn8.innerHTML === 'O'){
        playerWin('O', btn2, btn5, btn8);
    }else if(btn3.innerHTML === 'O' && btn6.innerHTML === 'O' && btn9.innerHTML === 'O'){
        playerWin('O', btn3, btn6, btn9);
    }else if(btn1.innerHTML === 'O' && btn5.innerHTML === 'O' && btn9.innerHTML === 'O'){
        playerWin('O', btn1, btn5, btn9);
    }else if(btn3.innerHTML === 'O' && btn5.innerHTML === 'O' && btn7.innerHTML === 'O'){
        playerWin('O', btn3, btn5, btn7);
    }else if(btn1.innerHTML !== '' && btn2.innerHTML !== '' && btn3.innerHTML !== '' && 
        btn4.innerHTML !== '' && btn5.innerHTML !== '' && btn6.innerHTML !== '' && 
        btn7.innerHTML !== '' && btn8.innerHTML !== '' && btn9.innerHTML !== ''){
        document.getElementById('title').innerHTML = "It's a Draw!";
    }
}

function playerWin(player, btn1, btn2, btn3){
    document.getElementById('title').innerHTML = 'Player ' + player + ' Won!';
    changeColor(btn1, btn2, btn3);
    if(player === 'X'){
        XScore++;
        XDisplayScore.innerHTML = 'X- ' + XScore;

    }else{
        OScore++;
        ODisplayScore.innerHTML = 'O- ' + OScore;
    }
    isGameStart = false;
}

function changeColor(btn1, btn2, btn3){
    btn1.style.backgroundColor = 'yellow';
    btn2.style.backgroundColor = 'yellow';
    btn3.style.backgroundColor = 'yellow';
}

function reset(){
    const tile = document.getElementsByClassName('tile');

    for(let i = 0; i < 9; i++){
        tile[i].innerHTML = '';
        tile[i].style.backgroundColor = 'blanchedalmond';
    }
    
    document.getElementById('title').innerHTML = 'TicTacToe';
    isGameStart = true;
    turn = 1;
}
