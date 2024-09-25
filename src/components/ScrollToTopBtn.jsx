import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Hiện nút khi cuộn xuống
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll lên đầu khi nhấn nút
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div style={styles}>
          <button onClick={scrollToTop} style={buttonStyle}>
            <ArrowUpwardIcon/>
          </button>
        </div>
      )}
    </div>
  );
}

// CSS inline cho nút
const styles = {
  position: 'fixed',
  bottom: '50px',
  right: '50px',
  zIndex: '1000',
};

const buttonStyle = {
  padding: '10px 15px',
  fontSize: '18px',
  borderRadius: '5px',
  backgroundColor: '#2B1B12',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default ScrollToTopButton;
