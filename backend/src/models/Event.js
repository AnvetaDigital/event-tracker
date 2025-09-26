import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
