let a = document.getElementsByClassName("box")
var p=true
Array.from(a).forEach(element => {
    element.addEventListener("click",(event)=>{
           square(event.target)
       })
});
let p1=document.getElementById("player1")
let p2=document.getElementById("player2")
function square(sq){
if(p==true){
    sq.innerHTML="X"
    p2.classList.toggle("back")
    p1.classList.toggle("back")
    p=false
}else{
    sq.innerHTML="O"
    p1.classList.toggle("back")
    p2.classList.toggle("back")
    p=true
 }
}