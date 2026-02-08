import React from 'react';
import { Plus, Eye, Gift, Users } from 'lucide-react';

interface QuickActionsProps {
  onAddProduce: () => void;
  onViewPrices: () => void;
  onViewSchemes: () => void;
  onViewTraders: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({
  onAddProduce,
  onViewPrices,
  onViewSchemes,
  onViewTraders
}) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">त्वरित कार्य</h3>
      
      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={onAddProduce}
          className="bg-green-600 text-white p-4 rounded-xl shadow-lg hover:bg-green-700 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Plus size={24} />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-lg">फसल बेचें</p>
              <p className="text-green-100 text-sm">बेचने के लिए फसल जोड़ें</p>
            </div>
          </div>
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onViewPrices}
            className="bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Eye size={24} className="text-blue-600" />
              </div>
              <p className="font-semibold text-gray-800">मंडी भाव</p>
              <p className="text-xs text-gray-500">वर्तमान दरें देखें</p>
            </div>
          </button>

          <button
            onClick={onViewSchemes}
            className="bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Gift size={24} className="text-purple-600" />
              </div>
              <p className="font-semibold text-gray-800">योजनाएं</p>
              <p className="text-xs text-gray-500">सरकारी योजनाएं</p>
            </div>
          </button>

          <button
            onClick={onViewTraders}
            className="bg-white border border-gray-200 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow col-span-2"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users size={24} className="text-indigo-600" />
              </div>
              <p className="font-semibold text-gray-800">व्यापारी</p>
              <p className="text-xs text-gray-500">सक्रिय व्यापारी देखें</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;