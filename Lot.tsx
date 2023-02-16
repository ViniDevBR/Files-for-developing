import { View } from 'react-native'
import { IMateriaisRequisicaoItemLotes } from '../../@types/Request'
import { Text } from '../Text'
import { Container, Quantity, InputText } from './styles'

export function Lot(props: IMateriaisRequisicaoItemLotes) {
  return (
    <Container>
      <View>
        <Text size={18} weight='700' style={{ marginBottom: 8 }}>Lote {props.Lote}</Text>
        <Text size={14}>Validade: {props.DataValidade}</Text>
        <Text size={14}>Qtd disp.: {props.QuantidadeDisponivel}</Text>
      </View>

      <Quantity>
        <Text>Qtd</Text>
        <InputText />
      </Quantity>
    </Container>
  )
}
