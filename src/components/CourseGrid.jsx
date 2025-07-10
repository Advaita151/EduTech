// components/CourseGrid.js
import React from 'react';
import { Search } from 'lucide-react';
import CourseCard from './CourseCard';

const CourseGrid = ({ courses, onCourseClick }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} onCourseClick={onCourseClick} />
        ))}
      </div>
      
      {courses.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
            <Search className="text-gray-500 w-8 h-8" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default CourseGrid;