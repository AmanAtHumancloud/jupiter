steps
1) git clone
2) npm install
3) in package.json replace dev script with  "dev": "vite --host 0.0.0.0",
4) npm run dev
5) connect both phone and laptop to a single wifi 
6) open "Network" address in chrome (phone) eg
       Local:   http://localhost:5173/ 
  ➜  Network: http://192.168.172.120:5173/ ✅
or
  ➜  Network: http://172.26.224.1:5173/ ✅
7) in chrome , click add to home page from settings 
8) use




# Jupiter Banking Website

A modern, responsive React.js banking application with a beautiful UI and comprehensive banking features.

## 🚀 Features

### Authentication
- **PIN-based Authentication**: Secure login with PIN (use `1234` to access)
- **Modern Login UI**: Beautiful gradient background with glassmorphism design
- **Security Indicators**: Visual feedback for authentication status

### Main Navigation
- **Bottom Tab Navigation**: Three main sections - Home, Money, Settings
- **Active State Indicators**: Clear visual feedback for current tab
- **Responsive Design**: Optimized for mobile and desktop

### Home Tab
- **Current Balance Display**: Shows available balance with currency formatting
- **Quick Actions**: Transfer, Pay Bills, Invest buttons
- **Recent Expenses**: List of recent transactions with categories
- **Fixed Deposit Overview**: Quick access to FD details with balance and interest rate

### Money Tab
- **Financial Statistics**: Monthly income, expenses, and savings overview
- **Transaction History**: Detailed list of recent transactions with income/expense indicators
- **Budget Tracking**: Visual progress bars for different spending categories
- **Quick Actions**: Transfer money, pay bills, invest options

### Settings Tab
- **Profile Management**: User profile with avatar and account type
- **Account Settings**: Profile information, cards, mobile banking
- **Security Options**: Change PIN, notifications, privacy settings
- **Support**: Help center and contact information
- **App Information**: Version details and bank partnership info

### Fixed Deposit Details
- **Comprehensive FD Information**: Bank details, maturity date, interest rate
- **Financial Breakdown**: Principal amount, interest earned, maturity amount
- **Bank Information**: Federal Bank details with branch and IFSC code
- **Withdrawal Functionality**: Attempt to withdraw with bank closure message
- **Terms & Conditions**: Important FD terms and conditions

## 🎨 Design Features

### Theme & Styling
- **Modern Gradient Backgrounds**: Beautiful purple-blue gradient theme
- **Glassmorphism Effects**: Frosted glass appearance with backdrop blur
- **Consistent Color Scheme**: Professional banking color palette
- **Smooth Animations**: Hover effects and transitions throughout

### UI Components
- **Card-based Layout**: Clean, organized information display
- **Icon Integration**: Lucide React icons for consistent visual language
- **Responsive Grid**: Adaptive layouts for different screen sizes
- **Interactive Elements**: Hover states and click animations

## 🛠️ Technical Stack

- **React 19.1.1**: Latest React with modern features
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing
- **Lucide React**: Beautiful, customizable icons
- **CSS3**: Modern styling with gradients, backdrop-filter, and animations

## 📱 Responsive Design

- **Mobile-first Approach**: Optimized for mobile devices
- **Adaptive Navigation**: Bottom navigation for mobile, flexible for desktop
- **Flexible Grids**: Responsive layouts that adapt to screen size
- **Touch-friendly**: Large touch targets and smooth interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jupiter-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - Use PIN `1234` to access the application

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── HomeTab.jsx              # Home dashboard component
│   ├── HomeTab.css              # Home tab styling
│   ├── MoneyTab.jsx             # Money management component
│   ├── MoneyTab.css             # Money tab styling
│   ├── SettingsTab.jsx          # Settings component
│   ├── SettingsTab.css           # Settings tab styling
│   ├── FixedDepositDetails.jsx  # FD details page
│   ├── FixedDepositDetails.css  # FD details styling
│   ├── MainLayout.jsx           # Main app layout
│   ├── MainLayout.css           # Layout styling
│   ├── PinAuth.jsx              # Authentication component
│   └── PinAuth.css              # Auth styling
├── App.jsx                      # Main app component
├── App.css                      # Global app styles
├── main.jsx                     # App entry point
└── index.css                    # Global styles
```

## 🔐 Authentication

- **PIN**: `1234`
- **Session Management**: Simple state-based authentication
- **Security Note**: In production, implement proper authentication with backend

## 🎯 Key Features Implemented

✅ PIN Authentication (1234)  
✅ Bottom Navigation (Home, Money, Settings)  
✅ Current Balance Display  
✅ Recent Expenses List  
✅ Fixed Deposit Overview  
✅ FD Details Page with Bank Information  
✅ Withdrawal Functionality with Bank Closed Message  
✅ Money Management Dashboard  
✅ Transaction History  
✅ Budget Tracking  
✅ Settings Page with Profile Management  
✅ Responsive Design  
✅ Modern UI with Glassmorphism Effects  

## 🌟 Banking Features

### Federal Bank Partnership
- **Bank Name**: Federal Bank
- **Branch**: Main Branch, Mumbai
- **IFSC Code**: FDRL0001234
- **FD Details**: ₹75,422 at 8% p.a., Matures May 2026

### Account Information
- **Account Holder**: John Doe
- **Account Type**: Premium Account
- **Current Balance**: ₹1,25,430
- **Email**: john.doe@email.com

## 🔧 Customization

### Colors
- Primary: `#667eea` (Purple-blue)
- Secondary: `#764ba2` (Deep purple)
- Success: `#22c55e` (Green)
- Warning: `#fb923c` (Orange)
- Error: `#ef4444` (Red)

### Typography
- Headers: 700 weight, gradient text
- Body: 500-600 weight, clean sans-serif
- Small text: 400 weight, reduced opacity

## 📱 Mobile Optimization

- **Touch Targets**: Minimum 44px touch areas
- **Bottom Navigation**: Fixed bottom navigation for easy thumb access
- **Responsive Text**: Scalable font sizes
- **Gesture Support**: Smooth scrolling and interactions

## 🚀 Future Enhancements

- [ ] Backend integration for real banking data
- [ ] Biometric authentication
- [ ] Push notifications
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Advanced transaction filtering
- [ ] Investment portfolio tracking
- [ ] Bill payment integration
- [ ] QR code payments
- [ ] Voice commands

## 📄 License

This project is created for demonstration purposes. Please ensure proper licensing for production use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions, please contact the development team or refer to the help section within the application.

---

**Jupiter Banking** - Modern Banking Made Simple 🏦✨
