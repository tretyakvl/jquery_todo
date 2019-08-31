const completeTask = require('./helpers/completeTask')
const storage = require('./helpers/storage')

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
    const EDIT_CLASS = 'task--edit'
    const ANIMATION_DURATION = 250

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

    const $deleteButton = $parent.find('.task__delete')
    const deleteHandler = () => {
      const FADE_OUT_CLASS = 'fade-out-left'
      const id = $parent.data('id')

      $parent.addClass(FADE_OUT_CLASS)
      setTimeout(() => {
        $parent.remove()
      }, ANIMATION_DURATION)
      storage.delete(id)
    }
    $deleteButton.click(deleteHandler)

    $input.blur(() => {
      const FADE_OUT_CLASS = 'fade-out-right'

      $deleteButton.addClass(FADE_OUT_CLASS)
      setTimeout(() => {
        $deleteButton.off()
        $deleteButton.removeClass(FADE_OUT_CLASS)
        $parent.removeClass(EDIT_CLASS)
      }, ANIMATION_DURATION)

      storage.update(task => {
        if (task.id === $parent.data('id')) {
          task.value = $input.val()
        }

        return task
      })
      $input.attr('readonly', true)
    })
  }
})

function moveCaret (input) {
  const range = input.value.length

  input.focus()
  input.setSelectionRange(range, range)
}
