const headerTime = $('.header__time')
const headerDay = $('.header__day')
const headerDate = $('.header__date')

let dateNow

function setDate () {
  dateNow = new Date()
  const regex = /(\w+),(.+)/
  const options = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: '2-digit'
  }

  const dateString = dateNow.toLocaleDateString('en-US', options)
  headerTime.attr('datetime', dateNow.toISOString())
  dateString.replace(regex, ($1, $2, $3) => {
    headerDay.text($2)
    headerDate.text($3)
  })
}

setDate()

const tomorrow = new Date(dateNow)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

const msToTomorrow = tomorrow.getTime() - dateNow.getTime()
setTimeout(() => {
  setDate()
}, msToTomorrow)
