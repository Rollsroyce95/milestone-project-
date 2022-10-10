

 
 shipInMotion = npcShip(-750,565)
//attribution:"https://opengameart.org/users/alucard"

function alienShip(url){
    let ship = document.createElement('img')
    ship.src = url
    ship.style.position = 'fixed'
    document.body.append(ship)
    return ship
}
function npcShip(x,y){
    let shipElement = alienShip('https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/%E2%80%94Pngtree%E2%80%94ufo_7077225.png')
    shipElement.height = 900;
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
        shipElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/%E2%80%94Pngtree%E2%80%94ufo_7077225.png"
        await sleep(time)
        stop()
    }
    function stop(){
        direction = null
        shipElement.src = "https://raw.githubusercontent.com/Rollsroyce95/milestone-project-/main/%E2%80%94Pngtree%E2%80%94ufo_7077225.png"
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
