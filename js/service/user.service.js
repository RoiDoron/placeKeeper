'use strict'
const USER_DB = 'userDB'

var user = {
    email: '',
    txtColor: '',
    bgColor: '',
    bgColor: '',
    birthDate: '',
    birthTime: ''
}

function getUser() {
    return user = loadFromStorage(USER_DB)
}

function backgroundColor(color) {
    user.bgColor = color
    console.log(user);
    _saveUser()
}

function Color(color) {
    user.txtColor = color
    console.log(user);
    _saveUser()
}

function Age(age) {
    user.age = age
    _saveUser()
}

function BirthDay(date) {
    user.birthDate = date
    _saveUser()
}

function BirthTime(time) {
    user.birthTime = time
    _saveUser()
}

function setEmail(email) {
    user.email = email
    _saveUser()
}

function _saveUser() {
    saveToStorage(USER_DB, user)
}
