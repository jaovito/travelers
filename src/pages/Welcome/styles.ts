import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.title};
  margin-bottom: 16px;
`

export const Input = styled.TextInput`
  height: 56px;
  width: 80%;
  background-color: ${props => props.theme.colors.input};
  border: 1px solid ${props => props.theme.colors.inputBorder};
  padding: 16px;

  border-radius: 10px;
`

export const Button = styled(RectButton)`
  width: 80%;
  height: 56px;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.button};

  margin-top: 16px;
  border-radius: 10px;
`

export const TextButton = styled.Text`
  color: ${props => props.theme.colors.background};
  font-weight: bold;
  font-size: 16px;
`
