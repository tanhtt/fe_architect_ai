import Home from './pages/Home/Home'
import Generation from './pages/Home/Generation/Generation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './pages/Home/AppHeader/AppHeader';
import AppFooter from './pages/Home/AppFooter/AppFooter';
import Pricing from './pages/Home/Pricing/Pricing';

function App() {

  return (
    <>
      <Router>
      <div>
        {/* Header luôn hiển thị */}
        <AppHeader />

        {/* Routes để thay đổi nội dung */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generation" element={<Generation />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>

        {/* Footer luôn hiển thị */}
        <AppFooter />
      </div>
    </Router>
    </>
  )
}

export default App
