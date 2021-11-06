import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
`


export const ImageView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
})`
  position: relative;
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height / 2}px;
`

export const ImageContainer = styled.View`
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height / 2}px;

  overflow: hidden;
  align-items: center;

`

export const Image = styled.Image`
  width: ${Dimensions.get('screen').width + 100}px;
  height: ${Dimensions.get('screen').width + 250}px;

  position: absolute;
  top: -80px;
`

export const LocalInfo = styled.View`
  width: 100%;
  height: 100%;

  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;

  position: absolute;
  left: 0;
  top: ${Dimensions.get('screen').height / 3}px;

  background-color: rgba(0, 0, 0, 0.6);

  padding: 16px 25px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.localTitle};
`

export const Description = styled.Text`
  color: ${props => props.theme.colors.localDescription};
  font-size: 14px;
  max-width: 180px;

  margin-bottom: 20px;
`

export const TimeInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const IconView = styled.View`
  width: 35px;
  height: 35px;
  background-color: ${props => props.theme.colors.interactBar};
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  margin-right: 5px;
`

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${props => props.theme.colors.background};
`

export const TimeText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.localTitle};
`

export const Main = styled.View`
  align-items: center;
  justify-content: center;

  margin: 33px auto;

  width: 85%;
`


export const InfoContainer = styled.View`
  width: 100%;
  background-color: ${props => props.theme.colors.shape};

  padding: 21px;
  border-radius: 22px;
`

export const InfoTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;

  color: ${props => props.theme.colors.title};
  margin-bottom: 9px;
`

export const InfoDescription = styled.Text`
  color: ${props => props.theme.colors.text}
`

export const CommentContainerTitle = styled.Text`
  font-size: 18px;
  align-self: flex-start;
  margin-top: 39px;
`

export const Comment = styled.View`
  width: 100%;
  padding: 12px;

  border-radius: 10px;
  margin-top: 16px;

  background-color: ${props => props.theme.colors.shape};
`

export const Author = styled.Text`
  font-size: 18px;
  font-weight: bold;

  margin-bottom: 13px;
  color: ${props => props.theme.colors.title};
`

export const Message = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`
