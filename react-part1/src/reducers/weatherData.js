import {setHistoricData} from '../actions';
import {api} from '../utils/RestAPI'
  
export default function weatherDataReducer (state = [], action) {
    switch(action.type){
        case 'SETDATA':
            return action.payload;
        case 'RESETDATA':
            return state = [];
        default:
            return state;
    } 
}

//retrieve data with REST API and set it to the store
export function retrieveHistoricData(type)
{
    return async function fetchWeatherData(dispatch, getState){
        const data = await api.get(type)
        .then(({data}) => data)
        .catch((err) =>{
            if(err.response)
            {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
                console.log(err.config);
            }
            else if (err.request) 
            { 
                console.log(err.request);
                console.log(err.config);
            } 
            else 
            { 
                console.log('Error', err.message);
                console.log(err.config);
            }
        });

        if(data != undefined)
            dispatch(setHistoricData(data));
    
    }
}

//post data with REST API to the server
export function postHistoricData(requestType,type,value,unit,time,place, extras)
{
    return async function postWeatherData(dispatch, getState){
      let data;
      switch(type)
      {
          case 'temperature':
          case 'cloud coverage':
              {
                data = await api.post(requestType, { value: value, type: type, unit: unit, time: time, place: place})
                .then(function (response) {
                    if(response.status == 201)
                    {
                        alert("Data was successfully added to server");
                    }
                    else
                    {
                        alert("Problem with adding data to server");
                    }
                  })
                .catch(function (error) {
                    alert(error);
                });
                break;
              }
          case 'precipitation':
              {
                data = await api.post(requestType, {value: value, precipitation_type: extras, type: type, unit: unit, time: time, place: place})
                .then(function (response) {
                    if(response.status == 201)
                    {
                        alert("Data was successfully added to server");
                    }
                    else
                    {
                        alert("Problem with adding data to server");
                    }
                  })
                .catch(function (error) {
                    alert(error);
                });
                break;
              }
          case 'wind speed':
              {
                data = await api.post(requestType, {value: value, direction: extras, type: type, unit: unit, time: time, place: place})
                .then(function (response) {
                    if(response.status == 201)
                    {
                        alert("Data was successfully added to server");
                    }
                    else
                    {
                        alert("Problem with adding data to server");
                    }
                  })
                .catch(function (error) {
                    alert(error);
                });
                break;
              }
          default:
              break;
      }

    
    }
}
