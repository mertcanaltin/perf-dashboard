

const url =  process.env.REACT_APP_API_KEY;

export function getAnalytics(startTime, endTime) {
    return fetch(url+"/?start-time=" + startTime + "&end-time=" + endTime)
    .then(function (data) { return data.json(); });

}