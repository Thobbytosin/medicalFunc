import mongoose, { Document, Model, Schema } from "mongoose";

interface IDoctor extends Document {
  name: string;
  email: string;
  password: string;
  profilePicture?: string;
  specialization: string;
  experience: number;
  education: string[];
  licenseNumber: string;
  certifications?: string[];
  availableDays: string[];
  timeSlots: string[];
  holidays?: Date[];
  clinicAddress: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  altPhone?: string;
  ratings: number;
  reviews: {
    patientId: mongoose.Schema.Types.ObjectId;
    comment: string;
    rating: number;
    date: Date;
  }[];
  appointments: mongoose.Schema.Types.ObjectId[];
  maxPatientsPerDay: number;
  about?: string;
  thumbnail: { id: string; url: string };
}

const doctorSchema: Schema<IDoctor> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    education: [{ type: String, required: true }],
    licenseNumber: { type: String, required: true },
    certifications: [{ type: String }],
    availableDays: [{ type: String, required: true }],
    timeSlots: [{ type: String, required: true }],
    holidays: [{ type: Date }],
    clinicAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    phone: { type: String, required: true },
    altPhone: { type: String },
    ratings: { type: Number, default: 0 },
    reviews: [
      {
        patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
        comment: { type: String },
        rating: { type: Number },
        date: { type: Date, default: Date.now },
      },
    ],
    appointments: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    ],
    maxPatientsPerDay: { type: Number, required: true },
    about: { type: String },
    thumbnail: {
      id: {
        type: String,
      },
      url: { type: String },
    },
  },
  { timestamps: true }
);

const Doctor: Model<IDoctor> = mongoose.model("Doctor", doctorSchema);

export default Doctor;
