import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

// Note: test renderer must be required after react-native.

jest.mock('react-native-iphone-x-helper', () => ({ getStatusBarHeight: jest.fn() }));
jest.mock('react-native-responsive-fontsize', () => ({ RFValue: jest.fn() }));

describe('Home component', () => {
  it('Home renders correctly', () => {
    renderer.create(<Home />);
  });
});
