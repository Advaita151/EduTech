import React from 'react';
import { Users, BookOpen, BarChart3 } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => (
  <div className="bg-white shadow-sm border-b">
    <div className="px-6">
      <nav className="flex space-x-8">
        {[{ id: 'overview', label: 'Overview', icon: BarChart3 }, { id: 'institutions', label: 'Institutions', icon: Users }, { id: 'courses', label: 'Courses', icon: BookOpen }].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-4 border-b-2 font-medium transition-colors ${
              activeTab === id
                ? 'border-orange-500 text-orange-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </nav>
    </div>
  </div>
);

export default Navigation;
