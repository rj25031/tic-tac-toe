const Boxes = Array.from(document.getElementsByClassName("box"));
const button = document.getElementById('btn');
const btm = document.getElementById('btm');
const btp = document.getElementById('btp');
const player1 = document.getElementsByClassName('players')[0];
const player2 = document.getElementsByClassName('players')[1];
const pw1 = document.getElementsByClassName('winner')[0];
const pw2 = document.getElementsByClassName('lose')[0];
const pt = document.getElementsByClassName('tied')[0];
const pc1 = document.getElementById('ymove');
const pc2 = document.getElementById('omove');
const play_1 = document.getElementById('p1')
const play_2 = document.getElementById('p2')
const parent = document.querySelector('.option')
const hardMove = document.getElementById('hard');
const main = document.querySelector('.main')
const mainG = document.querySelector('.split')
const ps1 = 'X';
const ps2 = 'O';
var currentMove = true;
var move = 0;
var tie = true;
var pwinCount1 = 0;
var pwinCount2 = 0;
var easy = false, medium = false, hard = false
var user = ['You', 'Computer']
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

play_1.addEventListener('click', player_1)


function player_1() {
  parent.innerHTML =
    `
                <h1 class="p easy">
                 Easy 
                </h1>
                <h1 class="p medium">
                 Medium 
                </h1>
                <h1 class="p hard">
                 Hard 
                </h1>
        `
  btp.classList.remove('none')
}

play_2.addEventListener('click', player_2)

function player_2() {
  main.classList.add('none')
  mainG.classList.remove('none')
  btp.classList.remove('none')
  user = ['player 1', 'player 2']
  pc1.innerHTML = ` ${user[0]} : ${pwinCount1}`;
  pc2.innerHTML = ` ${user[1]} : ${pwinCount1}`;
  player1.innerHTML = `<h1>${user[0]}</h1>`
  player2.innerHTML = `<h1>${user[1]}</h1>`
  pw1.innerHTML = `
   <h1>
  Player 1 Won
  </h1>
  <img src="https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif" alt="Win GIF" loop="true">`
  pw2.innerHTML = `
   <h1>
   Player 2 Won
  </h1>
  <img src="https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif" alt="Win GIF" loop="true">`
   easy = false
  medium = false
  hard = false
}


parent.addEventListener('click', (t) => {
  const target = t.target
  if (target.classList.contains('easy')) {
    selecctMode()
    easy = true
    medium = false
    hard = false
  } else if (target.classList.contains('medium')) {
    selecctMode()
    easy = false
    medium = true
    hard = false
  } else if (target.classList.contains('hard')) {
    selecctMode()
    easy = false
    medium = false
    hard = true
  }
})
function selecctMode() {
  main.classList.add('none')
  mainG.classList.remove('none')
  btp.classList.add('none')
  btm.classList.remove('none')
  user = ['You', 'Computer']
  player1.innerHTML = `<h1>${user[0]}</h1>`
  player2.innerHTML = `<h1>${user[1]}</h1>`
  pc1.innerHTML = ` ${user[0]} : ${pwinCount1}`;
  pc2.innerHTML = ` ${user[1]} : ${pwinCount1}`;
  pw1.innerHTML = ` <h1>
                    You Won
                    </h1>
                    <img src="https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif" alt="Win GIF" loop="true">
                    `
  pw2.innerHTML = ` <h1>
                     You Lose
                    </h1>
                    <img src="https://media.giphy.com/media/cr9vIO7NsP5cY/giphy.gif" alt="lose GIF" loop="true">
                    `
}


btp.addEventListener('click', () => {
  parent.innerHTML =
    `<h1 id="p1" class="p">
        1 Player
    </h1>
    <h1 id="p2" class="p">
        2 Player
    </h1>
        `
  btp.classList.add('none')
  main.classList.remove('none')
  mainG.classList.add('none')
  parent.firstElementChild.addEventListener('click', player_1)
  parent.firstElementChild.nextElementSibling.addEventListener('click', player_2)
  resetHandler();
  pwinCount1 = 0;
  pwinCount2 = 0;
})



btm.addEventListener('click', () => {
  main.classList.remove('none')
  mainG.classList.add('none')
  btm.classList.add('none')
  btp.classList.remove('none')
  resetHandler();
  pwinCount1 = 0;
  pwinCount2 = 0;
})

Boxes.forEach(element => {
  element.addEventListener('click', clickFunction);
});

function clickFunction(t) {
  const target = t.target;
  move += 1;
  addMove(target);
  win();
  tieCheck();
  if (tie && !currentMove) {
    if (easy) {
      setTimeout(aiEasy, 500);
    } else if (medium) {
      setTimeout(aiMedium, 500);
    } else if (hard) {
      setTimeout(aiHard, 500);
    }
  }
}

function addMove(target) {
  if (currentMove) {
    target.innerHTML = ps1;
    currentMove = !currentMove;
    player1.classList.toggle('back');
    player2.classList.toggle('back');
  } else {
    target.innerHTML = ps2;
    currentMove = !currentMove;
    player1.classList.toggle('back');
    player2.classList.toggle('back');
  }
  target.classList.add('disable');
}

function win() {
  for (let e of winCombination) {
    let [i, j, k] = e;
    if (Boxes[i].innerHTML == ps1 && Boxes[j].innerHTML == ps1 && Boxes[k].innerHTML == ps1) {
      winColor(i, j, k);
      removeClick();
      tie = false;
      pw1.classList.remove('none');
      pwinCount1++;
      pc1.innerHTML = ` ${user[0]} : ${pwinCount1}`;
      reset();
    }
    if (Boxes[i].innerHTML == ps2 && Boxes[j].innerHTML == ps2 && Boxes[k].innerHTML == ps2) {
      winColor(i, j, k);
      removeClick();
      tie = false;
      pw2.classList.remove('none');
      pwinCount2++;
      pc2.innerHTML = ` ${user[1]} : ${pwinCount2}`;
      reset();
    }
  }
}

