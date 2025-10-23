import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const initialWeightData = [
    { name: '2024-09-01', weight: 72 },
    { name: '2024-09-15', weight: 70 },
    { name: '2024-10-01', weight: 68 },
    { name: '2024-10-15', weight: 69 },
    { name: '2024-10-23', weight: 65 }, 
];

const WeightLogPage = () => {
    const [weightLog, setWeightLog] = useState(initialWeightData);
    const [newWeight, setNewWeight] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const handleLogSubmit = (e) => {
        e.preventDefault();
        const weightValue = Number(newWeight);
        if (weightValue > 0) {
            const newEntry = {
                name: date, 
                weight: weightValue,
            };
            setWeightLog(prev => [...prev.filter(item => item.name !== date), newEntry].sort((a, b) => new Date(a.name) - new Date(b.name)));
            setNewWeight('');
        } else {
            alert('Please enter a valid weight.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-[78px]">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-red-600 mb-6 border-b pb-2">Weight Logging & Progress</h1>
                
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Weight History Chart</h2>
                    <div className="h-96 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={weightLog}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis domain={['auto', 'auto']} />
                                <Tooltip 
                                    formatter={(value) => [`${value} kg`, 'Weight']} 
                                    labelFormatter={(label) => `Date: ${label}`}
                                />
                                <Legend />
                                <Line type="monotone" dataKey="weight" stroke="#EF4444" activeDot={{ r: 8 }} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Log New Weight</h2>
                    <form onSubmit={handleLogSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                        <div className="md:col-span-1">
                            <label htmlFor="weight-input" className="block text-sm font-medium text-gray-700 mb-1">
                                Enter Weight (kg)
                            </label>
                            <input
                                id="weight-input"
                                type="number"
                                value={newWeight}
                                onChange={(e) => setNewWeight(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                                placeholder="e.g. 68.5"
                                min="1"
                                required
                            />
                        </div>
                        <div className="md:col-span-1">
                            <label htmlFor="date-input" className="block text-sm font-medium text-gray-700 mb-1">
                                Date
                            </label>
                            <input
                                id="date-input"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                                required
                            />
                        </div>
                        <div className="md:col-span-1">
                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-lg transition duration-200"
                            >
                                Save Entry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WeightLogPage;