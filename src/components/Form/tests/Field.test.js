import React from 'react';
import { shallow } from 'enzyme';
import Field from '../Field';

describe('Field Component Tests', () => {
  const component = shallow(<Field/>);
  const mockOnChange = jest.fn();

  test('Check if component renders without failure', () => {
    expect(component.find('input').length).toBe(1);
  });

  test('Check if component works with value prop', () => {
    component.setProps({ value: 'Hello' });
    expect(component.find('input').props().value).toBe('Hello');
  });

  test('Check if component triggers onCHange', () => {
    component.setProps({ onChange: mockOnChange });
    component.find('input').simulate('change', { value: 'Talk' });
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
  
});
