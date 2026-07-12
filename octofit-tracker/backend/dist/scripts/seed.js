"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../models/user");
const team_1 = require("../models/team");
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const workout_1 = require("../models/workout");
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            user_1.User.deleteMany({}),
            team_1.Team.deleteMany({}),
            activity_1.Activity.deleteMany({}),
            leaderboard_1.Leaderboard.deleteMany({}),
            workout_1.Workout.deleteMany({}),
        ]);
        const teams = await team_1.Team.create([
            { name: 'River Runners', sport: 'Running', city: 'Seattle' },
            { name: 'Harbor Cyclists', sport: 'Cycling', city: 'Portland' },
        ]);
        const users = await user_1.User.create([
            {
                name: 'Maya Chen',
                email: 'maya@example.com',
                age: 29,
                fitnessGoal: 'Half marathon',
                city: 'Seattle',
                teamId: teams[0]._id,
            },
            {
                name: 'Jordan Rivera',
                email: 'jordan@example.com',
                age: 34,
                fitnessGoal: 'Strength endurance',
                city: 'Portland',
                teamId: teams[1]._id,
            },
            {
                name: 'Ava Patel',
                email: 'ava@example.com',
                age: 27,
                fitnessGoal: 'Stress relief',
                city: 'Denver',
            },
        ]);
        await activity_1.Activity.create([
            {
                userId: users[0]._id,
                type: 'Run',
                durationMinutes: 45,
                distanceKm: 8.2,
                caloriesBurned: 520,
            },
            {
                userId: users[1]._id,
                type: 'Ride',
                durationMinutes: 60,
                distanceKm: 24,
                caloriesBurned: 700,
            },
            {
                userId: users[2]._id,
                type: 'Yoga',
                durationMinutes: 30,
                caloriesBurned: 180,
            },
        ]);
        await leaderboard_1.Leaderboard.create([
            { userId: users[0]._id, score: 980, streak: 7, rank: 1 },
            { userId: users[1]._id, score: 915, streak: 4, rank: 2 },
            { userId: users[2]._id, score: 870, streak: 3, rank: 3 },
        ]);
        await workout_1.Workout.create([
            {
                name: 'Tempo Run',
                category: 'Cardio',
                difficulty: 'Intermediate',
                durationMinutes: 35,
                equipment: ['Running shoes'],
                focus: 'Endurance',
                description: 'A steady run with a short fast finish.',
            },
            {
                name: 'Strength Circuit',
                category: 'Strength',
                difficulty: 'Beginner',
                durationMinutes: 25,
                equipment: ['Dumbbells'],
                focus: 'Full body',
                description: 'A short circuit focusing on core and upper body.',
            },
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
