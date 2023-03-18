const express = require('express')

const Task = require('../models/Task')


const getAllTasks = (req, res) => {
	res.send('all items')
}

const getTask = async (req, res) => {
	try{
	const {id:taskID} = req.parms
	const task = await Task.findOne({_id:taskID})
	if(!task){
		
		return	res.status(404).json({msg: 'nothing found'})	 
	}

	res.status(201).json({task})
	}
	catch(err){
		res.status(500).json({msg:err})
	}

}

const createTask= async (req, res) => {
	try{
	const task = await Task.create(req.body)
	res.status(201).json({task})
	}
	catch(err){
		res.status(500).json({msg:err})
	}
}

const patchTask= (req, res) => {
	res.send('all items')
}


const removeTask = (req, res) => {
	res.send('all items')
}


module.exports = {
	getTask,
	getAllTasks,
	createTask,
	patchTask, 
	removeTask
}

