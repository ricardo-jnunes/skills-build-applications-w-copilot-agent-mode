import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    score: { type: Number, required: true },
    streak: Number,
    rank: Number,
  },
  { timestamps: true },
);

export const Leaderboard = model('Leaderboard', leaderboardSchema);
