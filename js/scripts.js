// スクロール時にナビゲーションバーの背景色を変更
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#333';
    } else {
        navbar.style.background = 'transparent';
    }
});

// セクションのフェードインアニメーション
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', checkSections);

function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bgm');
    audio.volume = 1; // 音量を50%に設定

    // 再生と停止を切り替えるボタンを作成する場合
    var playButton = document.createElement('button');
    playButton.textContent = '再生';
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = '停止';
        } else {
            audio.pause();
            playButton.textContent = '再生';
        }
    });
    document.body.appendChild(playButton);
});
