import React, {useEffect, useState} from "react";
import Chart from "../components/chart/chart";
import TimePicker from "../components/timepicker/timepicker";
import TableComp from "../components/table/table";
import { Layout, Col, Row, Typography, Card } from "antd";
import { getAnalytics } from "../service/api.jsx";
import moment from "moment";

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
    const [analytics,setAnalytics] = useState([]);
    const [endTime, setEndTime] = useState(moment().toDate());

    const [startTime, setStartTime] = useState(
        moment().subtract(30,'minutes').toDate()
    );

    const fetch = async () => {
        const startTimestamp = startTime ? moment(startTime) : 0;
        const endTimestamp = endTime ? moment(endTime) : 0;
        getAnalytics(startTimestamp, endTimestamp).then(response => {
            setAnalytics(response);
        });
    };

    useEffect(() =>{
        fetch();
    },[]);

    return (
        <Layout data-testid="home-element" className="home-container">
            <Layout>
                <Content
                    className="site-layout"
                    style={{ padding: "0 50px", marginTop: 64 }}
                >
                    <div
                        className="site-layout-background"
                        style={{ padding: 10}}
                    >
                        <Card >
                            <Title
                                className="title-hello"
                                style={{ marginTop: 14 }}
                                strong="false"
                                level={4}
                            >
                                Hello Perf-Dashboard
                            </Title>
                            <TimePicker
                                style={{marginRight: 4}}
                                label="Start Time"
                                value={startTime}
                                onChange={(value: Date | null) => {
                                    setStartTime(value);
                                    setTimeout(fetch(),10);
                                }}
                            />
                            <TimePicker
                                data-testid="end-time"
                                label="End Time"
                                value={endTime}
                                onChange={(value: Date | null) => {
                                    setEndTime(value);
                                    setTimeout(fetch(), 10);
                                }}
                            />
                        </Card>
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
                    <Row gutter={[24, 16]} style={{ marginBottom: 28 }} >
                        <Col span={12}>
                            <Chart title="TTFB" dataKey="timeToFirstByte" data={analytics || []} />
                        </Col>
                        <Col span={12}>
                            <Chart
                                title="FCP"
                                dataKey="firstContentfulPaint"
                                data={analytics || []}
                            />
                        </Col>
                        <Col span={12}>
                            <Chart title="DomLoad" dataKey="domLoad" data={analytics || []} />
                        </Col>
                        <Col span={12}>
                            <Chart
                                title="Window Load"
                                dataKey="windowLoad"
                                data={analytics || []}
                            />
                        </Col>
                    </Row>
                    <TableComp key="uniqueId1" data={analytics || []} />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Mert Can Altın ©2021</Footer>
        </Layout>
    );
}