import React, { useState } from 'react';
import { ArrowLeft, Play, FileText, CheckCircle, Lock, Clock, Users, Star, Award } from 'lucide-react';

const CourseDetailsPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [completedItems, setCompletedItems] = useState(new Set());

  // Sample course data - in real app, this would come from props or API
  const courseData = {
    id: 1,
    title: "Advanced React Development",
    instructor: "Sarah Johnson",
    students: 2847,
    rating: 4.8,
    duration: "12 weeks",
    progress: 65,
    category: "development",
    price: "$99",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    description: "Master advanced React concepts including hooks, context, performance optimization, and modern patterns. Build production-ready applications with confidence.",
    totalLessons: 24,
    totalTests: 8,
    curriculum: [
      { id: 1, type: 'quiz', title: 'Start Quiz - React Fundamentals', duration: '15 min', locked: false },
      { id: 2, type: 'lesson', title: 'React Hooks Deep Dive', duration: '45 min', locked: false },
      { id: 3, type: 'lesson', title: 'useState and useEffect Mastery', duration: '60 min', locked: false },
      { id: 4, type: 'test', title: 'Test 1: Hooks Assessment', duration: '30 min', locked: false },
      { id: 5, type: 'lesson', title: 'Context API and State Management', duration: '50 min', locked: true },
      { id: 6, type: 'lesson', title: 'Custom Hooks Creation', duration: '40 min', locked: true },
      { id: 7, type: 'test', title: 'Test 2: State Management', duration: '25 min', locked: true },
      { id: 8, type: 'lesson', title: 'Performance Optimization', duration: '55 min', locked: true },
      { id: 9, type: 'lesson', title: 'React.memo and useMemo', duration: '35 min', locked: true },
      { id: 10, type: 'test', title: 'Test 3: Performance', duration: '20 min', locked: true },
      { id: 11, type: 'lesson', title: 'Advanced Patterns', duration: '65 min', locked: true },
      { id: 12, type: 'lesson', title: 'Compound Components', duration: '40 min', locked: true },
      { id: 13, type: 'test', title: 'Test 4: Advanced Patterns', duration: '30 min', locked: true },
      { id: 14, type: 'lesson', title: 'Testing React Applications', duration: '70 min', locked: true },
      { id: 15, type: 'lesson', title: 'Jest and React Testing Library', duration: '45 min', locked: true },
      { id: 16, type: 'test', title: 'Test 5: Testing', duration: '35 min', locked: true },
      { id: 17, type: 'lesson', title: 'Deployment and Production', duration: '50 min', locked: true },
      { id: 18, type: 'lesson', title: 'Build Optimization', duration: '30 min', locked: true },
      { id: 19, type: 'test', title: 'Final Assessment', duration: '45 min', locked: true },
      { id: 20, type: 'completion', title: 'Course Completion Certificate', duration: '5 min', locked: true }
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
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
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
                  <span>Master advanced React hooks and patterns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Build scalable and maintainable applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Implement performance optimization techniques</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Test React applications effectively</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Deploy production-ready applications</span>
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