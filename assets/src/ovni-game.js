// Faz com que o Ovni fique mirando o mouse
export const ovniGameAim = () => {
    // Obtém o elemento do ovni que deve seguir o mouse
    const ship = document.getElementById('ship-gun');
    
    document.addEventListener('mousemove', (e) => {

        // Obtém a posição do mouse na tela
        const mouseX = e.clientX;
        const mouseY = e.clientY;
    
        // Obtém as informações de posição e tamanho da 'ship' para calcular o centro da div
        const shipElement = ship.getBoundingClientRect();
        const centerX = shipElement.left + shipElement.width / 2; // Calcula o centro da div no eixo X
        const centerY = shipElement.top + shipElement.height / 2; // Calcula o centro da div no eixo Y
    
        // Calcula a diferença entre a posição do mouse e o centro da div
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
    
        /*  Verifica se o mouse está acima da div (lado superior da tela)
            Para que o movimento de rotação só aconteça quando o mouse estiver acima do centro da 'ship'  
            ou seja, não terá rotação quando o mouse estiver no painel de controle do Ovni  */
        if(mouseY < centerY){
            /*  Calcula o ângulo de rotação da nave com base na posição do mouse
            /   Math.atan2 retorna o ângulo em radianos, então convertemos para graus   */
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            
            // Aplica a rotação no elemento 'ship', ajustando o ângulo para que o movimento seja o desejado
            ship.style.transform = `rotate(${angle + 90}deg)`;  // A rotação é ajustada por 90 graus para alinhar corretamente
        }
    });
};


const bodygame = document.getElementById('clickableBodyGame');
// Erro aq

export const shoot = () => {
    const ship = document.getElementById('ship-gun')
    const bullet = document.createElement('div');
    bullet.className = 'bullet';
    bodygame.appendChild(bullet);

    const shipElement = ship.getBoundingClientRect();
    const shipAngle = parseFloat(ship.style.transform.replace('rotate(', '').replace('deg)', ''));

    const radian = (shipAngle - 90) * (Math.PI / 180);

    const spawnX = shipElement.left + shipElement.width / 2 + Math.cos(radian) * 10;
    const spawnY = shipElement.top + shipElement.height / 2 + Math.sin(radian) * 10;

    bullet.style.left = `${spawnX}px`
    bullet.style.top = `${spawnY}px`

    // Velocidade e animação do tiro
    const speed = 30;
    const moveBullet = () =>{
        const currentX = parseFloat(bullet.style.left);
        const currentY = parseFloat(bullet.style.top);

        const nextX = currentX + Math.cos(radian) * speed;
        const nextY = currentY + Math.sin(radian) * speed;

        bullet.style.left = `${nextX}px`;
        bullet.style.top = `${nextY}px`;

        if(nextY > 0 && nextY < window.innerHeight && nextX > 0 && nextX < window.innerWidth){
            requestAnimationFrame(moveBullet);
        }else{
            bullet.remove()
        }
    }

    moveBullet()
    
}

