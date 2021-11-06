import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Container, Main, Title, InputGroup, Label, ImageButton, ImageContainer, Image, Button, ButtonText, DisabledButton } from './styles'
import Input from '../../components/Input';
import { api } from '../../services/api';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import { RootStackParamList } from '../Home';

type LocalNavigationProps = NavigationProp<RootStackParamList, 'Local'>

export default function CreateLocal() {
  const [images, setImages] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [disabled, setDisabled] = useState(true)

  const navigation = useNavigation<LocalNavigationProps>()

  useEffect(() => {
    if (images === null || name === '' || description === '') {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [images, name, description])

  async function handleSelectImages() {
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if( status !== 'granted') {
      alert('Eita, precisamos de acesso às suas fotos...')
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [13, 16]
    })

    if (result.cancelled) {
      return;
    }

    const {uri: image} = result

    setImages(image)
  }

  async function handleSubmit() {
    await api.post('locals', {
      id: generateRandomNumber(654, 5497),
      name,
      description,
      images: [{ content: images }],
      created_at: new Date
    })

    navigation.navigate('Home')
  }

  return (
    <Container>
      <Title>Cadastrar local</Title>

      <Main>
        <InputGroup>
          <Label>Nome</Label>
          <Input
            placeholder="Ex: New York"
            value={name}
            onChangeText={setName}
          />
        </InputGroup>

        <InputGroup>
          <Label>Descrição</Label>
          <Input
            multiline
            placeholder="Escreva sua descrição aqui"
            value={description}
            onChangeText={setDescription}
          />
        </InputGroup>

        <ImageContainer>
          {images && <Image resizeMode="cover" source={{ uri: images }} />}
        </ImageContainer>

        <InputGroup>
          <Label>Adicione suas imagens</Label>
          <ImageButton onPress={handleSelectImages}>
            <Feather name='plus' size={24} color="#15b6d6" />
          </ImageButton>
        </InputGroup>


        {disabled ? (
          <DisabledButton>
            <ButtonText>Enviar</ButtonText>
          </DisabledButton>
        ) : (
          <Button onPress={handleSubmit}>
            <ButtonText>Enviar</ButtonText>
          </Button>
        )}

      </Main>
    </Container>
  )
}
