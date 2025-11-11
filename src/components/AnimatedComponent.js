import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children, animation = 'animate__fadeInUp' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={inView ? `animate__animated ${animation}` : 'invisible'}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
