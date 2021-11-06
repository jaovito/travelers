import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 56px;
  margin-top: 24px;
  padding: 8px 0 8px 8px;
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;

  background: ${props => props.theme.colors.input};
  border: 1px solid ${props => props.theme.colors.inputBorder};
`

export const Input = styled.TextInput`
  width: 80%;
  height: 100%;
`

export const Button = styled(RectButton)`
  background-color: ${props => props.theme.colors.button};
  width: 56px;
  height: 56px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`
