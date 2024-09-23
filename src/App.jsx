import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Generation from './pages/Home/Generation/Generation';
import AppHeader from './pages/Home/AppHeader/AppHeader';
import AppFooter from './pages/Home/AppFooter/AppFooter';
import Pricing from './pages/Home/Pricing/Pricing';
import SignIn from './pages/Authen/SignIn';
import SignUp from './pages/Authen/SignUp';

function AppContent() {
  const location = useLocation();
  
  // Check if the current path is "/signin"
  const hideHeaderAndFooter = (location.pathname === '/signin') || (location.pathname === '/signup');

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
        </Routes>
      </main>

      {/* Footer */}
      {!hideHeaderAndFooter && <AppFooter />}
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
