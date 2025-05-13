// Variáveis
let music = document.getElementById("music");
let sfx = document.getElementById("sfx");
let isMusicMuted = false;
// Listeners
music.addEventListener("ended", playMusic);
document.getElementById("mute-audio").addEventListener("click", toggleBGMusic);
// =========================================================================================================
// Toca a música de fundo, uma das 3 opções disponíveis
function playMusic() {
    let bgm; let n = Math.floor(Math.random() * 3);
    isMusicMuted = true;
    switch(n) {
        case 0:
            bgm = "./res/audios/music/sergequadrado_sunrise-dub-loop.wav";
            music.volume = 0.2;
            break;
        case 1:
            bgm = "./res/audios/music/code box_laidback-steps.wav";
            music.volume = 0.2;
            break;
        case 2:
            bgm = "./res/audios/music/code box_tropical-cruise.wav";
            music.volume = 0.25;
            break;
    }
    music.setAttribute("src", bgm);
    music.play();
}
// Toca efeito sonoro
function playSFX(name) {
    sfx.setAttribute("src", "./res/audios/sfx/" + name);
    sfx.volume = 0.10;
    sfx.play();
}
// Pausa ou retoma a música de fundo
function toggleBGMusic() {
    if(isMusicMuted) {
        music.pause();
        isMusicMuted = false;
        document.getElementById("mute-img").setAttribute("src", "./res/imgs/Musica0.png");
    } else {
        music.play();
        isMusicMuted = true;
        document.getElementById("mute-img").setAttribute("src", "./res/imgs/Musica1.png");
    }
}