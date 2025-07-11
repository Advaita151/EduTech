import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

const AddCourseModal = ({ show, onClose, onAdd }) => {
  const [newCourse, setNewCourse] = useState({
    title: '',
    category: '',
    instructor: '',
    duration: '',
    price: '',
    rating: 0,
    students: 0,
  });

  const handleAdd = () => {
    if (newCourse.title && newCourse.category && newCourse.instructor) {
      onAdd({ ...newCourse, id: Date.now() });
      setNewCourse({
        title: '',
        category: '',
        instructor: '',
        duration: '',
        price: '',
        rating: 0,
        students: 0,
      });
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-black">Add New Course</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {['title', 'category', 'instructor', 'duration'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-black capitalize">{field}</label>
              <input
                type="text"
                value={newCourse[field]}
                onChange={(e) => setNewCourse({ ...newCourse, [field]: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:outline-none"
              />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black">Price ($)</label>
              <input
                type="number"
                value={newCourse.price}
                onChange={(e) => setNewCourse({ ...newCourse, price: Number(e.target.value) })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Rating</label>
              <input
                type="number"
                step="0.1"
                value={newCourse.rating}
                onChange={(e) => setNewCourse({ ...newCourse, rating: Number(e.target.value) })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-orange-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button
            onClick={handleAdd}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            <Save size={16} />
            Add Course
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourseModal;
