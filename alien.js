
const alienInMotion = npcAlien(-460,1000)

function greyAlien(url){
    let grey = document.createElement('img')
    grey.src = url
    grey.style.position = 'fixed'
    document.body.append(grey)
    return grey
}

function npcAlien(x,y){
    let alienElement = greyAlien('character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0035_fire_1.png')
    alienElement.height = 300;
    alienElement.style.zIndex = -1;

  
    let direction = null;

    function moveAlien (){
        if(direction === "west"){
            x -= 3
            }
        if(direction === "north"){
        y += 3
        }
        if(direction === "south1"){
        y -= 5
        }
        if(direction === "south2"){
        y -= 3
        }
        if(direction === "south3"){
        y -= 3
        }  
        if(direction === "south4"){
        y -= 3
        }
        if(direction === "south5"){
        y -= 3
        }  
        if(direction === "east"){
            x += 6
            }
        alienElement.style.left = x + "px"
        alienElement.style.bottom = y + "px"

    }

    setInterval(moveAlien,1)

    async function flyWest(time){
        direction = "west"
        alienElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0035_fire_1.png"
        await sleep(time)
        stop()
    }
    async function flyEast(time){
        direction = "east"
        alienElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0035_fire_1.png"
        await sleep(time)
        stop()
    }
    async function flySouth1(time){
        direction = "south1"
        alienElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0035_fire_1.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flySouth2(time){
        direction = "south2"
        alienElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0036_fire_2.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flySouth3(time){
        direction = "south3"
        alienElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0037_fire_3.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flySouth4(time){
        direction = "south4"
        alienElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0038_fire_4.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flySouth5(time){
        direction = "south5"
        alienElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0039_fire_5.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flyNorth(time){
        direction = "north"
        alienElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0035_fire_1.png"
        alienElement.style.transform = "ScaleX(1)"
        await sleep(time)
        stop()
    }
    function stop(){
        direction = null
        alienElement.src = "character/2d-Game-Alien-Character-Free-Sprite/alien/PNG/alien_armor/armor__0039_fire_5.png"
    }

    return{
        alienElement:alienElement,
        flyWest:flyWest,
        flyEast:flyEast,
        flySouth1:flySouth1,
        flySouth2:flySouth2,
        flySouth3:flySouth3,
        flySouth4:flySouth4,
        flySouth5:flySouth5,
        flyNorth:flyNorth,
        stop:stop,
    }
}
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function readyAlienOne(){
    await alienInMotion.flyEast(2200);
    await alienInMotion.flySouth1(500);
    await alienInMotion.flySouth2(50);
    await alienInMotion.flySouth3(50);
    await alienInMotion.flySouth4(50);
    await alienInMotion.flySouth5(50);
}
    readyAlienOne()
