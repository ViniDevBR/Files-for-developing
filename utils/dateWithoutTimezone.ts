export const dateWithoutTimezone = (date: Date) => {
  const ONE_MINUTE_TO_MILISECONDS = 60000
  const tzoffset = date.getTimezoneOffset() * ONE_MINUTE_TO_MILISECONDS;
  // converte a diferença de fuso horário de minutos para milissegundos (1 minuto = 60.000 milissegundos).
  const withoutTimezone = new Date(date.valueOf() - tzoffset)
    .toISOString()
    .slice(0, -1); // REMOVE O Z do final
  return withoutTimezone;
};

export const dataHoraBrasil = new Date()
  .toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    formatMatcher: 'best fit'
  })
  .replace(/,/g, '')
