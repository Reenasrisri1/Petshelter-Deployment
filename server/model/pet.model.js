const mongoose = require('mongoose');
//// name, type, description, skill1, skill2, skill3
const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Pet name is required'],
      minlength: [3, 'Pet name must be atleast 3 characters or longer'],
    },
    type: {
      type: String,
      required: [true, 'Pet type is required'],
      minlength: [3, 'Pet type must be atleast 3 characters or longer'],
    },
    description: {
      type: String,
      required: [true, 'Pet description is required'],
      minlength: [3, 'Pet description must be atleast 3 characters or longer'],
    },
    skill1: {
      type: String,
      
    },
    skill2: {
      type: String,
     
    },
    skill3: {
      type: String,
      
    },
  },
  { timestamps: true }
);
  
module.exports = mongoose.model('Pet', PetSchema);
