const storage = require('./helpers/storage')
const addTask = require('./helpers/addTask')
const $addInput = $('.add__input')
const ENTER_CODE = 13

$addInput.keydown((event) => {
  if (event.keyCode === ENTER_CODE) {
    const task = [$addInput.val(), false]
    addTask(task)
    storage.store(task)
    $addInput.val('')
  }
})
