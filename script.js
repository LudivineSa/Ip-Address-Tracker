let coordonate = function(obj) {
    if(obj.code === 422) {
        lat = 0;
        lgn = 0;
        getInfoClear()
    } else {
        console.log(obj)
    let lat = obj.location.lat;
    let lgn = obj.location.lng;
    coordonates = [lat, lgn];
    }

    mymap = L.map('mapid').setView(coordonates, 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZml6cml3ZXIiLCJhIjoiY2tzdzcwZ2ZmMXd4OTJ1bWQ0OGphdDhqeSJ9.1OwofXyKSukVZXhYL0FszA'
    }).addTo(mymap);

    //The pointer on the map

    
    let myIcon = L.icon({
        iconUrl: 'images/icon-location.svg',
    });

    L.marker((coordonates), {icon:myIcon}).addTo(mymap)
        .bindPopup(coordonates + ' ' + obj.isp)
        .openPopup();


    getInfo(obj)
}



let ip = '';

let getAddress = function(ip) {
url = 'https://geo.ipify.org/api/v1?apiKey=at_kvKFfSddvJQQiH8a5cw8dmRtWtg0O&ipAddress=' + ip 
fetch(url)
  .then(response => response.json())
  .then(data => coordonate(data))
  .catch(error => errorMessage(error))
}

getAddress(ip)

let errorMessage = function(){
    msgError.style.display = "block"
}



