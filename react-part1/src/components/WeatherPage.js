import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Background from '../img/Horsens.jpg';
import store from '../store'
import { retrieveHistoricData, postHistoricData } from '../reducers/weatherData'
//redux
import {useSelector} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';



function WeatherPage() {

    const historicData = useSelector(state => state.historicData);

    return (
        <div >
            <Jumbotron fluid id="weather-header" className="BgStyle" >
                <div className="col-md-6 mx-auto text-white text-center">
                    <h4 className="h4 mt-2 mb-5">Weather Forecast and Weather History</h4>
                    <div id="locations">
                        <Button variant="outline-info" id="horsens" onClick={() => store.dispatch(retrieveHistoricData("data/Horsens"))}>Horsens</Button>{' '}
                        <Button variant="outline-info" id="aarhus" onClick={() => store.dispatch(retrieveHistoricData("data/Aarhus"))}>Århus</Button>{' '}
                        <Button variant="outline-info" id="copenhagen" onClick={() => store.dispatch(retrieveHistoricData("data/Copenhagen"))}>Copenhagen</Button>{' '}
                        <Button variant="outline-info" id="test" onClick={() => store.dispatch(postHistoricData("data","temperature",36.5,'C',"2020-10-25T23:00:00.000Z","Horsens", null))}>PostTest</Button>{' '}
                    </div>
                    <div>
                        
                    </div>
                </div>

            </Jumbotron>
            <ul>
            {historicData.map((value,index) => {
                return <li key={index}>{value.value}</li>
            })}
            </ul>

        </div>
    )


}
export default WeatherPage;