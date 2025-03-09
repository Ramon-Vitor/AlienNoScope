const bodygame = document.getElementById('clickableBodyGame');

// Cria a Terra apos 3s
export const createEath = () =>{
    
    setTimeout(() =>{  
        const earthHitbox = document.createElement('div');
        earthHitbox.className = 'earth';
        bodygame.appendChild(earthHitbox);

        const earth = document.createElement('img');
        earth.src = ('../assets/imgs/earth.png');
        earthHitbox.appendChild(earth);
    }, 3000);
}