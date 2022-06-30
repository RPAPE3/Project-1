const locationEl = document.querySelector('#zipCode');
const userStory = ("TT - Difficult - 150") //set = to document.querySelector()
const fakeUsers = [
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

const fakeAddress = [
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
    const location2 = locationEl.value;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params:{
            address: location2,
            key: 'AIzaSyCfxIjECtlR69B-XRURzPSvP9Sdb_Ae73k'
        }
    })
    .then(function(response){
        const longLat = response.data.results[0].geometry.location;
        const options = {
            center: longLat,
            zoom: 12
        }
        const map = new google.maps.Map(document.getElementById("map"), options);
        const infoWindow = new google.maps.InfoWindow();
        const marker = new google.maps.Marker({
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
            const infoWindow2 = new google.maps.InfoWindow() 
            const marker2 = new google.maps.Marker({
                position: fakeAddress[i],
                map: map,
                optimized: false
            })
            clusterMarkers (marker2, fakeUsers[i], infoWindow2)
        }
    })
    .catch(function(error){
        console.log(error);
    })
}

function clusterMarkers (marker2, fakeUser, fakeWindow) {
    marker2.addListener("click", () => {
                fakeWindow.close();
                fakeWindow.setContent(fakeUser);
                fakeWindow.open(marker2.getMap(), marker2);
    })
}

function btn_handler() {
    geocode();
}