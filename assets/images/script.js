function initMap() {
    var location = {
        lat: 29.512,
        lng: -98.241
    }
    var options = {
        center: location,
        zoom: 13
    }
    map = new google.maps.Map(document.getElementById("map"), options);
}