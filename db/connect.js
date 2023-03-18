const mongoose = require('mongoose')

const connectDB = (url) => {
	return mongoose.connect(url,
		{useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false})
	
	.then(() => {console.log('CONNECTED TO DB')})
	.catch((err) => { console.log('failed to connect to db')})
}

module.exports = connectDB 
