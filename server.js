require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

const cors = require('cors')
const bodyParser = require('body-parser')





//Database connection
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>  console.log("conection successfull..")).catch((err) => console.log(err))
// Get the default connection
// const db = mongoose.connection;
// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));


// Passport config
// const passportInit = require('./app/config/passport')
// passportInit(passport)
// app.use(passport.initialize())
// app.use(passport.session())

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// assets
app.use(express.static(__dirname + '/public'));

// pages
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')



require('./routes/web')(app)
app.use((req, res) => {
    res.status(404).render('errors/404')
})


const server = app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}`)
})