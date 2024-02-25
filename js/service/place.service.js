'use strict'
 const places = []


function createPlaces(){
createPlace(31.813603,34.772725,'Roi house')
createPlace(32.061099,34.791867,'Menora')

}


 function createPlace(lat,lng,name){
    return {
        id: makeId,
        lat,
        lng,
        name
    }
 }