import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null, // Viewport
      threshold: 0.2, // Trigger when 30% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;
