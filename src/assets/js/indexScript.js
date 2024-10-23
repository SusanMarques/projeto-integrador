document.addEventListener('DOMContentLoaded', () => {
    const trilho = document.getElementById('trilho');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Verifica o estado do modo dark no localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    trilho.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        const imagens = document.getElementsByClassName('caixa-som');
        const imagem_login = document.getElementById('login-img');
        const imagens_sol = document.getElementsByClassName('icone-dark-light');
        
        trilho.classList.add('dark');
        body.classList.add('dark');
        if (header) header.classList.add('dark');
        if (footer) footer.classList.add('dark');
        
        for (let imagem of imagens) {
            imagem.setAttribute('src', './assets/images/icone-caixa-de-som-branco.png');
        }
        
        imagem_login.setAttribute('src', './assets/images/icone-login-verde-claro.png');
        
        for (let imagem of imagens_sol) {
            imagem.setAttribute('src', './assets/images/icone-sol-dark-mode.svg'); // Aqui troquei para lua
        }

        localStorage.setItem('dark-mode', 'enabled');
    }

    function disableDarkMode() {
        const imagens = document.getElementsByClassName('caixa-som');
        const imagem_login = document.getElementById('login-img');
        const imagens_sol = document.getElementsByClassName('icone-dark-light');
        
        trilho.classList.remove('dark');
        body.classList.remove('dark');
        if (header) header.classList.remove('dark');
        if (footer) footer.classList.remove('dark');

        for (let imagem of imagens) {
            imagem.setAttribute('src', './assets/images/icone-caixa-de-som-preto.png');
        }
        imagem_login.setAttribute('src', './assets/images/icone-login.svg');

        for (let imagem of imagens_sol) {
            imagem.setAttribute('src', './assets/images/icone-lua-dark-mode.svg'); // Aqui troquei para sol
        }

        localStorage.setItem('dark-mode', 'disabled');
    }
});








//---------------------------------------------------------------- Leitor
const botoesLer = document.querySelectorAll('.ler-button');
let isSpeaking = false; // Flag para verificar se está falando

// Função para selecionar uma voz feminina em pt-BR
function getFemaleVoice() {
    const voices = speechSynthesis.getVoices();

    // Filtra as vozes femininas em português (pt-BR) e retorna a primeira disponível
    return voices.find(voice => voice.lang === 'pt-BR' && voice.name.toLowerCase().includes('female'));
}

// Adiciona evento de clique a cada botão
botoesLer.forEach(botao => {
    botao.addEventListener('click', () => {
        if (isSpeaking) {
            speechSynthesis.cancel(); // Para a leitura em andamento
            isSpeaking = false; // Atualiza a flag
        } else {
            const separacao = botao.parentElement; // Obtém o elemento pai do botão
            const h2Text = separacao.querySelector('h2').textContent.replace('Ler em Voz Alta', '').trim(); // Obtém o texto do h2
            const utterance = new SpeechSynthesisUtterance(h2Text); // Cria objeto SpeechSynthesisUtterance

            // Seleciona uma voz feminina em pt-BR
            const femaleVoice = getFemaleVoice();
            if (femaleVoice) {
                utterance.voice = femaleVoice;
            }



            speechSynthesis.speak(utterance); // Inicia a leitura do texto
            isSpeaking = true; // Atualiza a flag

            // Quando a leitura terminar, reseta a flag
            utterance.onend = () => {
                isSpeaking = false;
            };
        }
    });
});


//---------------------------------------------------------------- aumentar fonte

    let aumentado = false;

function redimensionarFonte() {
    const textos = document.querySelectorAll('h2');
    let larguraTela = window.innerWidth;
    for (let texto of textos) {
        // Obter o tamanho atual da fonte do elemento
        let fontSizeStr = window.getComputedStyle(texto).fontSize;
        let fontSize = parseFloat(fontSizeStr);

        if (larguraTela <= 480) {
            // Para telas menores ou iguais a 480px
            if (aumentado) {
                texto.style.fontSize = (fontSize - 4) + 'px';
            } else {
                texto.style.fontSize = (fontSize + 4) + 'px';
            }
        } else {
            // Para telas maiores que 480px
            if (aumentado) {
                texto.style.fontSize = (fontSize - 5) + 'px';
            } else {
                texto.style.fontSize = (fontSize + 5) + 'px';
            }
        }
    }
    aumentado = !aumentado;
}

window.addEventListener('resize', () => {
    const textos = document.querySelectorAll('h2');
    let larguraTela = window.innerWidth;

    for (let texto of textos) {
        let fontSizeStr = window.getComputedStyle(texto).fontSize;
        let fontSize = parseFloat(fontSizeStr);

        if (larguraTela <= 480) {
            if (fontSize > 20) {
                texto.style.fontSize = '20px';
            }
        } else {
            if (fontSize < 24) {
                texto.style.fontSize = '24px';
            }
        }
    }
});


// function diminuirFonte() {
//    const textos = document.getElementsByClassName('h2');
//    for (let texto of textos) {
//        if (fonteSizeMax > fontSizeI) {


//        }
//    }

// }





document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburguer');
    const menu = document.getElementById('menu-hamburguer');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});


//// botão como chegar

document.getElementById("botao-como-chegar").addEventListener("click", function() {
    window.open("https://maps.app.goo.gl/mfbMLxPW73PYEYQS6", "_blank"); // abre o URL em uma nova aba
});