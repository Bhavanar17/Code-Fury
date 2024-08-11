import { useState, useEffect } from "react";
import { API_KEY, base_url, q, aqi, geo_base_url, end_url, middle_url, geo_API_KEY } from "../utils/constants";

const Body = () =>
{

    const [searchText, setSearchText] = useState("");
    const [weather, setWeather] = useState(null);
    const fullurl = base_url + API_KEY + q + searchText + aqi;

    

    
    
    


    

    const fetchWeather = async (city) =>
    {
        
        const data = await fetch(base_url + API_KEY + q + city + aqi);

        const json = await data.json();

        setWeather(json);
    }

    const fetchgeoWeather = async (latitude, longitude) =>
    {
        const data = await fetch(geo_base_url + latitude + middle_url + longitude + geo_API_KEY);

        const json = await data.json();

        fetchWeather(json.results[0].components.county);

    }

    

    const geoLocation = async () =>
    {
        
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                function(position)
                {
                    const latitude =    position.coords.latitude;
                    const longitude = position.coords.longitude;

                    console.log(latitude, longitude);
                    fetchgeoWeather(latitude, longitude);

                },
                function(error)
                {
                    console.error(error.message);
                }
            );
        }
        else
        {
            console.log("Geolocation is not supported");
        }

        
    }

    const getWeatherIcon = (isDay) => {
        return isDay ? '☀️' : '🌙';
    };
    

    return (
        <>
        <div className="search-container">
            <input className="search-bar" placeholder="Enter your Location" value={searchText}
             onChange={(e)=>{
                setSearchText(e.target.value);
             }}/>
            <button className="search-button"
            onClick={()=>{
                fetchWeather(searchText);
            }}>Search</button>
            <button className="search-button"
            onClick={()=>{
                geoLocation();
            }}>Use Current Location</button>

        {weather && (
        <div className="weather-card">
            <div className="weather-icon">
            {getWeatherIcon(weather.current.is_day)}
            </div>
            <div className="weather-details">
            <h2>{weather.location.name}</h2>
            <p>{weather.current.condition.text}</p>
            <p>Temperature: {weather.current.feelslike_c}°C</p>
            </div>
        </div>
      )}





            

        </div>
        </>
    )
}

export default Body;