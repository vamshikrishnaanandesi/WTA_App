var mongoose = require('mongoose');  
var SubmittedApplicationFormSchema = new mongoose.Schema({  
    // user_id:String,
    // question_name: String,
    // question_actual_answer: mongoose.Schema.Types.ObjectId,
    // question_user_answer: String,

    user_details: { type: mongoose.Schema.Types.ObjectId, ref: 'ApplicationForm'}
});
mongoose.model('SubmittedApplicationForm', SubmittedApplicationFormSchema);

module.exports = mongoose.model('SubmittedApplicationForm');