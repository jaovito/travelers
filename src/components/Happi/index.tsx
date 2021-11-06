import React from 'react'
import {  Loading } from './styles'
import happiAnimation from '../../assets/happi.json';

export default function () {
  return (
      <Loading
        source={happiAnimation}
        autoPlay
        loop
      />
  )
}
