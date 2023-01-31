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
                    <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}/>
                    <VictoryAxis dependentAxis/>
                    <VictoryCandlestick
                        candleColors={{positive: "#5f5c5b", negative: "#c43a31"}}
                        data={this.props.data}
                    />
                </VictoryChart>)
        }
    }
}