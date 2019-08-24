const headerDay = $('.header__day')
const headerDate = $('.header__date')

const dateNow = new Date()

function setDate () {
  const regex = /(\w+),(.+)/
  const options = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: '2-digit'
  }

  const dateString = dateNow.toLocaleDateString('en-US', options)
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
