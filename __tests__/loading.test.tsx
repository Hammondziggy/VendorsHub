import React from "react";
import Loading from "@/app/loading";
import { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

// Tests that the component renders without crashing
it('test_renders_component', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.exists()).toBe(true);
});
