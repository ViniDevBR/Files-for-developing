export const dateWithoutTimezone = (date: Date) => {
  const ONE_MINUTE_TO_MILISECONDS = 60000
  const tzoffset = date.getTimezoneOffset() * ONE_MINUTE_TO_MILISECONDS;
  // converte a diferença de fuso horário de minutos para milissegundos (1 minuto = 60.000 milissegundos).
  const withoutTimezone = new Date(date.valueOf() - tzoffset)
    .toISOString()
    .slice(0, -1); // REMOVE O Z do final
  return withoutTimezone;
};
