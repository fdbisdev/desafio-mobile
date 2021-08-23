import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 16px;
  max-width: 130px;
`;

export const MovieBanner = styled.ImageBackground`
  height: 175px;
  width: 125px;
`;

export const MovieDateWrapper = styled.View`
  background-color: #555;
  border: 1px solid #fff;
  margin-top: 145px;
  padding: 4px;
  align-self: center;
`;

export const MovieDate = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const MovieName = styled.Text`
  color: #fff;
  padding: 4px;
`;
