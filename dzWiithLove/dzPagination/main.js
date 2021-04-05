const input = document.querySelector("input")

const button = document.querySelector("button")

const sections = document.querySelectorAll(".sect")

const cardWrapper = document.querySelector("#card-wrapper")

const buttons = [...document.querySelector(".btn-wrapper").children];

button.addEventListener("click", function(){
    fetch(`http://www.omdbapi.com/?apikey=2a02f365&s=${input.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.Search.forEach((e) => new Card(e, document.querySelector("#card-wrapper")))
        const cards = [...document.querySelector("#card-wrapper").children];
        [...cardWrapper.children].forEach(el=>cardWrapper.removeChild(el));
        [...cards.slice(0, 3)].forEach(el => cardWrapper.appendChild(el));
        buttons.forEach((e, i) => e.addEventListener("click", function(){
            [...cardWrapper.children].forEach(el=>cardWrapper.removeChild(el));
            const currentChilds = cards.slice(i*3, i*3+3);
            currentChilds.forEach(el=>cardWrapper.appendChild(el))
        }))
    })
})

class Card {
    constructor(data, parent){
        
      const card = document.createElement("div")
      card.classList.add('card');
      card.className = "card";
      card.innerHTML += `
            <img src = "${data.Poster}">
            <h3>${data.Title}</h3>
            <p>${data.Year}</p>
      `;
      card.filmId = data.imdbID;

      const button = document.createElement("button")

      button.addEventListener("click", function(){
          fetch(`http://www.omdbapi.com/?apikey=2a02f365&i=${div.filmId}`)
          .then(response => response.json())
          .then(res => {
              console.log(res)
              new BigCard(res, document.querySelector("#big-card-wrapper"))
        })
      })

      button.textContent = "click"

      card.appendChild(button)

      parent.appendChild(card)


    }
}

class BigCard {
    constructor(data, parent){
        parent.innerHTML = `
           <div class = "big-card">
              <img src = "${data.Poster}">
              <h3>${data.Title}</h3>
              <p>${data.Actors}</p>
              <p>${data.Plot}</p>
              <p>${data.Genre}</p>
              <p>${data.Year}</p>
              <input type = "range" min = "0" max = "10" value="${data.imdbRating}">
           </div>

        `
    }
}