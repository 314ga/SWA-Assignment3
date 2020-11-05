import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import store from '../store';
import React from 'react';
import { retrieveHistoricData } from '../reducers/weatherData'
import { retrieveForecastData } from '../reducers/weatherForecast'

function Filter(props) {

    const [endTime, setEndTime] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    //add here name of the actual selected city(maybe use states will be neccessery)
    const handleApplyFilter = () => {
        console.log(props.props);
        store.dispatch(retrieveForecastData("forecast/" + props.props, true, startTime, endTime));
        store.dispatch(retrieveHistoricData("data/" + props.props, true, startTime, endTime));

    };

    //add here name of the actual selected city(maybe use states will be neccessery)
    const handleResetFilter = () => {
        store.dispatch(retrieveHistoricData("data/" + props.props, false, null, null));
        store.dispatch(retrieveForecastData("forecast/" + props.props, false, null, null));
        setStartTime(new Date());
        setEndTime(new Date());
    };

    const onChangeStart = startTime => setStartTime(startTime);
    const onChangeEnd = endTime => setEndTime(endTime);

    return (
        <div>
            <div className="row text-center mt-2">
                <div className="offset-1 col-4 ">
                    <p>Set start time</p>
                </div>
                <div className="col-7">
                    <DateTimePicker onChange={onChangeStart} value={startTime} />
                </div>
            </div>
            <div className="row text-center">
                <div className="offset-1 col-4 ">
                    <p >Set end time</p>
                </div>
                <div className="col-7">
                    <DateTimePicker onChange={onChangeEnd} value={endTime} />

                </div>
            </div>


            <div className="mt-2">
                <Button className="outline-btn" onClick={handleApplyFilter}>Apply filter</Button>{' '}
                <Button className="outline-btn" onClick={handleResetFilter}>Reset filter</Button>{' '}
            </div>
        </div>

    );


}
export default Filter;