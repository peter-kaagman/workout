var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TrainingExcerciseSchema = new Schema({
  training: {type: Schema.Types.ObjectId, ref: 'Training', required: true},
  excercise: {type: Schema.Types.ObjectId, ref: 'Excercise', required: true},
});

//Export model
module.exports = mongoose.model('TrainingExcercise', TrainingExcerciseSchema);

