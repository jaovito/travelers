import React from 'react'
import { Container, Loading } from './styles'
import loadAnimation from '../../assets/loading.json';

export default function () {
  return (
    <Container>
      <Loading
        source={loadAnimation}
        autoPlay
        loop
      />
    </Container>
  )
}
