import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 50%;
  height: 200px;
  border-radius: 22px;
  margin: 5px 2px;
`

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: flex-end;
`

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 70%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 10px;

  background-color: ${props => props.theme.colors.interactBar};
`

export const Text = styled.Text`
  text-align: center;
  color: ${props => props.theme.colors.background};
  font-weight: bold;
  font-size: 18px;
`
