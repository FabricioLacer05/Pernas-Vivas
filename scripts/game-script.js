// Constantes e variáveis "globais"
const QUESTION_1_ANSWER = "MARROM";
const QUESTION_2_ANSWER = ["BISSO", "VALVA", "PE"];
const QUESTION_3_ANSWER = ["MANTO", "BRANQUIAS", "GLANDULA DIGESTIVA", "MUSCULO ADUTOR"];
const QUESTION_4_ANSWER = "DOURADO E VERDE";
const QUESTION_5_ANSWER = "BRASIL";
const QUESTION_6_ANSWER = "INDOPACIFICO";
let points = 0;
let pointMultiplication = 4;
let wrongAnswers = 0;
let currentQuestion = 1;
// Variáveis das questões 2 e 3:
let partPickedUp = false, partPickedUpName = "";
// Variáveis únicas da questão 2:
let byssusBoxFilled = false, valveBoxFilled = false, footBoxFilled = false, question2PartArray = [];
// Variáveis únicas da questão 3:
let mantleBoxFilled = false, gillsBoxFilled = false, digestiveGlandBoxFilled = false, adductorMuscleBoxFilled = false, question3PartArray = [];

// Inicia o jogo, levando o usuário à 1° questão
function startGame() {
    document.getElementById("start-box").toggleAttribute("hidden", true);
    document.getElementById("main-box").toggleAttribute("hidden", false);
    document.getElementById("main-box-header").toggleAttribute("hidden", false);
    showQuestion(1);
}

// Checa se uma questão foi respondida corretamente
function checkAnswer(queNum, optNum) {
    let question = queNum;
    let answer;
    let optionValue = optNum;

    switch(question) {
        case 1:
            answer = QUESTION_1_ANSWER;
            break;
        case 2:
            optionValue = question2PartArray.toString();
            answer = QUESTION_2_ANSWER.toString();
            break;
        case 3:
            optionValue = question3PartArray.toString();
            answer = QUESTION_3_ANSWER.toString();
            break;
        case 4:
            answer = QUESTION_4_ANSWER;
            break;
        case 5:
            answer = QUESTION_5_ANSWER;
            break;
        case 6:
            answer = QUESTION_6_ANSWER;
            break;
    }
    if(optionValue == answer) {
        showMessage(true)
    } else {
        penalize();
        showMessage(false);
    }
}

// Mostra a mensagem que indica se o usuário acertou ou errou uma questão
function showMessage(isAnswerCorrect) {
    let message = "";
    if(isAnswerCorrect) {
        if(currentQuestion == 1 || currentQuestion == 4 || currentQuestion == 5 || currentQuestion == 6) {
            message = "Você acertou! :D";
        } else if(currentQuestion == 2 || currentQuestion == 3) {
            message = "Você colocou todas as caixas de maneira correta! :D";
        }
    } else {
        if(currentQuestion == 1 || currentQuestion == 4 || currentQuestion == 5 || currentQuestion == 6) {
            message = "Você errou :(\nTente de novo!";
        } else if(currentQuestion == 2 || currentQuestion == 3) {
            message = "Você ainda não preencheu todas as caixas!";
        }
    }
    document.getElementById("message").innerText = message;
    document.getElementById("message-box").toggleAttribute("hidden", false);
    setTimeout(hideMessage, 3000);
    if(isAnswerCorrect) {
        update();
    }
}

// Atualiza as informações e progride para a próxima questão
function update() {
    addPoints();
    currentQuestion++;
    showQuestion(currentQuestion);
}

// Esconde a mensagem que indica se o usuário acertou ou errou uma questão
function hideMessage() {
    document.getElementById("message-box").toggleAttribute("hidden", true);
}

// Mostra uma questão e esconde as outras e também atualiza o número da questão na página
function showQuestion(questionNumber) {
    let num = questionNumber;

    document.getElementById("questionNumber").textContent = "Questão número " + currentQuestion;
    if(num >= 1 && num < 7) {
        document.getElementById("question-0" + currentQuestion).toggleAttribute("hidden", false);
        if(num > 1) {
            document.getElementById("question-0" + (currentQuestion - 1)).toggleAttribute("hidden", true);
        }
        pointMultiplication = 4;
    } else if(num > 6) {
        endGame();
    } else {
        document.getElementById("question-01").toggleAttribute("hidden", false);
        for(let i = 2; i < 6; i++) {
            document.getElementById("question-0" + i).toggleAttribute("hidden", true);
        }
    }
}

