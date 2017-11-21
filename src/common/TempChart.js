import React, {Component} from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class TempChart extends Component{

    componentDidMount() {

    }
    componentWillUpdate(){
        if (this.props.temp === null){
            console.log("props is null");
            return;
        }
        let temp = this.props.temp;

        let myChart = echarts.init(document.getElementById('chart'));
        console.log(myChart);
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    render(){
        if (this.props.temp === null){
            return null;
        }else {
            return(
                <div id='chart' style={{ width: 800, height: 400 }}/>
                )
        }
    }

}

export default TempChart;