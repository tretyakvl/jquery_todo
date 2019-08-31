const storage = require('./helpers/storage')
const FADE_OUT_CLASS = 'fade-out-left'
const ANIMATION_DURATION = 250
const $taskList = $('.tasks__list')
const observer = new MutationObserver(observerCallback)
function observerCallback () {
  if ($taskList.get(0).childElementCount > 1 || $taskList.get(1).childElementCount > 1) {
    const $footerInfo = $('.footer__info')
    const ANIMATION_DURATION = 1550

    $footerInfo.addClass('fade-out').css({ 'animation-duration': '500ms', 'animation-delay': '1000ms' })
    setTimeout(() => {
      $footerInfo.remove()
    }, ANIMATION_DURATION)

    $taskList.each((i, elem) => observer.disconnect(elem))
  }
}

$taskList.each((i, elem) => observer.observe(elem, { childList: true }))

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
