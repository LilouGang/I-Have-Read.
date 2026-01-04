interface ActionPanelProps {
  level: number;
  isChecked: boolean;
  setIsChecked: (val: boolean) => void;
  sliderValue: number;
  setSliderValue: (val: number) => void;
  inputValue: string;
  setInputValue: (val: string) => void;
  triggerError: (msg: string) => void; // Pour gérer le copier-coller interdit
}

export default function ActionPanel({ 
  level, 
  isChecked, setIsChecked, 
  sliderValue, setSliderValue, 
  inputValue, setInputValue,
  triggerError 
}: ActionPanelProps) {

  return (
    <div className="mb-6">
      
      {/* NIVEAU 1 : CHECKBOX */}
      <div className={`transition-opacity duration-300 ${level >= 1 ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 overflow-hidden'}`}>
        <label className="flex items-center gap-3 cursor-pointer select-none mb-4 justify-center bg-blue-50 p-3 rounded-lg border border-blue-100 hover:bg-blue-100 transition">
          <input 
            type="checkbox" 
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="w-5 h-5 accent-blue-600"
          />
          <span className="text-sm font-medium">J'ai lu et j'accepte les conditions</span>
        </label>
      </div>

      {/* NIVEAU 3 : SLIDER */}
      {level === 3 && (
        <div className="mb-4 bg-green-50 p-4 rounded-lg border border-green-200">
          <label className="block text-sm font-medium text-green-800 mb-2">
            Consommation de pixels : {sliderValue}%
          </label>
          <input 
            type="range" 
            min="0" max="100" 
            value={sliderValue} 
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
        </div>
      )}

      {/* NIVEAU 4 : INPUT TEXTE */}
      {level === 4 && (
        <div className="mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <label className="block text-sm font-medium text-yellow-800 mb-2">
            Signature numérique :
          </label>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tapez la phrase ici..."
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onPaste={(e) => {
              e.preventDefault();
              triggerError("Le copier-coller est interdit pour des raisons de sécurité.");
            }}
          />
        </div>
      )}
    </div>
  );
}