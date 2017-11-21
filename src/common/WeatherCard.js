import React, {Component} from 'react';
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";


class WeatherCard extends Component {
    render() {
        if (this.props.weather === null){
            return(
                <div>

                </div>
            )
        }else {
            return (
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.weather.city_name}</CardTitle>
                        <CardSubtitle>{this.props.weather.today.suggestion.dressing.brief}</CardSubtitle>
                        <CardText>{this.props.weather.today.suggestion.dressing.details}</CardText>
                    </CardBody>
                </Card>
            )
        }

    }
}

export default WeatherCard;