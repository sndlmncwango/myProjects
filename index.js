const player = document.querySelector("#player");
let leftRifgtMove = -580;
let upDownMove = 0;
window.addEventListener("keydown",(e)=>{
    rightMove(e);
    leftMove(e);
})

function rightMove(e){
    if(e.key === "ArrowRight"){
        leftRifgtMove -= 20;
        player.style.right = `${leftRifgtMove}px`
        console.log(leftRifgtMove)
    }
}
function leftMove(e){
    if(e.key === "ArrowLeft"){
        leftRifgtMove += 20;
        player.style.right = `${leftRifgtMove}px`
        console.log(leftRifgtMove)
    }
}