require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workouts')
// const Workout = require('./models/workoutModel')


// creates express app
const app = express()
const mongoose = require('mongoose')

//middleware
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

// route handler
app.get('/', (req, res) => {
    res.json({ msg: "Welcome to the app" })
})
app.use('https://mern-backend-woad.vercel.app/api/workouts', workoutRoutes)

// connect to DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to mongodb & listening on port ' + process.env.PORT + '!')
        })
    })
    .catch((error) => {
        console.log(error)
    })


