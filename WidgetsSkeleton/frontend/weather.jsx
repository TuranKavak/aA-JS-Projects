import React from 'react';

const toQueryString = (obj) => {

    const parts = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);   
        }
    }
    return parts.join('&');
}

export default class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = { weather: null};
        this.polWeather = this.polWeather.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.polWeather);
    }

    polWeather(location) {
        let url = 'http://api.openweathermap.org/data/2.5/weather?';

        const params = {
            lat: location.coords.latitude,
            lon: location.coords.longitude
        };

        url += toQueryString(params);
        const apiKey = '';
        url += `&APPID=${apiKey}`;

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            //ready state of DONE means this is complete
            if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
                const data = JSON.parse(xmlhttp.responseText);
                this.setState({ weather: data });
            }
        };

        xmlhttp.open('GET', url, true);
        xmlhttp.send();
    }

    render () {
        let content = <div></div>;

        if (this.state.weather) {
            const weather = this.state.weather;
            const temp = (weather.main.temp - 273.15) * 1.8 + 32; //Fahrenheit
            content = <div>
                <p>{weather.name}</p>
                <p>{ temp.toFixed(0) } degrees</p>
                </div>;

        } else {
            content = <div className='loading'>Weather loading...</div>;
        }

        return (
            <div>
                <h1>Weather</h1>
                <div className='weather'>
                    {content}
                </div>
            </div>
        );
    } 
}

