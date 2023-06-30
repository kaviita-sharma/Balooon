
n=0,a=0;
function myFunction(){
    var element=document.getElementById("pump2");
    element.classList.remove("pump2");
    element.classList.add("pump2Pressed");
    setTimeout(function(){
        element.classList.remove("pump2Pressed")
    },300);
    element.classList.add("pump2");
    
    ballon();
}

function ballon(){
    n++;
     for(i=n;i<n+1;i++){
      let x="<img src=image/b"+[i]+".png id='baloon' class='baloon'>"
      const n = document.getElementById("balloon");
      n.insertAdjacentHTML("afterbegin",x);

     }
      if(i==10){
        n=0;
      }
     alphabet();
}

function alphabet(){
  a++
  for(i=a;i<a+1;i++){
    let x="<img src=image/alphabet/"+[i]+".png id='alphabe' class='alphabet'>"
    const al=document.getElementById("alphabet");
    al.insertAdjacentHTML("afterbegin",x);
   if(i==26){
    a=0;
  }
}
}

function burst(){
  var burst=document.getElementById("baloon");
  burst.remove();
  var burst1=document.getElementById("alphabe");
  burst1.remove();
}
