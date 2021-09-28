import {render,screen} from '@testing-library/react'
import Chart from './chart';
test('Chart test', ()=>{
    const { debug,container } = render(<Chart/>);


    const titlePerf = container.querySelector('.title');

    expect(titlePerf).toBeInTheDocument();

})