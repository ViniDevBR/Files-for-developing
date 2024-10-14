//On react native need to install intl and use -----> 
{
//INTL
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
} on the App.tsx

export function formatCoin(coin: number) {
  return new Intl.NumberFormat('pt-br',
    { style:'currency', currency:'BRL'})
    .format(coin)
}
