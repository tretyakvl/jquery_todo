const storage = require('./storage')

/**
 *
 * @param {Array} task
 */
module.exports = function (task) {
  const [string, isCompleted] = task
  const $taskTemplate = $($('template').prop('content')).find('.task')
  const $taskClone = $taskTemplate.clone()
  const $tasksList = $('.tasks__list:not(.tasks__list--completed)')
  const $completedTasksList = $('.tasks__list--completed')

  const tasksArray = storage.getTasks() || []
  tasksArray.push(task)
  storage.store(tasksArray)

  $taskClone.find('input[type=text]').attr('value', string)

  if (isCompleted) {
    $taskClone.addClass('.task--completed')
    $completedTasksList.append($taskClone)
  } else {
    $tasksList.append($taskClone)
  }
}
