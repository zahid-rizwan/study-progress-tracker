import React, { useState } from 'react';

const GoalTracker = () => {
    const [goal, setGoal] = useState('');
    const [studyTime, setStudyTime] = useState(0);

    const handleGoalInputChange = (e) => {
        setGoal(e.target.value);
    };

    const handleAddStudyTime = () => {
        // Assuming studyTime is in minutes
        setStudyTime(studyTime + parseInt(goal));
        setGoal('');
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Study Goal Tracker</h1>
            <div className="mb-4">
                <label htmlFor="goal" className="block mb-1">Set Study Goal (minutes):</label>
                <input
                    type="number"
                    id="goal"
                    value={goal}
                    onChange={handleGoalInputChange}
                    className="border border-gray-300 px-2 py-1 rounded mb-2"
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow"
                    onClick={handleAddStudyTime}
                >
                    Add Study Time
                </button>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-2">Total Study Time:</h2>
                <p>{studyTime} minutes</p>
            </div>
        </div>
    );
};

export default GoalTracker;
