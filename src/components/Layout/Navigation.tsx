import React from 'react';
import { Home, TrendingUp, Plus, MessageCircle, User, Settings } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  userType: 'farmer' | 'trader' | 'admin';
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, userType }) => {
  const { t } = useLanguage();

  const farmerTabs = [
    { id: 'dashboard', icon: Home, labelKey: 'nav.home' },
    { id: 'market', icon: TrendingUp, labelKey: 'nav.market' },
    { id: 'add', icon: Plus, labelKey: 'nav.sell' },
    { id: 'chat', icon: MessageCircle, labelKey: 'nav.chat' },
    { id: 'profile', icon: User, labelKey: 'nav.profile' },
  ];

  const traderTabs = [
    { id: 'dashboard', icon: Home, labelKey: 'nav.home' },
    { id: 'browse', icon: TrendingUp, labelKey: 'nav.buy' },
    { id: 'chat', icon: MessageCircle, labelKey: 'nav.chat' },
    { id: 'profile', icon: User, labelKey: 'nav.profile' },
  ];

  const adminTabs = [
    { id: 'dashboard', icon: Home, labelKey: 'nav.home' },
    { id: 'verification', icon: Settings, labelKey: 'nav.profile' },
  ];

  const tabs = userType === 'farmer' ? farmerTabs : userType === 'trader' ? traderTabs : adminTabs;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                isActive 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1 font-medium">{t(tab.labelKey)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;