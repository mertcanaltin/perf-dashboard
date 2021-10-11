import React from 'react';
import { TimePicker,ConfigProvider } from 'antd';
import moment from "moment";



export default function timepicker(props) {
    return (
        <ConfigProvider>
            <TimePicker data-testid="timepicker-element" openTo="hours" value={moment(props.value)}  placeholder={props.label}   onChange={props.onChange} />
        </ConfigProvider>
    )
}