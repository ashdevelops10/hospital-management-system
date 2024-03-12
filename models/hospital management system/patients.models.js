import mongoose from 'mongoose';
const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    bloodGroup: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
