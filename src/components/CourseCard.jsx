// components/CourseCard.js
import React from 'react';
import { Users, Clock, Star, Play } from 'lucide-react';

const CourseCard = ({ course, onCourseClick }) => {
  const getProgressColor = (progress) => {
    if (progress === 0) return 'bg-gray-200';
    if (progress < 50) return 'bg-red-400';
    if (progress < 80) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-bold text-gray-900">
          {course.price}
        </div>
        {course.progress > 0 && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
            In Progress
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
            {course.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm text-gray-600">{course.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Users size={16} />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
        </div>
        
        {course.progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        )}
        
        <button 
          onClick={() => onCourseClick(course)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Play size={18} />
          <span>{course.progress > 0 ? 'Continue Learning' : 'Start Course'}</span>
        </button>
      </div>
    </div>
  );
};

export default CourseCard;