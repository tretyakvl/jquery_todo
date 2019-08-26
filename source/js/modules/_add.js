const addInput = $('.add__input')
const ENTER_CODE = 13

addInput.keydown((event) => {
  if (event.keyCode === ENTER_CODE) {
    console.log(addInput.val())
  }
})
