import React from 'react'
import {shallow} from 'enzyme'
//import ReactShallowRenderer from 'react-test-renderer/shallow';
// import toJSON from 'enzyme-to-json'
import Header from '../../components/Header';

test('should render header correctly', () => {
    const warrper = shallow(<Header />)
    expect(warrper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})