const express = require('express')
const {getAllTasks, getTask, createTask, patchTask, removeTask} = require('../controllers/tasks')

const router = express.Router()

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(patchTask).delete(removeTask)

module.exports = router 



