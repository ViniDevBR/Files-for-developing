import { Modal, FlatList } from 'react-native'
import { IMateriaisRequisicaoItemLotes } from '../../@types/Request'
import { Header } from '../Header'
import { Lot } from '../Lot'
import { Text } from '../Text'
import { Container, QuantityContainer } from './styles'


interface IModalProps {
  lote: IMateriaisRequisicaoItemLotes[]
  produto: string
  onClose: VoidFunction
  availableQuantity: number
  requiredQuantity: number
  visible: boolean
}

export function ModalLot({ onClose, ...props }: IModalProps) {
  return (
    <Modal
      onRequestClose={onClose}
      visible={props.visible}
      animationType='fade'
    >
      <Container>
        <Header title={props.produto} icon='x' onPress={onClose}/>

        <QuantityContainer>
          <Text weight='500'>Qtd disponivel: {props.availableQuantity}</Text>
          <Text weight='500'>Qtd requisitada: {props.requiredQuantity}</Text>
        </QuantityContainer>

        <FlatList
          data={props.lote}
          style={{ paddingHorizontal: 16 }}
          keyExtractor={item => item.Handle.toString()}
          renderItem={({ item: lote }) =>
            <Lot
              DataFabricacao={lote.DataFabricacao}
              DataValidade={lote.DataValidade}
              Handle={lote.Handle}
              Lote={lote.Lote}
              QuantidadeDisponivel={lote.QuantidadeDisponivel}
              QuantidadeRequistada={lote.QuantidadeRequistada}
            />
          }
        />
      </Container>
    </Modal>
  )
}
