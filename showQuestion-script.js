// Mostra uma questão e esconde as outras e também atualiza o número da questão na página
function showQuestion(num) {
    let box = document.getElementById("question-box");

    if(num <= NUMBER_OF_QUESTIONS) {
        switch(num) {
            case 1:
                box.innerHTML =
                `
                    <div id="question-header">
                        <h3 id="question-title">Qual é este mexilhão?</h3>
                    </div>
                    <div id="question-body">
                        <img src="res/imgs/Perna.png">
                    </div>
                    <div id="question-footer">
                        <div id="question-footer-header">
                            <h4 id="question-footer-title">Escolha uma das opções:</h4>
                        </div>
                        <div id="question-footer-input">
                                <button class="answer-button" value="VERDE" onclick="checkAnswer(1, this.getAttribute('value'))"><p>Mexilhão-verde</p></button>
                                <button class="answer-button" value="MARROM" onclick="checkAnswer(1, this.getAttribute('value'))"><p>Mexilhão-marrom</p></button>
                                <button class="answer-button" value="DOURADO" onclick="checkAnswer(1, this.getAttribute('value'))"><p>Mexilhão-dourado</p></button>
                        </div>
                    </div>
                `;
                break;
            case 2:
                box.innerHTML =
                `
                    <div id="question-header">
                        <h3 id="quetion-title">Qual é este mexilhão?</h3>
                    </div>
                    <div id="question-body">
                        <img src="res/imgs/Viridis.png">
                    </div>
                    <div id="question-footer">
                        <div id="question-footer-header">
                            <h4 id="question-footer-title">Escolha uma das opções:</h4>
                        </div>
                        <div id="question-footer-input">
                                <button class="answer-button" value="VERDE" onclick="checkAnswer(2, this.getAttribute('value'))"><p>Mexilhão-verde</p></button>
                                <button class="answer-button" value="MARROM" onclick="checkAnswer(2, this.getAttribute('value'))"><p>Mexilhão-marrom</p></button>
                                <button class="answer-button" value="DOURADO" onclick="checkAnswer(2, this.getAttribute('value'))"><p>Mexilhão-dourado</p></button>
                        </div>
                    </div>
                `;
                break;
            case 3:
                box.innerHTML =
                `
                    <div id="question-header">
                        <h3 id="question-title">Quais espécies de mexilhão são consideradas INVASORAS?</h3>
                    </div>
                    <div id="question-footer">
                        <div id="question-footer-header">
                            <h4 id="question-footer-title">Escolha a opção que contenha apenas espécies INVASORAS:</h4>
                        </div>
                        <div id="question-footer-input">
                            <button class="answer-button" value="MARROM E VERDE" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Perna.png"><img src="res/imgs/Viridis.png"><p>Marrom e verde</p></button>
                            <button class="answer-button" value="DOURADO E MARROM" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Fortunei.png"><img src="res/imgs/Perna.png"><p>Dourado e marrom</p></button>
                            <button class="answer-button" value="VERDE" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Viridis.png"><p>Apenas o verde</p></button>
                            <button class="answer-button" value="MARROM" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Perna.png"><p>Apenas o marrom</p></button>
                            <button class="answer-button" value="DOURADO E VERDE" onclick="checkAnswer(3, this.getAttribute('value'))"><img src="res/imgs/Fortunei.png"><img src="res/imgs/Viridis.png"><p>Dourado e verde</p></button>
                        </div>
                    </div>
                `
                break;
            case 4:
                box.innerHTML =
                `
                    <div id="question-header">
                        <h3 id="question-title">Quais espécies de mexilhão são consideradas NATIVAS?</h3>
                    </div>
                    <div id="question-footer">
                        <div id="question-footer-header">
                            <h4 id="question-footer-title">Escolha a opção que contenha apenas espécies NATIVAS:</h4>
                        </div>
                        <div id="question-footer-input">
                            <button class="answer-button" value="MARROM E VERDE" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Perna.png"><img src="res/imgs/Viridis.png"><p>Marrom e verde</p></button>
                            <button class="answer-button" value="DOURADO E MARROM" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Fortunei.png"><img src="res/imgs/Perna.png"><p>Dourado e marrom</p></button>
                            <button class="answer-button" value="VERDE" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Viridis.png"><p>Apenas o verde</p></button>
                            <button class="answer-button" value="MARROM" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Perna.png"><p>Apenas o marrom</p></button>
                            <button class="answer-button" value="DOURADO E VERDE" onclick="checkAnswer(4, this.getAttribute('value'))"><img src="res/imgs/Fortunei.png"><img src="res/imgs/Viridis.png"><p>Dourado e verde</p></button>
                        </div>
                    </div>
                `
                break;
            case 5:
                box.innerHTML =
                `
                    <div id="question-header">
                        <h3 id="question-title">Onde o mexilhão-marrom vive naturalmente?</h3>
                    </div>
                    <div id="question-footer">
                        <div id="question-footer-header">
                            <h4 id="question-footer-title">Selecione uma opção:</h4>
                        </div>
                        <div id="question-footer-input">
                            <button class="answer-button" value="BRASIL" onclick="checkAnswer(5, this.getAttribute('value'))"><img src="res/imgs/Costa Brasil.png"><p>Costa do Brasil</p></button>
                            <button class="answer-button" value="INDOPACIFICO" onclick="checkAnswer(5, this.getAttribute('value'))"><img src="res/imgs/Indo Pacifico.png"><p>Oceanos Índico e Pacífico</p></button>
                            <button class="answer-button" value="MEDITERRANEO" onclick="checkAnswer(5, this.getAttribute('value'))"><img src="res/imgs/Mediterraneo.png"><p>Mar Mediterrâneo</p></button>
                            <button class="answer-button" value="BACIAPARANA" onclick="checkAnswer(5, this.getAttribute('value'))"><img src="res/imgs/Bacia Parana.png"><p>Bacia do Paraná, principalmente</p></button>
                        </div>
                    </div>
                `
                break;
            case 6:
                box.innerHTML =
                `
                    <div id="question-header">
                        <h3 id="question-title">Onde o mexilhão-verde vive naturalmente?</h3>
                    </div>
                    <div id="question-footer">
                        <div id="question-footer-header">
                            <h4 id="question-footer-title">Selecione uma opção:</h4>
                        </div>
                        <div id="question-footer-input">
                            <button class="answer-button" value="BRASIL" onclick="checkAnswer(6, this.getAttribute('value'))"><img src="res/imgs/Costa Brasil.png"><p>Costa do Brasil</p></button>
                            <button class="answer-button" value="INDOPACIFICO" onclick="checkAnswer(6, this.getAttribute('value'))"><img src="res/imgs/Indo Pacifico.png"><p>Oceanos Índico e Pacífico</p></button>
                            <button class="answer-button" value="MEDITERRANEO" onclick="checkAnswer(6, this.getAttribute('value'))"><img src="res/imgs/Mediterraneo.png"><p>Mar Mediterrâneo</p></button>
                            <button class="answer-button" value="BACIAPARANA" onclick="checkAnswer(6, this.getAttribute('value'))"><img src="res/imgs/Bacia Parana.png"><p>Bacia do Paraná, principalmente</p></button>
                        </div>
                    </div>
                `
                break;
            case 7:
                box.innerHTML =
                `
                    <div class="question-box-header">
                        <h3>Monte a anatomia extterna do mexilhão-marrom!</h3>
                    </div>
                    <div class="question-box-body">
                        <p>Clique nas peças abaixo e clique nas áreas vazias onde você quer colocar a peça. Clique em outra peça para soltá-la.</p>
                        <div id="mounted-perna-area"></div>
                        <p>Mexilhão-marrom ( <i>Perna perna</i> )</p>

                        <div class="empty-box-outer-2">
                            <div class="empty-box-2" id="1" onclick="putPartInBox(this.getAttribute('id'))"><img id="1-put" src=""></div>
                            <p class="empty-box-legend">Bisso</p>
                        </div>
                        <div class="empty-box-outer-2">
                            <div class="empty-box-2" id="2" onclick="putPartInBox(this.getAttribute('id'))"><img id="2-put" src=""></div>
                            <p class="empty-box-legend">Valva</p>
                        </div>
                        <div class="empty-box-outer-2">
                            <div class="empty-box-2" id="3" onclick="putPartInBox(this.getAttribute('id'))"><img id="3-put" src=""></div>
                            <p class="empty-box-legend">Pé</p>
                        </div>

                        <div class="parts">
                            <img class="part-box-2" id="Bisso" src="res/imgs/Bisso.png" onclick="pickUpPart(this.getAttribute('id'))">
                            <img class="part-box-2" id="Valva" src="res/imgs/Valva.png" onclick="pickUpPart(this.getAttribute('id'))">
                            <img class="part-box-2" id="Pe" src="res/imgs/Pe.png" onclick="pickUpPart(this.getAttribute('id'))">
                        </div>
                    <div class="question-box-footer">
                        <div class="question-box-footer-header">
                            <h4>Clique no botão abaixo para confirmar a sua resposta</h4>
                        </div>
                        <div class="question-box-footer-inputbody">
                            <button onclick="checkAnswer(7, null)">Eu montei certo?</button>
                            <button onclick="checkAnswer(null, null)">Quero pular esta atividade</button>
                        </div>
                    </div>
                `
                break;
            case 8:
                box.innerHTML =
                `
                    <div class="question-box-header">
                            <h3>Encontre o mexilhão nativo entre os invasores!</h3>
                    </div>
                    <div class="question-box-body">
                        
                    <div class="question-box-footer">
                        <div class="question-box-footer-header">
                            <h4></h4>
                        </div>
                        <div class="question-box-footer-inputbody">
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="native-option" value="NATIVO" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Perna.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                            <button class="invader-option" value="INVASOR" onclick="checkAnswer(8, this.getAttribute('value'))"><img src="./res/imgs/Viridis.png"></button>
                        </div>
                    </div>
                `
                break;
        }
        document.getElementById("questionNumber").textContent = "Questão " + currQuestion;
    } else {
        endGame();
    }
} // TODO: Melhorar isso!