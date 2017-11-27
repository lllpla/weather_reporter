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
            let codeImg = "http://weixin.jirengu.com/images/weather/code/"+this.props.weather.now.code+".png";
            return (
                <div>
                    <div class="media">
                        <img class="align-self-center mr-3" src={codeImg} alt="Generic placeholder image"/>
                        <div class="media-body">
                            <h1>{this.props.weather.city_name}</h1>
                            <h2>
                                <Badge color="primary">{this.props.weather.now.text}</Badge>
                                <Badge color="info">{this.props.weather.now.temperature+"°C"}</Badge>
                            </h2>
                            <div>
                                <table class="table table-hover">
                                    <caption>空气质量</caption>
                                    <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">类别</th>
                                        <th scope="col">空气质量系数</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th>aqi</th>
                                        <td>{this.props.weather.now.air_quality.city.aqi}</td>
                                    </tr>
                                    <tr>
                                        <th>pm2.5</th>
                                        <td>{this.props.weather.now.air_quality.city.pm25}</td>
                                    </tr>
                                    <tr>
                                        <th>pm10</th>
                                        <td>{this.props.weather.now.air_quality.city.pm10}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div class="alert alert-primary" role="alert">
                        <title>{this.props.weather.today.suggestion.dressing.brief}</title>
                        <p>{this.props.weather.today.suggestion.dressing.details}</p>
                    </div>
                </div>

            )
        }

    }
}

export default WeatherCard;