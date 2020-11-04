import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import store from '../store';
import React from 'react';
import { retrieveHistoricData } from '../reducers/weatherData'
import { retrieveForecastData } from '../reducers/weatherForecast'
import 'bootstrap/dist/css/bootstrap.min.css';

function Filter() {

    const [endTime, setEndTime] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    //add here name of the actual selected city(maybe use states will be neccessery)
    const handleApplyFilter = () => 
    {

        console.log("filter");
        store.dispatch(retrieveForecastData("forecast/" + "Horsens",true,startTime,endTime));
        store.dispatch(retrieveHistoricData("data/" + "Horsens",true,startTime,endTime));
        
    };

    //add here name of the actual selected city(maybe use states will be neccessery)
    const handleResetFilter = () => 
    {
        store.dispatch(retrieveHistoricData("data/" + "Horsens",false,null,null));
        store.dispatch(retrieveForecastData("forecast/" + "Horsens",false,null,null));
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