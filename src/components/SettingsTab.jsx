import React from 'react';
import { User, Bell, Shield, HelpCircle, LogOut, CreditCard, Smartphone, Globe } from 'lucide-react';
import './SettingsTab.css';

const SettingsTab = () => {
  const handleLogout = () => {
    // In a real app, this would clear authentication state
    window.location.reload();
  };

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile Information', subtitle: 'Update your personal details' },
        { icon: CreditCard, label: 'Cards & Accounts', subtitle: 'Manage your cards and accounts' },
        { icon: Smartphone, label: 'Mobile Banking', subtitle: 'Configure mobile banking settings' }
      ]
    },
    {
      title: 'Security',
      items: [
        { icon: Shield, label: 'Change PIN', subtitle: 'Update your security PIN' },
        { icon: Bell, label: 'Notifications', subtitle: 'Manage notification preferences' },
        { icon: Globe, label: 'Privacy Settings', subtitle: 'Control your privacy options' }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', subtitle: 'Get help and support' },
        { icon: Bell, label: 'Contact Us', subtitle: 'Reach out to customer service' }
      ]
    }
  ];

  return (
    <div className="settings-tab">
      <div className="header">
        <h1>Settings</h1>
        <p>Manage your account preferences</p>
      </div>

      <div className="profile-section">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle">JD</div>
          </div>
          <div className="profile-info">
            <h3>John Doe</h3>
            <p>john.doe@email.com</p>
            <span className="account-type">Premium Account</span>
          </div>
        </div>
      </div>

      <div className="settings-sections">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="settings-section">
            <h3 className="section-title">{section.title}</h3>
            <div className="settings-items">
              {section.items.map((item, itemIndex) => {
                const IconComponent = item.icon;
                return (
                  <div key={itemIndex} className="settings-item">
                    <div className="item-icon">
                      <IconComponent className="icon" />
                    </div>
                    <div className="item-content">
                      <div className="item-label">{item.label}</div>
                      <div className="item-subtitle">{item.subtitle}</div>
                    </div>
                    <div className="item-arrow">
                      <span>›</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="app-info">
        <div className="info-item">
          <span className="info-label">App Version</span>
          <span className="info-value">1.0.0</span>
        </div>
        <div className="info-item">
          <span className="info-label">Last Updated</span>
          <span className="info-value">Dec 1, 2024</span>
        </div>
        <div className="info-item">
          <span className="info-label">Bank Partner</span>
          <span className="info-value">Federal Bank</span>
        </div>
      </div>

      <div className="logout-section">
        <button className="logout-button" onClick={handleLogout}>
          <LogOut className="logout-icon" />
          <span>Sign Out</span>
        </button>
      </div>

      <div className="security-footer">
        <p>🔒 Your data is encrypted and secure</p>
        <p>Banking services provided by Federal Bank</p>
      </div>
    </div>
  );
};

export default SettingsTab;
