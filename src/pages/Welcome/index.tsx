import React, { useCallback, useState } from 'react'

import Happi from '../../components/Happi'
import { useInfo } from '../../contexts/userContext'
import theme from '../../styles/theme'
import { Container, Input, Title, Button, TextButton } from './styles'
import { Alert } from 'react-native'


export default function Welcome() {
  const [name, setName] = useState("")

  const { setUserName } = useInfo()

  const handleSaveName = useCallback(() => {
    if (name === "" || name === " ") {
      return Alert.alert('Nome inválido :(', 'Preencha seu nome por favor!')
    }

    setUserName(name)
  }, [name])

  return (
    <Container>
      <Happi />

      <Title>Seja bem-vindo!</Title>
      <Input
        placeholder="Digite seu nome..."
        placeholderTextColor={theme.colors.placeholder}
        value={name}
        onChangeText={setName}
      />

      <Button onPress={handleSaveName}>
        <TextButton>Salvar</TextButton>
      </Button>
    </Container>
  )
}
