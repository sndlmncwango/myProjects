const player = document.querySelector("#player");
const container = document.querySelector("#container");
let leftRifgtMove = 0;
let upDownMove = 0;
window.addEventListener("keydown",(e)=>{
    rightMove(e);
    leftMove(e);
    upMove(e);
    downMove(e);
})

function rightMove(e){
    if(e.key === "ArrowRight" && leftRifgtMove > -700){
        leftRifgtMove -= 20;
        player.style.right = `${leftRifgtMove}px`
    }
}
function leftMove(e){
    if(e.key === "ArrowLeft" && leftRifgtMove < 0){
        leftRifgtMove += 20;
        player.style.right = `${leftRifgtMove}px`
    }
}
// function upMove(e){
//     if(e.key === "ArrowUp" && upDownMove < 0){
//     upDownMove += 20;
//     player.style.bottom = `${upDownMove}px`;

//     }
// }
// function downMove(e){
//     if(e.key === "ArrowDown" && upDownMove > -600){
//     upDownMove -= 20;
//     player.style.bottom = `${upDownMove}px`;
//     }
// }
//random enermies
function createEnermy(){
    for(let i=0;i<4;i++){
    // const topRandom = Math.floor(Math.random()*300);
    const leftRandom = Math.floor(Math.random()*550);
    enermy = document.createElement("div");
    enermy.setAttribute("class", "enermy");
    container.appendChild(enermy)
    enermy.style.left = `${leftRandom}px`;
    console.log(leftRandom)
    }
}
createEnermy();