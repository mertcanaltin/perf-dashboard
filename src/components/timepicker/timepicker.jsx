import React from 'react';
import { TimePicker,Input,ConfigProvider } from 'antd';



export default function timepicker(props) {
    return (
        <ConfigProvider>
            <TimePicker data-testid="timepicker-element" openTo="hours"  placeholder={props.label}   onChange={props.onChange} />
        </ConfigProvider>
    )
}