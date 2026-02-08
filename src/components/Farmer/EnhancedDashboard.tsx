import React from 'react';
import { ArrowUp, ArrowDown, Clock } from 'lucide-react';
import { Produce, MarketPrice, Transaction } from '../../types';
import DashboardStats from './Dashboard/DashboardStats';
import QuickActions from './Dashboard/QuickActions';
import LazyImage from '../UI/LazyImage';
import { Package } from 'lucide-react';

interface EnhancedDashboardProps {
  produces: Produce[];
  marketPrices: MarketPrice[];
  transactions: Transaction[];
  onAddProduce: () => void;
  onViewPrices: () => void;
  onViewSchemes: () => void;
  onViewTraders: () => void;
}

const EnhancedDashboard: React.FC<EnhancedDashboardProps> = ({ 
  produces, 
  marketPrices, 
  transactions,
  onAddProduce,
  onViewPrices,
  onViewSchemes,
  onViewTraders
}) => {
  const activeProduces = produces.filter(p => p.status === 'active');
  const pendingPayments = transactions.filter(t => t.status === 'pending').length;

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return <ArrowUp size={16} className="text-green-600" />;
      case 'down': return <ArrowDown size={16} className="text-red-600" />;
      default: return <div className="w-4 h-0.5 bg-gray-400"></div>;
    }
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="p-4 space-y-6 pb-24">
      {/* Welcome Section */}
      <DashboardStats produces={produces} transactions={transactions} />

      {/* Quick Actions */}
      <QuickActions
        onAddProduce={onAddProduce}
        onViewPrices={onViewPrices}
        onViewSchemes={onViewSchemes}
        onViewTraders={onViewTraders}
      />

      {/* Current Market Prices */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">आज के बाज़ार भाव</h3>
              <p className="text-sm text-gray-600">Today's Market Prices</p>
            </div>
            <button
              onClick={onViewPrices}
              className="text-green-600 text-sm font-medium hover:text-green-700"
            >
              View All
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          {marketPrices.slice(0, 3).map((price) => (
            <div key={price.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-gray-800">{price.produce}</p>
                <p className="text-sm text-gray-600">{price.mandi}</p>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-gray-800">₹{price.price}</p>
                <div className="flex items-center justify-end space-x-1">
                  {getTrendIcon(price.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(price.change)}`}>
                    {price.change > 0 ? '+' : ''}{price.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Listed Produce */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">मेरी सूचीबद्ध फसलें</h3>
          <p className="text-sm text-gray-600">My Listed Produce</p>
        </div>
        
        <div className="p-4">
          {activeProduces.length === 0 ? (
            <div className="text-center py-8">
              <Package size={48} className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-500 font-medium">कोई फसल सूचीबद्ध नहीं</p>
              <p className="text-sm text-gray-400 mb-4">No produce listed yet</p>
              <button
                onClick={onAddProduce}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                पहली फसल जोड़ें
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {activeProduces.slice(0, 3).map((produce) => (
                <div key={produce.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg border border-gray-100">
                  <LazyImage
                    src={produce.images[0] || "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg"} 
                    alt={produce.name}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{produce.name}</p>
                    <p className="text-sm text-gray-600">{produce.quantity} {produce.unit}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-green-600">₹{produce.currentPrice}</p>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-500">{produce.bids.length} bids</span>
                      {produce.bids.length > 0 && (
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Payment Status */}
      {pendingPayments > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock size={20} className="text-yellow-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-yellow-800">भुगतान लंबित</p>
              <p className="text-sm text-yellow-700">
                {pendingPayments} भुगतान लंबित
              </p>
            </div>
            <button className="text-yellow-700 font-medium text-sm hover:text-yellow-800">
              View
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedDashboard;