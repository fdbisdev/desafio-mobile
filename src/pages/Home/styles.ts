import styled from 'styled-components/native';
import { View } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(View)`
  flex: 1;
  background-color: #393D3F;
`;

export const ButtonWrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(12)}px;
`;
