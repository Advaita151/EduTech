// components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'security', name: 'Security' }
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;