const storage = require('./helpers/storage')
const addTask = require('./helpers/addTask')

const tasksList = document.querySelector('.tasks__list')
const $counter = $('.footer__count')
const observer = new MutationObserver(observerCallback)
const observerOptions = {
  childList: true
}
function observerCallback () {
  const count = tasksList.children.length
  const s = count === 1 ? '' : 's'

  $counter.text(`${count} item${s} left`)
}

observer.observe(tasksList, observerOptions)
storage.getTasks().forEach(task => {
  addTask(task)
})
