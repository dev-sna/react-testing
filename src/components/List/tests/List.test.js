import React from 'react';
import { mount } from 'enzyme';
import List from '../List';
import mockStore from '../../../testUtils/mockStore';
import { Provider } from 'react-redux';
import { tasks } from './testData/testData';

const store = mockStore({});

const Wrapper = props => {
  return (
    <Provider store={store}>
      <List {...props} />
    </Provider>
  );
};

describe('List container tests', () => {
  const component = mount(<Wrapper />);

  test('Check if List container renders', () => {
    expect(component.find('.list').length).toBe(1);
  });

  test('Check if component renders list', () => {
    component.setProps({ tasks });
    expect(component.find('.list-item-container').length).toBe(3);
  });

  test('Check if items have correct text', () => {
    expect(component.find('.task-name').get(0).props.children).toBe('Talk');
    expect(component.find('.task-date').get(0).props.children).toBe(
      '25-1-2019',
    );
  });
});
