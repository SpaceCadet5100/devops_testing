console.log('Task Manager App')
const express = require('express');
const tasksRouter = require('./routes/api')
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.use('/api/v1/tasks', tasksRouter);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Tssssadfsdfsadfa11sk manager app');
})

app.delete('/api/v1/tasks/:id', (req, res) => {
	res.send('Task manager app');
})
const start = async() => {
	try {
		await connectDB(process.env.MONGO_URL)
		app.listen(port, console.log('server is listening'));
	}
	catch{
		console.log(error)

	}

}

start()
