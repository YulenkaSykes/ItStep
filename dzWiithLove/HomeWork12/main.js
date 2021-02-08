// ?Task 1

function Events () { 
    const p = document.querySelector("p");
    const data = p.textContent.split("");
    
    p.textContent = "";
    
      class Span{
        constructor(letter){
          const span = document.createElement("span");
          span.textContent = letter;
    
          span.addEventListener("click", function(){
            return this.classList.add("selected");
          });
    
          return span;
        }
      }
    
      data.forEach(e=>p.appendChild(new Span(e)));
      
    }
    
    Events();

// Task 2

// function Events(){
//   const button = document.querySelector("button");
   
//   button.addEventListener("mousedown", function(){
//    let interval = setInterval(()=>{
//          alert("Yulka pahnet vkusno")
//       },3000); 

//      button.addEventListener("mouseup", function(){
//      clearInterval(interval);
//      });

//   });
  
// }

// Events();