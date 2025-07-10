
import React, { useState } from 'react';
import Header from '../components/Header';
import StatsCards from '../components/StatsCards';
import CategoryFilter from '../components/CategoryFilter';
import CourseGrid from '../components/CourseGrid';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StatsCards />
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <CourseGrid courses={filteredCourses} />
      </div>
    </div>
  );
};

export default Dashboard;


// import React, { useState } from 'react';
// import { BookOpen, Users, TrendingUp, Award, Search, Bell, User, Play, Clock, Star } from 'lucide-react';

// const Dashboard = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const courses = [
//     {
//       id: 1,
//       title: "Advanced React Development",
//       instructor: "Sarah Johnson",
//       students: 2847,
//       rating: 4.8,
//       duration: "12 weeks",
//       progress: 65,
//       category: "development",
//       price: "$99",
//       image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
//     },
//     {
//       id: 2,
//       title: "Machine Learning Fundamentals",
//       instructor: "Dr. Michael Chen",
//       students: 1923,
//       rating: 4.9,
//       duration: "16 weeks",
//       progress: 0,
//       category: "ai",
//       price: "$149",
//       image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
//     },
//     {
//       id: 3,
//       title: "UI/UX Design Mastery",
//       instructor: "Emma Rodriguez",
//       students: 3421,
//       rating: 4.7,
//       duration: "10 weeks",
//       progress: 85,
//       category: "design",
//       price: "$89",
//       image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
//     },
//     {
//       id: 4,
//       title: "Digital Marketing Strategy",
//       instructor: "James Wilson",
//       students: 2156,
//       rating: 4.6,
//       duration: "8 weeks",
//       progress: 30,
//       category: "marketing",
//       price: "$79",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
//     },
//     {
//       id: 5,
//       title: "Data Science with Python",
//       instructor: "Dr. Lisa Park",
//       students: 1874,
//       rating: 4.8,
//       duration: "14 weeks",
//       progress: 45,
//       category: "development",
//       price: "$129",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
//     },
//     {
//       id: 6,
//       title: "Cybersecurity Essentials",
//       instructor: "Robert Kim",
//       students: 1654,
//       rating: 4.7,
//       duration: "12 weeks",
//       progress: 0,
//       category: "security",
//       price: "$119",
//       image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop"
//     }
//   ];

//   const categories = [
//     { id: 'all', name: 'All Courses' },
//     { id: 'development', name: 'Development' },
//     { id: 'design', name: 'Design' },
//     { id: 'ai', name: 'AI & ML' },
//     { id: 'marketing', name: 'Marketing' },
//     { id: 'security', name: 'Security' }
//   ];

//   const stats = [
//     { label: 'Total Courses', value: '24', icon: BookOpen, color: 'bg-blue-500' },
//     { label: 'Active Students', value: '12.5K', icon: Users, color: 'bg-green-500' },
//     { label: 'Completion Rate', value: '89%', icon: TrendingUp, color: 'bg-purple-500' },
//     { label: 'Certificates Issued', value: '8.2K', icon: Award, color: 'bg-orange-500' }
//   ];

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const getProgressColor = (progress) => {
//     if (progress === 0) return 'bg-gray-200';
//     if (progress < 50) return 'bg-red-400';
//     if (progress < 80) return 'bg-yellow-400';
//     return 'bg-green-400';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-3">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
//                 <BookOpen size={24} />
//               </div>
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Skillaze
//               </h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search courses..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
//                 />
//               </div>
//               <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Bell size={20} />
//               </button>
//               <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
//                 <User size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">{stat.label}</p>
//                   <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
//                 </div>
//                 <div className={`${stat.color} p-3 rounded-lg`}>
//                   <stat.icon className="text-white" size={24} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Category Filter */}
//         <div className="mb-8">
//           <div className="flex flex-wrap gap-2">
//             {categories.map(category => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                   selectedCategory === category.id
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Course Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredCourses.map(course => (
//             <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//               <div className="relative">
//                 <img 
//                   src={course.image} 
//                   alt={course.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-bold text-gray-900">
//                   {course.price}
//                 </div>
//                 {course.progress > 0 && (
//                   <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
//                     In Progress
//                   </div>
//                 )}
//               </div>
              
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
//                     {course.category}
//                   </span>
//                   <div className="flex items-center space-x-1">
//                     <Star className="text-yellow-400 fill-current" size={16} />
//                     <span className="text-sm text-gray-600">{course.rating}</span>
//                   </div>
//                 </div>
                
//                 <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
//                 <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
                
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                   <div className="flex items-center space-x-1">
//                     <Users size={16} />
//                     <span>{course.students.toLocaleString()}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Clock size={16} />
//                     <span>{course.duration}</span>
//                   </div>
//                 </div>
                
//                 {course.progress > 0 && (
//                   <div className="mb-4">
//                     <div className="flex justify-between items-center mb-1">
//                       <span className="text-sm text-gray-600">Progress</span>
//                       <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div 
//                         className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
//                         style={{ width: `${course.progress}%` }}
//                       />
//                     </div>
//                   </div>
//                 )}
                
//                 <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
//                   <Play size={18} />
//                   <span>{course.progress > 0 ? 'Continue Learning' : 'Start Course'}</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {filteredCourses.length === 0 && (
//           <div className="text-center py-12">
//             <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
//               <Search className="text-gray-500 w-8 h-8" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
//             <p className="text-gray-600">Try adjusting your search or filter criteria</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;