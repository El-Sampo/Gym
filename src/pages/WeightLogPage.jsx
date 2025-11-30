// src/pages/WeightLogPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthModal from '../components/AuthModal';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WeightLogPage = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [weightEntries, setWeightEntries] = useState([]);
  const [newWeight, setNewWeight] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchWeightEntries();
    }
  }, [isAuthenticated]);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    } else {
      setIsAuthModalOpen(true);
    }
    setLoading(false);
  };

  const handleAuthSuccess = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setIsAuthModalOpen(false);
    fetchWeightEntries();
  };

  const fetchWeightEntries = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/weight-entries', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      
      if (data.success) {
        setWeightEntries(data.entries);
      }
    } catch (err) {
      console.error('Error fetching weight entries:', err);
    }
  };

  const handleSaveEntry = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!newWeight || newWeight <= 0) {
      setError('Please enter a valid weight');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/weight-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          weight: parseFloat(newWeight),
          date: selectedDate
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage('Weight entry saved successfully!');
        setNewWeight('');
        fetchWeightEntries();
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setError(data.message || 'Failed to save weight entry');
      }
    } catch (err) {
      setError('Failed to save weight entry. Please try again.');
      console.error('Error saving weight:', err);
    }
  };

  const handleDeleteEntry = async (entryId) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/weight-entries/${entryId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage('Weight entry deleted');
        fetchWeightEntries();
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (err) {
      setError('Failed to delete entry');
      console.error('Error deleting:', err);
    }
  };

  // Prepare chart data
  const chartData = weightEntries
    .slice(0, 10)
    .reverse()
    .map(entry => ({
      date: new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      weight: entry.weight
    }));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => {
            setIsAuthModalOpen(false);
            navigate('/fitnesstracker');
          }}
          onAuthSuccess={handleAuthSuccess}
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Please login to access weight logging
            </h2>
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Login / Sign Up
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
      
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Weight Logging & Progress
            </h1>
            <p className="text-gray-600">
              Welcome back, <span className="font-semibold">{user?.name}</span>! Track your weight journey.
            </p>
          </div>

          {/* Chart Section */}
          {chartData.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Weight History Chart
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#6B7280"
                      style={{ fontSize: '14px' }}
                    />
                    <YAxis 
                      stroke="#6B7280"
                      style={{ fontSize: '14px' }}
                      domain={['dataMin - 2', 'dataMax + 2']}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #ccc', 
                        borderRadius: '8px',
                        padding: '12px'
                      }}
                      formatter={(value) => [`${value} kg`, 'Weight']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="#EF4444" 
                      strokeWidth={3} 
                      dot={{ fill: '#EF4444', r: 5 }} 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Log New Weight Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-t-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Log New Weight
            </h2>

            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                {successMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Weight (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newWeight}
                  onChange={(e) => setNewWeight(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="e.g. 68.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleSaveEntry}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
                >
                  Save Entry
                </button>
              </div>
            </div>
          </div>

          {/* Weight History Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Weight History
              </h2>
            </div>

            {weightEntries.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-gray-500 text-lg">
                  No weight entries yet. Start logging your weight above!
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Weight (kg)
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Change
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {weightEntries.map((entry, index) => {
                      const previousWeight = weightEntries[index + 1]?.weight;
                      const change = previousWeight ? (entry.weight - previousWeight).toFixed(1) : null;
                      
                      return (
                        <tr key={entry.id} className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {new Date(entry.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            {entry.weight} kg
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {change !== null && (
                              <span className={`font-semibold ${change > 0 ? 'text-red-600' : change < 0 ? 'text-green-600' : 'text-gray-600'}`}>
                                {change > 0 ? '+' : ''}{change} kg
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => handleDeleteEntry(entry.id)}
                              className="text-red-600 hover:text-red-800 font-medium text-sm transition"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeightLogPage;