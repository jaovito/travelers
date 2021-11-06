import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Container, Main, Background, Text } from './styles'


type CardProps = {
  image: Array<{
    content: string;
  }>;
  title: string;
  onClick?: () => void;
}

export default function TravelCard({ image, title, onClick }: CardProps) {
  return (
    <Container onPress={onClick}  activeOpacity={0.8}>
      <Background imageStyle={{ borderRadius: 22 }} resizeMode="center" source={{ uri: image[0].content }}>
        <Main>
          <Text numberOfLines={2}>{title}</Text>
        </Main>
      </Background>
    </Container>
  )
}
