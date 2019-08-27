const storage = require('./helpers/storage')
const addTask = require('./helpers/addTask')
const generateId = require('./helpers/generateID')

const $addInput = $('.add__input')
const ENTER_CODE = 13

$addInput.keydown((event) => {
  if (event.keyCode === ENTER_CODE) {
    const task = {
      value: $addInput.val(),
      completed: false,
      id: generateId()
    }

    addTask(task)
    storage.store(task)
    $addInput.val('')
  }
})
