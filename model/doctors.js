import mongoose from 'mongoose';
const { Schema } = mongoose;

const DoctorSchema = new Schema({
    name: { type: String, required: true },
    status: { type: Boolean },
    appointment: {type: String, required : true}
})

export const doctorModel = mongoose.models?.doctor || mongoose.model('doctor', DoctorSchema)