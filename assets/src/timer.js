const start = document.getElementById('start');
const bodygame = document.getElementById('clickableBodyGame');

// Contagem regressiva   
export const updateCount = () =>{

    // Numero de inicio da contagem
    let countdown = 3;

    // Esconde nav bar
    start.className = 'hidden';
    const nav = document.getElementById('navbar');
    nav.classList = 'hidden-bar';

    // Cria div que vai receber a contagem
    const counter = document.createElement('div');
    counter.classList = 'counter';
    bodygame.appendChild(counter);

    // Cria <p> que fará a contagem regressiva 
    const count = document.createElement('p');
    count.innerText = countdown; // <p> recebe o inicio da contagem
    count.classList = 'count';
    counter.appendChild(count); 
    
    // Onde a contagem regressiva acontece
    const regressive = () => {

        // <p> recebe o inicio da contagem--
        countdown--;
        count.innerText = countdown
        if (countdown === 0) {
            counter.remove();
            clearInterval(countdownInterval);
        }
    }
    let countdownInterval = setInterval( regressive, 1000);
} 