

  shipInMotion = npcShip(-900,400)


function alienShip(url){
    let ship = document.createElement('img')
    ship.src = url
   
    ship.style.position = 'fixed'
    document.body.append(ship)
    return ship
}

function npcShip(x,y){
    let shipElement = alienShip('https://github.com/Rollsroyce95/milestone-project-/blob/bedeab1acd47fa48f2a28cdaacb4f877ca5caacf/x2ww_5npv_210520.jpg')
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
           let shipElement = alienShip('https://github.com/Rollsroyce95/milestone-project-/blob/bedeab1acd47fa48f2a28cdaacb4f877ca5caacf/x2ww_5npv_210520.jpg')
        await sleep(time)
        stop()
    }
    async function flyNorth(time){
        direction = "north"
        let shipElement = alienShip('https://github.com/Rollsroyce95/milestone-project-/blob/bedeab1acd47fa48f2a28cdaacb4f877ca5caacf/x2ww_5npv_210520.jpg')
        await sleep(time)
        stop()
    }
    function stop(){
        direction = null
          let shipElement = alienShip('https://github.com/Rollsroyce95/milestone-project-/blob/bedeab1acd47fa48f2a28cdaacb4f877ca5caacf/x2ww_5npv_210520.jpg')
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
