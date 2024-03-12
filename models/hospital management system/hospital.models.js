import mongoose from 'mongoose';
const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    speciality: [
      {
        type: String,
        required: true,
      },
      {
        type: String,
        required: true,
      },

      { type: String, required: true },

      { type: String, required: true },
    ],
  },
  { timestamps: true }
);
export const Hospital = mongoose.model('Hospital', hospitalSchema);
