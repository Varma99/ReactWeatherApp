import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "24ff958a2e94e8a3e9f4f429f694122c";


class App extends React.Component {
  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    descrition : undefined,
    error : undefined
  }


  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
     
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    //Converting the data given by api_call to JSON format
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature : data.main.temp,
      city : data.name ,
      country : data.sys.country,
      humidity : data.main.humidity,
      descrition : data.weather[0].descrition,
      error : ""
    })
    

    }
  
  render () {
    return (
      <div className = "App">

        <Titles/>

        <Form getWeather = {this.getWeather}/>

        <Weather 
        //Passing props to weather component .
        temperature = {this.state.temperature}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        descrition = {this.state.descrition}
        error = {this.state.error}
         />
        </div>
    )
  }
}

export default App;