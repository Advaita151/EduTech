import React, { useState, useEffect } from 'react';
import { X, Save, Calendar } from 'lucide-react';

const AssignCoursesModal = ({ show, onClose, institution, courses, onAssign }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    if (institution) {
      setSelectedCourses(institution.courses);
    }
  }, [institution]);

  if (!show || !institution) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-black">Assign Courses to {institution.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1"><X size={20} /></button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map(course => (
              <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-200 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-black">{course.title}</h4>
                    <p className="text-sm text-gray-600">{course.category} • {course.instructor}</p>
                    <p className="text-sm text-gray-600">{course.duration} • ${course.price}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedCourses.includes(course.id)}
                    onChange={(e) => {
                      const updated = e.target.checked
                        ? [...selectedCourses, course.id]
                        : selectedCourses.filter(id => id !== course.id);
                      setSelectedCourses(updated);
                    }}
                    className="mt-1 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            <button onClick={() => onAssign(institution.id, selectedCourses)} className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium flex items-center justify-center gap-2">
              <Save size={16} />
              Save Changes
            </button>
            <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignCoursesModal;
