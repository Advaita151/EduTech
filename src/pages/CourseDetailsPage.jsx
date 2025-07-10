// components/CourseDetailsPage.js
import React, { useState } from 'react';
import { ArrowLeft, Play, FileText, CheckCircle, Lock, Clock, Users, Star, Award } from 'lucide-react';

const CourseDetailsPage = ({ course, onBackClick }) => {
  const [completedItems, setCompletedItems] = useState(new Set());

  // Enhanced course data with curriculum
  const courseData = {
    ...course,
    description: course.description || "Master advanced concepts and build production-ready applications with confidence.",
    totalLessons: 24,
    totalTests: 8,
    curriculum: [
      { id: 1, type: 'quiz', title: 'Start Quiz - Course Fundamentals', duration: '15 min', locked: false },
      { id: 2, type: 'lesson', title: 'Introduction to Core Concepts', duration: '45 min', locked: false },
      { id: 3, type: 'lesson', title: 'Advanced Techniques', duration: '60 min', locked: false },
      { id: 4, type: 'test', title: 'Test 1: Fundamentals Assessment', duration: '30 min', locked: false },
      { id: 5, type: 'lesson', title: 'Practical Applications', duration: '50 min', locked: true },
      { id: 6, type: 'lesson', title: 'Best Practices', duration: '40 min', locked: true },
      { id: 7, type: 'test', title: 'Test 2: Application Skills', duration: '25 min', locked: true },
      { id: 8, type: 'lesson', title: 'Advanced Topics', duration: '55 min', locked: true },
      { id: 9, type: 'lesson', title: 'Professional Techniques', duration: '35 min', locked: true },
      { id: 10, type: 'test', title: 'Test 3: Advanced Skills', duration: '20 min', locked: true },
      { id: 11, type: 'lesson', title: 'Industry Standards', duration: '65 min', locked: true },
      { id: 12, type: 'lesson', title: 'Real-world Projects', duration: '40 min', locked: true },
      { id: 13, type: 'test', title: 'Test 4: Project Assessment', duration: '30 min', locked: true },
      { id: 14, type: 'lesson', title: 'Career Development', duration: '70 min', locked: true },
      { id: 15, type: 'lesson', title: 'Portfolio Building', duration: '45 min', locked: true },
      { id: 16, type: 'test', title: 'Final Assessment', duration: '45 min', locked: true },
      { id: 17, type: 'completion', title: 'Course Completion Certificate', duration: '5 min', locked: true }
    ]
  };

  const handleItemClick = (item) => {
    if (!item.locked) {
      setCompletedItems(prev => new Set([...prev, item.id]));
    }
  };

  const getItemIcon = (type) => {
    switch (type) {
      case 'quiz':
        return <Play className="text-blue-600" size={20} />;
      case 'lesson':
        return <FileText className="text-green-600" size={20} />;
      case 'test':
        return <FileText className="text-orange-600" size={20} />;
      case 'completion':
        return <Award className="text-purple-600" size={20} />;
      default:
        return <FileText className="text-gray-600" size={20} />;
    }
  };

  const getItemTypeLabel = (type) => {
    switch (type) {
      case 'quiz':
        return 'Quiz';
      case 'lesson':
        return 'Lesson';
      case 'test':
        return 'Test';
      case 'completion':
        return 'Certificate';
      default:
        return 'Content';
    }
  };

  const completionPercentage = Math.round((completedItems.size / courseData.curriculum.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button 
              onClick={onBackClick}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                  {courseData.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{courseData.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span>{courseData.rating}</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{courseData.title}</h1>
              <p className="text-gray-600 mb-4">by {courseData.instructor}</p>
              <p className="text-gray-700 leading-relaxed">{courseData.description}</p>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Your Progress</span>
                  <span className="text-sm font-medium text-gray-900">{completionPercentage}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{completedItems.size} of {courseData.curriculum.length} completed</span>
                  <span>{courseData.duration}</span>
                </div>
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Course Curriculum</h2>
                <p className="text-gray-600 mt-1">{courseData.totalLessons} lessons • {courseData.totalTests} tests</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {courseData.curriculum.map((item, index) => (
                    <div 
                      key={item.id}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
                        item.locked 
                          ? 'bg-gray-50 border-gray-200 cursor-not-allowed' 
                          : completedItems.has(item.id)
                          ? 'bg-green-50 border-green-200 cursor-pointer hover:bg-green-100'
                          : 'bg-white border-gray-200 cursor-pointer hover:bg-gray-50 hover:border-gray-300'
                      }`}
                      onClick={() => handleItemClick(item)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {item.locked ? (
                            <Lock className="text-gray-400" size={20} />
                          ) : completedItems.has(item.id) ? (
                            <CheckCircle className="text-green-600" size={20} />
                          ) : (
                            getItemIcon(item.type)
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                              {index + 1}. {getItemTypeLabel(item.type)}
                            </span>
                          </div>
                          <h3 className={`font-medium ${
                            item.locked ? 'text-gray-400' : 'text-gray-900'
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock size={16} />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Course Image & Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Course Image */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <img 
                src={courseData.image} 
                alt={courseData.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{courseData.price}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Enroll Now
                  </button>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{courseData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-medium">{courseData.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-medium">{courseData.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lessons:</span>
                    <span className="font-medium">{courseData.totalLessons}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tests:</span>
                    <span className="font-medium">{courseData.totalTests}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Features */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Master core concepts and fundamentals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Build practical, real-world applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Implement industry best practices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Develop professional-level skills</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Create an impressive portfolio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;