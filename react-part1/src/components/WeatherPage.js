//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

//variable imports
import store from '../store'
import { retrieveHistoricData } from '../reducers/weatherData'
import { retrieveForecastData } from '../reducers/weatherForecast'
import PostData from './PostData';
import { useState } from 'react';

//redux
import { useSelector } from 'react-redux';




function WeatherPage() {
    //react useState for checking buttons state
    const [selectedCity, setSelectedCity] = useState('Horsens');
    const [debounce, setDebounce] = useState(false);


    //data reducers
    const historicData = useSelector(state => state.historicData);
    const forecastData = useSelector(state => state.forecastData);
    //function to dipatch weather forecast & weather history
    const retrieveAllData = (type) => {
        store.dispatch(retrieveHistoricData("data/" + type, false, null, null));
        store.dispatch(retrieveForecastData("forecast/" + type, false, null, null));
    }
    //toggle buttons
    const onBtnChangeHandler = (city) => {

        if (!debounce) {
            retrieveAllData(city);
            setSelectedCity(city);
        }
        setDebounce(!debounce)
    }

    return (
        <div >
            <Jumbotron fluid id="weather-header" className="BgStyle" >
                <div className="col-md-6 mx-auto text-white text-center">
                    <h4 className="h4 mt-2 mb-5">Weather Forecast and Weather History</h4>
                    <div id="locations">
                        <Button className="outline-btn active" variant="outline-info" id="horsens" onClick={() => retrieveAllData('Horsens')}>Horsens</Button>{' '}
                        <Button className="outline-btn" id="aarhus" onClick={() => retrieveAllData('Aarhus')}>Århus</Button>{' '}
                        <Button className="outline-btn" id="copenhagen" onClick={() => retrieveAllData('Copenhagen')}>Copenhagen</Button>{' '}
                        <PostData />{' '}

                    </div>

                    <div>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton className="outline-btn" value={1} onClick={() => onBtnChangeHandler('Horsens')}>Horsens</ToggleButton>
                            <ToggleButton value={2} onClick={() => onBtnChangeHandler('Aarhus')}>Århus</ToggleButton>
                            <ToggleButton value={3} onClick={() => onBtnChangeHandler('Copenhagen')}>Copenhagen</ToggleButton>
                        </ToggleButtonGroup>

                        <br />


                    </div>
                </div>

            </Jumbotron>
            <Accordion>
                <Card>
                    <div className="row text-center">
                        <div className="col-6">
                            <Card className="my-card">
                                <Accordion.Toggle as={Button} className="outline-link" eventKey="0">SEE WEATHER FORECAST</Accordion.Toggle>
                            </Card>
                        </div>
                        <div className="col-6">
                            <Card className="my-card">
                                <Accordion.Toggle as={Button} className="outline-link" eventKey="1">SEE WEATHER HISTORY</Accordion.Toggle>
                            </Card>
                        </div>
                    </div>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <Table id="weatherForecast">
                            <thead className="text-center">
                                <tr>
                                    <th>Place</th>
                                    <th>Type</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Unit</th>
                                    <th>time</th>
                                    <th>Precipitation Type</th>
                                    <th>Wind Direction</th>

                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {forecastData.map((item, index) => {
                                    if (item.type == 'precipitation') {
                                        let precTypes = item.precipitation_types;
                                        let str = "";
                                        precTypes.forEach(x => {
                                            if (x == "") {
                                                str = x;
                                            }
                                            else {
                                                str += " " + x + ", ";
                                            }
                                        })
                                        return <tr key={index}>
                                            <td>{item.place}</td>
                                            <td>{item.type}</td>
                                            <td>{item.from}</td>
                                            <td>{item.to}</td>
                                            <td>{item.unit}</td>
                                            <td>{item.time}</td>
                                            <td>{str}</td>
                                            <td>-</td>

                                        </tr>
                                    }
                                    else if (item.type == 'wind speed') {
                                        let windDir = item.directions;
                                        let str1 = "";
                                        windDir.forEach(x => {
                                            if (x == "") {
                                                str1 = x;
                                            }
                                            else {
                                                str1 += " " + x + ", ";
                                            }
                                        })
                                        return <tr key={index}>
                                            <td>{item.place}</td>
                                            <td>{item.type}</td>
                                            <td>{item.from}</td>
                                            <td>{item.to}</td>
                                            <td>{item.unit}</td>
                                            <td>{item.time}</td>
                                            <td>-</td>
                                            <td>{str1}</td>

                                        </tr>
                                    }
                                    else
                                        return <tr key={index}>
                                            <td>{item.place}</td>
                                            <td>{item.type}</td>
                                            <td>{item.from}</td>
                                            <td>{item.to}</td>
                                            <td>{item.unit}</td>
                                            <td>{item.time}</td>
                                            <td>-</td>
                                            <td>-</td>

                                        </tr>
                                })}


                            </tbody>
                        </Table></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>

                            <Table id="weatherHistory">
                                <thead className="text-center">
                                    <tr>
                                        <th>Place</th>
                                        <th>Type</th>
                                        <th>Value</th>
                                        <th>Unit</th>
                                        <th>time</th>
                                        <th>Precipitation Type</th>
                                        <th>Wind Direction</th>

                                    </tr>

                                </thead>
                                <tbody className="text-center">
                                    {historicData.map((item, index) => {
                                        if (item.type == 'precipitation') {
                                            return <tr key={index}>
                                                <td>{item.place}</td>
                                                <td>{item.type}</td>
                                                <td>{item.value}</td>
                                                <td>{item.unit}</td>
                                                <td>{item.time}</td>
                                                <td>{item.precipitation_type}</td>
                                                <td>-</td>

                                            </tr>
                                        }
                                        else if (item.type == 'wind speed') {
                                            return <tr key={index}>
                                                <td>{item.place}</td>
                                                <td>{item.type}</td>
                                                <td>{item.value}</td>
                                                <td>{item.unit}</td>
                                                <td>{item.time}</td>
                                                <td>-</td>
                                                <td>{item.direction}</td>

                                            </tr>
                                        }
                                        else
                                            return <tr key={index}>
                                                <td>{item.place}</td>
                                                <td>{item.type}</td>
                                                <td>{item.value}</td>
                                                <td>{item.unit}</td>
                                                <td>{item.time}</td>
                                                <td>-</td>
                                                <td>-</td>

                                            </tr>
                                    })}


                                </tbody>
                            </Table >
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <div>

            </div>

        </div>

    )


}
export default WeatherPage;
/* <ul>
    {historicData.map((value, index) => {
        return (
            <tr key={index}>{value.value}</tr>
        )
    })}
</ul> */