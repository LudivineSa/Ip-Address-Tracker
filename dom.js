let btn = document.querySelector('#btn');
let pLocation = document.querySelector('#p-location');
let pIp = document.querySelector('#p-ip');
let pIsp = document.querySelector('#p-isp');
let pUtc = document.querySelector('#p-utc');
const msgError = document.querySelector('.error')

let getInfo = function(obj) {
    pIsp.textContent = obj.isp;
    pIp.textContent = obj.ip;
    pLocation.textContent = obj.location.city + ' ' + obj.location.postalCode;
    pUtc.textContent = 'UTC ' + obj.location.timezone;
}

let getInfoClear = function(){
    pIsp.textContent = '';
    pIp.textContent = '';
    pLocation.textContent = '';
    pUtc.textContent = '';
}

btn.addEventListener('click', function(){
    ip = document.querySelector('#ip-adress').value;
    msgError.style.display = "none";
    console.log(mymap)
    mymap.remove();
    getAddress(ip)
})