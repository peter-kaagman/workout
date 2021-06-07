var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExcerciseSchema = new Schema({
  name: {type: String, required: true},
  variety: {type: String},
  machine_nr: {type: String}
});

// Virtual for Training URL
ExcerciseSchema
  .virtual('url')
  .get(function () {
    return '/workouts/excercise/' + this.id;
});

//Export model
module.exports = mongoose.model('Excercise', ExcerciseSchema);
