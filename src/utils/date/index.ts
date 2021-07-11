export const formatDate = (date: string, locale: string) =>
  new Date(date).toLocaleString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
