import React from 'react';
import { Plus } from 'lucide-react';

const Header = ({ onAddInstitution }) => (
  <div className="bg-white shadow-sm border-b">
    <div className="px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-black">Skillzage</h1>
          <p className="text-gray-600 text-sm">Admin Dashboard</p>
        </div>
        <button
          onClick={onAddInstitution}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
        >
          <Plus size={20} />
          Add Institution
        </button>
      </div>
    </div>
  </div>
);

export default Header;