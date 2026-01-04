import { RefObject } from 'react';

interface Clause {
  title: string;
  text: string;
}

interface DocumentViewerProps {
  scrollRef: RefObject<HTMLDivElement | null>;
  dynamicClauses: Clause[];
  baseContent: React.ReactNode;
}

export default function DocumentViewer({ scrollRef, dynamicClauses, baseContent }: DocumentViewerProps) {
  return (
    <div 
      ref={scrollRef} // On attache la ref ici
      className="h-96 overflow-y-auto p-8 bg-white text-justify leading-relaxed font-serif text-lg border-b border-gray-200 scroll-smooth"
    >
      {baseContent}

      {/* Affichage des clauses dynamiques */}
      {dynamicClauses.map((clause, index) => (
        <div key={index} className="mt-4 text-red-600 animate-pulse border-l-4 border-red-600 pl-4">
          <h3 className="font-bold mb-2">{clause.title}</h3>
          <p>{clause.text}</p>
        </div>
      ))}
      
      <p className="mt-8 text-center text-gray-400 text-sm">--- FIN DU DOCUMENT ---</p>
    </div>
  );
}