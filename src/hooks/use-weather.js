import { useContext } from 'react';
import { WeatherContext } from '../contexts/weather-context';

export const useWeather = () => useContext(WeatherContext);
