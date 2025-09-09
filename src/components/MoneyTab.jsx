import React from 'react';
import { TrendingUp, TrendingDown, CreditCard, PiggyBank, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import './MoneyTab.css';

const MoneyTab = () => {
  const transactions = [
    {
      id: 1,
      type: 'income',
      title: 'Salary Credit',
      amount: '₹45,000',
      date: 'Dec 1, 2024',
      icon: ArrowUpRight,
      category: 'Income'
    },
    {
      id: 2,
      type: 'expense',
      title: 'Rent Payment',
      amount: '₹15,000',
      date: 'Nov 30, 2024',
      icon: ArrowDownLeft,
      category: 'Housing'
    },
    {
      id: 3,
      type: 'income',
      title: 'Freelance Payment',
      amount: '₹8,500',
      date: 'Nov 28, 2024',
      icon: ArrowUpRight,
      category: 'Income'
    },
    {
      id: 4,
      type: 'expense',
      title: 'Grocery Shopping',
      amount: '₹2,450',
      date: 'Nov 27, 2024',
      icon: ArrowDownLeft,
      category: 'Food'
    },
    {
      id: 5,
      type: 'expense',
      title: 'Fuel',
      amount: '₹1,200',
      date: 'Nov 26, 2024',
      icon: ArrowDownLeft,
      category: 'Transport'
    }
  ];

  const monthlyStats = {
    income: '₹53,500',
    expenses: '₹18,650',
    savings: '₹34,850'
  };

  return (
    <div className="money-tab">
      <div className="header">
        <h1>Money Management</h1>
        <p>Track your finances and transactions</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card income">
          <div className="stat-icon">
            <TrendingUp className="icon" />
          </div>
          <div className="stat-content">
            <h3>Monthly Income</h3>
            <p className="stat-amount">{monthlyStats.income}</p>
          </div>
        </div>

        <div className="stat-card expense">
          <div className="stat-icon">
            <TrendingDown className="icon" />
          </div>
          <div className="stat-content">
            <h3>Monthly Expenses</h3>
            <p className="stat-amount">{monthlyStats.expenses}</p>
          </div>
        </div>

        <div className="stat-card savings">
          <div className="stat-icon">
            <PiggyBank className="icon" />
          </div>
          <div className="stat-content">
            <h3>Monthly Savings</h3>
            <p className="stat-amount">{monthlyStats.savings}</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn transfer">
            <ArrowUpRight className="action-icon" />
            <span>Transfer Money</span>
          </button>
          <button className="action-btn pay">
            <CreditCard className="action-icon" />
            <span>Pay Bills</span>
          </button>
          <button className="action-btn invest">
            <TrendingUp className="action-icon" />
            <span>Invest</span>
          </button>
        </div>
      </div>

      <div className="transactions-section">
        <div className="section-header">
          <h3>Recent Transactions</h3>
          <span className="view-all">View All</span>
        </div>
        
        <div className="transactions-list">
          {transactions.map((transaction) => {
            const IconComponent = transaction.icon;
            return (
              <div key={transaction.id} className="transaction-item">
                <div className={`transaction-icon ${transaction.type}`}>
                  <IconComponent className="icon" />
                </div>
                <div className="transaction-details">
                  <div className="transaction-title">{transaction.title}</div>
                  <div className="transaction-meta">
                    <span className="transaction-category">{transaction.category}</span>
                    <span className="transaction-date">{transaction.date}</span>
                  </div>
                </div>
                <div className={`transaction-amount ${transaction.type}`}>
                  {transaction.type === 'income' ? '+' : '-'}{transaction.amount}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="budget-section">
        <h3>Budget Overview</h3>
        <div className="budget-cards">
          <div className="budget-card">
            <div className="budget-header">
              <h4>Food & Dining</h4>
              <span className="budget-used">₹2,450 / ₹5,000</span>
            </div>
            <div className="budget-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '49%' }}></div>
              </div>
              <span className="budget-percentage">49%</span>
            </div>
          </div>

          <div className="budget-card">
            <div className="budget-header">
              <h4>Transportation</h4>
              <span className="budget-used">₹1,200 / ₹3,000</span>
            </div>
            <div className="budget-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '40%' }}></div>
              </div>
              <span className="budget-percentage">40%</span>
            </div>
          </div>

          <div className="budget-card">
            <div className="budget-header">
              <h4>Entertainment</h4>
              <span className="budget-used">₹850 / ₹2,000</span>
            </div>
            <div className="budget-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '42.5%' }}></div>
              </div>
              <span className="budget-percentage">42.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyTab;
