const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },

  classDays: {
    type: [String],
    required: true,
  },
  classTime: {
    type: String,
    required: true,
  },
});

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: [3, 'Course Name is too short'],
  },
  description: {
    type: String,
    required: true,
    minLength: [3, 'Description is too short'],
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  duration: {
    type: String,
    required: true,
  },
  topics: {
    type: [String],
    required: true,
  },
  schedule: scheduleSchema,
});

const Course = model('Course', courseSchema);


module.exports = Course;
