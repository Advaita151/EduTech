// components/StatsCards.js
import React from 'react';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    { label: 'Total Courses', value: '24', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Active Students', value: '12.5K', icon: Users, color: 'bg-green-500' },
    { label: 'Completion Rate', value: '89%', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Certificates Issued', value: '8.2K', icon: Award, color: 'bg-orange-500' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="text-white" size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;