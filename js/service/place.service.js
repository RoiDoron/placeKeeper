'use strict'
var gPlaces

_createPlaces()



function getPlaces() {
    
    return gPlaces
}

function RemovePlace(placeId) {
    const placesIdx = gPlaces.findIndex(place => place.id === placeId)
    gPlaces.splice(placesIdx, 1)
    // _saveBooks()
}

function getPlaceById(placeId) {
    const place = gPlaces.find(place => place.il === placeId)
    return place

}

function addPlace(name, lat, lng, zoom) {
    const newPlace = _createPlace(lat, lng, name,zoom)
    gPlaces.push(newPlace)
    return newPlace
}

function _createPlaces() {
    gPlaces = [
        _createPlace(31.813603, 34.772725, 'Roi house'),
        _createPlace(32.061099, 34.791867, 'Menora')
    ]

}

function _createPlace(lat, lng, name,zoom) {
    return {
        id: makeId(),
        lat,
        lng,
        name
    }
}