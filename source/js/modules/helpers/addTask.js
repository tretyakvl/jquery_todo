const storage = require('./storage')

/**
 *
 * @param {String} task
 */
module.exports = function (task) {
  const $taskTemplate = $($('template').prop('content')).find('.task')
  const $taskClone = $taskTemplate.clone()
  const $tasksList = $('.tasks__list:not(.tasks__list--completed)')
  const $completedTasksList = $('.tasks__list--completed')

  const tasksArray = storage.getTasks() || []
  tasksArray.push([task, false])
  storage.store(tasksArray)

  $taskClone.find('input[type=text]').attr('value', task)
  $tasksList.append($taskClone)
  console.log($taskClone)
}
