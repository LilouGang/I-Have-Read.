'use client';

import { useState, useRef } from 'react';
import DocumentViewer from '@/components/DocumentViewer';
import ActionPanel from '@/components/ActionPanel';
import Logo from '@/components/Logo'; // On importe le logo
import { BASE_CONTENT, getLevelClause } from '@/data/content';
import FleeingTitle from '@/components/FleeingTitle';

interface Clause { title: string; text: string; }

export default function Home() {
  // --- ÉTATS ---
  const [level, setLevel] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [dynamicClauses, setDynamicClauses] = useState<Clause[]>([]);
  const [buttonText, setButtonText] = useState<string>('Suivant');

  // États des Inputs
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(100);
  const [inputValue, setInputValue] = useState<string>('');

  const docRef = useRef<HTMLDivElement>(null); 

  // --- LOGIQUE (Identique à avant) ---
  const validateLevel = () => {
    setError('');
    if (level === 0) {
      const div = docRef.current;
      if (div && div.scrollTop + div.clientHeight >= div.scrollHeight - 10) {
        nextLevel();
      } else {
        triggerError("Vous ne pouvez pas accepter sans avoir tout lu. Scrollez jusqu'en bas.");
      }
    }
    else if (level === 1) isChecked ? nextLevel() : triggerError("Veuillez cocher la case pour continuer.");
    else if (level === 2) {
      const selection = window.getSelection()?.toString().trim();
      selection === '12' ? nextLevel() : triggerError("Réponse incorrecte. Surlignez le chiffre '12' dans l'intro.");
    }
    else if (level === 3) sliderValue <= 10 ? nextLevel() : triggerError("Consommation trop élevée. Réglez sous 10%.");
    else if (level === 4) inputValue === "Je renonce à mon droit de me plaindre" ? nextLevel() : triggerError("Phrase incorrecte.");
  };

  const nextLevel = () => {
    const nextLvl = level + 1;
    setLevel(nextLvl);
    const newClause = getLevelClause(nextLvl);
    if (newClause) addClause(newClause.title, newClause.text);
    if (nextLvl === 1) setIsChecked(false);
    if (nextLvl === 5) {
      alert("Niveau 4 validé !");
      setButtonText("En construction...");
    }
  };

  const addClause = (title: string, text: string) => {
    setDynamicClauses(prev => [...prev, { title, text }]);
    setTimeout(() => { if(docRef.current) docRef.current.scrollTop = docRef.current.scrollHeight; }, 100);
  };
  const triggerError = (msg: string) => setError(msg);

  // --- RENDU VISUEL (NOUVEAU) ---
  return (
    <main className="min-h-screen bg-[#F3F4F6] font-sans text-gray-800 flex flex-col">
      
      {/* 1. HEADER (Barre du haut) */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        
        {/* Logo à gauche */}
        <div className="w-1/3">
          <Logo />
        </div>

        {/* Titre au centre (Absolu pour être parfaitement centré) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center w-full max-w-lg">
           {/* On remplace le h1 par notre composant */}
           <FleeingTitle />
        </div>

        {/* Espace vide à droite */}
        <div className="w-1/3"></div>
        
      </nav>

      {/* 2. CORPS DE PAGE (Centré) */}
      <div className="flex-1 flex items-center justify-center p-6">
        
        {/* La Grande Box du Jeu */}
        <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-gray-300 flex flex-col max-h-[80vh]">
          
          {/* En-tête de la box (Optionnel maintenant qu'on a le Header, mais gardons-le pour le contexte) */}
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="ml-3 text-xs font-mono text-gray-500">terms_of_service.pdf (Lecture seule)</span>
          </div>

          {/* ZONE DE DOCUMENT */}
          <DocumentViewer 
            scrollRef={docRef} 
            dynamicClauses={dynamicClauses} 
            baseContent={BASE_CONTENT} 
          />

          {/* ZONE DE CONTRÔLE */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm font-medium border border-red-200 rounded-md flex items-center gap-2 animate-bounce">
                <span className="text-xl">⚠️</span> {error}
              </div>
            )}

            <ActionPanel 
              level={level}
              isChecked={isChecked} setIsChecked={setIsChecked}
              sliderValue={sliderValue} setSliderValue={setSliderValue}
              inputValue={inputValue} setInputValue={setInputValue}
              triggerError={triggerError}
            />

            <button 
              onClick={validateLevel}
              disabled={level >= 5}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 px-6 rounded-lg transition-all active:scale-[0.98] shadow-lg text-sm uppercase tracking-wide"
            >
              {buttonText}
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}