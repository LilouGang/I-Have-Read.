'use client';

import { useRef, useEffect } from 'react';

export default function FleeingTitle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = "I Have Read.";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const spans = container.querySelectorAll('span');

      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;
        const distanceX = e.clientX - letterCenterX;
        const distanceY = e.clientY - letterCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const radius = 60;

        if (distance < radius) {
          const force = (radius - distance) / radius;
          const moveX = -(distanceX / distance) * force * 50;
          const moveY = -(distanceY / distance) * force * 50;

          span.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          span.style.transform = 'translate(0, 0)';
          span.style.color = "";
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center select-none cursor-default">
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="inline-block transition-transform duration-75 ease-out text-3xl font-serif font-black tracking-normal text-gray-900"
          style={{ willChange: 'transform' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}