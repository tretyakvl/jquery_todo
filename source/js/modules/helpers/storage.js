module.exports = {
  /**
   * @param {Array} tasks
   */
  store (tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },
  /**
   * @returns {Array} Returns tasks array
   */
  getTasks () {
    return JSON.parse(localStorage.getItem('tasks'))
  }
}