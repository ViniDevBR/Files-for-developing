//REACT
import { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
//NAVIGATION
import { useNavigation, useRoute } from '@react-navigation/native'
//COMPONENTS
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Text } from '../../components/Text'
import { FilterItem } from '../../components/FilterItem'
import { Input } from '../../components/Input'
import { Item } from '../../components/Item'
//STYLED COMPONENTS
import { SafeContainer, Row, RowFilter } from './styles'
import { useTheme } from 'styled-components'
import { API } from '../../services/api'
import { IMateriaisRequisicaoItens } from '../../@types/Request'

interface RouteParams {
  Handle: string
}


const itemExample: IMateriaisRequisicaoItens[] = [
  {
    Handle: 1,
    CodigoBarras: '1g23sdfhgf546hgfdfgh',
    CodigoReferencia: 'produto1-base2',
    Produto: 'Caneta',
    Variacao: 'Preta',
    QuantidadeDisponivel: 320,
    QuantidadeRequisitada: 135,
    Unidade: 'Cx',
    ControlaLote: false,
    Lotes: []
  },
  {
    Handle: 2,
    CodigoBarras: '1g23sdfhgf546hdasgfdfgh',
    CodigoReferencia: 'produto15-base2',
    Produto: 'Acetona',
    Variacao: '1 Litro',
    QuantidadeDisponivel: 155,
    QuantidadeRequisitada: 35,
    Unidade: 'Un',
    ControlaLote: true,
    Lotes: [
      {
        Handle: 1,
        Lote: '50',
        DataFabricacao: '10-10-1010',
        DataValidade: '20-20-2020',
        QuantidadeDisponivel: 30,
        QuantidadeRequistada: 135
      },
      {
        Handle: 2,
        Lote: '51',
        DataFabricacao: '10-10-1010',
        DataValidade: '20-20-2020',
        QuantidadeDisponivel: 100,
        QuantidadeRequistada: 135
      },
      {
        Handle: 3,
        Lote: '52',
        DataFabricacao: '10-10-1010',
        DataValidade: '20-20-2020',
        QuantidadeDisponivel: 50,
        QuantidadeRequistada: 135
      }
    ]
  },
  {
    Handle: 3,
    CodigoBarras: 'fsdgfd345654hrfsfgh4',
    CodigoReferencia: 'produto157-base27',
    Produto: 'Acetona',
    Variacao: '500 ml',
    QuantidadeDisponivel: 320,
    QuantidadeRequisitada: 15,
    Unidade: 'Un',
    ControlaLote: true,
    Lotes: [
      {
        Handle: 1,
        Lote: '50',
        DataFabricacao: '10-10-1010',
        DataValidade: '20-20-2020',
        QuantidadeDisponivel: 30,
        QuantidadeRequistada: 135
      },
      {
        Handle: 2,
        Lote: '51',
        DataFabricacao: '10-10-1010',
        DataValidade: '20-20-2020',
        QuantidadeDisponivel: 100,
        QuantidadeRequistada: 135
      },
      {
        Handle: 3,
        Lote: '52',
        DataFabricacao: '10-10-1010',
        DataValidade: '20-20-2020',
        QuantidadeDisponivel: 50,
        QuantidadeRequistada: 135
      }
    ]
  },
  {
    Handle: 4,
    CodigoBarras: 'fs2345dgfd345654hrfsfgh4',
    CodigoReferencia: 'produto1573-base273',
    Produto: 'Borracha',
    Variacao: null,
    QuantidadeDisponivel: 320,
    QuantidadeRequisitada: 15,
    Unidade: 'Un',
    ControlaLote: false,
    Lotes: []
  },
]


export function WishList() {
  const [searchText, setSearchText] = useState<string>('')
  const [listItens, setListItens] = useState<IMateriaisRequisicaoItens[]>([])

  const { COLORS } = useTheme()
  const { params } = useRoute()
  const { Handle } = params as RouteParams
  const { goBack } = useNavigation()


  const filtered = searchText ? listItens.filter(itens => itens.Produto.includes(searchText)) : listItens

  useEffect(() => {
    setListItens(itemExample)
  },[])

  return (
    <SafeContainer>
      <Header icon='x' title={`Pedido: ${Handle}`} onPress={goBack}/>

      <View style={{ paddingHorizontal: 8 }}>
        <Input name='search' placeholder='Pesquisar' icon='search' onChangeText={e => setSearchText(e)}/>
      </View>

      <FlatList
        data={filtered}
        style={{ paddingHorizontal: 8 }}
        keyExtractor={item => item.Handle.toString()}
        renderItem={({ item: order }) => (
          <Item
            Handle={order.Handle}
            Produto={order.Produto}
            CodigoBarras={order.CodigoBarras}
            CodigoReferencia={order.CodigoReferencia}
            ControlaLote={order.ControlaLote}
            Lotes={order.Lotes}
            QuantidadeDisponivel={order.QuantidadeDisponivel}
            QuantidadeRequisitada={order.QuantidadeRequisitada}
            Unidade={order.Unidade}
            Variacao={order.Variacao}
          />
        )}
      />

      <View style={{ paddingHorizontal: 8, paddingVertical: 16 }}>
        <Button title='Finalizar' onPress={goBack}/>
      </View>
    </SafeContainer>
  )
}
