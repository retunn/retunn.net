type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export const formatDate = (date: string, dateStyle: DateStyle = 'full', locales = 'en') => {
  const dateToFormat = new Date(date.replaceAll('-', '/'))
  const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
  return dateFormatter.format(dateToFormat)
}