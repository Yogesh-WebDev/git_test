const citySelect=document.querySelector('#citySelect');
const unitSelect=document.querySelector('#unitSelect');
const city=document.querySelector('#cityName');
const country=document.querySelector('#country');
const img=document.querySelector('#img');
const description=document.querySelector('#description');
const feelsLike=document.querySelector('#feelsLike');
const humidity=document.querySelector('#humidity');
const lat=document.querySelector('#lat');
const lon=document.querySelector('#lon');
const pressure=document.querySelector('#pressure');
const sunrise=document.querySelector('#sunrise');
const sunset=document.querySelector('#sunset');
const temp=document.querySelector('#temp');
const temp_max=document.querySelector('#temp_max');
const temp_min=document.querySelector('#temp_min');
const windDeg=document.querySelector('#windDeg');
const windSpeed=document.querySelector('#windSpeed');

async function getCurrentWeather (scanCity,scanUnit){
    let urlString=`https://api.openweathermap.org/data/2.5/weather?q=${scanCity}&units=${scanUnit}`;
    const response=await fetch(urlString,{ mode: 'cors' });
    const data = await response.json();
    //console.log(response);
    console.log(urlString);
    console.log(data);
    return data;
};
async function getDetailsObject(scanCity,scanUnit){
    const data= await getCurrentWeather(scanCity,scanUnit);
    console.log(data.sys);
    const weatherObject={
        name:   data.name,
        feelsLike:  data.main.feels_like,
        temp:   data.main.temp,
        temp_min:   data.main.temp_min,
        temp_max:   data.main.temp_max,
        pressure:   data.main.pressure,
        humidity:   data.main.humidity,
        main:   data.weather[0].main,
        description:    data.weather[0].description,
        icon:   data.weather[0].icon,
        windSpeed:  data.wind.speed,
        windDeg:    data.wind.deg,
        lon:    data.coord.lon,
        lat:    data.coord.lat,
        sunrise:    data.sys.sunrise,
        sunset:     data.sys.sunset,
        country:    data.sys.country,
    };
   
    return weatherObject;
};
async function print(scanCity,scanUnit){
    const obj= await getDetailsObject(scanCity,scanUnit);
    console.log(obj);
   
    city.innerHTML=`<h1>${obj.name}</h1>`;
    img.src=`http://openweathermap.org/img/wn/${obj.icon}@2x.png`;
    country.innerHTML=`<h6>Country:     ${obj.country}</h6>`;
    description.innerHTML=`<h6>Description:     ${obj.description}</h6>`;
    feelsLike.innerHTML=`<h6>Feels Like:     ${obj.feelsLike}</h6>`;
    humidity.innerHTML=`<h6>Humidity:     ${obj.humidity}</h6>`;
    lat.innerHTML=`<h6>Latitude:     ${obj.lat}</h6>`;
    lon.innerHTML=`<h6>Longitude:     ${obj.lon}</h6>`;
    pressure.innerHTML=`<h6>Pressure:     ${obj.pressure}</h6>`;
    sunrise.innerHTML=`<h6>Sunrise:     ${obj.sunrise}</h6>`;
    sunset.innerHTML=`<h6>Sunset:     ${obj.sunset}</h6>`;
    temp.innerHTML=`<h6>Temperature:     ${obj.temp}</h6>`;
    temp_max.innerHTML=`<h6>temp_max:     ${obj.temp_max}</h6>`;
    temp_min.innerHTML=`<h6>temp_min:     ${obj.temp_min}</h6>`;
    windDeg.innerHTML=`<h6>windDeg:     ${obj.windDeg}</h6>`;
    windSpeed.innerHTML=`<h6>Wind Speed:     ${obj.windSpeed}</h6>`;
    
}

print('pune', 'metric');
let locations = ["Pune","Medellin","Nice","Solapur","Loja","Kunming","Sao Paulo","Sydney","Canary Islands","Malaga","San Diego","Delhi"];

locations.forEach((location)=>{
    let option = document.createElement("option");
    option.innerText = option.value = location;
    citySelect.appendChild(option);
})
unitSelect.onchange = toggleChanged;
citySelect.onchange = toggleChanged;

function toggleChanged() {
    console.log(unitSelect.value);
    console.log(citySelect.value);

    if (citySelect.value == '') {
        print('pune', unitSelect.value);
    } else {
        print(citySelect.value, unitSelect.value);
    }
}