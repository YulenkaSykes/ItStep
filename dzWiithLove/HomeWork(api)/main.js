const button = document.querySelector("button");
const input = document.querySelector("input");

const wrapper = document.querySelector(".components-wrapper");
const h3 = document.querySelector("h3");

const select = document.querySelector("select");

class Component {
    
   static element = (text, parent) => {
      const elm = document.createElement("p");
      elm.textContent = text;
      return parent.appendChild(elm);
   }

    constructor(obj) {

        const requiredInfo = ["l","rank","s","y"];
        const component = document.createElement("div");
        component.classList.add("component");
        component.sortData = {};

        const img = document.createElement("img");
        img.src = obj.i.imageUrl;
        img.classList.add("film-cover");
        component.appendChild(img); 

        for(let i in obj) {
        requiredInfo.includes(i) && Component.element(obj[i], component);
        }

        return wrapper.appendChild(component);

    }
    }

    button.addEventListener("click", function(){

    wrapper.children.length > 0 &&  [...wrapper.children].forEach(e=>wrapper.removeChild(e));

    const DATA = async () => {
        fetch(`https://imdb8.p.rapidapi.com/title/auto-complete?q=${input.value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "dde05af90bmsh85cca10b493bae1p1300aejsn7261fc663b7e",
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            },
            
        })
        .then(response => response.json())
        .then(data => {
           console.log(data);
           h3.textContent = `Finded ${data.d.length} movies`;
           data.d.forEach(e=> new Component(e));
        })
        .catch(err => {
            console.error(err);
        });
    }

    return DATA();

    });