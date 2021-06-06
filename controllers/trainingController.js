var Training = require('../models/training');
var Muscle = require('../models/muscle');

var async = require('async');

exports.index = function(req,res){
  async.parallel({
    training_count: function(callback){
      Training.countDocuments({}, callback);
    },
    muscle_count: function(callback){
      Muscle.countDocuments({}, callback)
    }
  }, function(err, results){
    res.render('index', {title: 'Workout Home', error: err, data: results});
  });
}

// Display a list of all Mucles
exports.training_list = function(req,res){
  res.send('Not implemented yet: Training List');
}

// Display a detail page for a Training
// i.e. image and used in which Ecercise
exports.training_list = function(req,res){
  res.send('Not implemented yet: Training List');
}

// Display Training create form on GET
exports.training_create_get = function (req,res){
  res.send('Not implemented yet: Training Create GET');
};

// Display Training create form on POST
exports.training_create_post = function (req,res){
  res.send('Not implemented yet: Training Create POST');
};

// Display Training delete form on GET
exports.training_delete_get = function (req,res){
  res.send('Not implemented yet: Training Delete GET');
};

// Display Training delete form on POST
exports.training_delete_post = function (req,res){
  res.send('Not implemented yet: Training Delete POST ');
};

// Display Training update form on GET
exports.training_update_get = function (req,res){
  res.send('Not implemented yet: Training Update GET');
};

// Display Training update form on POST
exports.training_update_post = function (req,res){
  res.send('Not implemented yet: Training Update POST ');
};
