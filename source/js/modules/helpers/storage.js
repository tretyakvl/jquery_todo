module.exports = {
  /**
   *
   * @param {CallableFunction} action Array.map(([value, isCompleted, id]) => {action}) callback
   */
  update (action) {
    const tasks = this.getTasks()
    localStorage.setItem('tasks', JSON.stringify(tasks.map(action)))
  },
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
