const weatherForecastReducer = (state = undefined, action) => {
    switch(action.type){
        case 'SETFORECAST':
            return state = action.payload;
        case 'RESETFORECAST':
            return state = undefined;
        default:
            return 0;
    } 
}
export default weatherForecastReducer;