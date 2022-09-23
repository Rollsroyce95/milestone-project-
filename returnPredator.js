function predatorBegins(url){
    let prey = document.createElement('img')
    prey.src = url
    prey.style.position = 'absolute'
    document.body.append(prey)
    return prey
}

function npcPredator(x,y){
    let predatorElement = predatorBegins('character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_predator_mask/predatormask__0001_idle_2.png')
    predatorElement.height = 250;
    predatorElement.style.zIndex = 1;



let direction = null;


function movePredator(){

    if (direction === "south"){
        y -= 2
    }

    predatorElement.style.left = x + "px"
    predatorElement.style.bottom = y + "px"
}

    setInterval(movePredator, 1)


async function moveSouth(time){
    direction = "south"
    predatorElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_predator_mask/predatormask__0001_idle_2.png"
    await sleep(time)
    stop()
}
function stop(){
    direction = null
    predatorElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_predator_mask/predatormask__0001_idle_2.png"
}

return {
    predatorElement:predatorElement,
    moveEast1:moveEast1,
    moveEast2:moveEast2,
    moveEast3:moveEast3,
    moveEast4:moveEast4,
    moveEast5:moveEast5,
    moveEast6:moveEast6,
    moveNorth1:moveNorth1,
    moveNorth2:moveNorth2,
    moveNorth3:moveNorth3,
    moveNorth4:moveNorth4,
    moveNorth5:moveNorth5,
    moveNorthEast:moveNorthEast,
    moveSouth:moveSouth,
    stop: stop
}

}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}


const predatorInMotion = npcPredator(2100,230)

async function readyPredatorOne(){
    await predatorInMotion.moveSouth(500)

   
}
    readyPredatorOne()