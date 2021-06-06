var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TrainingSchema = new Schema({
  training_date: {type: Date}
});

// Virtual for Training URL
TrainingSchema
  .virtual('url')
  .get(function () {
    return '/workouts/training/' + this.id;
});

//Export model
module.exports = mongoose.model('Training', TrainingSchema);
