const startGameEl = document.getElementById("start-game");
const gameEl = document.querySelector('.container');
const endgameEl = document.getElementById("end-game-container");
const btnStartGame = document.getElementById('btn-start-game');
const btnReloadGame = document.getElementById('btn-reload-game');
const text = document.getElementById("text");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const word = document.getElementById("word");
const inputName = document.getElementById("inputName");
const words = ["hey",
    "study",
    "goodafternoon",
    "byebye",
    "codegym",
    "see",
    "learn",
    "computer",
    ];

let randomWord;
let score = 0;
let time = 10;
let level;
let timeInterval;

function getRandomWord(){
    let index = Math.floor(Math.random()*words.length);
    return words[index]
}
function addWordToDom(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}
addWordToDom()
function updateScore(){
    score++;
    scoreEl.innerHTML=score;
}
function updateTime(){
    time--;
    if (time<=5){
        timeEl.style.color="red";
    }
    else {
        timeEl.style.color="white"
    }
    timeEl.innerHTML = time+"s";
    if (time===0){
        clearInterval(timeInterval);
        gameOver();
    }
}
function gameOver(){
    endgameEl.querySelector(".score").innerText=score;
   endgameEl.querySelector(".nameEl").innerHTML=inputName.value;
    endgameEl.style.display="flex"
}

// Sự kiện khi nhấn nút Bắt đầu ******
btnStartGame.addEventListener('click', function() {
    startGameEl.classList.add('hide');
    gameEl.classList.remove('hide');
    // Focus text khi bắt đầu game
    text.focus();
    timeInterval=setInterval(updateTime,1000)
})
// Sự kiện khi gõ chữ
text.addEventListener("input",(e)=>{
    const insertedText=e.target.value;
    if (!randomWord.startsWith(insertedText)){
        word.style.backgroundColor="red";
    } else {
        word.style.backgroundColor="transparent"
    }
    if (insertedText == randomWord){
        addWordToDom();
        updateScore();
        e.target.value="";
        if (level==="Dễ"){
            time+=3
        } else if (level==="Trung bình"){
            time+=2
        } else {
            time+=1}
    }
    // if (level==="Dễ"){
    //     time+=3
    // } else if (level==="Trung bình"){
    //     time+=2
    // } else {time+=0}
})


btnReloadGame.addEventListener('click', function() {
    window.location.reload();
})