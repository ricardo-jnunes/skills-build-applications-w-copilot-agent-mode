import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: { type: String, required: true },
    category: String,
    difficulty: String,
    durationMinutes: Number,
    equipment: [String],
    focus: String,
    description: String,
  },
  { timestamps: true },
);

export const Workout = model('Workout', workoutSchema);
