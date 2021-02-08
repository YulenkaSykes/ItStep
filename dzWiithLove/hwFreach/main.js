const input = document.querySelector('input');
const button = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');
const audio = document.querySelector('audio');


class Card {

    constructor(data) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('cover');
        img.src = data.album['cover_medium'];

        card.appendChild(img);
        const requiedInfo = ['title_short', 'rank'];

        const div = document.createElement('div');
        div.classList.add('data-wrapper');
        card.appendChild(div);

        for (let i in data) {
            let p = document.createElement('p')
            requiedInfo.includes(i) && [
                p.textContent = `${i} : ${data[i]}`,
                div.appendChild(p)
            ]
        }

        let p = document.createElement('p');
        p.textContent = data.artist.name;
        div.appendChild(p);

        const button = document.createElement('button');
        button.textContent = 'Play ▶️';
        div.appendChild(button);

        button.onclick = function() {
            this.textContent = 'Stop ⏸';
            audio.src = data.preview;
            audio.play();
        }

        return wrapper.appendChild(card);
    }

}

button.addEventListener('click', function() {
    const DATA = async () => {
        await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${input.value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "dde05af90bmsh85cca10b493bae1p1300aejsn7261fc663b7e",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        data.data.forEach(e => {
            new Card(e)
        })
    })
        .catch(err => {
            console.error(err);
        });  
    } 

    return DATA();
})