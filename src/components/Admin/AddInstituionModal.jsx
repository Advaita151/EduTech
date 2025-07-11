import React from 'react';
import { X } from 'lucide-react';

const AddInstitutionModal = ({ show, onClose, newInstitution, setNewInstitution, onAdd }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-black">Add New Institution</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-1"><X size={20} /></button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Institution Name</label>
            <input type="text" value={newInstitution.name} onChange={(e) => setNewInstitution({ ...newInstitution, name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Enter institution name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">Email</label>
            <input type="email" value={newInstitution.email} onChange={(e) => setNewInstitution({ ...newInstitution, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Enter email address" />
          </div>
          <div className="flex gap-3 pt-4">
            <button onClick={onAdd} className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium">Add Institution</button>
            <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInstitutionModal;
