import React from 'react'
import {  Table, Tag, Space  } from "antd";


const { Column, ColumnGroup } = Table;

export default function TableComp(props) {
const analytics = [];
    
props.data.forEach(data => {
    analytics.push(...data.resources);
});
console.log(analytics.resources);
    
  const columns = [
  {
    title: 'Url',
    dataIndex: 'url',
    key: 'url',
    render: url => <a>{url}</a>,
  },
  {
    title: 'Initiator Type',
    dataIndex: 'initiatorType',
    key: 'initiatorType',
    render: initiatorType => <a>{initiatorType}</a>,
  },
  {
    title: 'Transfer Size',
    dataIndex: 'transferSize',
    key: 'transferSize',
    render: transferSize => <a>{transferSize}</a>,
  },
   {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    render: duration => <a>{duration}</a>,
  },
  
  
];

 const data = [
    {
    key: 'url',
    url: {},
    
  },
  {
    key: 'initiatorType',
    initiatorType: 'John Brown',
    
  },
  {
    key: 'transferSize',
    transferSize: 'Jim Green',
    
  },
  {
    key: 'duration',
    duration: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]; 



 analytics.map((row) => (
     
            console.log(row)       
))
    return (
        
       <table style={{ width: "100%" }}>
        <colgroup></colgroup>
        <thead className="ant-table-thead">
          <tr>
            <th className="ant-table-cell">Url</th>
            <th className="ant-table-cell">Initiator Type</th>
            <th className="ant-table-cell">Transfer Size</th>
            <th className="ant-table-cell">Duration</th>
          </tr>
        </thead>
        <tbody className="ant-table-tbody">
          
          {analytics.map((row) => (
               <React.Fragment>
<tr className="ant-table-row ant-table-row-level-0">
             <td className="ant-table-cell">
              <a> {row.name}</a>
            </td>
            <td className="ant-table-cell">{row.initiatorType}</td>
             <td className="ant-table-cell">
              <a>{row.transferSize}</a>
            </td>
            <td className="ant-table-cell">{row.duration}</td>
            </tr>
            </React.Fragment>
             ))}
          
         
         
        </tbody>
      </table>

            
                    
               
    );
}
