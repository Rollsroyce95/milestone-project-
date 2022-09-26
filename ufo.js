

  shipInMotion = npcShip(-750,630)
//attribution:"https://opengameart.org/users/alucard"

function alienShip(url){
    let ship = document.createElement('img')
    ship.src = url
    ship.style.position = 'fixed'
    document.body.append(ship)
    return ship
}

function npcShip(x,y){
    let shipElement = alienShip('https://opengameart.org/sites/default/files/spaceship_2.png')
    shipElement.height = 700;
    shipElement.style.zIndex = 1;
   
  
    let direction = null;

    function moveShip (){
        if(direction === "east"){
        x += 6
        }
        shipElement.style.left = x + "px"
        shipElement.style.bottom = y + "px"

    }
  
    setInterval(moveShip,1)

    async function flyEast(time){
        direction = "east"
        shipElement.src = "https://opengameart.org/sites/default/files/spaceship_2.png"
        await sleep(time)
        stop()
    }
    function stop(){
        direction = null
        shipElement.src = "https://opengameart.org/sites/default/files/spaceship_2.png"
    }

    return{
        shipElement:shipElement,
        flyEast:flyEast,
        stop:stop,
    }
}
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function readyShipOne(){
    await shipInMotion.flyEast(2200)
}
    readyShipOne()
