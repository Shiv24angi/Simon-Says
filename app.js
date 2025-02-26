let gameSeq = [];
let userSeq = [];
let level = 0;
let gameStarted = false;
let btns = ['rouge', 'teal', 'orange', 'blue'];


let h2 = document.querySelector('h2');

document.addEventListener('keypress', function() {
  if (gameStarted == false) {
    console.log('Game started');
    gameStarted = true;
    nextSequence();
  }
});

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}


function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
      btn.classList.remove('flash');
    }, 200);
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(function() {
      btn.classList.remove('userFlash');
    }, 200);
}

function nextSequence() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
}

function checkAns(idx){ 
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(nextSequence, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your socre was <b>${level}</b> <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        gameSeq = [];
        userSeq = [];
        level = 0;
        gameStarted = false;
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
  btn.addEventListener('click', btnPress);
}