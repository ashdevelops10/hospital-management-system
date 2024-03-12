import mongoose from 'mongoose';
const medical_recordsSchema = mongoose.Schema({}, { timestamps: true });
export const Medical_records = mongoose.model(
  'Medical_records',
  medical_recordsSchema
);
