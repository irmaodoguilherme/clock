const clockContainer = document.querySelector('[data-js="clock-container"]')
const oneSecond = 1000

const concatenateZero = timeUnit => timeUnit < 10 ? `0${timeUnit}` : timeUnit
const formatTimeUnits = timeUnits => timeUnits.map(concatenateZero)

const getTime = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  return [hours, minutes, seconds]
}

const getClockHTML = time => {
  const clockHTML = time.reduce((acc, timeUnit, index) => {
    const normalTimeUnit =
      `${acc}<span class="bg-opacity-75 txt-sh txt-stk font-monospace fst-italic bg-info rounded fs-5r px-3">${timeUnit}</span>`

    return index === 0 || index == 1 ? normalTimeUnit + ':' : normalTimeUnit
  }, ``)

  return clockHTML
}

const updateClock = () => {
  const [hours, minutes, seconds] = getTime()
  const formattedTime = formatTimeUnits([hours, minutes, seconds])

  clockContainer.innerHTML = getClockHTML(formattedTime)
}

setInterval(updateClock, oneSecond)