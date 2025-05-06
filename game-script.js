// Variáveis gerais
const QUESTION_ANSWERS = ["MARROM", "VERDE", "DOURADO E VERDE", "MARROM", "BRASIL", "INDOPACIFICO", ["BISSO", "VALVA", "PE"]];
const NUMBER_OF_QUESTIONS = 8;
let points = 0, wrngAnswers = 0;
let currQuestion = 1;
// Variáveis da questão 7
let isPartPicked = false, partPickedUp = "";
let box1Fill = false, box2Fill = false, box3Fill = false, question7Parts = [];

// Configura o jogo quando a página é carregada
function loadGame() {
    displayElement("start-box", true);
    displayElement("main-box", false);
    displayElement("end-box", false);
    startBGMusic();
}

// Inicia o jogo, levando o usuário à 1° questão
function startGame() {
    displayElement("start-box", false);
    displayElement("main-box", true);
    showQuestion(1);
}

// Atualiza as informações e progride para a próxima questão
function update(isAnswerCorrect) {
    setPoints(isAnswerCorrect);
    currQuestion++;
    showQuestion(currQuestion);
}

// Mostra a tela de fim de jogo e os pontos que o usuário fez
function endGame() {
    displayElement("main-box", false);
    displayElement("end-box", true);
    if(wrngAnswers == 0) {
        document.getElementById("end-game-points").textContent = "Você fez " + points + " pontos!! Com ZERO erros!! Parabéns!!!";
    } else {
        document.getElementById("end-game-points").textContent = "Você fez " + points + " pontos! E errou " + wrngAnswers + " das " + NUMBER_OF_QUESTIONS + " perguntas!";        
    }
}

// Leva o jogador de volta à primeira tela, reiniciando o jogo
function restartGame() {
    location.replace("./index.html");
}

// Checa se uma questão foi respondida corretamente
function checkAnswer(queNum, optNum) {
    let que = queNum;
    let ans;
    let val = optNum;

    switch(que) {
        case 1:
            ans = QUESTION_ANSWERS[0];
            break;
        case 2:
            ans = QUESTION_ANSWERS[1];
            break;
        case 3:
            ans = QUESTION_ANSWERS[2];
            break;
        case 4:
            ans = QUESTION_ANSWERS[3];
            break;
        case 5:
            ans = QUESTION_ANSWERS[4];
            break;
        case 6:
            ans = QUESTION_ANSWERS[5];
            break;
        case 7:
            ans = QUESTION_ANSWERS[6].toString();
            break;
        case 8:
            // Questão sendo feita
            break;
    }
    if(val == ans && queNum != 7 || question7Parts.toString() == ans && queNum == 7) {
        playSFX("bertrof_correct.wav");
        showMessage(true)
        update(true);
    } else {
        playSFX("bertrof_wrong.wav");
        showMessage(false);
        update(false);
    }
}

// (Questão 7) "Pega" uma parte
function pickUpPart(part) {
    if(!isPartPicked) {
        isPartPicked = true;
        partPickedUp = part;
        //displayElement(document.getElementById(partPickedUp), false);
        alert("Pegou " + partPickedUp);
    } else {
        alert("Já está segurando uma parte!");
    }
}

// (Questão 7) "Coloca" uma parte numa das caixas vazias
function putPartInBox(box) {
    if(isPartPicked) {
        let boxNum;
        switch(box) {
            case "1":
                    boxNum = 1;
                    question7Parts[0] = partPickedUp.toUpperCase();
                break;
            case "2":
                    boxNum = 2;
                    question7Parts[1] = partPickedUp.toUpperCase();
                break;
            case "3":
                    boxNum = 3;
                    question7Parts[2] = partPickedUp.toUpperCase();
                break;
        }
        document.getElementById(boxNum + "-put").setAttribute("src", "./res/imgs/" + partPickedUp + ".png");
        /*switch(partPickedUp) {
            case "bisso":
                document.getElementById(box).setAttribute("src", "./res/imgs/Bisso.png");
                break;
            case "valva":
                document.getElementById(box).setAttribute("src", "./res/imgs/Valva.png");
                break;
            case "pe":
                document.getElementById(box).setAttribute("src", "./res/imgs/Pe.png");
                break;
        }*/
        alert("Colocou " + partPickedUp + " na caixa " + box);
        isPartPicked = false;
        partPickedUp = "";
    }
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
    let message = "";
    if(isAnswerCorrect) {
        message = "Resposta correta! :D";
    } else {
        message = "Respota errada! :(";
    }
    document.getElementById("message").innerText = message;
    displayElement("message-box", true);
    setTimeout(() => {displayElement("message-box", false)}, 3000);
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