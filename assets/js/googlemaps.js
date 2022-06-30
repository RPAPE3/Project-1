var locationEl = document.querySelector('#zipCode');
var userStory = ("TT - Difficult - 150") //set = to document.querySelector()
var fakeUsers = [
    "RP - Difficult - 150",
    "JS - Difficult - 150",
    "JC - Difficult - 150",
    "RW - Difficult - 60",
    "CM - Difficult - 105",
    "JL - Difficult - 75",
    "AS - Difficult - 45",
    "RB - Difficult - 15",
    "TB - Difficult - 0",
    "SH - Difficult - 150"
]

var fakeAddress = [
    { lat: 33.469, lng: -112.123 },
    { lat: 32.254, lng: -110.974 },
    { lat: 33.306, lng: -111.841 },
    { lat: 25.762, lng: -80.192 },
    { lat: 34.052, lng: -118.244 },
    { lat: 47.606, lng: -122.332 },
    { lat: 42.963, lng: -85.668 },
    { lat: 41.257, lng: -95.935 },
    { lat: 40.712, lng: -74.006 },
    { lat: 29.513, lng: -98.241 },
]


function autoC() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('zipCode'),
        {
            types: ['(regions)'],
            componentRestrictions: { 'country': ['US'] }
        }
    );
    autocomplete.addListener('zipCode');
}

function geocode () {
    var location2 = locationEl.value;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params:{
            address: location2,
            key: 'AIzaSyCfxIjECtlR69B-XRURzPSvP9Sdb_Ae73k'
        }
    })
    .then(function(response){
        // console.log(response);
        var longLat = response.data.results[0].geometry.location;
        var options = {
            center: longLat,
            zoom: 12
        }
        var map = new google.maps.Map(document.getElementById("map"), options);
        var infoWindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            position: longLat,
            map: map,
            optimized: false,
        })
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(userStory);
            infoWindow.open(marker.getMap(), marker);
        })
        for (let i = 0; i < fakeAddress.length; i++) {
            var infoWindow2 = new google.maps.InfoWindow() 
            var marker2 = new google.maps.Marker({
                position: fakeAddress[i],
                map: map,
                optimized: false
            })
            marker2.addListener("click", () => {
                infoWindow2.close();
                infoWindow2.setContent(fakeUsers[i]);
                // console.log(fakeUsers[i])
                infoWindow2.open(marker2.getMap(), marker2);
            })
         }
        })  
    
    .catch(function(error){
        console.log(error);
    })
}

// function clusterMarkers () {
//     for (let i = 0; i < fakeAddress.length; i++) {
//     var infoWindow2 = new google.maps.InfoWindow()
//     var marker2 = new google.maps.Marker({
//         position: fakeAddress[i],
//         optimized: false
//     })
//  }

//     marker2.addListener("click", () => {
//         infoWindow2.close();
//         infowindow2.setContent(fakeUsers[i]);
//         infoWindow2.open(marker2.getMap(), marker2);
//     })
// }      

function btn_handler() {
    geocode();
    // clusterMarkers();
}