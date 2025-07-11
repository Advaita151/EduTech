import React from 'react';
import StatsCard from './StatsCard';
import { BookOpen, Users, Target, Award } from 'lucide-react';

const OverviewStats = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <StatsCard title="Total Courses" value={stats.totalCourses} icon={BookOpen} iconBg="bg-blue-50" change="+2 this month" changeType="positive" />
    <StatsCard title="Active Students" value={stats.activeStudents.toLocaleString()} icon={Users} iconBg="bg-green-50" change="+15% this month" changeType="positive" />
    <StatsCard title="Completion Rate" value={`${stats.avgCompletionRate}%`} icon={Target} iconBg="bg-purple-50" change="+5% this month" changeType="positive" />
    <StatsCard title="Certificates Issued" value={stats.totalCertificates.toLocaleString()} icon={Award} iconBg="bg-orange-50" change="+23% this month" changeType="positive" />
  </div>
);

export default OverviewStats;