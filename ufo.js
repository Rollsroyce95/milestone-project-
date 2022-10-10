

  shipInMotion = npcShip(-900,400)


function alienShip(url){
    let ship = document.createElement('img')
    ship.src = url
   
    ship.style.position = 'fixed'
    document.body.append(ship)
    return ship
}

function npcShip(x,y){
    let shipElement = alienShip('')
    shipElement.height = 350;
    shipElement.style.zIndex = 1;
    
   
  
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
           let shipElement = alienShip('https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/vecteezy_ufo-spaceship-concept-clipart-design-illustration_9356452_47.png')
        await sleep(time)
        stop()
    }
    async function flyNorth(time){
        direction = "north"
        let shipElement = alienShip('https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/vecteezy_ufo-spaceship-concept-clipart-design-illustration_9356452_47.png')
        await sleep(time)
        stop()
    }
    function stop(){
        direction = null
          let shipElement = alienShip('https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/vecteezy_ufo-spaceship-concept-clipart-design-illustration_9356452_47.png')
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
    await shipInMotion.flyEast(1050)

}

    readyShipOne()
