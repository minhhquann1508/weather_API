// let search = document.querySelector('.search')
// let city = document.querySelector('.city')
// let country = document.querySelector('.country')
// let value = document.querySelector('.value')
// let desc = document.querySelector('.desc')
// let visibility  = document.querySelector('.visibility span')
// let wind = document.querySelector('.wind span')
// let sun= document.querySelector('.sun span')
// let time = document.querySelector('.time');


// async function changeWeatherUI () {
//     let capitalValue = search.value.trim();
//     let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=bc14dc4569ff05579098e396dd345d9e`;
//     let data = await fetch(apiURL).then(res => res.json());
//     if(data.cod === 200) {
//         city.innerText = data.name;
//         country.innerText = data.sys.country;
//         visibility.innerText = data.visibility + 'm';
//         wind.innerText = data.wind.speed + 'm/s';
//         sun.innerText = data.main.humidity ;
//         value.innerText = Math.floor(data.main.temp - 273.15);
//         desc.innerText = data.weather[0] ? data.weather[0].main : '';
//         time.innerText = new Date().toLocaleString('vi')
//         console.log(data);
//     }
//     else {
//         console.log('not found')
//     }
// }
// search.addEventListener('keypress',function (e) {
//     if(e.code === 'Enter') {
//         changeWeatherUI ()
//     }
// })



// let search = document.querySelector('.search')
// let city = document.querySelector('.city')
// let country = document.querySelector('.country')
// let temp = document.querySelector('.temperature')
// let desc = document.querySelector('.desc')
// let visibility = document.querySelector('.visibility')
// let wind  = document.querySelector('.wind')
// let huminity = document.querySelector('.huminity')
// window.addEventListener('load',checkWeather)
// async function checkWeather  () {
//     let searchValue = search.value
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=bc14dc4569ff05579098e396dd345d9e`
//     let data = await fetch(url).then(res => res.json())
//     if(data.cod === 200) {
//         let tempValue = Math.floor(data.main.temp - 273.15)
//         city.innerHTML = data.name;
//         country.innerHTML = data.sys.country;
//         desc.innerHTML = data.weather[0] ? data.weather[0].main : '';
//         visibility.innerHTML = data.visibility;
//         wind.innerHTML = data.wind.speed;
//         huminity.innerHTML = data.main.humidity;
//         if(tempValue < 18) {
//             console.log('cold')
//             temp.innerHTML = tempValue + 'C';
//         }
//         else if(tempValue >=18 && tempValue <=25) {
//             console.log('normal')
//             temp.innerHTML = tempValue + 'C';
//         }

//         else if(tempValue > 25) {
//             console.log('hot');
//             temp.innerHTML = tempValue + 'C';
//         }
//         console.log(data)
//     }
//     else {
//         console.log(data)
//     }
    
// }
// search.addEventListener('keypress',function(e) {
//     if(e.code === 'Enter') {
//         checkWeather()
//     }
// })
let myBody = document.getElementById('myBody')
let city = document.querySelector('.city');
let search = document.getElementById('search');
let country = document.querySelector('.country');
let time = document.querySelector('.times');
let temp = document.querySelector('.temp');
let stat = document.querySelector('.stat');
let img = document.querySelector('.img');
let weather = document.getElementById('weather');
let error = document.querySelector('.error');
async function checkWeather () {
    let searchValue = search.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=bc14dc4569ff05579098e396dd345d9e`;
    let data =await fetch(url).then(res => res.json());
    if(data.cod === 200) {
        let tempValue = Math.floor(data.main.temp - 273.15)
        city.innerHTML = data.name +',';
        country.innerHTML = data.sys.country;
        temp.innerText = tempValue + 'C';
        if(tempValue <= 10) {
            img.src = `./image/Snowfalling-bro.png`;
        }
        else if (tempValue > 10 && tempValue <= 18) {
            img.src = `./image/Raining-cuate.png`;
        }
        else if (tempValue > 18 && tempValue <= 25) {
            img.src = `./image/Windy day-amico.png`;
        }
        else if (tempValue > 25) {
            img.src = `./image/Sunny day-rafiki.png`;
        }
        stat.innerHTML = data.weather[0] ?  data.weather[0].main : "";
        }
    else {
        weather.style.display = 'none'
        error.style.display = 'flex'
        console.log(data)
    }
}
window.addEventListener('keypress',function (e) {
    if(e.code === 'Enter') {
        checkWeather ();
    }
})




































