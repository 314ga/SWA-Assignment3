export const setHistoricData = (data) =>
{
    return {
        type: 'SETDATA',
        payload: data
    };
};
export const resetHistoricData = () =>
{
    return {
        type: 'RESETDATA'
    };
};

export const setForecastData = (forecast) =>
{
    return {
        type: 'SETFORECAST',
        payload: forecast
    };
};

export const resetForecastData = () =>
{
    return {
        type: 'RESETFORECAST',
    };
};