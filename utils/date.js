const msInADay = 8.64e+7

const moreThan = (days) => {
  const today = new Date()

  return (date) => {
    const comparedDate = new Date(date)
    const dateDifference = today.getTime() - comparedDate.getTime()
    const milisseconds = days * msInADay
    return Boolean(dateDifference > milisseconds)
  }
}

module.exports = {
  moreThan
}
