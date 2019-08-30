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
    const moveCaret = () => {
      const input = $input.get(0)
      const range = input.value.length
      input.focus()
      input.setSelectionRange(range, range)
    }
    moveCaret()

    $parent.addClass(EDIT_CLASS)

    const keydownHandler = event => {
      event.preventDefault()

      if (event.keyCode === ENTER_KEYCODE || event.keyCode === ESC_KEYCODE) {
        $input.trigger('blur')
      }

      $input.off('keydown', keydownHandler)
    }
    $input.keydown(keydownHandler)

    const deleteHandler = event => {
      const id = $parent.data('id')

      $parent.remove()
      storage.delete(id)
    }
    $parent.find('.task__delete').click(deleteHandler)

    $input.attr('readonly', false)

    const blurHandler = event => {
      const TIMEOUT = 200

      setTimeout(() => {
        $parent.removeClass(EDIT_CLASS)
      }, TIMEOUT)

      $input.attr('readonly', true)
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
