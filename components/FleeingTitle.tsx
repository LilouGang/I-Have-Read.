'use client';

import { useRef, useEffect } from 'react';

export default function FleeingTitle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = "I Have Read.";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      // On récupère toutes les lettres (les spans)
      const spans = container.querySelectorAll('span');

      spans.forEach((span) => {
        // Position de la lettre
        const rect = span.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;

        // Distance entre la souris et le centre de la lettre
        const distanceX = e.clientX - letterCenterX;
        const distanceY = e.clientY - letterCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        // Rayon d'action (plus c'est grand, plus les lettres fuient de loin)
        const radius = 60;

        if (distance < radius) {
          // Calcul de la force de répulsion (plus on est près, plus ça pousse fort)
          const force = (radius - distance) / radius;
          
          // Direction de la fuite (inversée)
          const moveX = -(distanceX / distance) * force * 50; // 50px max de déplacement
          const moveY = -(distanceY / distance) * force * 50;

          span.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          // Retour à la normale
          span.style.transform = 'translate(0, 0)';
          span.style.color = ""; // Retour couleur normale
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
          style={{ willChange: 'transform' }} // Optimisation perf
        >
          {/* Si c'est un espace, on met un espace insécable pour qu'il prenne de la place */}
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}