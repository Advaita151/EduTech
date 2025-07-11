import React from 'react';
import { Users } from 'lucide-react';

const RecentActivity = ({ institutions }) => (
  <div className="bg-white rounded-xl shadow-sm border">
    <div className="p-6 border-b">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-black">Recent Activity</h3>
        <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">View All</button>
      </div>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        {institutions.slice(0, 5).map((institution) => (
          <div key={institution.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
              <Users className="text-white" size={16} />
            </div>
            <div className="flex-1">
              <p className="font-medium text-black">{institution.name}</p>
              <p className="text-sm text-gray-600">{institution.students} students • {institution.courses.length} courses</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-black">{institution.completionRate}%</p>
              <p className="text-xs text-gray-500">completion</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RecentActivity;