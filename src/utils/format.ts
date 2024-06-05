export const convertMoneyToNumber = (value: string) => {
  return Number(value.replace(/\./, '').replace(',', '.'))
}
