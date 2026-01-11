import { RefObject } from 'react';

interface Clause { title: string; text: string; }

interface DocumentViewerProps {
  scrollRef: RefObject<HTMLDivElement | null>;
  dynamicClauses: Clause[];
  baseContent: React.ReactNode;
  children: React.ReactNode; 
}

export default function DocumentViewer({ scrollRef, dynamicClauses, baseContent, children }: DocumentViewerProps) {
  return (
    <div 
      ref={scrollRef} 
      className="h-[75vh] w-full overflow-y-auto p-12 bg-white text-justify leading-relaxed font-serif text-lg text-gray-800 scroll-smooth relative"
    >
      <div className="mb-4">
        {baseContent}
      </div>

      {dynamicClauses.map((clause, index) => (
        <div key={index} className="mt-6 mb-6 text-red-700 bg-red-50 p-4 border-l-4 border-red-600 animate-pulse">
          <h3 className="font-bold font-sans mb-1 text-sm uppercase tracking-wider">{clause.title}</h3>
          <p>{clause.text}</p>
        </div>
      ))}
      
      <div className="mt-8">
        {children}
      </div>
      
      <div className="h-4"></div>
    </div>
  );
}