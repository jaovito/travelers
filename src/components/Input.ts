import styled from "styled-components/native";

export default styled.TextInput`
  width: 100%;
  min-height: 56px;
  padding: 8px;

  border-radius: 10px;
  background: ${props => props.theme.colors.input};
  border: 1px solid ${props => props.theme.colors.inputBorder};
`
