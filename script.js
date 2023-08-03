const API_KEY = "936ea4261dc14830906155221232907"
let nameT = document.querySelector('#name');
let time = document.querySelector('.time');
let temprature = document.querySelector('.temprature');
let cloudy = document.querySelector('#cloudy');
let feelsLike = document.querySelector('.feelsLike');
let humidity = document.querySelector('#humidity');
let form = document.getElementById("dataForm")




async function getWeather(country="nepal") {
    //api call at weatherapi
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key="+API_KEY+"&q="+country+"");
    const apiData = await response.json();

    console.log(apiData);

    //call a function to 
    const getRawData = weatherData(apiData);
    console.log(getRawData, "this is the raw data")

    //assign values to dom elements
    nameT.textContent = getRawData.cityName;
    time.textContent = getRawData.time;
    temprature.textContent = getRawData.temp;
    cloudy.textContent = getRawData.currentSituation;
    feelsLike.textContent = getRawData.feelsLike;
    humidity.textContent = getRawData.humidity;


}

//make accessibles data
function weatherData(apiData) {
    const weatherInfo = {
        cityName: apiData.location.name,
        time: apiData.location.localtime,
        temp: apiData.current.temp_c,
        currentSituation: apiData.current.condition.text,
        clouds: apiData.current.cloud,
        feelsLike: apiData.current.feelslike_c,
        humidity: apiData.current.humidity,
    }
    return weatherInfo;
}

//data manipulation from form
form.addEventListener('submit', function(e) {
     e.preventDefault(); //prevent the form from submitting auto

     let userInput = document.getElementById("uInput");
     let submitBtn = document.getElementsByClassName('search-btn');

     var inputLocation = userInput.value;

    // Perform validation if necessary
    if (!inputLocation) {
        alert("Please write something");
        return; // Don't proceed with form submission
    }else{
        getWeather(inputLocation);
    }
})
