import React, { useState } from "react";

// Layout
import Header from "../components/Admin/Header";
import Navigation from "../components/Admin/Navigation";

// Common
import SearchBar from "../components/Admin/SearchBar";

// Overview
import OverviewStats from "../components/Admin/OverviewStats";
import RecentActivity from "../components/Admin/RecentActivity";
import TopPerformers from "../components/Admin/TopPerformer";

// Institutions
import InstitutionCard from "../components/Admin/InstitutionCard";

// Courses
import CourseCard from "../components/Admin/CourseCard";

// Modals
import AddInstitutionModal from "../components/Admin/AddInstituionModal";
import AssignCoursesModal from "../components/Admin/AssignCoursesModal";
import AddCourseModal from "../components/Admin/AddCourseModal";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddInstitution, setShowAddInstitution] = useState(false);
  const [showAssignCourses, setShowAssignCourses] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddCourse, setShowAddCourse] = useState(false);

  const [availableCourses, setAvailableCourses] = useState( [
    {
      id: 1,
      title: "Advanced React Development",
      category: "Development",
      instructor: "Sarah Johnson",
      duration: "12 weeks",
      price: 99,
      rating: 4.8,
      students: 2847,
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      category: "AI & ML",
      instructor: "Dr. Michael Chen",
      duration: "16 weeks",
      price: 149,
      rating: 4.9,
      students: 1923,
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      category: "Design",
      instructor: "Emma Rodriguez",
      duration: "10 weeks",
      price: 89,
      rating: 4.7,
      students: 3421,
    },
    {
      id: 4,
      title: "Python for Data Science",
      category: "Development",
      instructor: "Alex Kumar",
      duration: "14 weeks",
      price: 129,
      rating: 4.6,
      students: 2156,
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      category: "Marketing",
      instructor: "Jessica Park",
      duration: "8 weeks",
      price: 79,
      rating: 4.5,
      students: 1834,
    },
    {
      id: 6,
      title: "Cybersecurity Essentials",
      category: "Security",
      instructor: "Robert Singh",
      duration: "12 weeks",
      price: 159,
      rating: 4.8,
      students: 1567,
    },
  ]);

  const [institutions, setInstitutions] = useState([
    {
      id: 1,
      name: "Tech University",
      email: "admin@techuni.edu",
      courses: [1, 2, 4],
      students: 1250,
      completionRate: 87,
      certificates: 892,
    },
    {
      id: 2,
      name: "Design Institute",
      email: "contact@designinst.edu",
      courses: [3, 5],
      students: 845,
      completionRate: 92,
      certificates: 623,
    },
    {
      id: 3,
      name: "Business Academy",
      email: "info@bizacademy.edu",
      courses: [5, 6],
      students: 567,
      completionRate: 78,
      certificates: 445,
    },
  ]);

  const [newInstitution, setNewInstitution] = useState({
    name: "",
    email: "",
    courses: [],
  });

  const categories = [
    "All",
    "Development",
    "Design",
    "AI & ML",
    "Marketing",
    "Security",
    "Confidence Builder",
  ];

  const handleAddInstitution = () => {
    if (newInstitution.name && newInstitution.email) {
      setInstitutions([
        ...institutions,
        {
          id: Date.now(),
          ...newInstitution,
          students: 0,
          completionRate: 0,
          certificates: 0,
        },
      ]);
      setNewInstitution({ name: "", email: "", courses: [] });
      setShowAddInstitution(false);
    }
  };

  const handleAssignCourses = (institutionId, courseIds) => {
    setInstitutions(
      institutions.map((inst) =>
        inst.id === institutionId ? { ...inst, courses: courseIds } : inst
      )
    );
    setShowAssignCourses(false);
    setSelectedInstitution(null);
  };

  const getAssignedCourses = (courseIds) => {
    return availableCourses.filter((course) => courseIds.includes(course.id));
  };

  const totalStats = {
    totalCourses: availableCourses.length,
    activeStudents: institutions.reduce((sum, inst) => sum + inst.students, 0),
    avgCompletionRate: Math.round(
      institutions.reduce((sum, inst) => sum + inst.completionRate, 0) /
        institutions.length
    ),
    totalCertificates: institutions.reduce(
      (sum, inst) => sum + inst.certificates,
      0
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
      <Header onAddInstitution={() => setShowAddInstitution(true)} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <OverviewStats stats={totalStats} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivity institutions={institutions} />
              <TopPerformers institutions={institutions} />
            </div>
          </div>
        )}

        {activeTab === "institutions" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-black">
                    Manage Institutions
                  </h3>
                  <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    placeholder="Search institutions..."
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="grid gap-6">
                  {institutions
                    .filter((inst) =>
                      inst.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((institution) => (
                      <InstitutionCard
                        key={institution.id}
                        institution={institution}
                        onEdit={(inst) => {
                          setSelectedInstitution(inst);
                          setShowAssignCourses(true);
                        }}
                        onDelete={(id) => {
                          setInstitutions(
                            institutions.filter((inst) => inst.id !== id)
                          );
                        }}
                        getAssignedCourses={getAssignedCourses}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "courses" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-black">
                    Available Courses
                  </h3>
                  <button
                    onClick={() => setShowAddCourse(true)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Add New Course
                  </button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-colors text-sm font-medium"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <AddInstitutionModal
        show={showAddInstitution}
        onClose={() => setShowAddInstitution(false)}
        newInstitution={newInstitution}
        setNewInstitution={setNewInstitution}
        onAdd={handleAddInstitution}
      />

      <AssignCoursesModal
        show={showAssignCourses}
        onClose={() => setShowAssignCourses(false)}
        institution={selectedInstitution}
        courses={availableCourses}
        onAssign={handleAssignCourses}
      />

      <AddCourseModal
        show={showAddCourse}
        onClose={() => setShowAddCourse(false)}
        onAdd={(course) => setAvailableCourses([...availableCourses, course])}
      />
    </div>
  );
};

export default AdminDashboard;
