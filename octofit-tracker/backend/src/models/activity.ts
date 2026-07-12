import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    durationMinutes: Number,
    distanceKm: Number,
    caloriesBurned: Number,
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const Activity = model('Activity', activitySchema);
