import React, { useCallback, useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { View } from 'react-native'
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native'

import { Container, Main, Explore, Popular, NewButton, NewButtonText } from './styles'
import InputSearch from '../../components/InputSearch'
import theme from '../../styles/theme'
import { api } from '../../services/api'
import TravelCard from '../../components/TravelCard'
import { generateRandomNumber } from '../../utils/generateRandomNumber'
import Load from '../../components/Load'

export type Comment = {
  id: number,
  name: string,
  text: string
}

export type Local = {
  id: number,
  name: string,
  images: {
    content: string
  }[],
  description: string,
  comments: Comment[],
  empty: boolean;
  created_at: Date
}

export type RootStackParamList ={
  Local: {
    id: number;
  }
  Home: undefined;
  Welcome: undefined;
  CreateLocal: undefined;
}

type LocalNavigationProps = NavigationProp<RootStackParamList, 'Local'>

export default function Home() {
  const [locals, setLocals] = useState<Local[]>([]);
  const [filteredLocals, setFilteredLocals] = useState<Local[]>([]);
  const [localText, setLocalText] = useState('');
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<LocalNavigationProps>()

  const handleLoadTravels = useCallback(() => {
    api.get('locals').then(response => {
      setLocals(response.data)
      setFilteredLocals(response.data)
      setLoading(false)
      setLocalText('')
    })

    return () => {
      setLocals([])
      setFilteredLocals([])
      setLoading(true)
      setLocalText('')
    }
  }, [])

  useFocusEffect(handleLoadTravels)

  function filterLocals() {
    const filtered = locals.filter(local => local.name.toLowerCase().includes(localText.toLowerCase()))

    setFilteredLocals(filtered)
    setLocalText('')
  }

  function createRows(data: any, columns: number) {
    const rows = Math.floor(data.length / columns); // [A]
    let lastRowElements = data.length - rows * columns; // [B]
    while (lastRowElements !== columns) { // [C]
      data.push({ // [D]
        id: `empty-${generateRandomNumber(1, 9999)}`,
        name: `empty-${generateRandomNumber(9999, 99999)}`,
        empty: true
      });
      lastRowElements += 1; // [E]
    }
    return data; // [F]
  }

  const handleNavigateToLocal = useCallback((id: number) => {
    navigation.navigate('Local', { id })
  }, [navigation])

  const handleNavigateToCreateLocal = useCallback(() => {
    navigation.navigate('CreateLocal')
  }, [navigation])

  return (
    <Container>
      <Explore>Explorar</Explore>

      <InputSearch
        onClick={filterLocals}
        onChangeText={setLocalText}
        value={localText}
        placeholder="Busque seu local..."
        placeholderTextColor={theme.colors.placeholder}
        icon={<Feather name="search" size={24} color="white" />}
      />

      <Popular>Popular</Popular>

      {loading ? (
        <Load />
      ) : (
        <Main
          data={createRows(filteredLocals, 2)}
          keyExtractor={(local) => String(local.id)}
          numColumns={2}
          renderItem={({ item }) => {
            if (item.empty) {
              return (
                <View style={{
                  width: '50%',
                  height: 200,
                  margin: 0,
                }} />
              )
            }

            return <TravelCard onClick={() => handleNavigateToLocal(item.id)} image={item.images} title={item.name} />
          }}
        />
      )}

      <NewButton onPress={handleNavigateToCreateLocal}>
        <Feather name="plus" size={34} color="white" />
      </NewButton>
    </Container>
  )
}
