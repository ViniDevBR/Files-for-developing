import { format } from 'date-fns'

//Need install DATE-FNS

export function formatData(date: string) {

  return format(new Date(date), 'dd/MM/yyyy')
}

export function formatDateBR(date: string) {

  return format(new Date(date), 'dd MMM')
}

export function formatDateTime(date: string) {

  return format(new Date(date), 'dd MMM yyyy HH:mm')
}

export function formatimestamp(date: string) {

  return getTime(new Date(date))
}

export function formatDateTimeSuffix(date: string) {

  return format(new Date(date), 'dd/MM/yyyy hh:mm p')
}

export function formatToNow(date: string) {

  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  })
}
