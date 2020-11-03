const weatherDataReducer = (state = undefined, action) => {
    switch(action.type){
        case 'SETDATA':
            return state = action.payload;
        case 'RESETDATA':
            return state = undefined;
        default:
            return 0;
    } 
}
export default weatherDataReducer;