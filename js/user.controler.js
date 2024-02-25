'use strict'

function onInit() {
    renderSite()
}

function renderSite() {
    const user = getUser()
    const elBody = document.querySelector('body')
    elBody.style.color = user.txtColor
    elBody.style.backgroundColor = user.bgColor
}

function onBackgroundColor(color) {
    backgroundColor(color)
}

function onColor(color) {
    Color(color)
}

function onAge(age) {
    const elSpan = document.querySelector('span.age')
    elSpan.innerText = age
    Age(age)
}

function onBirthDay(date) {
    BirthDay(date)
}

function onBirthTime(time) {
    BirthTime(time)
}

function onSetEmail(email) {
    console.log(email);
    
    setEmail(email)
}