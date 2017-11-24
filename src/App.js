import React, {Component} from 'react';
import './App.css';
import {
    Breadcrumb, BreadcrumbItem, Button, Collapse, Input,
    InputGroup,
    InputGroupAddon
} from "reactstrap";
import HttpUtil from "./common/HttpUtil";
import WeatherCard from "./common/WeatherCard";
import TempChart from "./common/TempChart";


const style = {
    page: {
        width: '50%',
        margin: '0 auto',
        boxShadow: '10px 10px 5px #888888',
        border:'1px solid #888888'
    }
};

class App extends Component {


    constructor(e) {
        super(e);
        this.state = {
            cityName: 'beijing',
            text_f: '11111',
            collapse: false,
            weather: null,
            temp:null
        }

    }

    handleButtonClick() {
        let that = this;
        let cityName = that.state.cityName;
        HttpUtil.getCityId(cityName)
            .then(res => HttpUtil.getWeather(res))
            .then(res => {
                console.log(res);
                that.setState({
                    weather: res,
                    collapse: true,
                    temp: res.future,
                });
            });
    }

    handleInputChange(event) {
        let value = event.target.value;
        if (value === null || value === ""){
            this.setState({collapse:false})
        }
        this.setState({cityName: event.target.value});
    }


    render() {
        return (
            <div style={style.page}>
                <Breadcrumb tag="nav">
                    <BreadcrumbItem active tag="span">天气查询</BreadcrumbItem>
                </Breadcrumb>
                <InputGroup>
                    <InputGroupAddon>城市名称</InputGroupAddon>
                    <Input value={this.state.cityName} onChange={this.handleInputChange.bind(this)}/>
                    <Button color="primary" onClick={this.handleButtonClick.bind(this)}>查询</Button>
                </InputGroup>
                <Collapse isOpen={this.state.collapse}>
                    <WeatherCard weather={this.state.weather}/>
                    <TempChart temp={this.state.temp}/>
                </Collapse>
            </div>
        );
    }
}

export default App;
