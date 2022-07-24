const neco = document.getElementById("neco");
const cactus = document.getElementById("cactus");


document.addEventListener("keydown", function(event){
    jump();
});

 function jump(){
   if (neco.classList != "jp") {
        neco.classList.add("jp")
   } 
   setTimeout(function(){
        neco.classList.remove("jp")
   },300)
 }


let alive = setInterval( function(){
    let necoTop = parseInt(window.getComputedStyle(neco).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && necoTop >= 140){
        alert("GAME OVER!!")
    }
}, 10)