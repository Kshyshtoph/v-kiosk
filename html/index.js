const body = document.querySelector('body')

const baseCb = () => {
    try{
        return backendBaseUrl
    } catch(e){
        return "api"
    }
}
const backendUrl = baseCb()

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

const d00pa = "ENV_DOOPA"


fetch(backendUrl + "/titles").then(res => res.json()).then(r => { console.log(r); return r }).then(data => data.forEach(entry => createCard(entry)))