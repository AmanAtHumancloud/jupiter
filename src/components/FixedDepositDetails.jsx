import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PiggyBank, Calendar, Percent, Building2, Clock, AlertCircle } from 'lucide-react';
import './FixedDepositDetails.css';

const FixedDepositDetails = () => {
  const navigate = useNavigate();
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  const fdDetails = {
    bankName: 'Federal Bank',
    accountNumber: 'FD1234567890',
    principalAmount: '₹75,422',
    interestRate: '8% per annum',
    maturityDate: 'May 15, 2026',
    tenure: '18 months',
    interestEarned: '₹9,067',
    maturityAmount: '₹84,489',
    startDate: 'Nov 15, 2024',
    status: 'Active'
  };

  const handleWithdraw = () => {
    setShowWithdrawModal(true);
  };

  const closeModal = () => {
    setShowWithdrawModal(false);
  };

  return (
    <div className="fd-details-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft className="back-icon" />
        </button>
        <h1>Fixed Deposit Details</h1>
      </div>

      <div className="fd-overview-card">
        <div className="fd-header">
          <div className="fd-icon">
            <PiggyBank className="icon" />
          </div>
          <div className="fd-basic-info">
            <h2>{fdDetails.bankName} Fixed Deposit</h2>
            <p className="fd-account">Account: {fdDetails.accountNumber}</p>
            <span className={`fd-status ${fdDetails.status.toLowerCase()}`}>
              {fdDetails.status}
            </span>
          </div>
        </div>

        <div className="fd-amount-section">
          <div className="current-balance">
            <span className="balance-label">Current Balance</span>
            <span className="balance-amount">{fdDetails.principalAmount}</span>
          </div>
          <div className="interest-rate">
            <Percent className="rate-icon" />
            <span>{fdDetails.interestRate}</span>
          </div>
        </div>
      </div>

      <div className="fd-details-grid">
        <div className="detail-card">
          <div className="detail-header">
            <Calendar className="detail-icon" />
            <h3>Maturity Information</h3>
          </div>
          <div className="detail-content">
            <div className="detail-item">
              <span className="detail-label">Maturity Date</span>
              <span className="detail-value">{fdDetails.maturityDate}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Tenure</span>
              <span className="detail-value">{fdDetails.tenure}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Start Date</span>
              <span className="detail-value">{fdDetails.startDate}</span>
            </div>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-header">
            <Building2 className="detail-icon" />
            <h3>Bank Details</h3>
          </div>
          <div className="detail-content">
            <div className="detail-item">
              <span className="detail-label">Bank Name</span>
              <span className="detail-value">{fdDetails.bankName}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Branch</span>
              <span className="detail-value">Main Branch, Mumbai</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">IFSC Code</span>
              <span className="detail-value">FDRL0001234</span>
            </div>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-header">
            <PiggyBank className="detail-icon" />
            <h3>Financial Details</h3>
          </div>
          <div className="detail-content">
            <div className="detail-item">
              <span className="detail-label">Principal Amount</span>
              <span className="detail-value">{fdDetails.principalAmount}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Interest Earned</span>
              <span className="detail-value">{fdDetails.interestEarned}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Maturity Amount</span>
              <span className="detail-value highlight">{fdDetails.maturityAmount}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fd-actions">
        <button className="withdraw-button" onClick={handleWithdraw}>
          <Clock className="action-icon" />
          <span>Withdraw FD</span>
        </button>
      </div>

      <div className="fd-terms">
        <h3>Terms & Conditions</h3>
        <ul>
          <li>Early withdrawal may attract penalty charges</li>
          <li>Interest is calculated on quarterly basis</li>
          <li>FD is insured up to ₹5,00,000 by DICGC</li>
          <li>Auto-renewal option available at maturity</li>
        </ul>
      </div>

      {showWithdrawModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <AlertCircle className="modal-icon" />
              <h3>Withdrawal Not Available</h3>
            </div>
            <div className="modal-body">
              <p>Sorry, you cannot withdraw your Fixed Deposit at this time.</p>
              <p><strong>Reason:</strong> The bank is currently closed.</p>
              <p>Banking hours: Monday to Friday, 9:00 AM - 6:00 PM</p>
              <p>Please try again during business hours or contact customer service for assistance.</p>
            </div>
            <div className="modal-footer">
              <button className="modal-button primary" onClick={closeModal}>
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FixedDepositDetails;
