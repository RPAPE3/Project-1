var locationEl = document.querySelector('#zipCode');

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
        console.log(response);
        var longLat = response.data.results[0].geometry.location;
        var options = {
            center: longLat,
            zoom: 12
        }
        map = new google.maps.Map(document.getElementById("map"), options);
    })
    .catch(function(error){
        console.log(error);
    })
}


function btn_handler() {
    geocode();
}