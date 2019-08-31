const storage = require('./helpers/storage')
const FADE_OUT_CLASS = 'fade-out-left'
const ANIMATION_DURATION = 250

$('.filters > input[type=radio]').change(event => {
  const $tasksList = $('.tasks__list:not(.tasks__list--completed)')

  if (event.delegateTarget.id === 'completed') {
    $tasksList.addClass(FADE_OUT_CLASS)
    setTimeout(() => {
      $tasksList.hide().removeClass(FADE_OUT_CLASS)
    }, ANIMATION_DURATION)
  } else {
    $tasksList.show()
  }
})

$('.filters__clear').click(event => {
  $('.task--completed').each((i, elem) => {
    const $task = $(elem)
    const id = $task.data('id')

    $task.removeAttr('style')
    $task.addClass(FADE_OUT_CLASS)
    setTimeout(() => {
      $task.remove()
    }, ANIMATION_DURATION)
    storage.delete(id)
  })
})
