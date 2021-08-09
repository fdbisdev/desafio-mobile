import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { StatusBarLight } from './StatusBarLight';

// Note: test renderer must be required after react-native.

describe('StatusBarLight component', () => {
  it('renders correctly', () => {
    renderer.create(<StatusBarLight />);
  });
});
