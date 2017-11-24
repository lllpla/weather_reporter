import React, {Component} from 'react';
import {Badge, Card, CardBody, CardText, CardTitle} from "reactstrap";


class WeatherCard extends Component {
    render() {
        if (this.props.weather === null){
            return(
                <div>

                </div>
            )
        }else {
            return (
                <div>
                    <h1>{this.props.weather.city_name}</h1>
                    <h2>
                            <Badge color="primary">{this.props.weather.now.text}</Badge>
                            <Badge color="info">{this.props.weather.now.temperature+"°C"}</Badge>
                    </h2>
                    <h3>
                        <Badge color="info">空气质量</Badge>
                        <Badge color="success" pill>{"aqi: "+this.props.weather.now.air_quality.city.aqi}</Badge>
                        <Badge color="success" pill>{"pm2.5: "+this.props.weather.now.air_quality.city.pm25}</Badge>
                        <Badge color="success" pill>{"pm10: "+this.props.weather.now.air_quality.city.pm10}</Badge>
                    </h3>
                    <Card>
                        <CardBody>
                            <CardTitle>{this.props.weather.today.suggestion.dressing.brief}</CardTitle>
                            <CardText>{this.props.weather.today.suggestion.dressing.details}</CardText>
                        </CardBody>
                    </Card>
                </div>

            )
        }

    }
}

export default WeatherCard;