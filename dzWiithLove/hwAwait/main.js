    const button = document.querySelector('button');
    const main = document.querySelector('main');

    class Card{
        constructor(data){
        const card = `<div class = "card">
        <h1>${data['original_title']}</h1>
        <input type = "range" step = "0.1" min = "0.1" max = "5000" value = "${+data['popularity']}" />
        <p>${data['overview']}</p>
        </div>`

    return main.innerHTML += card;
        }
    }

    // Task2
    function list (data) {
        let res = [];
        data.forEach(e=>res.push(e['original_title']))
        return res;
   }

    button.onclick = function(){
        fetch(`http://api.themoviedb.org/3/movie/popular?api_key=2e901364c3d103dcb00ced520e9bca3c`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        
            console.log(list(data.results))

            data.results.sort((e1,e2)=>e2.popularity - e1.popularity)
            .forEach(e=> new Card(e))
            // data.results.forEach(e => new Card(e));

        })
    }

