const bodygame = document.getElementById('clickableBodyGame');

// Cria a Terra apos 3s
export const createEath = () =>{
    
    setTimeout(() =>{  
        const earthHitbox = document.createElement('div');
        earthHitbox.className = 'earth';
        bodygame.appendChild(earthHitbox);

        const earth = document.createElement('div');
        earth.className = ('globe');
        earthHitbox.appendChild(earth);
    }, 3000);
}