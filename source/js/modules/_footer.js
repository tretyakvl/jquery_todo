$('.filters > input[type=radio]').change(event => {
  const $tasksList = $('.tasks__list:not(.tasks__list--completed)')

  if (event.delegateTarget.id === 'completed') {
    $tasksList.hide()
  } else {
    $tasksList.show()
  }
})
