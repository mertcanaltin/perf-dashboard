import {render,screen} from '@testing-library/react'
import Table from './table';
test('Table test', ()=>{
    const dummyData: Analytic = {
        domLoad: 0,
        createdAt: 0,
        firstContentfulPaint: 0,
        timeToFirstByte: 0,
        windowLoad: 0,
        resources: [
            {
                name: 'stack.com/style.css',
                initiatorType: 'css',
                duration: 100,
                transferSize: 50,
            },
        ],
    };

    const { debug,container } = render(<Table data={[dummyData]}/>);


    const tableUrlEl = container.querySelector('.url');
    const tableTypeEl = container.querySelector('.type');
    const tableSizeEl = container.querySelector('.size');
    const tableDurationEl = container.querySelector('.duration');

    expect(tableUrlEl).toBeInTheDocument();
    expect(tableUrlEl).toHaveTextContent("Url");
    expect(tableUrlEl).toHaveClass("ant-table-cell");

    expect(tableTypeEl).toBeInTheDocument();
    expect(tableTypeEl).toHaveTextContent("Initiator Type");
    expect(tableTypeEl).toHaveClass("ant-table-cell");

    expect(tableSizeEl).toBeInTheDocument();
    expect(tableSizeEl).toHaveTextContent("Transfer Size");
    expect(tableSizeEl).toHaveClass("ant-table-cell");

    expect(tableDurationEl).toBeInTheDocument();
    expect(tableDurationEl).toHaveTextContent("Duration");
    expect(tableDurationEl).toHaveClass("ant-table-cell");

})