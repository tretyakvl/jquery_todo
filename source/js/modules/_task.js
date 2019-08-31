const completeTask = require('./helpers/completeTask')
const storage = require('./helpers/storage')

const EDIT_CLASS = 'task--edit'
const ENTER_KEYCODE = 13
const ESC_KEYCODE = 27
const $task = $($('template').prop('content')).find('.task')

$task.click(event => {
  if (event.target.matches('[type="checkbox"]')) {
    completeTask($(event.delegateTarget))
    $(event.delegateTarget).find('[type=text]').trigger('blur')
  }
})

$task.dblclick(event => {
  if (event.target.matches('[type="text"]')) {
    const $parent = $(event.delegateTarget)
    const $input = $(event.target)

    $input.attr('readonly', false)
    $parent.addClass(EDIT_CLASS)
    moveCaret($input.get(0))

    const keydownHandler = event => {
      if (event.keyCode === ENTER_KEYCODE || event.keyCode === ESC_KEYCODE) {
        event.preventDefault()
        $input.trigger('blur')
        $input.off('keydown', keydownHandler)
      }
    }
    $input.keydown(keydownHandler)

    const deleteButton = $parent.find('.task__delete')
    const deleteHandler = () => {
      const id = $parent.data('id')

      $parent.remove()
      storage.delete(id)
    }
    deleteButton.click(deleteHandler)

    $input.blur(() => {
      $input.attr('readonly', true)

      const TIMEOUT = 200
      setTimeout(() => {
        deleteButton.off('click', deleteHandler)
        $parent.removeClass(EDIT_CLASS)
      }, TIMEOUT)

      storage.update(task => {
        if (task.id === $parent.data('id')) {
          task.value = $input.val()
        }

        return task
      })
    })
  }
})

function moveCaret (input) {
  const range = input.value.length

  input.focus()
  input.setSelectionRange(range, range)
}
