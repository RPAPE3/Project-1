let locationEl = document.querySelector('#zipCode');
var userNameEl = document.querySelector('#username');

var transferData = document.location.search;
var userStory;
// console.log(userStory)

var scoreArray = transferData.split('&')[2];
var score = scoreArray.split('=')[1];

var categoryArray = transferData.split('=')[1];
var category = categoryArray.split('&')[0];

var difficultyArray = transferData.split('&')[1];
var difficulty = difficultyArray.split('=')[1];
console.log(category, score, difficulty)

const fakeUsers = [
    `Username: RPape3 <br> Score: 150 <br> Category: Music <br> Difficulty: Hard`,
    `Username: JSumba7 <br> Score: 150 <br> Category: Music <br> Difficulty: Hard`,
    `Username: JCoranguez18 <br> Score: 150 <br> Category: Music <br> Difficulty: Hard`,
    `Username: RWilcox31 <br> Score: 35 <br> Category: Music <br> Difficulty: Easy`,
    `Username: CMartin51 <br> Score: 100 <br> Category: Music <br> Difficulty: Medium`,
    `Username: JLopez2 <br> Score: 75 <br> Category: Music <br> Difficulty: Hard`,
    `Username: AShearouse45 <br> Score: 45 <br> Category: Music <br> Difficulty: Hard`,
    `Username: RBarton0 <br> Score: 75 <br> Category: Music <br> Difficulty: Hard`,
    `Username: TBrady12 <br> Score: 0 <br> Category: Music <br> Difficulty: Easy`,
    `Username: SHeinen22 <br> Score: 150 <br> Category: Music <br> Difficulty: Hard`
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

function btn_handler(event) {
    event.preventDefault();
    geocode();
    userStory = (`Username: ${userNameEl.value} <br>
    Score: ${score} <br>
    Category: ${category} <br>
    Difficulty: ${difficulty}`); 
}