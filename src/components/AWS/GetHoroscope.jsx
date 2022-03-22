import React from "react";

const GetHoroscope = (props) => {

const horoscopeAcq = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://ohsxjzftfi.execute-api.eu-central-1.amazonaws.com/dev/horoscope-check');
    xhr.onreadystatechange = function(event) {
    console.log(event.target.response)
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
    "bm":props.day,
    "bd":props.month
    }));
}

return(
    <React.Fragment>
        <h1>Your Horoscope is {horoscopeAcq}</h1>
    </React.Fragment>
)

}

export default GetHoroscope