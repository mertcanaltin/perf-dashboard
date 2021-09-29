import {render,screen} from '@testing-library/react'
import TimePicker from './timepicker';

test('Time Picker test', ()=>{
    render(<TimePicker />);

    const table = screen.getByTestId('timepicker-element')
    expect(table).toBeInTheDocument();
});
