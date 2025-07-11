import React from 'react';
import { Edit2, Trash2, Users, Award } from 'lucide-react';

const InstitutionCard = ({ institution, onEdit, onDelete, getAssignedCourses }) => (
  <div className="bg-white border rounded-xl p-6 hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className="flex-1">
        <h4 className="font-semibold text-xl text-black">{institution.name}</h4>
        <p className="text-gray-600">{institution.email}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onEdit(institution)} className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
          <Edit2 size={16} />
        </button>
        <button onClick={() => onDelete(institution.id)} className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <Trash2 size={16} />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="text-center p-3 bg-blue-50 rounded-lg">
        <p className="text-2xl font-bold text-black">{institution.students}</p>
        <p className="text-sm text-gray-600">Students</p>
      </div>
      <div className="text-center p-3 bg-green-50 rounded-lg">
        <p className="text-2xl font-bold text-black">{institution.completionRate}%</p>
        <p className="text-sm text-gray-600">Completion</p>
      </div>
      <div className="text-center p-3 bg-orange-50 rounded-lg">
        <p className="text-2xl font-bold text-black">{institution.certificates}</p>
        <p className="text-sm text-gray-600">Certificates</p>
      </div>
    </div>

    <div>
      <p className="text-sm font-medium text-black mb-2">Assigned Courses:</p>
      <div className="flex flex-wrap gap-2">
        {getAssignedCourses(institution.courses).map(course => (
          <span key={course.id} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
            {course.title}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default InstitutionCard;
