import {render,screen} from '@testing-library/react'
import TimePicker from './timepicker';
import Home from "../../pages/home";
test('Time Picker test', ()=>{
    render(<TimePicker />);

    const table = screen.getByTestId('custom-element')
    expect(table).toBeInTheDocument();
});
