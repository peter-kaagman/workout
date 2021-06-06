const {body, validationResult} = require('express-validator');
var Muscle = require('../models/muscle');
var async = require('async');

// Display a list of all Mucles
exports.muscle_list = function(req,res){
  res.send('Not implemented yet: Muscle List');
}

// Display a detail page for a Muscle
// i.e. image and used in which Ecercise
exports.muscle_detail = function(req,res){
  async.parallel({
    muscle: function(callback){
      Muscle.findById(req.params.id).exec(callback);
    }
    // Here I can add in which excercise the muscle is used
  }, function(err, results){
    if(err) {return next(err);}
    if(results.muscle==null) { // no results
      err.status = 404;
      return next(err);
    }
    // Succesful, so render
    res.render('muscle_detail', {title: 'Muscle Detail', muscle: results.muscle});
  });
};

// Display Muscle create form on GET
exports.muscle_create_get = function (req,res){
  res.render('muscle_form', {title: 'Create Muscle'});
};

// Display Muscle create form on POST
exports.muscle_create_post = [
  // Validate and sanitize the the name field
  body('name', 'Muscle name required').trim().isLength({min:1}).escape(),

  // Process request after validation and sanitization
  (req, res, next) =>{
    // Extract validation errors from the a request
    const errors = validationResult(req);

    // Create a muscle object with escaped and trimmed data.
    var muscle = new Muscle(
      { name: req.body.name }
    );

    // Handle errors
    if (!errors.isEmpty()){
      // There are errors. Render the form again with sanitized values/error message
      res.render('muscle_form', {title: 'Create Muscle', muscle: muscle, errors: errors.array()});
    } else{
      // There are no errors
      // Check if Muscle with same name already excists
      Muscle.findOne({name: req.body.name})
      .exec( function(err, found_muscle) {
        if (found_muscle) {
          // Muscle excists, redirect to its detail page
          console.log(`Muscle ${req.body.name} allready excists: ${found_muscle._id}`);
          res.redirect(found_muscle.url);
        }else{
          muscle.save(function(err) {
            if (err) {return next(err);}
            // Muscle saved. Redirect to muscle detail page
            res.redirect(muscle.url);
          })
        }
      });
    }
  }
];

// Display Muscle delete form on GET
exports.muscle_delete_get = function (req,res){
  res.send('Not implemented yet: Muscle Delete GET');
};

// Display Muscle delete form on POST
exports.muscle_delete_post = function (req,res){
  res.send('Not implemented yet: Muscle Delete POST ');
};

// Display Muscle update form on GET
exports.muscle_update_get = function (req,res){
  res.send('Not implemented yet: Muscle Update GET');
};

// Display Muscle update form on POST
exports.muscle_update_post = function (req,res){
  res.send('Not implemented yet: Muscle Update POST ');
};
