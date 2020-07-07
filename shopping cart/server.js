// first part : decalartion des variables 
// console.log("2"-2)
let v = document.querySelectorAll('.valeur')
let p = document.querySelectorAll('.plus')
let m = document.querySelectorAll('.minus')
let prix=document.querySelectorAll('.val')
let delet = document.querySelectorAll(".big")
var total= document.getElementById("total")
let heart=document.querySelectorAll(".heart")
const whiteHeart = '\u2661';
const blackHeart = '\u2665';
let button = document.querySelectorAll('.heart');


var somme=[0,0,0],tot=0
// functions or events

  

for (let i = 0; i < p.length; i++) {
  
  m[i].addEventListener("click",function remov(){
      if(v[i].innerHTML>0)
       v[i].innerHTML-- 
    somme[i]=v[i].innerHTML*prix[i].innerHTML
    tot=0
    for(let i=0;i<somme.length;i++)
     tot+=somme[i]
    total.innerHTML=tot
    console.log(somme)
    console.log('tot=',tot)
  })

  p[i].addEventListener("click",function add(){
    v[i].innerHTML++;
    somme[i]=v[i].innerHTML*prix[i].innerHTML
    tot=0
    for(let i=0;i<somme.length;i++)
     tot+=somme[i]
    total.innerHTML=tot
    console.log(somme)
    console.log('tot=',tot)
  })
  
}

  for(let i=0;i<delet.length;i++){
    delet[i].addEventListener("click",function remove(){
          delet[i].parentElement.parentElement.parentElement.remove()
    somme[i]=0
    tot=0
    for(let i=0;i<somme.length;i++)
     tot+=somme[i]
    total.innerHTML=tot
    })
  }



  for(let i=0;i<button.length;i++){
  button[i].addEventListener('click', function toggle() {
    const like = button[i].textContent;
    if(like==whiteHeart) {
      button[i].textContent = blackHeart;
    } else {
      button[i].textContent = whiteHeart;
    }
  })
}


