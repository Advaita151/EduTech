import React from 'react';
import { Activity } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, iconBg, change, changeType }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg ${iconBg}`}>
        <Icon className="text-gray-600" size={24} />
      </div>
      {change && (
        <div className={`flex items-center gap-1 text-sm ${
          changeType === 'positive' ? 'text-green-600' : 'text-red-600'
        }`}>
          <Activity size={14} />
          {change}
        </div>
      )}
    </div>
    <div>
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="text-2xl font-bold text-black">{value}</p>
    </div>
  </div>
);

export default StatsCard;