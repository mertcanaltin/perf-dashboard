import React from "react";
import Chart from "../components/chart/chart";
import TimePicker from "../components/timepicker/timepicker";
import TableComp from "../components/table/table";

import { Layout, Col, Row, Typography, Card, Button } from "antd";
import { getAnalytics } from "../service/api.jsx";
import useSWR from "swr";

global.matchMedia =
    global.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {},
        };
    };

const { Content, Footer } = Layout;
const { Title } = Typography;

export default function Home() {
    const THIRTY_MINUTES = 30 * 60 * 1000;

    const [startTime, setStartTime] = React.useState(
        new Date(new Date().getTime() - THIRTY_MINUTES)
    );
    const [endTime, setEndTime] = React.useState(new Date());

    const fetcher = async () => {
        const startTimestamp = startTime ? startTime.getTime() : 0;
        const endTimestamp = endTime ? endTime.getTime() : 0;

        return await getAnalytics(startTimestamp, endTimestamp);
    };
    const { data, revalidate } = useSWR("analytics", fetcher);

    console.log(data);
    console.log(startTime, "wwww");
    console.log(endTime, "gggg");

    return (
        <Layout data-testid="home-element" className="home-container">
            <Layout>
                <Content
                    className="site-layout"
                    style={{ padding: "0 50px", marginTop: 64 }}
                >
                    <div
                        className="site-layout-background"
                        style={{ padding: 10, minHeight: 240 }}
                    >
                        <Card style={{ width: 300 }}>
                            <Title
                                className="title-hello"
                                style={{ marginTop: 14 }}
                                strong="false"
                                level={4}
                            >
                                Hello Perf-Dashboard
                            </Title>
                            <TimePicker
                                label="Start Time"
                                value={startTime}
                                onChange={(value: Date | null) => {
                                    setStartTime(value);

                                    setTimeout(revalidate, 10);
                                }}
                            />
                            <TimePicker
                                data-testid="end-time"
                                label="End Time"
                                value={endTime}
                                onChange={(value: Date | null) => {
                                    setEndTime(value);

                                    setTimeout(revalidate, 10);
                                }}
                            />
                            <Button type="primary">Primary Button</Button>
                        </Card>
                        ,
                    </div>
                </Content>
            </Layout>
            <Content
                className="site-layout"
                style={{ padding: "0 50px", marginTop: 64 }}
            >
                <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 380 }}
                >
                    <Row gutter={[24, 16]}>
                        <Col span={12}>
                            <Chart title="TTFB" dataKey="timeToFirstByte" data={data || []} />
                        </Col>
                        <Col span={12}>
                            <Chart
                                title="FCP"
                                dataKey="firstContentfulPaint"
                                data={data || []}
                            />
                        </Col>
                        <Col span={12}>
                            <Chart title="DomLoad" dataKey="domLoad" data={data || []} />
                        </Col>
                        <Col span={12}>
                            <Chart
                                title="Window Load"
                                dataKey="windowLoad"
                                data={data || []}
                            />
                        </Col>
                    </Row>
                    <TableComp key="uniqueId1" data={data || []} />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Mert Can Altın ©2021</Footer>
        </Layout>
    );
}