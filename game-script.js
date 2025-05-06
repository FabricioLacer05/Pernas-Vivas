// Variáveis gerais
const QUESTION_ANSWERS = ["MARROM", "VERDE", "DOURADO E VERDE", "MARROM", "BRASIL", "INDOPACIFICO", ["BISSO", "VALVA", "PE"], "NATIVO"];
const NUMBER_OF_QUESTIONS = 8;
let points = 0, wrngAnswers = 0;
let currQuestion = 1;
// Variáveis da questão 7
let isPartPicked = false, partPicked = "", lastPartPicked = "", parts = [];

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
            val = parts.toString();
            ans = QUESTION_ANSWERS[6].toString();
            break;
        case 8:
            ans = QUESTION_ANSWERS[7];
            break;
        default:
            alert("Questão pulada");
            break;
    }
    if(val == ans) {
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
        partPicked = part;
        alert("Pegou " + part);
    } else {
        lastPartPicked = partPicked;
        partPicked = null;
        isPartPicked = false;
        alert("Soltou " + lastPartPicked);
    }
}

// (Questão 7) "Coloca" uma parte numa das caixas vazias
function putPartInBox(box) {
    if(isPartPicked) {
        switch(box) {
            case "1":
                    parts[0] = partPicked.toUpperCase();
                break;
            case "2":
                    parts[1] = partPicked.toUpperCase();
                break;
            case "3":
                    parts[2] = partPicked.toUpperCase();
                break;
        }
        document.getElementById(box + "-put").setAttribute("src", "./res/imgs/" + partPicked + ".png");
        alert("Colocou " + partPicked + " na caixa " + box);
        isPartPicked = false;
        lastPartPicked = partPicked;
        partPicked = "";
    } else {
        alert("Selecione uma das peças abaixo para colocar aqui!");
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
    let mes = "";
    if(isAnswerCorrect) {
        mes = "Resposta correta! :D";
    } else {
        mes = "Respota errada! :(";
    }
    document.getElementById("message").innerText = mes;
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