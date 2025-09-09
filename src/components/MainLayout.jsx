import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Home, DollarSign, User } from 'lucide-react';
import './MainLayout.css';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'money', label: 'Money', icon: DollarSign, path: '/money' },
    { id: 'settings', label: 'Settings', icon: User, path: '/settings' }
  ];

  const isActiveTab = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="main-layout">
      <div className="content-area">
        <Outlet />
      </div>
      
      <div className="bottom-navigation">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = isActiveTab(tab.path);
          
          return (
            <button
              key={tab.id}
              className={`nav-tab ${isActive ? 'active' : ''}`}
              onClick={() => navigate(tab.path)}
            >
              <IconComponent className="nav-icon" />
              <span className="nav-label">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MainLayout;
