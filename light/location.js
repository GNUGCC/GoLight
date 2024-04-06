/*jslint long,name,node*/

const {Geolocation} = require("@capacitor/geolocation");

async function getLocation(callback) {
    const position = await Geolocation.getCurrentPosition();

    callback({
        accuracy: position.coords.accuracy,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    });
}

function getDistance(lng1, lat1, lng2, lat2) {
    if (!lng1 || !lat1 || !lng2 || !lat2) {
        return Number.MAX_VALUE;
    }

    let theta = lng1 - lng2;
    let radtheta = Math.PI * theta / 180;
    let radlat1 = Math.PI * lat1 / 180;
    let radlat2 = Math.PI * lat2 / 180;

    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;

    let miles = dist * 60 * 1.1515;
    let kilometers = miles * 1.609344;

    return Math.round(kilometers * 1000) / 1000;
}

module.exports = {
    getDistance,
    getLocation
};
