import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

import { Button } from '.';

describe('Button component', () => {
  it('Button is enabled', () => {
    const onPress = jest.fn();
    const isDisabled = true;
    renderer.create(<Button isDisabled={isDisabled} onPress={onPress}>Text</Button>);
  });

  it('Button is disabled', () => {
    const onPress = jest.fn();
    const isDisabled = false;
    renderer.create(<Button isDisabled={isDisabled} onPress={onPress}>Text</Button>);
  });

  it('Button has pressed', () => {
    const onPress = jest.fn();
    const isDisabled = false;
    const { getByTestId } = render(<Button isDisabled={isDisabled} onPress={onPress}>Text</Button>);
    const button = getByTestId('button');
    fireEvent.press(button);
  });
});
