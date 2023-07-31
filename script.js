const title = document.querySelector('h1');
const city = document.getElementsByClassName('city');
const API_KEY = "936ea4261dc14830906155221232907"


async function getWeather(country) {
    //api call at weatherapi
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key="+API_KEY+"&q="+country+"");
    const apiData = await response.json();

    weatherData(apiData);
    console.log(apiData);

    title.textContent = apiData.current.condition.text;

}

//make accessibles data
function weatherData(apiData) {
    const weatherInfo = {
        name: apiData.location.name,
        time: apiData.location.localtime,
        temp: apiData.current.temp_c,
        condition: apiData.current.text,
        clouds: apiData.current.cloud,
        feelsLike: apiData.current.feelslike_c,
        humidity: apiData.current.humidity,
    }
}
getWeather("congo");




// fetch("https://api.weatherapi.com/v1/current.json?key=936ea4261dc14830906155221232907&q=london")
// .then(function(responseK) {
//     return responseK.json();
// })
// .then(function(response) {
//     title.textContent = response.current.condition.text
// })
