import { FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { Local } from '.'

export const Container = styled.View`
  padding: 15% 10%;
  background: ${props => props.theme.colors.background};
  flex: 1;

  position: relative;
`

export const Explore = styled.Text`
  font-size: 21px;
  font-weight: bold;

  color: ${props => props.theme.colors.title};
`

export const Popular = styled.Text`
  margin-top: 24px;
  font-size: 21px;

  font-weight: bold;
  color: ${props => props.theme.colors.title};
`

export const Main = styled(
  FlatList as new () => FlatList<Local>,
).attrs({
  contentContainerStyle: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
})`
`

export const NewButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.newButton};

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 5%;
  right: 5%;

  shadow-color: black;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
  elevation: 4;
`

export const NewButtonText = styled.Text``
