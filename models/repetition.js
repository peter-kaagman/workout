var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RepetitionSchema = new Schema({
  trainingexcercise: {type: Schema.Types.ObjectId, ref: 'TrainingExcercise', required: true},
  weight: {type: Number, required: true},
  count: {type: Number, required: true}
});

//Export model
module.exports = mongoose.model('Repetition', RepetitionSchema);

