module.exports = {
  /**
   * @param {Array} task
   */
  store (task) {
    const tasks = this.getTasks() || []
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },
  /**
   * @returns {Array} Returns tasks array
   */
  getTasks () {
    return JSON.parse(localStorage.getItem('tasks')) || []
  }
}
