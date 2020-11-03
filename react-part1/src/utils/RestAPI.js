import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/'
});

//return array with data if success else -1
export const getData = async (type) => 
{
      let data = await api.get(type)
      .then((response) => {
          return response.data;
      })
      .catch((err) =>{
          if(err.response)
          {
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
              console.log(err.config);
              return -1;
          }
          else if (err.request) 
          { 
              console.log(err.request);
              console.log(err.config);
              return -1;
          } 
          else 
          { 
              console.log('Error', err.message);
              console.log(err.config);
              return -1;
          }
      });
      console.log(data);
      return data;
      
  
};

//if succes return success response else error response
export const addWeatherData = async (type,value,unit,time,place, extras) => {
      let res;
      switch(type)
      {
          case 'temperature':
          case 'cloud coverage':
              {
                res = await api.post('/', { value: value, type: type, unit: unit, time: time, place: place})
                .then(function (response) {
                  return response;
                })
                .catch(function (error) {
                  return error;
                });
                break;
              }
          case 'precipitation':
              {
                res = await api.post('/', {value: value, precipitation_type: extras, type: type, unit: unit, time: time, place: place})
                .then(function (response) {
                  return response;
                })
                .catch(function (error) {
                  return error;
                });
                break;
              }
          case 'wind speed':
              {
                res = await api.post('/', {value: value, direction: extras, type: type, unit: unit, time: time, place: place})
                .then(function (response) {
                  return response;
                })
                .catch(function (error) {
                  return error;
                });
                break;
              }
          default:
              console.log("Type not matching any POST type");
              break;
      }
      return res;
};

