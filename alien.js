
const alienInMotion = npcAlien(-590,300)

function greyAlien(url){
    let grey = document.createElement('img')
    grey.src = url
    document.body.append(grey)
    return grey
}

function npcAlien(x,y){
    let alienElement = greyAlien('https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0035_fire_1.png')
    alienElement.height = 300;
    alienElement.style.zIndex = -1
    alienElement.style.display = 'block'
    alienElement.style.position = "relative"
   
    
    let direction = null;
   
    function moveAlien (){
        if(direction === "west"){
            x -= 3
            }
        if(direction === "north"){
        y += 3
        }
        if(direction === "north2"){
            y += 6
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
            x += 8
            }
        if(direction === "east2"){
            x += 6
            }
        alienElement.style.left = x + "px"
        alienElement.style.bottom = y + "px"
    }

    setInterval(moveAlien)

    async function flyWest(time){
        direction = "west"
        alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0035_fire_1.png"
        await sleep(time)
        stop()
    }
    async function flyEast(time){
        direction = "east"
        alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0035_fire_1.png"
        await sleep(time)
        stop()
    }
    async function flyEast2(time){
        direction = "east2"
        alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0035_fire_1.png"
        await sleep(time)
        stop()
    }
    async function flySouth1(time){
        direction = "south1"
        alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0035_fire_1.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flySouth2(time){
        direction = "south2"
        alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0036_fire_2.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flySouth3(time){
        direction = "south3"
        alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0037_fire_3.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flySouth4(time){
        direction = "south4"
        alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0038_fire_4.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flySouth5(time){
        direction = "south5"
        alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0039_fire_5.png"
        alienElement.style.transform = "ScaleX(-1)"
        await sleep(time)
        stop()
    }
    async function flyNorth(time){
        direction = "north"
             alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0035_fire_1.png"
        alienElement.style.transform = "ScaleX(1)"
        await sleep(time)
        stop()
    }
    async function flyNorth2(time){
        direction = "north2"
              alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0035_fire_1.png"
        alienElement.style.transform = "ScaleX(1)"
        await sleep(time)
        stop()
    }
    function stop(){
        direction = null
        alienElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/alien_armor/armor__0039_fire_5.png"
       
    }

    return{
        alienElement:alienElement,
        flyWest:flyWest,
        flyEast:flyEast,
        flyEast2:flyEast2,
        flySouth1:flySouth1,
        flySouth2:flySouth2,
        flySouth3:flySouth3,
        flySouth4:flySouth4,
        flySouth5:flySouth5,
        flyNorth:flyNorth,
        flyNorth2:flyNorth2,
        stop:stop,
    }
}
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function readyAlienOne(){
    await alienInMotion.flyEast(1400);
    await alienInMotion.flySouth1(65);
    await alienInMotion.flySouth2(110);
    await alienInMotion.flySouth3(120);
    await alienInMotion.flySouth4(120);
    await alienInMotion.flySouth5(120);
}
    readyAlienOne()
