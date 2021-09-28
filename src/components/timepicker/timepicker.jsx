import React from 'react';
import { TimePicker,Input,ConfigProvider } from 'antd';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns'
import moment from 'moment';


export default function timepicker(props) {

    return (
        <ConfigProvider dataAdapter={dateFnsGenerateConfig} >
            <TimePicker data-testid="custom-element" openTo="hours"  placeholder={props.label}   onChange={props.onChange} />
        </ConfigProvider>
    )
}
