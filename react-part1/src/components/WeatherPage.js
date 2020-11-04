import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Background from '../img/Horsens.jpg';
import store from '../store'
import { retrieveHistoricData, postHistoricData } from '../reducers/weatherData'
import { retrieveForecastData } from '../reducers/weatherForecast'


//redux
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';



function WeatherPage() {

    const historicData = useSelector(state => state.historicData);
    const forecastData = useSelector(state => state.forecastData);

    const retrieveAllData = (type) => {
        store.dispatch(retrieveHistoricData("data/" + type));
        store.dispatch(retrieveForecastData("forecast/" + type));

    }
    return (
        <div >
            <Jumbotron fluid id="weather-header" className="BgStyle" >
                <div className="col-md-6 mx-auto text-white text-center">
                    <h4 className="h4 mt-2 mb-5">Weather Forecast and Weather History</h4>
                    <div id="locations">
                        <Button variant="outline-info" id="horsens" onClick={() => retrieveAllData('Horsens')}>Horsens</Button>{' '}
                        <Button variant="outline-info" id="aarhus" onClick={() => retrieveAllData('Aarhus')}>Århus</Button>{' '}
                        <Button variant="outline-info" id="copenhagen" onClick={() => retrieveAllData('Copenhagen')}>Copenhagen</Button>{' '}
                        <Button variant="outline-info" id="test" onClick={() => store.dispatch(postHistoricData("data", "temperature", 36.5, 'C', "2020-10-25T23:00:00.000Z", "Horsens", null))}>PostTest</Button>{' '}
                    </div>
                    <div>

                    </div>
                </div>

            </Jumbotron>
            <Accordion>
                <Card>
                    <div className="row text-center">
                        <div className="col-6">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    SEE WEATHER FORECAST
      </Accordion.Toggle>
                            </Card.Header>
                        </div>
                        <div className="col-6">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    SEE WEATHER HISTORY
      </Accordion.Toggle>
                            </Card.Header>
                        </div>
                    </div>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <Table id="weatherForecast">
                            <thead className="text-center">
                                <tr>
                                    <th>Type</th>
                                    <th>Value</th>
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
                                            <td>{item.type}</td>
                                            <td>{item.value}</td>
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
                                            <td>{item.type}</td>
                                            <td>{item.value}</td>
                                            <td>{item.unit}</td>
                                            <td>{item.time}</td>
                                            <td>-</td>
                                            <td>{str1}</td>

                                        </tr>
                                    }
                                    else
                                        return <tr key={index}>
                                            <td>{item.type}</td>
                                            <td>{item.value}</td>
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