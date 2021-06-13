var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MuscleSchema = new Schema({
  name: {type: String, required: true},
  areas: [{name: String, points: [x: Number, y: Number]}]
});

// Virtual for Training URL
MuscleSchema
  .virtual('url')
  .get(function () {
    return '/workouts/muscle/' + this.id;
});

//Export model
module.exports = mongoose.model('Muscle', MuscleSchema);
