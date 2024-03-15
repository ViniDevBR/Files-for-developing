import ddi from './ddi.json'

interface ICountryList {
  pais: string
  img: string
  ddi: number
  continente: string
}

function objetoParaArray<T>(objeto: object): T[] {
  return Object.values(objeto)
}

export const ddiList = objetoParaArray<ICountryList>(ddi)
