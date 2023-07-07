const Boxes = Array.from(document.getElementsByClassName("box"));
const button = document.getElementById('btn');
const player1 = document.getElementsByClassName('players')[0]
const player2 = document.getElementsByClassName('players')[1]
const pw1=document.getElementsByClassName('winner')[0]
const pw2=document.getElementsByClassName('lose')[0]
const pt=document.getElementsByClassName('tied')[0]
const pc1=document.getElementById('ymove')
const pc2=document.getElementById('omove')
const ps1 = 'X';
const ps2 = 'O';
var currentMove = true;
var move = 0;
var tie = true;
var pwinCount1=0;
var pwinCount2=0;
const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]



Boxes.forEach(element => {
    element.addEventListener('click', clickFunction)
});



function clickFunction(t) {
    const target = t.target;
    move += 1;
    addMove(target);
    win();
    tieCheck();

}


function addMove(target) {
    if (currentMove) {
        
        target.innerHTML = ps1;
        currentMove = !currentMove
        player1.classList.toggle('back')
        player2.classList.toggle('back')
    } else {
        target.innerHTML = ps2;
        currentMove = !currentMove
        player1.classList.toggle('back')
        player2.classList.toggle('back')
    }
    target.classList.add('disable')
}


function win() {
    for (let e of winCombination) {
        let [i, j, k] = e
        if (Boxes[i].innerHTML == ps1 && Boxes[j].innerHTML == ps1 && Boxes[k].innerHTML == ps1) {
            winColor(i, j, k);
            removeClick();
            tie = false;
            pw1.classList.remove('none');
            pwinCount1++;
            pc1.innerHTML=` Player 1 : ${pwinCount1}`;
            reset();
        }
        if (Boxes[i].innerHTML == ps2 && Boxes[j].innerHTML == ps2 && Boxes[k].innerHTML == ps2) {
            winColor(i, j, k);
            removeClick();
            tie = false;
            pw2.classList.remove('none');
            pwinCount2++;
            pc2.innerHTML=` Player 2 : ${pwinCount2}`;
            reset();
        }
    }
}


function removeClick() {

    Boxes.forEach(ele => {
        ele.removeEventListener('click', clickFunction)
    })

}


function winColor(i, j, k) {
    Boxes[i].classList.add('win')
    Boxes[j].classList.add('win')
    Boxes[k].classList.add('win')

}

function reset() {
    button.addEventListener('click', resetHandler);
}


function resetHandler() {
    button.removeEventListener('click', resetHandler);
    currentMove = true;
    move = 0;
    tie = true;
    pw1.classList.add('none');
    pw2.classList.add('none');
    player1.classList.add('back')
    player2.classList.remove('back')
    pt.classList.add('none')
    Boxes.forEach(element => {
        element.innerHTML = '';
        element.addEventListener('click', clickFunction)
        element.classList.remove('disable')
        element.classList.remove('tie')
        element.classList.remove('win')
    });
}


function tieCheck() {
    if (move == 9 && tie == true) {
        tieColor();
        pt.classList.remove('none')
        reset();
    }
}

function tieColor() {
    Boxes.forEach(ele => {
        ele.classList.add('tie')
    })
}
