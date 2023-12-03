const backendUrl = "http://127.0.0.1:3000"
const body = document.querySelector('body')

const createCard = (data) => {
    const card = document.createElement('div');
    card.classList.add('card')
    const img = document.createElement('img')
    img.src = data.thumbnail_url;
    card.appendChild(img)
    const p = document.createElement('p')
     p.textContent = data.short_desc
    card.appendChild(p)
    body.appendChild(card)
}


fetch(backendUrl + "/titles").then(res=>res.json()).then(r=>{console.log(r); return r }).then(data=> data.forEach(entry=> createCard(entry)))