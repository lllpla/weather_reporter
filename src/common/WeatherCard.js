import React, {Component} from 'react';
import {Badge, Col, Container, Row} from "reactstrap";
import FutureCard from "./FutureCard";


class WeatherCard extends Component {
    render() {
        if (this.props.weather === null){
            return(
                <div>

                </div>
            )
        }else {
            let codeImg = "http://weixin.jirengu.com/images/weather/code/"+this.props.weather.now.code+".png";
            let update_time = this.props.weather.last_update.toString().replace("T"," ").replace("+08:00","");
            let todayTemp = "今日("+this.props.weather.future[0].day+") "+this.props.weather.future[0].low+"°C~"+this.props.weather.future[0].high+"°C";
            todayTemp = todayTemp+" "+this.props.weather.future[0].wind;

            return (
                <div>
                    <div class="media">
                        <img class="align-self-center mr-3" src={codeImg} alt="Generic placeholder"/>
                        <div class="media-body">
                            <h1>{this.props.weather.city_name}</h1>
                            <h2>
                                <Badge color="primary">{this.props.weather.now.text}</Badge>
                                <Badge color="info">{this.props.weather.now.temperature+"°C"}</Badge>
                            </h2>
                            <Badge >{"更新时间:"+update_time}</Badge>
                            <div>
                                <table class="table table-hover yahei">
                                    <caption>空气质量</caption>
                                    <thead class="thead-dark yahei">
                                    <tr>
                                        <th  scope="col">类别</th>
                                        <th  scope="col">空气质量系数</th>
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
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    <div class="alert alert-primary" role="alert">
                                        <p class="font-weight-bold">{todayTemp}</p>
                                        <p>{this.props.weather.today.suggestion.dressing.details}</p>
                                    </div>
                                </Col>
                            </Row>

                        <Row>
                            <FutureCard weather={this.props.weather}/>
                        </Row>
                        </Container>
                    </div>

                </div>

            )
        }

    }
}

export default WeatherCard;