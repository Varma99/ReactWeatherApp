import React from 'react';

class Weather extends React.Component {
    render () {
        return (
            <div>
                {this.props.city && this.props.country && 
                <h2> Location : {this.props.city} , 
                {this.props.country}
                </h2> }
                {this.props.temperature && 
                <h2>Temperature : {this.props.temperature}</h2>
                }
                {this.props.humidity && 
                <h2>Humidity : {this.props.humidity}</h2>}
                {this.props.description && 
                <h2>Conditions : {this.props.description}</h2>}
            </div>
        )
    }
}

export default Weather;