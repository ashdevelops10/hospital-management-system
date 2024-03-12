import mongoose from 'mongoose';
const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: String,
      required: true,
    },
    workInHospitals:{
    type: mongoose.Schema.Types.ObjectId,
    ref= "Hospital"
    
    }

  },
  { timestamps: true }
);
export const Doctor = mongoose.model('Doctor', doctorSchema);
