const storage = require('./helpers/storage')

$('.filters > input[type=radio]').change(event => {
  const $tasksList = $('.tasks__list:not(.tasks__list--completed)')

  if (event.delegateTarget.id === 'completed') {
    $tasksList.hide()
  } else {
    $tasksList.show()
  }
})

$('.filters__clear').click(event => {
  $('.task--completed').each((i, elem) => {
    const $task = $(elem)
    const id = $task.data('id')

    $task.remove()
    storage.delete(id)
  })
})
