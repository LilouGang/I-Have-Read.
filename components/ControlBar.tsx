interface Rule {
  id: number;
  text: string;
  status: 'pending' | 'valid' | 'error';
  attempt: number;
}

interface ControlBarProps {
  rules: Rule[];
  validateLevel: () => void;
  buttonText: string;
  level: number;
}

export default function ControlBar({ rules, validateLevel, buttonText, level }: ControlBarProps) {
  
  const sortedRules = [...rules].sort((a, b) => {
    const aIsDone = a.status === 'valid';
    const bIsDone = b.status === 'valid';

    if (aIsDone && !bIsDone) return 1;
    if (!aIsDone && bIsDone) return -1;

    return b.id - a.id;
  });

  return (
    <div className="mt-8">

      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        
        <div className="flex-1 w-full flex flex-col gap-3">
          {sortedRules.map((rule) => (
            <div 
              key={`${rule.id}-${rule.attempt}`} 
              className={`
                h-14 flex items-center gap-4 p-4 rounded-md text-sm font-medium border transition-colors duration-200 overflow-hidden
                ${rule.status === 'valid' 
                  ? 'bg-green-50 border-green-200 text-green-800 opacity-60' 
                  : rule.status === 'error' 
                    ? 'bg-white text-gray-900 animate-pulse-once font-bold border-gray-900' 
                    : 'bg-white border-gray-300 text-gray-600 shadow-sm'
                } 
              `}
            >
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold border shrink-0
                ${rule.status === 'valid' ? 'bg-green-200 border-green-300 text-green-800' : 
                  rule.status === 'error' ? 'bg-gray-800 border-gray-900 text-white' : 
                  'bg-gray-100 border-gray-400 text-gray-600'}
              `}>
                {rule.status === 'valid' ? '✓' : rule.id} 
              </div>
              
              <span className={`line-clamp-3 ${rule.status === 'valid' ? 'line-through decoration-green-300' : ''}`}>
                {rule.text}
              </span>
            </div>
          ))}
        </div>
        <div className="shrink-0 md:w-auto w-full">
          <button 
            onClick={validateLevel}
            disabled={level > 25}
            className="h-14 w-full md:w-64 bg-gray-900 hover:bg-black text-white font-bold rounded shadow-lg text-lg uppercase tracking-wide transition-all active:scale-[0.98] flex items-center justify-center"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}