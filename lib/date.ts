const formatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Tokyo',
})

/** e.g. "2021年5月18日" */
export const formatDate = (date: string | Date) => formatter.format(new Date(date))

/** e.g. "2021-05-18" (for <time dateTime>) */
export const toISODate = (date: string | Date) => new Date(date).toISOString().slice(0, 10)
