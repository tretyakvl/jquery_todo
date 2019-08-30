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

const tasksToRender = storage.getTasks().sort(task => !task.completed)
const ANIMATION_DURATION = 100
let delay = ANIMATION_DURATION * tasksToRender.length

tasksToRender.forEach(task => {
  addTask(task).css({
    'animation-duration': `${ANIMATION_DURATION}ms`,
    'animation-delay': `${delay}ms`
  })

  delay -= ANIMATION_DURATION
})
