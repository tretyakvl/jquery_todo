const COMPLETED = 'task--completed'
/**
 *
 * @param {Array} task
 */
module.exports = function (task) {
  const [string, isCompleted, id] = task
  const $taskTemplate = $($('template').prop('content')).find('.task')
  const $taskClone = $taskTemplate.clone(true)
  const $tasksList = $('.tasks__list:not(.tasks__list--completed)')
  const $completedTasksList = $('.tasks__list--completed')

  $taskClone.find('input[type=text]').attr('value', string)
  $taskClone.data('id', id)

  if (isCompleted) {
    $taskClone.addClass(COMPLETED)
    $completedTasksList.append($taskClone)
  } else {
    $tasksList.append($taskClone)
  }
}