function removeClick() {
  Boxes.forEach(ele => {
    ele.removeEventListener('click', clickFunction);
  });
}

function winColor(i, j, k) {
  Boxes[i].classList.add('win');
  Boxes[j].classList.add('win');
  Boxes[k].classList.add('win');
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
  player1.classList.add('back');
  player2.classList.remove('back');
  pt.classList.add('none');
  Boxes.forEach(element => {
    element.innerHTML = '';
    element.addEventListener('click', clickFunction);
    element.classList.remove('disable');
    element.classList.remove('tie');
    element.classList.remove('win');
  });
}

function tieCheck() {
  if (move == 9 && tie == true) {
    tieColor();
    pt.classList.remove('none');
    reset();
  }
}

function tieColor() {
  Boxes.forEach(ele => {
    ele.classList.add('tie');
  });
}

function aiMove() {
  const emptyBoxes = Boxes.filter(box => !box.classList.contains('disable'));
  const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
  var randomBox = emptyBoxes[randomIndex];
  const userSymbol = currentMove ? ps2 : ps1;
  if (!hard.classList.contains('disable')) {
    randomBox = hardMove
  }
  for (let combination of winCombination) {
    const [a, b, c] = combination;
    if (
      Boxes[a].innerHTML === ps2 && Boxes[b].innerHTML === ps2 && Boxes[c].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[c] });
      return;
    }
    if (
      Boxes[a].innerHTML === ps2 && Boxes[c].innerHTML === ps2 && Boxes[b].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[b] });
      return;
    }
    if (
      Boxes[b].innerHTML === ps2 && Boxes[c].innerHTML === ps2 && Boxes[a].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[a] });
      return;
    }
  }

  for (let combination of winCombination) {
    const [a, b, c] = combination;
    if (
      Boxes[a].innerHTML === ps1 && Boxes[b].innerHTML === ps1 && Boxes[c].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[c] });
      return;
    }
    if (
      Boxes[a].innerHTML === ps1 && Boxes[c].innerHTML === ps1 && Boxes[b].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[b] });
      return;
    }
    if (
      Boxes[b].innerHTML === ps1 && Boxes[c].innerHTML === ps1 && Boxes[a].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[a] });
      return;
    }
  }

  clickFunction({ target: randomBox });
}


function aiEasy() {
  const emptyBoxes = Boxes.filter(box => !box.classList.contains('disable'));
  const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
  var randomBox = emptyBoxes[randomIndex];
  clickFunction({ target: randomBox });
}


function aiMedium() {
  const emptyBoxes = Boxes.filter(box => !box.classList.contains('disable'));
  const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
  var randomBox = emptyBoxes[randomIndex];
  const userSymbol = currentMove ? ps2 : ps1;
  for (let combination of winCombination) {
    const [a, b, c] = combination;
    if (
      Boxes[a].innerHTML === ps2 && Boxes[b].innerHTML === ps2 && Boxes[c].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[c] });
      return;
    }
    if (
      Boxes[a].innerHTML === ps2 && Boxes[c].innerHTML === ps2 && Boxes[b].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[b] });
      return;
    }
    if (
      Boxes[b].innerHTML === ps2 && Boxes[c].innerHTML === ps2 && Boxes[a].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[a] });
      return;
    }
  }

  for (let combination of winCombination) {
    const [a, b, c] = combination;
    if (
      Boxes[a].innerHTML === ps1 && Boxes[b].innerHTML === ps1 && Boxes[c].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[c] });
      return;
    }
    if (
      Boxes[a].innerHTML === ps1 && Boxes[c].innerHTML === ps1 && Boxes[b].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[b] });
      return;
    }
    if (
      Boxes[b].innerHTML === ps1 && Boxes[c].innerHTML === ps1 && Boxes[a].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[a] });
      return;
    }
  }

  clickFunction({ target: randomBox });
}


function aiHard() {
  const emptyBoxes = Boxes.filter(box => !box.classList.contains('disable'));
  const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
  var randomBox = emptyBoxes[randomIndex];
  const userSymbol = currentMove ? ps2 : ps1;
  if (!hardMove.classList.contains('disable')) {
    randomBox = hardMove
  }
  for (let combination of winCombination) {
    const [a, b, c] = combination;
    if (
      Boxes[a].innerHTML === ps2 && Boxes[b].innerHTML === ps2 && Boxes[c].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[c] });
      return;
    }
    if (
      Boxes[a].innerHTML === ps2 && Boxes[c].innerHTML === ps2 && Boxes[b].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[b] });
      return;
    }
    if (
      Boxes[b].innerHTML === ps2 && Boxes[c].innerHTML === ps2 && Boxes[a].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[a] });
      return;
    }
  }

  for (let combination of winCombination) {
    const [a, b, c] = combination;
    if (
      Boxes[a].innerHTML === ps1 && Boxes[b].innerHTML === ps1 && Boxes[c].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[c] });
      return;
    }
    if (
      Boxes[a].innerHTML === ps1 && Boxes[c].innerHTML === ps1 && Boxes[b].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[b] });
      return;
    }
    if (
      Boxes[b].innerHTML === ps1 && Boxes[c].innerHTML === ps1 && Boxes[a].innerHTML === ""
    ) {
      clickFunction({ target: Boxes[a] });
      return;
    }
  }

  clickFunction({ target: randomBox });
}
