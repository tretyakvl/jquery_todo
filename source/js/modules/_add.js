const addTask = require('./helpers/addTask')
const $addInput = $('.add__input')
const ENTER_CODE = 13

$addInput.keydown((event) => {
  if (event.keyCode === ENTER_CODE) {
    addTask($addInput.val())
    $addInput.val('')
  }
})
