// Variáveis
let music = document.getElementById("music");
let sfx = document.getElementById("sfx");

// Toca a música de fundo, uma das 4 opções disponíveis
function startBGMusic() {
    let bgm; let n = Math.floor(Math.random() * 4);
    switch(n) {
        case 0:
            bgm = "./res/audios/music/sergequadrado_sunrise-dub-loop.wav";
            break;
        case 1:
            bgm = "./res/audios/music/code box_laidback-steps.wav";
            break;
        case 2:
            bgm = "./res/audios/music/code box_tropical-cruise.wav";
            break;
        case 3:
            bgm = "./res/audios/music/szegvari_beach-dance.wav";
            break;
    }
    music.setAttribute("src", bgm);
    music.volume = 0.25;
    music.play();
}

// Toca efeito sonoro
function playSFX(name) {
    sfx.setAttribute("src", "./res/audios/sfx/" + name);
    sfx.volume = 0.5;
    sfx.play();
}