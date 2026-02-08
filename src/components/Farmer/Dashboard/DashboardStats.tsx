import React from 'react';
import { Package, TrendingUp, Bell } from 'lucide-react';
import { Produce, Transaction } from '../../../types';

interface DashboardStatsProps {
  produces: Produce[];
  transactions: Transaction[];
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ produces, transactions }) => {
  const activeProduces = produces.filter(p => p.status === 'active');
  const totalBids = produces.reduce((sum, p) => sum + p.bids.length, 0);
  const pendingPayments = transactions.filter(t => t.status === 'pending').length;

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">नमस्ते किसान भाई!</h2>
          <p className="text-green-100 text-sm">Welcome Farmer!</p>
          <p className="text-green-200 text-xs mt-1">आज का दिन शुभ हो!</p>
        </div>
        <div className="relative">
          <Bell size={24} />
          {(totalBids > 0 || pendingPayments > 0) && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">{totalBids + pendingPayments}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-white">{activeProduces.length}</p>
              <p className="text-sm text-green-100 font-medium">सक्रिय उत्पाद</p>
              <p className="text-xs text-green-200">Active Products</p>
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
              <Package className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-20 p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-white">{totalBids}</p>
              <p className="text-sm text-green-100 font-medium">नई बोलियां</p>
              <p className="text-xs text-green-200">New Bids</p>
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;