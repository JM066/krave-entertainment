export const getRandomDate = (startTime: Date, endTime: Date) => {
  return new Date(startTime.getTime() + Math.random() * (endTime.getTime() - startTime.getTime()))
}
