import React, { useState } from 'react';
import Header from '../components/Header';
import StatsCards from '../components/StatsCards';
import CategoryFilter from '../components/CategoryFilter';
import CourseGrid from '../components/CourseGrid';
import CourseDetailsPage from './CourseDetailsPage';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' or 'course-details'
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setCurrentView('course-details');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedCourse(null);
  };

  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      students: 2847,
      rating: 4.8,
      duration: "12 weeks",
      progress: 65,
      category: "development",
      price: "$99",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Michael Chen",
      students: 1923,
      rating: 4.9,
      duration: "16 weeks",
      progress: 0,
      category: "ai",
      price: "$149",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      instructor: "Emma Rodriguez",
      students: 3421,
      rating: 4.7,
      duration: "10 weeks",
      progress: 85,
      category: "design",
      price: "$89",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "James Wilson",
      students: 2156,
      rating: 4.6,
      duration: "8 weeks",
      progress: 30,
      category: "marketing",
      price: "$79",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Data Science with Python",
      instructor: "Dr. Lisa Park",
      students: 1874,
      rating: 4.8,
      duration: "14 weeks",
      progress: 45,
      category: "development",
      price: "$129",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      instructor: "Robert Kim",
      students: 1654,
      rating: 4.7,
      duration: "12 weeks",
      progress: 0,
      category: "security",
      price: "$119",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Soft skills",
      instructor: "Debadarshan Sir",
      students: 1654,
      rating: 4.7,
      duration: "12 weeks",
      progress: 20,
      category: "Confidence Builder",
      price: "$119",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {currentView === 'dashboard' ? (
        <>
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <StatsCards />
            <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <CourseGrid courses={filteredCourses} onCourseClick={handleCourseClick} />
          </div>
        </>
      ) : (
        <CourseDetailsPage course={selectedCourse} onBackClick={handleBackToDashboard} />
      )}
    </div>
  );
};

export default Dashboard;