import renderer from 'react-test-renderer';

import Home from './home';
import {render, screen} from "@testing-library/react";
test('Home test snapshot', ()=>{
 const homeTest = renderer.create(<Home/>).toJSON();
 expect(homeTest).toMatchSnapshot();
});

test('hello text test',()=>{
 render(<Home/>);
 const helloText = screen.getByText(/Hello Perf-Dashboard/i);
 expect(helloText).toBeInTheDocument();
});

test('Time test', ()=>{
 render(<Home/>);
 const endTime = screen.getByTestId('home-element')
 expect(endTime).toBeInTheDocument();

});






