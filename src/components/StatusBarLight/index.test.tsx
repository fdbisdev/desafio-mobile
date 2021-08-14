import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { StatusBarLight } from '.';

// Note: test renderer must be required after react-native.

describe('StatusBarLight component', () => {
  it('renders correctly', () => {
    renderer.create(<StatusBarLight />);
  });
});
