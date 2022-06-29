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
    var location = locationEl.value;
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params:{
            address: location,
            key: 'AIzaSyCfxIjECtlR69B-XRURzPSvP9Sdb_Ae73k'
        }
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
}

// var options = {
//     center: longlat().value,
//     zoom: 10
// }

function btn_handler() {
    geocode();
}