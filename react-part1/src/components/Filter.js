import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import React from 'react';
import {retrieveAllData} from '../utils/StoreHandler'

function Filter(props) {

    const [endTime, setEndTime] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    //add here name of the actual selected city(maybe use states will be neccessery)
    const handleApplyFilter = () => {
        triggerFilterSet(true,startTime,endTime);
        retrieveAllData(props.selectedCity, true, startTime, endTime);
       
    };

    //add here name of the actual selected city(maybe use states will be neccessery)
    const handleResetFilter = () => {
        triggerFilterSet(false,null,null);
        retrieveAllData(props.selectedCity, false, startTime, endTime);
        setStartTime(new Date());
        setEndTime(new Date());
        
    };
    const triggerFilterSet = (value,sTime,eTime) => {
        props.triggerFilterSet(value,sTime,eTime);
    }

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