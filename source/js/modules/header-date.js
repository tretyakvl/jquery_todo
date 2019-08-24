const headerDay = $('.header__day')
const headerDate = $('.header__date')

const date = new Date()

function setDate () {
  const regex = /(\w+),(.+)/
  const options = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: '2-digit'
  }

  const dateString = date.toLocaleDateString('en-US', options)
  dateString.replace(regex, ($1, $2, $3) => {
    headerDay.text($2)
    headerDate.text($3)
  })
}

setDate()