// Adiciona e atualiza os pontos caso o usuário acerte uma questão :)
function addPoints() {
    points += (5 * pointMultiplication);
    document.getElementById("points").textContent = "Pontos: " + points;
    document.getElementById("wrongAnswers").textContent = "Erros: " + wrongAnswers;
}

// Penaliza a pontuação por errar
function penalize() {
    if(pointMultiplication > -1) {
        pointMultiplication--;
    }
    wrongAnswers++;
}

// (QUESTÕES 2 E 3) "Pega" uma única imagem de parte e deixa ela "ativada" para ser colocada dentro de uma caixa
function pickUpPart(partId) {
    let part = partId;

    if(!partPickedUp) {
        partPickedUp = true;
        if(currentQuestion == 2) {
            switch(part) {
                case "bisso":
                    partPickedUpName = "bisso";
                    break;
                case "valva":
                    partPickedUpName = "valva";
                    break;
                case "pe":
                    partPickedUpName = "pe";
                    break;
            }
        }
        if(currentQuestion == 3) {
            switch(part) {
                case "manto":
                    partPickedUpName = "manto";
                    break;
                case "branquias":
                    partPickedUpName = "branquias";
                    break;
                case "glandulaDigestiva":
                    partPickedUpName = "glandulaDigestiva";
                    break;
                case "musculoAdutor":
                    partPickedUpName = "musculoAdutor";
                    break;
            }
        }
        document.getElementById(partPickedUpName).toggleAttribute("hidden", true);
        //alert("Pegou o " + partPickedUpName);
    } else {
        //alert("Já está segurando uma parte!");
    }
}

// (QUESTÕES 2 E 3) "Coloca" uma parte numa das caixas vazias depois de checar se a parte é a correta.
function putPartInBox(boxId) {
    let box = boxId;
    let correct = false;

    if(partPickedUp) {
        if(currentQuestion == 2) {
            switch(box) {
                case "byssus-box":
                    if(partPickedUpName == "bisso" && !byssusBoxFilled) {
                        byssusBoxFilled = true;
                        question2PartArray[0] = "BISSO";
                        correct = true;
                        //alert("Colocou o bisso na caixa correta");
                    } else if(byssusBoxFilled) {
                        //alert("O bisso já foi colocado nesta caixa");
                    }
                    break;
                case "valve-box":
                    if(partPickedUpName == "valva" && !valveBoxFilled) {
                        valveBoxFilled = true;
                        question2PartArray[1] = "VALVA";
                        correct = true;
                        //alert("Colocou a valva na caixa correta");
                    } else if(valveBoxFilled) {
                        //alert("A valva já foi colocada nesta caixa");
                    }
                    break;
                case "foot-box":
                    if(partPickedUpName == "pe" && !footBoxFilled) {
                        footBoxFilled = true;
                        question2PartArray[2] = "PE";
                        correct = true;
                        //alert("Colocou o pé na caixa correta");
                    } else if(footBoxFilled) {
                        //alert("O pé já foi colocado nesta caixa");
                    }
                    break;
                default:
                    //alert("O/A " + partPickedUpName + " não fica aí!");
                    break;
            }
        }
        if(currentQuestion == 3) {
            switch(box) {
                case "mantle-box":
                    if(partPickedUpName == "manto" && !mantleBoxFilled) {
                        mantleBoxFilled = true;
                        question3PartArray[0] = "MANTO";
                        correct = true;
                        //alert("Colocou o manto na caixa correta");
                    } else if(mantleBoxFilled) {
                        //alert("O manto já foi colocado nesta caixa");
                    }
                    break;
                case "gills-box":
                    if(partPickedUpName == "branquias" && !gillsBoxFilled) {
                        gillsBoxFilled = true;
                        question3PartArray[1] = "BRANQUIAS";
                        correct = true;
                        //alert("Colocou as brânquias na caixa correta");
                    } else if(gillsBoxFilled) {
                        //alert("As brânquias já foram colocadas nesta caixa");
                    }
                    break;
                case "digestiveGland-box":
                    if(partPickedUpName == "glandulaDigestiva" && !digestiveGlandBoxFilled) {
                        digestiveGlandBoxFilled = true;
                        question3PartArray[2] = "GLANDULA DIGESTIVA";
                        correct = true;
                        //alert("Colocou a glândula digestiva na caixa correta");
                    } else if(digestiveGlandBoxFilled) {
                        //alert("A glândula digestiva já foi colocada nesta caixa");
                    }
                    break;
                case "adductorMuscle-box":
                        if(partPickedUpName == "musculoAdutor" && !adductorMuscleBoxFilled) {
                            adductorMuscleBoxFilled = true;
                            question3PartArray[3] = "MUSCULO ADUTOR";
                            correct = true;
                            //alert("Colocou o músculo adutor na caixa correta");
                        } else if(adductorMuscleBoxFilled) {
                            //alert("A glândula digestiva já foi colocada nesta caixa");
                        }
                        break;
                default:
                    //alert("O/A " + partPickedUpName + " não fica aí!");
                    break;
            }
        }
        if(correct) {
            document.getElementById(partPickedUpName + "-put").toggleAttribute("hidden", false);
        } else {
            penalize();
            document.getElementById(partPickedUpName).toggleAttribute("hidden", false);
            //alert("O/A " + partPickedUpName + " não fica aí!");
        }
        partPickedUp = false;
        partPickedUpName = "";
    }
}

