// Mostra uma questão e esconde as outras e também atualiza o número da questão na página
function showQuestion(num) {
    let headerTitle = "", bodyContent = "", footerTitle = "", footerContent = "";
    if(num <= NUMBER_OF_QUESTIONS) {
        switch(num) {
            case 1:
                headerTitle = "Qual é este mexilhão?";
                bodyContent =
                `
                    <img src = "res/imgs/Perna.png">
                `;
                footerTitle = "Clique numa das opções abaixo:";
                footerContent =
                `
                    <button class="answer-button" value="VERDE" onclick="checkAnswer(1, this.getAttribute('value'))"><p>Mexilhão-verde</p></button>
                    <button class="answer-button" value="MARROM" onclick="checkAnswer(1, this.getAttribute('value'))"><p>Mexilhão-marrom</p></button>
                    <button class="answer-button" value="DOURADO" onclick="checkAnswer(1, this.getAttribute('value'))"><p>Mexilhão-dourado</p></button>
                `;
                break;
            case 2:
                headerTitle = "Qual é este mexilhão?";
                bodyContent =
                `
                    <img src="res/imgs/Viridis.png">
                `;
                footerTitle = "Clique numa das opções abaixo:";
                footerContent =
                `
                    <button class="answer-button" value="VERDE" onclick="checkAnswer(2, this.getAttribute('value'))"><p>Mexilhão-verde</p></button>
                    <button class="answer-button" value="MARROM" onclick="checkAnswer(2, this.getAttribute('value'))"><p>Mexilhão-marrom</p></button>
                    <button class="answer-button" value="DOURADO" onclick="checkAnswer(2, this.getAttribute('value'))"><p>Mexilhão-dourado</p></button>
                `;
                break;
            case 3:
                headerTitle = "Quais espécies de mexilhão são consideradas INVASORAS?";
                bodyContent = ``;
                footerTitle = "Escolha a opção que contenha apenas espécies INVASORAS:";
                footerContent =
                `
                    <button class="answer-button" value="MARROM E VERDE" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Perna.png"><img src="res/imgs/Viridis.png"><p>Marrom e verde</p></button>
                    <button class="answer-button" value="DOURADO E MARROM" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Fortunei.png"><img src="res/imgs/Perna.png"><p>Dourado e marrom</p></button>
                    <button class="answer-button" value="VERDE" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Viridis.png"><p>Apenas o verde</p></button>
                    <button class="answer-button" value="MARROM" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Perna.png"><p>Apenas o marrom</p></button>
                    <button class="answer-button" value="DOURADO E VERDE" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Fortunei.png"><img src="res/imgs/Viridis.png"><p>Dourado e verde</p></button>
                `;
                break;
            case 4:
                headerTitle = "Quais espécies de mexilhão são consideradas NATIVAS?";
                bodyContent = ``;
                footerTitle = "Escolha a opção que contenha apenas espécies NATIVAS:";
                footerContent =
                `
                <button class="answer-button" value="MARROM E VERDE" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Perna.png"><img src="res/imgs/Viridis.png"><p>Marrom e verde</p></button>
                <button class="answer-button" value="DOURADO E MARROM" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Fortunei.png"><img src="res/imgs/Perna.png"><p>Dourado e marrom</p></button>
                <button class="answer-button" value="VERDE" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Viridis.png"><p>Apenas o verde</p></button>
                <button class="answer-button" value="MARROM" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Perna.png"><p>Apenas o marrom</p></button>
                <button class="answer-button" value="DOURADO E VERDE" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Fortunei.png"><img src="res/imgs/Viridis.png"><p>Dourado e verde</p></button>
                `;
                break;
            case 5:
                headerTitle = "Onde o mexilhão-marrom vive naturalmente?";
                bodyContent = ``;
                footerTitle = "Selecione uma opção:";
                footerContent =
                `
                    <button class="answer-button" value="BRASIL" onclick="checkAnswer(5, this.getAttribute('value'))"><img src="res/imgs/Costa Brasil.png"><p>Costa do Brasil</p></button>
                    <button class="answer-button" value="INDOPACIFICO" onclick="checkAnswer(5, this.getAttribute('value'))"><img src="res/imgs/Indo Pacifico.png"><p>Oceanos Índico e Pacífico</p></button>
                    <button class="answer-button" value="MEDITERRANEO" onclick="checkAnswer(5, this.getAttribute('value'))"><img src="res/imgs/Mediterraneo.png"><p>Mar Mediterrâneo</p></button>
                    <button class="answer-button" value="BACIAPARANA" onclick="checkAnswer(5, this.getAttribute('value'))"><img src="res/imgs/Bacia Parana.png"><p>Bacia do Paraná, principalmente</p></button>
                `;
                break;
            case 6:
                headerTitle = "Onde o mexilhão-verde vive naturalmente?";
                bodyContent = ``;
                footerTitle = "Selecione uma opção:";
                footerContent =
                `
                    <button class="answer-button" value="BRASIL" onclick="checkAnswer(6, this.getAttribute('value'))"><img src="res/imgs/Costa Brasil.png"><p>Costa do Brasil</p></button>
                    <button class="answer-button" value="INDOPACIFICO" onclick="checkAnswer(6, this.getAttribute('value'))"><img src="res/imgs/Indo Pacifico.png"><p>Oceanos Índico e Pacífico</p></button>
                    <button class="answer-button" value="MEDITERRANEO" onclick="checkAnswer(6, this.getAttribute('value'))"><img src="res/imgs/Mediterraneo.png"><p>Mar Mediterrâneo</p></button>
                    <button class="answer-button" value="BACIAPARANA" onclick="checkAnswer(6, this.getAttribute('value'))"><img src="res/imgs/Bacia Parana.png"><p>Bacia do Paraná, principalmente</p></button>
                `;
                break;
            case 7:
                headerTitle = "Monte a anatomia externa do mexilhão-marrom!";
                bodyContent =
                `
                    <p>Clique nas peças abaixo e clique nas áreas vazias onde você quer colocar a peça. Clique em outra peça para soltá-la.</p>
                    <div id="mounted-perna-area"></div>
                    <p>Mexilhão-marrom ( <i>Perna perna</i> )</p>

                    <div class="empty-box-outer">
                        <div class="empty-box" id="1" onclick="putPartInBox(this.getAttribute('id'))"><img id="1-put" src=""></div>
                        <p class="empty-box-legend">Bisso</p>
                    </div>
                    <div class="empty-box-outer">
                        <div class="empty-box" id="2" onclick="putPartInBox(this.getAttribute('id'))"><img id="2-put" src=""></div>
                        <p class="empty-box-legend">Valva</p>
                    </div>
                    <div class="empty-box-outer">
                        <div class="empty-box" id="3" onclick="putPartInBox(this.getAttribute('id'))"><img id="3-put" src=""></div>
                        <p class="empty-box-legend">Pé</p>
                    </div>
                `;
                footerTitle = "";
                footerContent =
                `
                    <div class="parts">
                        <img class="part-box" id="Bisso" src="res/imgs/Bisso.png" onclick="pickUpPart(this.getAttribute('id'))">
                        <img class="part-box" id="Valva" src="res/imgs/Valva.png" onclick="pickUpPart(this.getAttribute('id'))">
                        <img class="part-box" id="Pe" src="res/imgs/Pe.png" onclick="pickUpPart(this.getAttribute('id'))">
                    </div>
                    <h4>Clique no botão abaixo para confirmar a sua resposta</h4>
                    <button onclick="checkAnswer(7, null)">Eu montei certo?</button>
                `;
                break;
            case 8:
                headerTitle = "Encontre o mexilhão nativo entre os invasores!";
                bodyContent = ``;
                footerTitle = "Encontre e clique no mexilhão nativo";
                for(let i = 0; i < 101; i++) {
                    if(i != 50) {
                        footerContent += `<button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>\n`;
                    } else {
                        footerContent += `<button class="native-option" value="NATIVO" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Perna.png"></button>\n`
                    }
                }
                break;
        }
        // Número da questão
        document.getElementById("questionNumber").textContent = "Questão " + currQuestion;
        // Cabeçalho e corpo
        document.getElementById("question-title").innerText = headerTitle;
        document.getElementById("question-content").innerHTML = bodyContent;
        document.getElementById("question-footer-title").innerText = footerTitle;
        document.getElementById("question-footer-input").innerHTML = footerContent;
    } else {
        endGame();
    }
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