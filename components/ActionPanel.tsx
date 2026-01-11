import { useState, useEffect } from 'react';

interface ActionPanelProps {
  level: number;
  inputValue: string;
  setInputValue: (val: string) => void;
  triggerError: (msg: string) => void;
}

export default function ActionPanel({ 
  level, 
  inputValue, setInputValue,
}: ActionPanelProps) {

  const [checkboxes, setCheckboxes] = useState<Record<number, boolean>>({});
  
  useEffect(() => {
    if (level === 14) {
      setCheckboxes({
        1: false, 2: false, 3: false, 4: false, 5: false, 
        6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false
      });
      setInputValue(""); 
    }
  }, [level, setInputValue]);

  const toggleCheckbox = (num: number) => {
    const newState = { ...checkboxes, [num]: !checkboxes[num] };
    setCheckboxes(newState);
    const selected = Object.entries(newState)
      .filter(([_, checked]) => checked)
      .map(([n]) => n)
      .sort((a,b) => Number(a)-Number(b))
      .join(',');
    setInputValue(selected);
  };

  const handleCursedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    
    if (rawVal.length < inputValue.length) {
      setInputValue(rawVal);
      return;
    }

    if (rawVal.length > inputValue.length) {
       const lastChar = rawVal.slice(-1);
       const lowerChar = lastChar.toLowerCase();
       const corruptionMap: Record<string, string> = {
         'a': 'q', 'q': 'a',
         'i': '1', '1': 'i',
         'o': '0', '0': 'o',
       };

       let newChar = corruptionMap[lowerChar] || lowerChar;

       if (lastChar === lastChar.toUpperCase() && lastChar !== lastChar.toLowerCase()) {
         newChar = newChar.toUpperCase();
       }

       setInputValue(inputValue + newChar);
    }
  };

  const getLabel = () => {
    switch(level) {
      case 1: return "Rectifiez le terme mal orthographié";
      case 2: return "Identifiez la clause mal indexée";
      case 3: return "Déclarez le nombre de mots dans la phrase indiquée";
      case 4: return "Transcrivez la mention écrite en minuscules";
      case 5: return "Saisissez la date au format romain (Jour/Mois/Année)";
      case 6: return "Relevez le mot à la police incorrecte";
      case 7: return "Révélez la clause qui contient le terme invisible";
      case 8: return "Signalez l'élément non conforme";
      case 9: return "Authentifiez la clé déchiffrée";
      case 10: return "Renseignez le code couleur du titre";
      case 11: return "Rétablissez l'ordre logique (ex: ABCD)";
      case 12: return "Localisez et inscrivez le mot dissimulé";
      case 13: return "Indiquez la lettre manquante au texte";
      case 14: return "Cochez les options respectant les règles";
      case 15: return "Saisissez le code de déblocage";
      case 16: return "Transcrivez le texte caché dans l'image";
      case 17: return "Confirmez la saisie (Périphérique instable)";
      case 18: return "Calculez la valeur entière de X";
      case 19: return "Convertissez le montant en Francs (FRF)";
      case 20: return "Identifiez le code aéroportuaire (OACI)";
      case 21: return "Déterminez le pays décrit";
      case 22: return "Déduisez l'élément suivant de la suite";
      case 23: return "Identifiez l'œuvre musicale affichée";
      case 24: return "Qualifiez le concept clé";
      case 25: return "Concluez par le terme d'accord";
      default: return "Saisie requise";
    }
  };

  if (level === 0) return null;

  return (
    <div className="space-y-4 animate-fade-in p-6 bg-white border border-gray-200 shadow-sm rounded-md">
      
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
          {getLabel()}
        </label>
      </div>
      
      {level === 14 ? (
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <button
              key={num}
              onClick={() => toggleCheckbox(num)}
              className={`h-10 text-sm font-mono font-bold border rounded transition-all ${
                checkboxes[num] 
                  ? 'bg-gray-900 text-white border-gray-900 shadow-inner' 
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-white'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      ) : (
        <input 
          type={level === 3 || level === 18 || level === 19 ? "number" : "text"} 
          value={inputValue} 
          onChange={level === 17 ? handleCursedInput : (e) => setInputValue(e.target.value)} 
          placeholder="Saisie..." 
          className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all font-mono text-sm placeholder-gray-300" 
        />
      )}
    </div>
  );
}