const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

export function FormattedDate({ date, ...props }) {
  date = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const isFutureDate = date > now

  return (
    <time dateTime={date.toISOString()} {...props}>
      {isFutureDate ? '(Coming) ' : ''}
      {dateFormatter.format(date)}
    </time>
  )
}