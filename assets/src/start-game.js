import { updateCount } from "./timer.js";
import { createEath } from "./Eath.js";
import { ovniGameAim, shoot } from "./ovni-game.js";

const bodygame = document.getElementById('clickableBodyGame');

const start = document.getElementById('start');

start.addEventListener("click", () => {
    updateCount()
    createEath()
    ovniGameAim()
    bodygame.addEventListener('click', () => {
        shoot();
    });
    

})