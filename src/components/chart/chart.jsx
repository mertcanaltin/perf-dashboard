import React from "react";
import { Card } from "antd";
import {
    LineChart,
    Line,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function chart(props) {
    return (
        <div className="site-card-wrapper">
            <Card className="title" title={props.title} bordered={true}>
                <ResponsiveContainer width="99%" aspect={2.0 / 0.75}>
                    <LineChart
                        width={500}
                        height={300}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis />
                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey={props.dataKey}
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Card>{" "}
        </div>
    );
}