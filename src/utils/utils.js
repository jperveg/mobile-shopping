export const getNextHourTime = () => {
  const now = new Date()
  return now.setHours(now.getHours() + 1)
}

export const dateIsAfter = (timestamp) => {
  const now = new Date()
  return timestamp > now.getTime()
}
