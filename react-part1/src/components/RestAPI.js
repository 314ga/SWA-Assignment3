import axios from 'axios';
import {useState} from 'react';

const api = axios.create({
  baseURL: 'http://localhost:8080/'
});
function RestAPI() {

  const [state, setState] = useState([]);


  const getData = async (type) => 
  {
        let data = await api.get(type)
        .then((response) => {
            setState(response.data)
            console.log(state);
        })
        .catch((err) =>{
            if(err.response)
            {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
             else if (err.request) { console.log(err.request);} 
             else { console.log('Error', err.message);}
          console.log(err.config);
        });
        setState(data)
   
  };
  const addWeatherData = async (type,value,unit,time,place, extras) => {
      try
      {
        switch(type)
        {
            case 'temperature':
            case 'cloud coverage':
                {
                  let res = await api.post('/', { value: value, type: type, unit: unit, time: time, place: place})
                }
            case 'precipitation':
                {
                  let res = await api.post('/', {value: value, precipitation_type: extras, type: type, unit: unit, time: time, place: place})
                }
            case 'wind speed':
                {
                  let res = await api.post('/', {value: value, direction: extras, type: type, unit: unit, time: time, place: place})
                }
  
        }
      }
      catch (err){
          console.log(err)
      }
    
  };
  return (
    <div>
        <button onClick={() => getData("data")}>getData</button>
      <p>implemented API</p>
    </div>
  );
}

export default RestAPI;
