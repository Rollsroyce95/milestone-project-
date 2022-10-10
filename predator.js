const predatorInMotion = npcPredator(-300,780)

function predatorBegins(url){
    let prey = document.createElement('img')
    prey.src = url
    document.body.append(prey)
    return prey
}

function npcPredator(x,y){
    let predatorElement = predatorBegins('https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0001_idle_2.png')
    predatorElement.height = 250;
    predatorElement.style.zIndex = 0;
        predatorElement.style.display = 'block'
        predatorElement.style.position = "relative"

    let direction = null;


function movePredator(){
    if (direction === "west") {
        x -= 1
    }
    if (direction === "north1") {
        y += 1
    }
    if (direction === "north2") {
        y += 1
    }
    if (direction === "north3") {
        y += 1
    }
    if (direction === "north4") {
        y += 1
    }
    if (direction === "north5") {
        y += 2
    }
    if (direction === "north6") {
        y += 6
    }
    if(direction === "east1"){
        x += 3
    }
    if(direction === "east2"){
        x += 3
    }
    if(direction === "east3"){
        x += 3
    }
    if(direction === "east4"){
        x += 3
    }
    if(direction === "east5"){
        x += 3
    }
    if(direction === "east6"){
        x += 3
    }
    if(direction === "east7"){
        x += 6
    }

    if (direction === "south"){
        y -= 5
    }
    
    if (direction === "northEast"){
        y += 6;
        x += 4;
    }
    
    predatorElement.style.left = x + "px"
    predatorElement.style.bottom = y + "px"
}

    setInterval(movePredator, 1)

async function moveWest(time){
        direction = "west"
      predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0012_run_1.png"
        await sleep(time)
        stop()
    }
async function moveEast1(time){
    direction = "east1"
    predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0012_run_1.png"
    await sleep(time)
    stop()
}
async function moveEast2(time){
    direction = "east2"
    predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0013_run_2.png"
    await sleep (time)
    stop()
}
async function moveEast3(time){
    direction = "east3"
    predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0014_run_3.png"
    await sleep (time)
    stop()
}
async function moveEast4(time){
    direction = "east4"
    predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0015_run_4.png"
    await sleep (time)
    stop()
}
async function moveEast5(time){
    direction = "east5"
   predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0016_run_5.png"
    await sleep (time)
    stop()
}
async function moveEast6(time){
    direction = "east6"
    predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0017_run_6.png"
    await sleep (time)
    stop()
}
async function moveEast7(time){
    direction = "east7"
   predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0017_run_6.png"
    await sleep (time)
    stop()
}
async function moveNorth1(time){
    direction = "north1"
    predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0022_dead_1.png"
    await sleep(time)
    stop()
}
async function moveNorth2(time){
    direction = "north2"
    predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0023_dead_2.png"
    await sleep(time)
    stop()
}
async function moveNorth3(time){
    direction = "north3"
   predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0024_dead_3.png"
    await sleep(time)
    stop()
}
async function moveNorth4(time){
    direction = "north4"
 predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0025_dead_4.png"
    await sleep(time)
    stop()
}
async function moveNorth5(time){
    direction = "north5"
 predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0026_dead_5.png"
    await sleep(time)
    stop()
}
async function moveNorth6(time){
    direction = "north6"
   predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0026_dead_5.png"
    predatorElement.style.height = '20px'
    await sleep(time)
    stop()
}
async function moveNorthEast(time){
    direction = "northEast"
    predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0022_dead_1.png"
    await sleep(time)
    stop()
}
async function moveSouth(time){
    direction = "south"
   predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0001_idle_2.png"
    await sleep(time)
    stop()
}
function stop(){
    direction = null
   predatorElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_predator_mask/predatormask__0001_idle_2.png"
}

return {
    predatorElement:predatorElement,
    moveWest:moveWest,
    moveEast1:moveEast1,
    moveEast2:moveEast2,
    moveEast3:moveEast3,
    moveEast4:moveEast4,
    moveEast5:moveEast5,
    moveEast6:moveEast6,
    moveEast7:moveEast7,
    moveNorth1:moveNorth1,
    moveNorth2:moveNorth2,
    moveNorth3:moveNorth3,
    moveNorth4:moveNorth4,
    moveNorth5:moveNorth5,
    moveNorth6:moveNorth6,
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

async function readyPredatorOne(){
    await predatorInMotion.moveEast1(100)
    await predatorInMotion.moveEast2(100)
    await predatorInMotion.moveEast3(100)
    await predatorInMotion.moveEast4(100)
    await predatorInMotion.moveEast5(100)
    await predatorInMotion.moveEast6(100)
    await predatorInMotion.moveEast1(100)
    await predatorInMotion.moveEast2(100)
    await predatorInMotion.moveEast3(100)
    await predatorInMotion.moveEast4(100)
    await predatorInMotion.moveEast5(100)
    await predatorInMotion.moveEast6(100)
    await predatorInMotion.moveEast1(100)
    await predatorInMotion.moveEast2(100)
    await predatorInMotion.moveEast3(100)
    await predatorInMotion.moveEast4(100)
    await predatorInMotion.moveEast5(100)
    await predatorInMotion.moveNorthEast(400)
 
}
    readyPredatorOne()
