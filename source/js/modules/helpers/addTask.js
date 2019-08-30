const COMPLETED = 'task--completed'
/**
 *
 * @param {Object} task { value, completed, id }
 *
 * @returns {JQuery} Returs jQuery task object
 */
module.exports = function (task) {
  const $taskTemplate = $($('template').prop('content')).find('.task')
  const $taskClone = $taskTemplate.clone(true)
  const $tasksList = $('.tasks__list:not(.tasks__list--completed)')
  const $completedTasksList = $('.tasks__list--completed')

  $taskClone.find('input[type=text]').attr('value', task.value)
  $taskClone.data('id', task.id)

  if (task.completed) {
    $taskClone.addClass(COMPLETED)
    $completedTasksList.append($taskClone)
    $taskClone.off()
  } else {
    $tasksList.append($taskClone)
  }

  return $taskClone
}
