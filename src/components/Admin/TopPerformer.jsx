import React from 'react';

const TopPerformers = ({ institutions }) => {
  const sorted = [...institutions].sort((a, b) => b.completionRate - a.completionRate);

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-black">Top Performers</h3>
      </div>
      <div className="p-6 space-y-4">
        {sorted.slice(0, 3).map((institution, index) => (
          <div key={institution.id} className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
              index === 0
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
                : index === 1
                ? 'bg-gradient-to-r from-gray-400 to-gray-500'
                : 'bg-gradient-to-r from-orange-400 to-orange-500'
            }`}>
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="font-medium text-black">{institution.name}</p>
              <p className="text-sm text-gray-600">{institution.students} students</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-black">{institution.completionRate}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;