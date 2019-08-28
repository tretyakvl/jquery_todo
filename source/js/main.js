
$(() => {
  require('./modules/_header-date')
  require('./modules/_add')
  require('./modules/_task') // Should be before _tasks
  require('./modules/_tasks')
})
