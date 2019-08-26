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

  $taskClone.find('input[type=text]').attr('value', string)

  if (isCompleted) {
    $taskClone.addClass('.task--completed')
    $completedTasksList.append($taskClone)
  } else {
    $tasksList.append($taskClone)
  }
}
