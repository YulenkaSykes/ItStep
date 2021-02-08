const input = document.querySelector("input");
const button  = document.querySelector("button");

class Alert{
   constructor (text){

          const div  = document.createElement("div");
          const p = document.createElement("p");
          p.textContent = text;

          div.appendChild(p);

          div.style.backgroundColor = `rgb(${Math.floor(Math.random()*250)},${Math.floor(Math.random()*250)},${Math.floor(Math.random()*250)})`;
      document.body.appendChild(div);
      div.style.animation = `appends 0.6s linear infinite`;
      
   }
}

button.addEventListener("click", function(){
     new Alert(input.value)
});