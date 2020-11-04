import Button from 'react-bootstrap/Button';
import {setHistoricData, setForecastData} from '../actions';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';
import store from '../store';
import React from 'react';
import {getDataFromPeriod} from '../utils/Filters';
import { retrieveHistoricData } from '../reducers/weatherData'
import { retrieveForecastData } from '../reducers/weatherForecast'
//redux
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';



function Filter() {

    const historicData = useSelector(state => state.historicData);
    const forecastData = useSelector(state => state.forecastData);
    const [endTime, setEndTime] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    const retrieveAllData = (type) => {
        store.dispatch(retrieveHistoricData("data/" + type));
        store.dispatch(retrieveForecastData("forecast/" + type));

    }

    const handleApplyFilter = () => {

        retrieveAllData("Horsens");
        if(forecastData != undefined)
            store.dispatch(setForecastData(getDataFromPeriod(forecastData,startTime,endTime)));
        if(historicData != undefined)
            store.dispatch(setHistoricData(getDataFromPeriod(historicData,startTime,endTime)));
        
    };

    //add here name of the actual selected city(maybe use states will be neccessery)
    const handleResetFilter = () => 
    {
        retrieveAllData("Horsens")
        setStartTime(new Date());
        setEndTime(new Date());
    };

    const onChangeStart = startTime => setStartTime(startTime);
    const onChangeEnd = endTime => setEndTime(endTime);

    return (
        <div>
            <p>Set start time</p>
        <DateTimePicker onChange={onChangeStart} value={startTime} />
        <p>Set end time</p>
        <DateTimePicker onChange={onChangeEnd} value={endTime} />
        <Button className="outline-btn" onClick={handleApplyFilter}>Apply filter</Button>{' '}
        <Button className="outline-btn" onClick={handleResetFilter}>Reset filter</Button>
        </div>
       
    );


}
export default Filter;