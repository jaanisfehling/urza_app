import React from "react";
import {VictoryAxis, VictoryCandlestick, VictoryChart} from "victory-native";

export class CandleChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data !== undefined) {
            return (
                <VictoryChart
                    domainPadding={{x: 25}}
                    scale={{x: "time"}}
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
                    />
                </VictoryChart>)
        }
    }
}
