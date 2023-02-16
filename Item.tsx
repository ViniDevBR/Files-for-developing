import { useState } from 'react'
import { IMateriaisRequisicaoItens } from '../../@types/Request'
import { ModalLot } from '../ModalLot'
import { Text } from '../Text'
import { Container, Header } from './styles'


export function Item(props: IMateriaisRequisicaoItens) {
  const[isModalLotOpen, setIsModalLotOpen] = useState<boolean>(false)

  return (
    <>
      <Container onPress={() => setIsModalLotOpen(!isModalLotOpen)}>
        <Header>
          <Text size={14} weight='700'>{props.Produto}</Text>
          <Text size={14} weight='700'>{props.QuantidadeRequisitada} {props.Unidade}</Text>
        </Header>
      </Container>

      <ModalLot
        lote={props.Lotes}
        produto={props.Produto}
        visible={isModalLotOpen}
        onClose={() => setIsModalLotOpen(!isModalLotOpen)}
        availableQuantity={props.QuantidadeDisponivel}
        requiredQuantity={props.QuantidadeRequisitada}
      />
    </>
  )
}
