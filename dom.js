let btn = document.querySelector('#btn');
let pLocation = document.querySelector('#p-location');
let pIp = document.querySelector('#p-ip');
let pIsp = document.querySelector('#p-isp');
let pUtc = document.querySelector('#p-utc');
const msgError = document.querySelector('.error')
const result = document.querySelector('.result')

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
    result.style.display = "grid";
    console.log(mymap)
    mymap.remove();
    if(ip[0] === "w" && ip[1] === "w" && ip[2] === "w" && ip[3] === ".") {
        getDomain(ip)
        console.log('hello')
    } else {
    getAddress(ip)
    }
})

