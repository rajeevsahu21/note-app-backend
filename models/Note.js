import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    contributors: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
