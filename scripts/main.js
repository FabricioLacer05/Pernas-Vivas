// Variáveis gerais
const QUESTION_ANSWERS = [
    "MARROM", // 1
    "VERDE", // 2
    "DOURADO E VERDE", // 3
    "MARROM", // 4
    "BRASIL", // 5
    "INDOPACIFICO", // 6
    ["BISSO", "VALVA", "PE"], // 7
    "NATIVO" // 8
];
const NUMBER_OF_QUESTIONS = 8;
let points = 0,
    wrngAnswers = 0,
    timer,
    min = 0,
    secs = 0,
    currQuestion = 1;
// Variáveis da questão 7
let isPartPicked = false,
    partPicked = "",
    lastPartPicked = "",
    parts = [];
// Listeners
this.addEventListener("load", loadGame);
document.getElementById("start-game-button").addEventListener("click", startGame);
document.getElementById("restart-game-button").addEventListener("click", restartGame);
// =========================================================================================================
// Configura o jogo quando a página é carregada
function loadGame() {
    displayElement("start-box", true);
    displayElement("main-box", false);
    displayElement("end-box", false);
    displayElement("message-box", false);
    playMusic();
}
// Inicia o jogo, levando o usuário à 1° questão
function startGame() {
    displayElement("start-box", false);
    displayElement("main-box", true);
    showQuestion(currQuestion);
    timer = setInterval(countTime, 1000);
}
// Atualiza as informações e progride para a próxima questão
function update(isAnswerCorrect) {
    setPoints(isAnswerCorrect);
    currQuestion++;
    showQuestion(currQuestion);
}
// Mostra a tela de fim de jogo e os pontos que o usuário fez
function endGame() {
    clearInterval(timer);
    displayElement("main-box", false);
    displayElement("end-box", true);
    if(wrngAnswers == 0) {
        if(secs < 10) {
            document.getElementById("end-game-message").innerHTML =`
            Pontos: <b>${points}</b> pontos!
            Tempo: <b>${min}:0${secs}</b>!
            Erros: <b>ZERO erros</b>! Parabéns!!!
            `;
        } else {
            document.getElementById("end-game-message").innerHTML =`
            Pontos: <b>${points}</b> pontos!
            Tempo: <b>${min}:${secs}</b>!
            Erros: <b>ZERO erros</b>! Parabéns!!!
            `;
        }
    } else {
        if(secs < 10) {
            document.getElementById("end-game-message").innerHTML =`
            Pontos: <b>${points}</b> pontos!
            Tempo: <b>${min}:0${secs}</b>!
            Erros: <b>${wrngAnswers}</b> das ${NUMBER_OF_QUESTIONS} questões!
            `;
        } else {
            document.getElementById("end-game-message").innerHTML =`
            Pontos: <b>${points}</b> pontos!
            Tempo: <b>${min}:${secs}</b>!
            Erros: <b>${wrngAnswers}</b> das ${NUMBER_OF_QUESTIONS} questões!
            `;
        }
    }
}
// Leva o jogador de volta à primeira tela, reiniciando o jogo
function restartGame() {
    location.replace("./index.html");
}
// Atualiza os pontos de acordo se o jogador acertou ou errou a questão, premiando-o ou penalizando-o
function setPoints(isAnswerCorrect) {
    if(isAnswerCorrect && wrngAnswers == 0) {
        points += 125; // 125 * 8 = 1000
    } else if(isAnswerCorrect) {
        points += 62; // 62 * 8 ~= 500 (= 496)
    } else {
        if(points > 0) {
            points -= 31; // 31 = 62 / 2
        }
        wrngAnswers++;
    }
    document.getElementById("points").textContent = "Pontos: " + points;
    document.getElementById("wrongAnswers").textContent = "Erros: " + wrngAnswers;
}
// Mostra a mensagem que indica se o usuário acertou ou errou uma questão
function showMessage(isAnswerCorrect) {
    let mes = "";
    if(isAnswerCorrect) {
        mes = "Resposta correta! :D";
    } else {
        mes = "Respota errada! :(";
    }
    document.getElementById("message").innerText = mes;
    displayElement("message-box", true);
    setTimeout(() => {displayElement("message-box", false)}, 1500);
}
// Cronometa o tempo que o jogador leva para responder às perguntas e atualiza o timer
function countTime() {
    secs++;
    if(secs >= 60) {
        min++;
        secs = 0;
    }
    if(secs < 10) {
        document.getElementById("timer").textContent = min + ":0" + secs;
    } else {
        document.getElementById("timer").textContent = min + ":" + secs;
    }
}
// Esconde ou mostra um elemento
function displayElement(id, force) {
    let elm = document.getElementById(id);
    if(force) {
        elm.style.display = "block";
    } else if(!force) {
        elm.style.display = "none";
    }
}