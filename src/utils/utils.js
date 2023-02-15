export const getNextHourTime = () => {
  const now = new Date()
  return now.setHours(now.getHours() + 1)
}
