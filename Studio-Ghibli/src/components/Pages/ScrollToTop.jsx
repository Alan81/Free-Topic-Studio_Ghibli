import React, { useState, useEffect } from 'react';
import '../CSS/ScrollToTop.css'; // Создадим этот файл

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показываем кнопку при прокрутке вниз
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top"  onClick={scrollToTop} aria-label="Наверх">
          <svg className="scroll-to-top__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;