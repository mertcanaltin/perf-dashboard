import React from 'react'
import {  Table, Tag, Space  } from "antd";


const { Column, ColumnGroup } = Table;

export default function TableComp(props: { data: Analytic[] }) {
const analytics = [];
    

console.log(analytics.resources);


 analytics.map((row) => (
     
            console.log(row)       
))
    return (
        
       <table data-testid="table" style={{ width: "100%" }}>
        <colgroup></colgroup>
        <thead className="ant-table-thead">
          <tr>
            <th className="ant-table-cell url">Url</th>
            <th className="ant-table-cell type">Initiator Type</th>
            <th className="ant-table-cell size">Transfer Size</th>
            <th className="ant-table-cell duration">Duration</th>
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
