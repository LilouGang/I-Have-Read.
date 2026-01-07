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
  triggerError
}: ActionPanelProps) {

  // --- LOGIQUE SPÉCIFIQUE MISSION 14 (CHECKBOXES) ---
  // Règle : Cocher uniquement les nombres premiers : 2, 3, 5, 7, 11
  const [checkboxes, setCheckboxes] = useState<Record<number, boolean>>({});
  
  // Initialisation des checkboxes au chargement du niveau 14
  useEffect(() => {
    if (level === 14) {
      setCheckboxes({
        1: false, 2: false, 3: false, 4: false, 5: false, 
        6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false
      });
      // Reset input value car on utilise l'état interne checkboxes
      setInputValue(""); 
    }
  }, [level, setInputValue]);

  const toggleCheckbox = (num: number) => {
    const newState = { ...checkboxes, [num]: !checkboxes[num] };
    setCheckboxes(newState);
    // On passe une représentation string du choix au parent pour validation
    // Format: "2,3,5..."
    const selected = Object.entries(newState)
      .filter(([_, checked]) => checked)
      .map(([n]) => n)
      .sort((a,b) => Number(a)-Number(b))
      .join(',');
    setInputValue(selected);
  };

  // --- LOGIQUE SPÉCIFIQUE MISSION 17 (CLAVIER CASSÉ) ---
  // Mapping : A->Z, Z->E, E->R, R->T, T->Y (QWERTY shifté ou Random)
  // On va faire simple mais perturbant : +1 Code ASCII
  const handleCursedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    // On prend le dernier caractère saisi
    if (rawVal.length > inputValue.length) {
       const lastChar = rawVal.slice(-1);
       // Transformation : Si c'est une lettre, on la remplace par une autre
       // Exemple simple : A devient B, B devient C...
       const charCode = lastChar.charCodeAt(0);
       let newChar = lastChar;
       
       if (charCode >= 65 && charCode <= 122) { // Lettres seulement
          newChar = String.fromCharCode(charCode + 1);
       }
       setInputValue(inputValue + newChar);
    } else {
       // Suppression (Backspace)
       setInputValue(rawVal);
    }
  };


  if (level === 0) return null;

  return (
    <div className="space-y-6">
      
      {/* --- NIVEAUX 1 à 10 (Version Compacte pour gain de place dans cette réponse) --- */}
      {level <= 10 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans">
           <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">
             {level === 1 && "Terme rectifié"}
             {level === 2 && "Titre article ajouté"}
             {level === 3 && "Nombre de mots"}
             {level === 4 && "Mention cachée"}
             {level === 5 && "Date (Romain)"}
             {level === 6 && "Anomalie Typo"}
             {level === 7 && "Mot Invisible"}
             {level === 8 && "Premier mot (Lipogramme)"}
             {level === 9 && "Code déchiffré"}
             {level === 10 && "Couleur Hex (#...)"}
           </label>
           <input type={level === 3 ? "number" : "text"} value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full p-2 border border-gray-400 rounded-sm text-sm" />
        </div>
      )}

      {/* --- NIVEAUX 11 à 20 --- */}

      {/* MISSION 11 : Ordre paragraphe */}
      {level === 11 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Ordre Logique (ex: A-B-C-D)</label>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.toUpperCase())} placeholder="?-?-?-?" className="w-full p-2 border border-gray-400 rounded-sm font-mono uppercase" />
        </div>
      )}

      {/* MISSION 12 : Acrostiche */}
      {level === 12 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Message Implicite (Vertical)</label>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Mot caché..." className="w-full p-2 border border-gray-400 rounded-sm" />
        </div>
      )}

      {/* MISSION 13 : Lettre manquante */}
      {level === 13 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Lettre Manquante</label>
          <input type="text" maxLength={1} value={inputValue} onChange={(e) => setInputValue(e.target.value.toUpperCase())} placeholder="?" className="w-12 p-2 border border-gray-400 rounded-sm font-mono text-center uppercase" />
        </div>
      )}

      {/* MISSION 14 : Checkboxes (Nombres Premiers) */}
      {level === 14 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Sélection des Nombres Premiers</label>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <button
                key={num}
                onClick={() => toggleCheckbox(num)}
                className={`h-10 text-sm font-bold border rounded transition-colors ${checkboxes[num] ? 'bg-gray-800 text-white border-black' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* MISSION 15 : Suppression DOM */}
      {level === 15 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Code libéré (après suppression)</label>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="CODE..." className="w-full p-2 border border-gray-400 rounded-sm" />
        </div>
      )}

      {/* MISSION 16 : Modif CSS */}
      {level === 16 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Information Révélée</label>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="..." className="w-full p-2 border border-gray-400 rounded-sm" />
        </div>
      )}

      {/* MISSION 17 : Clavier Maudit */}
      {level === 17 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Saisir "CONFIRMATION"</label>
          <p className="text-[10px] text-gray-500 mb-2">Attention : Driver clavier corrompu (+1 ASCII Shift).</p>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleCursedInput} 
            placeholder="Essayez de taper..." 
            className="w-full p-2 border border-gray-400 rounded-sm bg-white focus:outline-none focus:border-red-500 text-sm font-mono text-red-600"
          />
        </div>
      )}

      {/* MISSION 18 : Maths */}
      {level === 18 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Résultat X</label>
          <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="0" className="w-full p-2 border border-gray-400 rounded-sm" />
        </div>
      )}

      {/* MISSION 19 : Devise */}
      {level === 19 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Montant en FRF</label>
          <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="0" className="w-full p-2 border border-gray-400 rounded-sm" />
        </div>
      )}

      {/* MISSION 20 : Météo / Lieu */}
      {level === 20 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Code OACI Aéroport</label>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.toUpperCase())} placeholder="XXXX" className="w-full p-2 border border-gray-400 rounded-sm font-mono uppercase" />
        </div>
      )}

      {/* MISSION 21 : Pays (France) */}
      {level === 21 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Juridiction Territoriale (Pays)</label>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Nom du pays..." className="w-full p-2 border border-gray-400 rounded-sm bg-white" />
        </div>
      )}

      {/* MISSION 22 : Captcha Logique */}
      {level === 22 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Résultat du test arithmétique</label>
          <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="0" className="w-full p-2 border border-gray-400 rounded-sm bg-white" />
        </div>
      )}

      {/* MISSION 23 : Musique (Ode to joy / Hymne a la joie) */}
      {level === 23 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Titre de l'œuvre musicale</label>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Titre..." className="w-full p-2 border border-gray-400 rounded-sm bg-white" />
        </div>
      )}

      {/* MISSION 24 : Cémantix (Administration) */}
      {level === 24 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Concept Sémantique Central</label>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Le mot commun..." className="w-full p-2 border border-gray-400 rounded-sm bg-white" />
        </div>
      )}

      {/* MISSION 25 : Paradoxe */}
      {level === 25 && (
        <div className="p-4 bg-gray-50 border border-gray-300 rounded-sm font-sans animate-fade-in">
          <label className="block text-xs font-bold text-gray-900 uppercase mb-3 tracking-wider">Résultat Logique</label>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Mot de la solution..." className="w-full p-2 border border-gray-400 rounded-sm bg-white" />
        </div>
      )}

    </div>
  );
}