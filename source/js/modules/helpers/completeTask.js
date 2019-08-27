const storage = require('./storage')
const COMPLETED = 'task--completed'
/**
 *
 * @param {JQuery} $task
 */
module.exports = function ($task) {
  const $completedList = $('.tasks__list--completed')
  $task.addClass(COMPLETED)
  $completedList.prepend($task)
  function cb (task) {
    // task = [value, isCompleted, id]

    if (task[2] === $task.data('id')) {
      task[1] = true
    }

    return task
  }

  storage.update(cb)
}
