console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.wav")
let turn = new Audio("ting.wav")
let gameover = new Audio("gameover.wav")
let turn1 = "x"
let isgameover = false

// function to change the turn
const changeTurn = ()=>{
    return turn1 === "x"?"0":"x"
}
// function to check for a win
    const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won";
            isgameover = true;

            // it is for change the width of image through js. 
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "60px"
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}
// game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn1;
            turn1 = changeTurn();
            turn.play();
            checkWin();
            if(!isgameover){

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn1;

            }
        }
    })
})

// add onclick listener to reset button
reset.addEventListener('click', (e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn1 ="x";
    isgameover = false
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info"[0].innerText = "Turn for" + turn1)
    document.querySelector('.imgbox').getElementsByTagName('img'[0].style.width = "0px")
}) 