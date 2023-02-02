import React from "react";
import {VictoryAxis, VictoryCandlestick, VictoryChart, VictoryLine} from "victory-native";

export class Chart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data !== undefined) {
            if (this.props.type === "candle") {
                return (
                    <VictoryChart
                        domainPadding={{x: 0}}
                        scale={{x: "time"}}
                        padding={{top: 0, bottom: 0, right: 10, left: 10}}
                    >
                        <VictoryAxis style={{
                            axis: {stroke: "transparent"},
                            ticks: {stroke: "transparent"},
                            tickLabels: {fill: "transparent"}
                        }}/>
                        <VictoryAxis dependentAxis style={{
                            axis: {stroke: "transparent"},
                            ticks: {stroke: "transparent"},
                            tickLabels: {fill: "transparent"}
                        }}/>
                        <VictoryCandlestick
                            candleColors={{positive: "#00ff00", negative: "#ff0000"}}
                            data={this.props.data}
                            style={{
                                data: {
                                    stroke: d => (d.close > d.open ? "#ff0000" : "#00ff00"), strokeWidth: 1
                                },
                            }}
                            x="t"
                        />
                    </VictoryChart>)
            } else {
                return (
                    <VictoryChart
                        domainPadding={{x: 0}}
                        scale={{x: "time"}}
                        padding={{top: 0, bottom: 0, right: 0, left: 0}}
                    >
                        <VictoryAxis style={{
                            axis: {stroke: "transparent"},
                            ticks: {stroke: "transparent"},
                            tickLabels: {fill: "transparent"}
                        }}/>
                        <VictoryAxis dependentAxis style={{
                            axis: {stroke: "transparent"},
                            ticks: {stroke: "transparent"},
                            tickLabels: {fill: "transparent"}
                        }}/>
                        <VictoryLine
                            data={this.props.data}
                            style={{
                                data: {
                                    stroke: this.props.data[0].close > this.props.data[this.props.data.length - 1].close ? "#ff0000" : "#00ff00",
                                    strokeWidth: 2
                                },
                            }}
                            x="t"
                            y="close"
                        />
                    </VictoryChart>)
            }
        }
    }
}
