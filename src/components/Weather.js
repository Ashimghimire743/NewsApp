import React, { useEffect, useState } from 'react';

const Weather = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiKey = 'bac88922c30d3fc0cb06f07dac8af2d6';
    const [location, setLocation] = useState({ lat: 0, lon: 0 });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLocation({ lat: position.coords.latitude, lon: position.coords.longitude });
        });
    }, []);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [location]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const convertUnixToTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleTimeString();
    };

    return (
        <div className="container mx-auto mt-4 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4">Current Weather</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <p className="text-lg">Temperature: {data?.main?.temp}°C</p>
                    <p className="text-lg">Humidity: {data?.main?.humidity}%</p>
                    <p className="text-lg">Pressure: {data?.main?.pressure} atm</p>
                    <p className="text-lg">Weather: {data?.weather[0]?.main} ({data?.weather[0]?.description})</p>
                    <p className="text-lg">Visibility: {data?.visibility} meters</p>
                    <p className="text-lg">Wind Speed: {data?.wind?.speed} m/s</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-lg">Country: {data?.sys?.country}</p>
                    <p className="text-lg">Sunrise: {convertUnixToTime(data?.sys?.sunrise)}</p>
                    <p className="text-lg">Sunset: {convertUnixToTime(data?.sys?.sunset)}</p>
                    <p className="text-lg">City Name: {data?.name}</p>
                </div>
            </div>
        </div>
    );
};



export default Weather;
