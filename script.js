
let a = document.getElementsByClassName("box")
var p=true
var cli=0
var ev=(event)=>{
    var t = event.target  
    cli+=1
    tie_check(cli) 
    square(t)
   }
for(let e of a){
    e.addEventListener("click",ev)     
}

let p1=document.getElementById("player1")
let p2=document.getElementById("player2")


function square(sq){
    sq.removeEventListener('click',ev)
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
res1(0,1,2)
res1(3,4,5)
res1(6,7,8)
res1(0,4,8)
res1(2,4,6)
res1(0,3,6)
res1(1,4,7)
res1(2,5,8)

res2(0,1,2)
res2(3,4,5)
res2(6,7,8)
res2(0,4,8)
res2(2,4,6)
res2(0,3,6)
res2(1,4,7)
res2(2,5,8)
}

function res1(i,j,k){
    if(a[i].innerHTML=="X" && a[j].innerHTML=="X" && a[k].innerHTML=="X"){
        setTimeout(()=>{
            document.body.innerHTML="<h1><b>Player 1 Won</b></h1>"
         },200)
         

        setTimeout(()=>{
           location.reload()
        },2000)
        
    }
}

function res2(i,j,k){
    if(a[i].innerHTML=="O" && a[j].innerHTML=="O" && a[k].innerHTML=="O"){
        setTimeout(()=>{
            document.body.innerHTML="<h1><b>Player 2 Won</b></h1>"
         },200)
         

        setTimeout(()=>{
           location.reload()
        },2000)
        
    }
}

function tie_check(c){
    if(c==9){
        setTimeout(()=>{
            document.body.innerHTML="<h1><b>Tie</b></h1>"
         },200)
         

        setTimeout(()=>{
           location.reload()
        },2000)
        
    }
}
 
