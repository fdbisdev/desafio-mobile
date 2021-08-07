import styled from 'styled-components/native';

import {
  TouchableOpacity, Text, TouchableOpacityProps, TextProps,
} from 'react-native';

interface TouchableType extends TouchableOpacityProps {
  isDisabled: boolean;
}

interface TextButton extends TextProps {
  isDisabled: boolean;
}

export const Container = styled(TouchableOpacity) <TouchableType>`
  border: 1px solid;
  border-color: #EEEEEE;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 80px;
  background: ${(props) => (props.isDisabled ? '#EEEEEE' : '#393D3F')};
`;

export const ButtonText = styled(Text) <TextButton>`
  color: ${(props) => (props.isDisabled ? '#393D3F' : '#EEEEEE')};
`;
