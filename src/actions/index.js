import axios from 'axios';

const API_KEY = "09093ca8a8201730b4086a268ee654e1";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}