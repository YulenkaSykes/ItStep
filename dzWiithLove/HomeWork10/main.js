class Alert{
    constructor(type, text, time){
 
           const colors = {
        info : 'rgb(72,168,212)',
        primary : 'rgb(125,146,141)',
        success : 'rgb(84,204,86)',
        danger : 'rgb(139,0,0)',
        warning :' rgb(193,216,68)',
        secondary : 'rgb(95,111,107)'
      }
 
           const div  = document.createElement("div");
           const p = document.createElement("p");
           p.textContent = text;
 
           div.appendChild(p);
 
           div.style.backgroundColor = colors[type]!==undefined ?
       colors[type] :"white";
       
       document.body.appendChild(div)
 
       return setTimeout(()=>{
            document.body.removeChild(div)
         },time);
       
    }
 }

 let sample  = new Alert("success", "Tsoi is alive!", 3000);
 