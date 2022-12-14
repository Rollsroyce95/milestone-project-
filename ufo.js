shipInMotion = npcShip(-900,50)


function alienShip(url){
    let ship = document.createElement('img')
    ship.src = url
    document.body.append(ship)
    return ship
}

function npcShip(x,y){
    let shipElement = alienShip('https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/vecteezy_ufo-spaceship-concept-clipart-design-illustration_9356452_47.png')
    shipElement.height = 400;
    shipElement.style.zIndex = 1;
    shipElement.style.display = 'block'
    shipElement.style.position = "relative"
   
  
    let direction = null;

    function moveShip (){
        if(direction === "east"){
        x += 8
        }
    
        if(direction === "north"){
        y += 6
        }

        shipElement.style.left = x + "px"
        shipElement.style.bottom = y + "px"

    }
  
    setInterval(moveShip,1)

    async function flyEast(time){
        direction = "east"
        shipElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/vecteezy_ufo-spaceship-concept-clipart-design-illustration_9356452_47.png"
        await sleep(time)
        stop()
    }
    async function flyNorth(time){
        direction = "north"
        shipElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/vecteezy_ufo-spaceship-concept-clipart-design-illustration_9356452_47.png"
        await sleep(time)
        stop()
    }
    function stop(){
        direction = null
        shipElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/vecteezy_ufo-spaceship-concept-clipart-design-illustration_9356452_47.png"
    }

    return{
        shipElement:shipElement,
        flyEast:flyEast,
        flyNorth:flyNorth,
        stop:stop,
    }
}
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function readyShipOne(){
    await shipInMotion.flyEast(1260)

}

    readyShipOne()
