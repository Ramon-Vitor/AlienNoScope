const bodygame = document.getElementById('clickableBodyGame');

export function createTarget () {
    const targetHitbox = document.createElement('div');
    targetHitbox.className = 'target-hitbox';
    const target = document.createElement('div');
    
    let random =  Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    /*targetHitbox.id = `target${random}`;
    targetHitbox.className = `target${random}`;*/
    target.className = `target1`;
    bodygame.appendChild(targetHitbox);
    targetHitbox.appendChild(target)

    targetHitbox.addEventListener("click", () =>{
        targetHitbox.remove();
        createTarget()
    })
}


