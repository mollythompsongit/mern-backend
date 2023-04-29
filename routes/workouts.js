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


router.get('/', getWorkouts)
// router.get('/', function (req, res) {
//     console.log(req.hostname);
//     () => getWorkouts
// });



// GET a single workout
router.get('/:id', getWorkout)
// router.get('/:id', function (req, res) {
//     getWorkout
// })

// POST a new workout
router.post('/', createWorkout)
// router.post('/', function (req, res) {
//     createWorkout
// })

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)
// router.patch('/:id', function (req, res) {
//     updateWorkout
// })



module.exports = router