import React, { ReactNode } from 'react'
import { Container, Input, Button } from './styles'
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  onClick?: () => void
  icon: ReactNode
}

export default function InputSearch({ onClick, icon, ...rest }: InputProps) {
  return (
    <Container>
      <Input {...rest} />

      <Button onPress={onClick}>
        {icon}
      </Button>
    </Container>
  )
}
