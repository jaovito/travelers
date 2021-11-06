import { useRoute } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import InputSearch from '../../components/InputSearch'
import { api } from '../../services/api'
import theme from '../../styles/theme'
import { Local as LocalProps } from '../Home'
import {
  Container,
  Main,
  ImageView,
  ImageContainer,
  Image,
  LocalInfo,
  Title,
  Description,
  TimeInfo,
  IconView,
  Icon,
  TimeText,
  InfoContainer,
  InfoTitle,
  InfoDescription,
  CommentContainerTitle,
  Comment,
  Author,
  Message,

} from './styles'
import Load from '../../components/Load';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import { useInfo } from '../../contexts/userContext';

type RouteParams = {
  id: number;
}

export default function Local() {
  const [local, setLocal] = useState<LocalProps>({} as LocalProps);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const routes = useRoute();
  const routeParams = routes.params as RouteParams;

  const { name } = useInfo()

  function handleFormatDate(date: Date) {
    const distance = formatDistance(new Date(String(date)), new Date(), {
      locale: ptBR
    });

    return `${distance} atrás`
  }

  async function handleGetInfo() {
    const response = await api.get(`locals/${routeParams.id}?_embed=comments`)

    setLocal(response.data)
    setLoading(false)
  }

  useEffect(() => {
    handleGetInfo()

    return () => {
      setLocal({} as LocalProps)
      setLoading(true)
      setMessage('')
    }
  }, [])

  const handleSubmit = useCallback(async () => {
    await api.post('comments', {
      id: generateRandomNumber(25, 9999),
      name: name,
      text: message,
      localId: routeParams.id
    })

    setMessage('')

    handleGetInfo()
  }, [message, routeParams])

  if (loading) return <Load />

  return (
    <Container>
      <ImageView>
        <ImageContainer>
          <Image resizeMode="cover" source={{ uri: local?.images[0].content }} />
        </ImageContainer>

        <LocalInfo>
          <Title>{local?.name}</Title>
          <Description numberOfLines={1}>{local?.description}</Description>

          <TimeInfo>
            <IconView>
              <Icon name="clock" />
            </IconView>

            <TimeText>{handleFormatDate(local.created_at)}</TimeText>
          </TimeInfo>
        </LocalInfo>
      </ImageView>

      <Main>
        <InfoContainer>
          <InfoTitle>Descrição</InfoTitle>

          <InfoDescription>{local?.description}</InfoDescription>
        </InfoContainer>

        <InputSearch
          icon={<Feather name="send" size={24} color="white" />}
          placeholder="Comentar..."
          placeholderTextColor={theme.colors.placeholder}
          value={message}
          onChangeText={setMessage}
          onClick={handleSubmit}
        />

        <CommentContainerTitle>Comentários</CommentContainerTitle>

        {local?.comments.map(comment => (
          <Comment key={comment.id}>
            <Author>{comment.name}</Author>

            <Message>{comment.text}</Message>
          </Comment>
        ))}
      </Main>
    </Container>
  )
}
