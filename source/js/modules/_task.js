const completeTask = require('./helpers/completeTask')
const storage = require('./helpers/storage')
const $task = $($('template').prop('content')).find('.task')

$task.click(event => {
  if (event.target.matches('[type="checkbox"]')) {
    completeTask($(event.delegateTarget))
  }
})

$task.dblclick(event => {
  if (event.target.matches('[type="text"]')) {
    const $parent = $(event.delegateTarget)
    const $input = $(event.target)
    $input.attr('readonly', false)

    const blurHandler = (event) => {
      storage.update(task => {
        if (task.id === $parent.data('id')) {
          task.value = $input.val()
        }

        return task
      })
    }

    $input.blur(blurHandler)
  }
})
