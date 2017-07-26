/**
 * Created by beelarr on 7/24/17.
 */


function showCarnivores (carnivores) {
 let carn = document.querySelector('#carn')
    carn.innerHTML += carnivores.carnivores.join(', ')
}


function showHerbivores (herbivores) {
    console.log(typeof herbivores)
    let herb = document.querySelector('#herb')
    herb.innerHTML += herbivores.herbivores.join(', ')
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);

