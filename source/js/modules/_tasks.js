const storage = require('./helpers/storage')
const addTask = require('./helpers/addTask')

storage.getTasks().forEach(task => addTask(task))
