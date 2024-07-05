const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '44605a0ffamsh42d9763c4779623p1058d8jsn3b2fec38e49f',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};

const getweather = (city)=>{

    cityName.innerHTML = city
    fetch('https://yahoo-weather5.p.rapidapi.com/weather?format=json&u=f&location='+ city, options)
        .then(response => response.json())
        .then(response => {




            console.log(response)


            pubDate.innerHTML = response.pubDate
            chill.innerHTML = Response.chill
            direction.innerHTML = response.direction
            speed.innerHTML = response.speed
            humidity.innerHTML = response.humidity
            humidity1.innerHTML = response.humidity1
            visibility.innerHTML = response.visibility
            pressure.innerHTML = response.pressure
            pressure1.innerHTML = response.pressure1
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temperature.innerHTML = response.temperature
            temperature1.innerHTML = response.temperature1
            text.innerHTML = response.text
            code.innerHTML = response.code
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getweather(city.value)
})

getweather("Delhi")
