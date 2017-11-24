import React, {Component} from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox'
import 'echarts/lib/chart/line';
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'

const style = {
    chart:{
        width: 800,
        height: 400,
        margin: '0 auto',
    }
};

class TempChart extends Component{

    componentDidMount() {

    }
    componentWillUpdate(){
        if (this.props.temp === null){
            console.log("props is null");
            return;
        }
        let temp = this.props.temp;
        let highTemp = temp.map(res=>res.high);
        let lowTemp = temp.map(res=>res.low);
        let dates = temp.map(res=>res.date);


        let myChart = echarts.init(document.getElementById('chart'));
        console.log(myChart);
        // 绘制图表
        myChart.setOption({
            title: {
                text: '未来一周气温变化',
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                data:['最高气温','最低气温']
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: dates
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [
                {
                    name:'最高气温',
                    type:'line',
                    data:highTemp,
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'最低气温',
                    type:'line',
                    data:lowTemp,
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]

        });
    }

    render(){
        if (this.props.temp === null){
            return null;
        }else {
            return(
                <div id='chart' style={style.chart}/>
                )
        }
    }

}

export default TempChart;