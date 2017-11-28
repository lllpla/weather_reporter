import React, {Component} from 'react';
import {Col} from "reactstrap";

class FutureCard extends Component {

    render(){
        let content = [];

        let length = this.props.weather.future.length;
        console.log("length"+this.props.weather.future.length);
        let max = length>7?7:length;

        for (let i = 1;i<max;i++){
            let futureTemp = this.props.weather.future[i].low+"°C ~" +this.props.weather.future[1].high + "°C";
            let futureTemp1 = this.props.weather.future[i].wind;
            let futureTemp2 = this.props.weather.future[i].text;
            let col = (<Col>
                <div class="alert alert-success" role="alert">
                    <p class="font-weight-bold">{this.props.weather.future[i].day+"("+this.props.weather.future[i].date+")"}</p>
                    <p class="text-center"><small>{futureTemp}</small></p>
                    <p class="text-center"><small>{futureTemp1}</small></p>
                    <p class="text-center"><small>{futureTemp2}</small></p>
                </div>
            </Col>);
            content.push(col);
             }
        return content;
    }

}

export default FutureCard;