// Variáveis
let music = document.getElementById("music"),
    sfx = document.getElementById("sfx"),
    isMusicMuted = false;
// Listeners
music.addEventListener("ended", playMusic);
document.getElementById("mute-audio").addEventListener("click", toggleBGMusic);
// =========================================================================================================
// Toca a música de fundo, uma das 3 opções disponíveis
function playMusic() {
    if(!isMusicMuted) {
        let bgm = "", n = Math.floor(Math.random() * 3);
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
        isMusicMuted = false;
        playMusic();
        document.getElementById("mute-img").setAttribute("src", "./res/imgs/Musica1.png");
    } else {
        isMusicMuted = true;
        music.pause();
        document.getElementById("mute-img").setAttribute("src", "./res/imgs/Musica0.png");
    }
}