var mongoose = require('mongoose');  
var ApplicationFormSchema = new mongoose.Schema({  
  question_name: String,
  question_actual_answer: String,
  question_user_answered: String
});
mongoose.model('ApplicationForm', ApplicationFormSchema);

module.exports = mongoose.model('ApplicationForm');