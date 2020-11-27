import React from 'react'
import { shallow, mount } from 'enzyme'
// import ReactDOM from 'react-dom'
// import ReactTestUtils from 'react-dom/test-utils'
import DefaultButton from '../src/DefaultButton'

// test('isElemnet', ()=>{
//     const props = {
//         label : 'foo',
//         onClick: ()=> {}
//     }
//     const element = <DefaultButton {...props} />

//     expect(ReactTestUtils.isElement(element)).toBe(true)
// })
// test('onClick',()=> {
//     const props = {
//         label: 'foo',
//         onClick: jest.fn()
//     }
//     const instance = ReactTestUtils.renderIntoDocument(
//         <DefaultButton {...props} />
//     )
//     const node = ReactDOM.findDOMNode(instance)

//     ReactTestUtils.Simulate.click(node)
//     expect(props.onClick).toBeCalled()
// })

// test('label', ()=>{
//     const props = {
//         label : 'foo',
//         onClick: ()=> {}
//     }
//     const wrapper = shallow(<DefaultButton {...props}/>);

//     expect(wrapper.props().children).toBe(props.label);
// })
// test('onClick',()=> {
//     const props = {
//         label: 'foo',
//         onClick: jest.fn()
//     }
//     const wrapper = shallow(<DefaultButton {...props}/>);
//     wrapper.find('button').simulate('click');
//     expect(props.onClick).toBeCalled();
// })

// test('If label characters less than 10, classname is small',()=> {
//     const props = {
//         label : 'foo'
//     };
//     const wrapper = shallow(<DefaultButton {...props} />)
//     expect(wrapper.props().className).toBe('small')
// })
// test('If label characters is 10, classname is small',()=> {
//     const props = {
//         label : 'foobarbaz'
//     };
//     const wrapper = shallow(<DefaultButton {...props} />)
//     expect(wrapper.props().className).toBe('small')
// })
// test('If label characters over 10, classname is small',()=> {
//     const props = {
//         label : 'foobarbazfoobarbaz'
//     };
//     const wrapper = shallow(<DefaultButton {...props} />)
//     expect(wrapper.props().className).toBe('long')
// })

test('label', () => {
    const props = {
        label: 'foo'
    };

    const wrapperShallow = shallow(<DefaultButton {...props}/>);
    const wrapperMount = mount(<DefaultButton {...props}/>);

    console.log(wrapperShallow.debug());
    console.log(wrapperMount.debug());
});