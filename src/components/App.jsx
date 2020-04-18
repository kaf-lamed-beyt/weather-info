import React from 'react'

import Weather from './Weather';
import 'weather-icons/css/weather-icons.css'

const data = e718a0fc2d5a92cb3f1b23fce63019a6;


export default class App extends React.Component {
   constructor() {
       super()
       this.state = {
    
       }
       this.getWeatherInfo()
   }

   getWeatherInfo() {
        async() => {
            const getData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${data}`)

            const response = await getData.json()

           console.log(response)
        }
   }
    
    render() {
        return (
            <div className="app">
                <Weather />
            </div>
        )
    }
}