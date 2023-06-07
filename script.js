
let a = document.getElementsByClassName("box")
var p=true
for(let e of a){
    e.addEventListener("click",(event)=>{
        var t = event.target   
        square(t)
       })
       
}

let p1=document.getElementById("player1")
let p2=document.getElementById("player2")


function square(sq){
if(p==true){
   if(sq.innerHTML!="X" && sq.innerHTML!="O"){
    sq.innerHTML="X"
    p2.classList.toggle("back")
    p1.classList.toggle("back")
    p=false
   }
   
}else{
  if(sq.innerHTML!="X" && sq.innerHTML!="O"){
    sq.innerHTML="O"
    p1.classList.toggle("back")
    p2.classList.toggle("back")
    p=true
  }
 }
 check_result(a)
}

function check_result(a){
    
if(a[0].innerHTML=="X" && a[1].innerHTML=="X" && a[2].innerHTML=="X"){
    alert("player1 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[3].innerHTML=="X" && a[4].innerHTML=="X" && a[5].innerHTML=="X"){
    alert("player1 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[6].innerHTML=="X" && a[7].innerHTML=="X" && a[8].innerHTML=="X"){
    alert("player1 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[0].innerHTML=="X" && a[3].innerHTML=="X" && a[6].innerHTML=="X"){
    alert("player1 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[1].innerHTML=="X" && a[4].innerHTML=="X" && a[7].innerHTML=="X"){
    alert("player1 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[2].innerHTML=="X" && a[5].innerHTML=="X" && a[8].innerHTML=="X"){
    alert("player1 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[0].innerHTML=="X" && a[4].innerHTML=="X" && a[8].innerHTML=="X"){
    alert("player1 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[2].innerHTML=="X" && a[4].innerHTML=="X" && a[6].innerHTML=="X"){
    alert("player1 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[0].innerHTML=="O" && a[1].innerHTML=="O" && a[2].innerHTML=="O"){
    alert("player2 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[3].innerHTML=="O" && a[4].innerHTML=="O" && a[5].innerHTML=="O"){
    alert("player2 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[6].innerHTML=="O" && a[7].innerHTML=="O" && a[8].innerHTML=="O"){
    alert("player2 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[0].innerHTML=="O" && a[3].innerHTML=="O" && a[6].innerHTML=="O"){
    alert("player2 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[1].innerHTML=="O" && a[4].innerHTML=="O" && a[7].innerHTML=="O"){
    alert("player2 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[2].innerHTML=="O" && a[5].innerHTML=="O" && a[8].innerHTML=="O"){
    alert("player2 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[0].innerHTML=="O" && a[4].innerHTML=="O" && a[8].innerHTML=="O"){
    alert("player2 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}else if(a[2].innerHTML=="O" && a[4].innerHTML=="O" && a[6].innerHTML=="O"){
    alert("player2 wins")
    setTimeout(()=>{
       location.reload()
    },2000)
    
}

}
 
