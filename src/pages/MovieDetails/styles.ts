import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

const SCREEN_WIDHT = Dimensions.get('screen').width;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: rgb(52,52,52);
`;

export const MovieWrapper = styled.View`
  padding: 10px;
  background-color: rgb(35,35,35);
`;

export const MovieBannerLarge = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${SCREEN_WIDHT}px;
  height: 400px;
`;

export const MovieInfoWrapper = styled.View`
  flex-direction: row;
  width: ${SCREEN_WIDHT}px;
  align-items: center;
`;

export const MovieName = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
`;

export const MovieDate = styled.Text`
  color: #A0a0a0;
  margin-left: 6px;
  font-size: 14px;
`;

export const MovieDetailsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MovieDuration = styled.Text`
  margin-top: 4px;
  color: #A0a0a0;
  font-size: 14px;
`;

export const MovieGenre = styled.Text`
  margin-top: 4px;
  color: #A0a0a0;
  font-size: 12px;
`;

export const MovieCastWrapper = styled.ScrollView`
  background-color: rgb(52,52,52);
  height: 180px;
  padding: 10px;
`;

export const MovieDescriptionSeparator = styled.View`
  height: 4px;
  width: ${SCREEN_WIDHT - RFValue(25)}px;
  background-color: rgb(74,74,74);
`;

export const MovieDescriptionWrapper = styled.View`
  padding: 10px;

  background-color: rgb(52,52,52);
`;

export const BackButton = styled(FA5Icon).attrs({
  size: 26,
  color: '#F5F5F5',
  name: 'arrow-circle-left',
})``;

export const BackButtonWrappper = styled.TouchableOpacity`
  position: absolute;
  top: 42px;
  left: 8px;
  z-index: 2;
`;

export const MovieBannerWrapper = styled.View`
  flex: 1;
`;

export const MovieBannerEffect = styled(LinearGradient)`
  z-index: 1;
  width: ${SCREEN_WIDHT}px;
  height: 468px;
  position: absolute;
  opacity: 0.4;
`;

export const MovieCastEffect = styled(LinearGradient)`
  z-index: 1;
  width: ${SCREEN_WIDHT}px;
  height: 172px;
  position: absolute;
  opacity: 0.4;
`;

export const MovieBannerMini = styled.Image`
  width: 118px;
  height: 172px;
`;

export const MovieCastBanner = styled.ImageBackground`
  width: 118px;
  height: 172px;
  margin-left: 10px;
`;

export const ActorName = styled.Text`
  color: #fff;
  font-size: 12px;
  z-index: 2;
`;

export const CharacterName = styled.Text`
  color: #fff;
  font-size: 12px;
  z-index: 2;
`;

export const ActorInfoWrapper = styled.View`
  align-items: center;
  margin-top: 125px;
`;

export const MovieDescriptionText = styled.Text`
  margin-top: 12px;
  font-size: 14px;
  margin-bottom: 4px;
  letter-spacing: 1.05px;
  line-height: 22px;
  color: rgb(210,210,210)
`;
