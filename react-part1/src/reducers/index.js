import weatherDataReducer from './weatherData';
import weatherForecastReducer from './weatherForecast';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    historicData: weatherDataReducer,
    forecastData: weatherForecastReducer
});

export default allReducers;