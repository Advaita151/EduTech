// components/CourseCard.js
import React, { useState } from 'react';
import { Users, Clock, Star, Play, Pencil, Save, X } from 'lucide-react';

const CourseCard = ({ course, onCourseClick, onCourseUpdate, isAdmin }) => {
  const [editableCourse, setEditableCourse] = useState(course);
  const [isEditing, setIsEditing] = useState(false);

  const getProgressColor = (progress) => {
    if (progress === 0) return 'bg-gray-200';
    if (progress < 50) return 'bg-red-400';
    if (progress < 80) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  const handleChange = (field, value) => {
    setEditableCourse((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    onCourseUpdate(editableCourse);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
      <div className="relative">
        <img 
          src={editableCourse.image} 
          alt={editableCourse.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-bold text-gray-900">
          {isEditing ? (
            <input
              className="w-16 text-right border border-gray-300 rounded px-1 text-sm"
              value={editableCourse.price}
              onChange={(e) => handleChange('price', e.target.value)}
            />
          ) : (
            editableCourse.price
          )}
        </div>
        {editableCourse.progress > 0 && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
            In Progress
          </div>
        )}
        {isAdmin && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
          >
            <Pencil size={16} />
          </button>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
            {isEditing ? (
              <input
                className="text-xs border rounded px-1 py-0.5"
                value={editableCourse.category}
                onChange={(e) => handleChange('category', e.target.value)}
              />
            ) : (
              editableCourse.category
            )}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            {isEditing ? (
              <input
                className="w-10 text-sm border rounded px-1"
                value={editableCourse.rating}
                onChange={(e) => handleChange('rating', e.target.value)}
              />
            ) : (
              <span className="text-sm text-gray-600">{editableCourse.rating}</span>
            )}
          </div>
        </div>

        {isEditing ? (
          <input
            className="text-lg font-bold text-gray-900 mb-2 w-full border rounded px-2 py-1"
            value={editableCourse.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
        ) : (
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{editableCourse.title}</h3>
        )}

        {isEditing ? (
          <input
            className="text-sm text-gray-600 mb-4 w-full border rounded px-2 py-1"
            value={editableCourse.instructor}
            onChange={(e) => handleChange('instructor', e.target.value)}
          />
        ) : (
          <p className="text-sm text-gray-600 mb-4">by {editableCourse.instructor}</p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Users size={16} />
            {isEditing ? (
              <input
                className="w-16 border rounded px-1"
                value={editableCourse.students}
                onChange={(e) => handleChange('students', e.target.value)}
              />
            ) : (
              <span>{editableCourse.students.toLocaleString()}</span>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={16} />
            {isEditing ? (
              <input
                className="w-20 border rounded px-1"
                value={editableCourse.duration}
                onChange={(e) => handleChange('duration', e.target.value)}
              />
            ) : (
              <span>{editableCourse.duration}</span>
            )}
          </div>
        </div>

        {editableCourse.progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Progress</span>
              {isEditing ? (
                <input
                  className="w-12 text-right border rounded px-1 text-sm"
                  value={editableCourse.progress}
                  onChange={(e) => handleChange('progress', e.target.value)}
                />
              ) : (
                <span className="text-sm font-medium text-gray-900">{editableCourse.progress}%</span>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${getProgressColor(editableCourse.progress)}`}
                style={{ width: `${editableCourse.progress}%` }}
              />
            </div>
          </div>
        )}

        {!isEditing ? (
          <button 
            onClick={() => onCourseClick(course)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Play size={18} />
            <span>{editableCourse.progress > 0 ? 'Continue Learning' : 'Start Course'}</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex-1 bg-green-500 text-white py-2 rounded-lg flex items-center justify-center space-x-1"
            >
              <Save size={16} />
              <span>Save</span>
            </button>
            <button
              onClick={() => {
                setEditableCourse(course);
                setIsEditing(false);
              }}
              className="flex-1 bg-gray-300 text-black py-2 rounded-lg flex items-center justify-center space-x-1"
            >
              <X size={16} />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
