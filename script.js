        const APIkey = "976792969c9a57aa9d13af45b26b040c";
        const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBar = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");

        const weatherIcon = document.querySelector(".weather-icon")

        async function checkWeather(city){
            const response = await fetch(APIurl + city + `&appid=${APIkey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                var data = await response.json();

                console.log(data);

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = data.main.temp + " °C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
                document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";

                if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png" 
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/clear.png" 
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rain.png" 
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png" 
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "images/mist.png" 
                }

                document.querySelector(".weather").style.display = "block"
                document.querySelector(".error").style.display = "none";
            }
        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBar.value)
        })
