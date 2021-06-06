var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MuscleExcerciseSchema = new Schema({
  muscle: {type: Schema.Types.ObjectId, required: true},
  excercise: {type: Schema.Types.ObjectId, required: true},
  effect: (type: Number, required: true)
});

//Export model
module.exports = mongoose.model('MuscleExcercise', MuscleExcerciseSchema);

