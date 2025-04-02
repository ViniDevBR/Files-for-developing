import numeral from 'numeral'

//Need install NUMERAL
export function formatCurrency(number: number) {
  return numeral(number).format(Number.isInteger(number) ? '0,0' : '0,0.00')
}

export function formatPercent(number: number) {
  return numeral(number / 100).format('0.0%')
}

export function formatNumber(number: number) {
  return numeral(number).format()
}

export function formatShortenNumber(number: number) {
  return numeral(number).format('0.00a').replace('.00', '')
}

export function formatDecimal(
  value?: number,
  options?: Intl.NumberFormatOptions,
  defaultValue?: string
) {
  if (typeof value !== 'number' || isNaN(value)) return defaultValue ?? '0,00'

  return value.toLocaleString(
    'pt-BR',
    options ?? {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4
    }
  )
}

// export function formatData(number: number) {
//   return numeral(number).format('0.0 b')
// }
