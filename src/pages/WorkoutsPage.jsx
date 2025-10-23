import React from 'react';

const WorkoutLogEntry = () => {
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log New Workout</h2>
            <input type="text" placeholder="Workout Name" className="w-full p-3 border mb-4" />
            <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">Save Workout</button>
        </div>
    );
};

const WorkoutsPage = () => {
    
    return (
        <div className="min-h-screen bg-gray-50 pt-[78px]"> 
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-red-600 mb-6 border-b pb-2">All Workouts History</h1>
                <WorkoutLogEntry />
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Workout Log</h2>
                    <p className="text-gray-600">Your workout history will appear here.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkoutsPage;