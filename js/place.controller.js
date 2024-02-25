'use strict'

function onInit() {
    renderSite()
    renderPlaces()
}

function renderSite() {
    const user = getUser()
    const elBody = document.querySelector('body')
    elBody.style.color = user.txtColor
    elBody.style.backgroundColor = user.bgColor
}

function renderPlaces() {
    const places = getPlaces()
    console.log(places);


    const strHTML = places.map(place =>
        `<li>
        <span class="name">${place.name}</span>
        <button onclick="onRemovePlace('${place.id}')" class="delet">x</button>
        <button class="go">Go</button>
    </li>`
    )
    const elUl = document.querySelector('.places-list')

    elUl.innerHTML = strHTML.join('')
}

function onRemovePlace(placeId) {
    RemovePlace(placeId)
    renderPlaces()
}