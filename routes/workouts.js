const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');


const router = express.Router()

// this is to get all workouts


router.get('https://mern-backend-woad.vercel.app/', getWorkouts)
// router.get('/', function (req, res) {
//     console.log(req.hostname);
//     () => getWorkouts
// });



// GET a single workout
router.get('https://mern-backend-woad.vercel.app/:id', getWorkout)
// router.get('/:id', function (req, res) {
//     getWorkout
// })

// POST a new workout
router.post('https://mern-backend-woad.vercel.app/', createWorkout)
// router.post('/', function (req, res) {
//     createWorkout
// })

// DELETE a workout
router.delete('https://mern-backend-woad.vercel.app/:id', deleteWorkout)

// UPDATE a workout
router.patch('https://mern-backend-woad.vercel.app/:id', updateWorkout)
// router.patch('/:id', function (req, res) {
//     updateWorkout
// })



module.exports = router