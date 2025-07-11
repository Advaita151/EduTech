import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

const CourseCard = ({ course }) => (
  <div className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition-all">
    <div className="h-48 bg-gradient-to-br from-orange-400 to-yellow-500 relative">
      <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-black">
        {course.category}
      </div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-black">
        ${course.price}
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
          <div className="flex items-center gap-2 text-white text-sm">
            <Calendar size={14} />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-semibold text-lg text-black mb-2">{course.title}</h4>
      <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span className="flex items-center gap-1"><Users size={14} />{course.students.toLocaleString()}</span>
        <span className="flex items-center gap-1"><Award size={14} />{course.rating}</span>
      </div>
    </div>
  </div>
);

export default CourseCard;
