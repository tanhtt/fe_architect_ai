import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Generation from './pages/Home/Generation/Generation';
import AppHeader from './pages/Home/AppHeader/AppHeader';
import AppFooter from './pages/Home/AppFooter/AppFooter';
import Pricing from './pages/Home/Pricing/Pricing';
import SignIn from './pages/Authen/SignIn';
import SignUp from './pages/Authen/SignUp';
import AdminUserPage from './pages/Admin/AdminUserPage';
import AboutUs from './pages/Home/AboutUs/AboutUs';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QRPayment from './pages/Payment/QRPayment';


function AppContent() {
  const location = useLocation();
  
  // Check if the current path is "/signin"
  const hideHeaderAndFooter = (location.pathname === '/signin') || (location.pathname === '/signup') || (location.pathname === '/admin/user');

  return (
    <div>
      {/* Header and Footer will be hidden on SignIn page */}
      {!hideHeaderAndFooter && <AppHeader />}

      {/* Routes to change content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generation" element={<Generation />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signin" element={<SignIn />} /> {/* SignIn page route */}
          <Route path="/signup" element={<SignUp />} /> {/* SignIn page route */}
          <Route path='/admin/user' element={<AdminUserPage/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/payment' element={<QRPayment/>} />

        </Routes>
      </main>

      {/* Footer */}
      {!hideHeaderAndFooter && <AppFooter />}

      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
