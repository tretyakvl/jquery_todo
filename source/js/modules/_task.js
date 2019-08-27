const completeTask = require('./helpers/completeTask')
const $task = $($('template').prop('content')).find('.task')

$task.click(event => {
  if (event.target.matches('[type="checkbox"]')) {
    completeTask($(event.delegateTarget))
  }
})
