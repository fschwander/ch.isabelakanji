import React, {useEffect, useState} from 'react';
import './RoundCursor.scss';

export const RoundCursor: React.FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const updateMousePosition = (ev: any) => {
    setMouseX(ev.clientX);
    setMouseY(ev.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  });

  if(window.innerWidth < 600) {
    return null
  } else {
    return (
      <div className={`RoundCursor`}>
      <span className={`cursor ${mouseX === 0 || mouseY === 0 ? 'hide' : ''}`}
            style={{left: mouseX, top: mouseY}}/>
      </div>
    );
  }
};
