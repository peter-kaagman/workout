var express = require('express');
var router = express.Router();

// Controller modules
var training_controller = require('../controllers/trainingController');
var muscle_controller = require('../controllers/muscleController');

//
// Training routes
//

// Get workouts home page
router.get('/', training_controller.index);

//
// Muscle routes
//

// Create muscle GET
router.get('/muscle/create', muscle_controller.muscle_create_get);

// Create muscle POST
router.post('/muscle/create', muscle_controller.muscle_create_post);

// GET request for one muscle
router.get('/muscle/:id', muscle_controller.muscle_detail);

module.exports = router;
