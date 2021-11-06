import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  }
})`
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.title};

  margin: 15% 0;
`

export const Main = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center
`

export const InputGroup = styled.View`
  width: 80%;
  align-items: center;
  justify-content: center;

  margin-top: 28px;
`
export const Label = styled.Text`
  width: 80%;
  align-self: flex-start;
  color: ${props => props.theme.colors.text};
`

export const ImageButton = styled(RectButton)`
  align-self: flex-start;
  align-items: center;
  justify-content: center;

  height: 56px;
  width: 56px;
  border-radius: 10px;
  margin-top: 8px;
  margin-bottom: 20px;

  background: ${props => props.theme.colors.button};
`

export const ImageContainer = styled.View`
  width: 80%;
  margin-top: 16px;
`

export const Image = styled.Image`
  width: 270px;
  height: 200px;
  border-radius: 10px;
`

export const Button = styled(RectButton)`
  background: ${props => props.theme.colors.button};
  width: 80%;
  height: 56px;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.background};
  font-weight: bold;
  font-size: 16px;
`

export const DisabledButton = styled.View`
  background: ${props => props.theme.colors.newButton};
  width: 80%;
  height: 56px;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`
