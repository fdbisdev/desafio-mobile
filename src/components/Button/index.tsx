import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ButtonText,
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  isDisabled: boolean;
  children: string;
  onPress(): void;
}

export function Button({ children, isDisabled, onPress }: ButtonProps) {
  return (
    <Container
      testID="button"
      isDisabled={isDisabled}
      onPress={onPress}
    >
      <ButtonText
        isDisabled={isDisabled}
      >
        {children}
      </ButtonText>
    </Container>
  );
}