// Mostra a tela de fim de jogo e os pontos que o usuário fez
function endGame() {
    document.getElementById("question-06").toggleAttribute("hidden", true);
    document.getElementById("main-box").toggleAttribute("hidden", true);
    document.getElementById("end-box").toggleAttribute("hidden", false);
    if(wrongAnswers == 0) {
        document.getElementById("end-game-points").textContent = "Você fez " + points + " pontos!! Com ZERO erros!! Parabéns!!!";
    } else {
        document.getElementById("end-game-points").textContent = "Você fez " + points + " pontos!! Com " + wrongAnswers + " erros!";        
    }
}

// Leva o jogador de volta à primeira tela e reseta as variáveis para recomeçar o jogo
function restartGame() {
    currentQuestion = 1;
    points = 0;
    pointMultiplication = 4;
    wrongAnswers = 0;
    byssusBoxFilled = false;
    valveBoxFilled = false;
    footBoxFilled = false;
    question2PartArray = [];
    mantleBoxFilled = false;
    gillsBoxFilled = false;
    digestiveGlandBoxFilled = false;
    adductorMuscleBoxFilled = false;
    question3PartArray = [];

    document.getElementById("bisso").toggleAttribute("hidden", false);
    document.getElementById("valva").toggleAttribute("hidden", false);
    document.getElementById("pe").toggleAttribute("hidden", false);
    document.getElementById("manto").toggleAttribute("hidden", false);
    document.getElementById("branquias").toggleAttribute("hidden", false);
    document.getElementById("glandulaDigestiva").toggleAttribute("hidden", false);
    document.getElementById("musculoAdutor").toggleAttribute("hidden", false);

    document.getElementById("bisso-put").toggleAttribute("hidden", true);
    document.getElementById("valva-put").toggleAttribute("hidden", true);
    document.getElementById("pe-put").toggleAttribute("hidden", true);
    document.getElementById("manto-put").toggleAttribute("hidden", true);
    document.getElementById("branquias-put").toggleAttribute("hidden", true);
    document.getElementById("glandulaDigestiva-put").toggleAttribute("hidden", true);
    document.getElementById("musculoAdutor-put").toggleAttribute("hidden", true);

    document.getElementById("points").textContent = "Pontos: 0";
    document.getElementById("wrongAnswers").textContent = "Erros: 0";
    document.getElementById("end-box").toggleAttribute("hidden", true);
    document.getElementById("start-box").toggleAttribute("hidden", false);
}