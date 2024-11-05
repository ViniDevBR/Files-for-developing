import { brazilianStatesCities } from './brazilianStatesCities'

export const brazilianStates: ISelect[] = brazilianStatesCities.map((item) => ({
  value: item.sigla,
  label: item.sigla,
}))

export function citiesByState(stateSigla: string) {
  if (!stateSigla) return []

  const citiesByState = brazilianStatesCities.find(
    (item) => item.sigla === stateSigla,
  )

  return citiesByState?.cidades || []
}
