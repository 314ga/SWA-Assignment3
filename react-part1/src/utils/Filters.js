export const getDataFromPeriod = (data, startDate, endDate) =>
{
    let filteredData = data.filter(function (later) {
        return Date.parse(later.time) > Date.parse(startDate) && Date.parse(later.time) < Date.parse(endDate);
    });
    console.log("filtered data");
    console.log(filteredData);
    return filteredData;
}