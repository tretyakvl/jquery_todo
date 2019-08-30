const storage = require('./storage')
const COMPLETED = 'task--completed'
/**
 *
 * @param {JQuery} $task
 */
module.exports = function ($task) {
  const $completedList = $('.tasks__list--completed')

  $task.addClass(COMPLETED).off().removeAttr('style')
  $completedList.prepend($task)

  storage.update(task => {
    if (task.id === $task.data('id')) {
      task.completed = true
    }

    return task
  })
}
