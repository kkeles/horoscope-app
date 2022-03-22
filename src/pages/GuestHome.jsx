import React from 'react';
import Container from '@mui/material/Container';
import DateAdapter from '@mui/lab/AdapterDayjs';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';
import GetHoroscope from '../components/AWS/GetHoroscope';


  
const GuestHome = () => {
    const [value, setValue] = React.useState(new Date('1995-01-01T20:00:00'));
    const [day,setDay] = React.useState();
    const [month,setMonth] = React.useState();
    const [dateChanged,setDateChanged] = React.useState(false);
    const [horoscope,setHoroscope] = React.useState()

    const handleChange = (newValue) => {
        setValue(newValue); // receives the date as a Date object then turns into "YYYY-MM-DD string type"
      // alternative add: .toISOString().slice(0,10)
        setDay(newValue.date());
        setMonth(newValue.month());
    };

    const horoscopeAcq = () => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://ohsxjzftfi.execute-api.eu-central-1.amazonaws.com/dev/horoscope-check');
        xhr.onreadystatechange = function(event) {
        setDateChanged(true);
        console.log(event.target.response)
        setHoroscope(event.target.response.slice(1, -1))
        }
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
        "bm":month+1,
        "bd":day+1
        }));
    };

    

    return (
        <React.Fragment> {/*One can use React.Fragment instead of <div> to have multiple components. */}
          <Container sx={{ textAlign: 'center'}} maxWidth="lg"> {/*Container layout helps to have modern look for the page with margins on each side & responsive */}
            <h1>Welcome to Zodiacus</h1>
            <h2>Get To Know Your Horoscope</h2>
            <LocalizationProvider dateAdapter={DateAdapter}> {/* date adapter is necessary to have date actions in the page. Day.JS is used as an adapter */}
            {/* Beginning of DatePick component */}
            <DesktopDatePicker 
            label="Your Birthday"
            inputFormat="DD/MM/YYYY" 
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />} 
            />    
            </LocalizationProvider>
            <br/>
            <Button variant="outlined" onClick={horoscopeAcq}>Submit</Button>
            {dateChanged ? <h1>Your horoscope is {horoscope}</h1> : <h2>Click first</h2>}
          </Container>
        </React.Fragment>
      );
};
  
export default GuestHome;