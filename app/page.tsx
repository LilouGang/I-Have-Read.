'use client';

import { useState, useRef, useEffect } from 'react';
import ActionPanel from '@/components/ActionPanel';
import ControlBar from '@/components/ControlBar';
import Logo from '@/components/Logo';
import FleeingTitle from '@/components/FleeingTitle';

// Import de TOUS les contenus
import { 
  ContentHeader, 
  CONTENT_ART_1, CONTENT_ART_2, CONTENT_ART_3, CONTENT_ART_4, CONTENT_ART_5,
  CONTENT_ART_6, CONTENT_ART_7, CONTENT_ART_8, CONTENT_ART_9, CONTENT_ART_10,
  CONTENT_ART_11, CONTENT_ART_12, CONTENT_ART_13, CONTENT_ART_14, CONTENT_ART_15,
  CONTENT_ART_16, CONTENT_ART_17, CONTENT_ART_18, CONTENT_ART_19, CONTENT_ART_20,
  CONTENT_ART_21, 
  InteractiveArticle22, 
  CONTENT_ART_23, CONTENT_ART_24, CONTENT_ART_25, CONTENT_ART_26, CONTENT_ART_27,
  CONTENT_ART_28, CONTENT_ART_29, CONTENT_ART_30
} from '@/data/content';

interface Rule { 
  id: number; 
  text: string; 
  status: 'pending' | 'valid' | 'error'; 
  attempt: number; 
}

export default function Home() {
  const [level, setLevel] = useState<number>(0); 
  const [buttonText] = useState<string>("ACCEPTER"); 
  const [rules, setRules] = useState<Rule[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const docRef = useRef<HTMLDivElement>(null); 

  // --- SÉCURITÉ : CTRL+F autorisé seulement au niveau 7 ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
        if (level !== 7) {
          e.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [level]);

  // --- GESTION DES RÈGLES ---
  const addNewRule = (lvl: number) => {
    let newRuleText = "";
    switch(lvl) {
      case 1: newRuleText = "Non-conformité orthographique (Art. IV)."; break;
      case 2: newRuleText = "Référence de clause invalide (Art. ?)."; break;
      case 3: newRuleText = "Violation du quota volumétrique (Art. XII.2)."; break;
      case 4: newRuleText = "Défaut de certification d'acuité visuelle (Art. XXIV)."; break;
      case 5: newRuleText = "Format de datation historique incorrect (Art. II)."; break;
      case 6: newRuleText = "Usage de typographie non réglementaire (Art. ?)."; break;
      case 7: newRuleText = "Omission de la mention 'facultative' (Art. ?)."; break;
      case 8: newRuleText = "Pièce jointe non conforme au standard (Art. XXI)."; break;
      case 9: newRuleText = "Absence de protocole cryptographique (Art. XXX)."; break;
      case 10: newRuleText = "Infraction à la charte chromatique (Art. V)."; break;
      case 11: newRuleText = "Rupture de la chaîne de causalité (Art. XVIII)."; break;
      case 12: newRuleText = "Motif de suspension non spécifié (Art. IX)."; break;
      case 13: newRuleText = "Intégrité alphabétique compromise (Art. XI)."; break;
      case 14: newRuleText = "Configuration tarifaire arithmétique invalide (Art. XXII)."; break;
      case 15: newRuleText = "Obstruction de l'interface utilisateur (Art. VII)."; break;
      case 16: newRuleText = "Défaut de visibilité par contraste (Art. XXVI)."; break;
      case 17: newRuleText = "Échec du protocole de saisie périphérique (Art. X)."; break;
      case 18: newRuleText = "Erreur de calcul de pénalité (Art. XIII)."; break;
      case 19: newRuleText = "Défaut de conversion en devise obsolète (Art. VI)."; break;
      case 20: newRuleText = "Géolocalisation aéroportuaire manquante (Art. XXIX)."; break;
      case 21: newRuleText = "Juridiction territoriale indéterminée (Art. III)."; break;
      case 22: newRuleText = "Désynchronisation séquentielle temporelle (Art. XVI)."; break;
      case 23: newRuleText = "Violation de propriété intellectuelle sonore (Art. XXV)."; break;
      case 24: newRuleText = "Imprécision sémantique vectorielle (Art. XIV)."; break;
      case 25: newRuleText = "Absence de consentement final explicite (Art. XXVII)."; break;
    }

    if (newRuleText) {
      setRules(prev => [...prev, { id: lvl, text: newRuleText, status: 'pending', attempt: 0 }]);
    }
  };

  // --- VALIDATION ---
  const validateLevel = () => {
    let isSuccess = false;

    const c = inputValue.trim().toUpperCase();
    const n = c.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    switch (level) {
      case 0: isSuccess = true; break;
      case 1: isSuccess = n === "CONSTITUTIONNEL"; break;
      case 2: isSuccess = c.includes("XXVIII.3") || c.includes("28.3"); break;
      case 3: isSuccess = c === "14"; break;
      case 4: isSuccess = n === "JE CERTIFIE AVOIR UNE EXCELLENTE VUE"; break;
      case 5: isSuccess = c === "XIV/VII/MDCCLXXXIX"; break;
      case 6: isSuccess = n === "UBUESQUE"; break;
      case 7: isSuccess = n.includes("VIII.2"); break;
      case 8: isSuccess = n.includes("ELECTORALE"); break;
      case 9: isSuccess = c === "CERTIFICAT_X509" || c === "[CERTIFICAT_X509]" || c === "CERTIFICAT X509"; break;
      case 10: isSuccess = c === "0D0D0D" || c === "#0D0D0D"; break;
      case 11: isSuccess = c.replace(/[- ]/g, "") === "BDCA"; break;
      case 12: isSuccess = n === "REFUS"; break;
      case 13: isSuccess = c === "B"; break;
      case 14: isSuccess = c === "2,3,5,7,11"; break;
      case 15: isSuccess = c.includes("PROCEDURE"); break;
      case 16: isSuccess = n === "CONFIDENTIEL"; break;
      case 17: isSuccess = c === "CONFIRMATION"; break;
      case 18: isSuccess = c === "3"; break;
      case 19: isSuccess = c === "474.85" || c === "474,85" || c === "474"; break;
      case 20: isSuccess = c === "BIKF"; break;
      case 21: isSuccess = n === "GRECE"; break;
      case 22: isSuccess = c === "T" || n === "JUILLET"; break;
      case 23: isSuccess = n.includes("LETTRE A ELISE") || n.includes("FUR ELISE"); break;
      case 24: isSuccess = n === "DROIT" || n === "JUSTICE"; break;
      case 25: isSuccess = n === "ACCORD"; break;
    }

    if (level > 0) {
      setRules(p =>
        p.map(r =>
          r.id === level
            ? { ...r, status: isSuccess ? "valid" : "error", attempt: isSuccess ? 0 : r.attempt + 1 }
            : r
        )
      );
    }

    if (isSuccess) nextLevel();
  };

  // --- PASSAGE AU NIVEAU SUIVANT ---
  const nextLevel = () => {
    const nextLvl = level + 1;
    setLevel(nextLvl);
    setInputValue(''); 
    
    // On n'ajoute une règle que si on est encore dans le jeu (<= 25).
    if (nextLvl <= 25) {
      addNewRule(nextLvl);
    }
  };

  // --- DEBUG ONLY : Fonction pour sauter les niveaux ---
  const jumpToLevel = (targetLevel: number) => {
    setLevel(targetLevel);
    setInputValue('');
    setRules([]); 
    addNewRule(targetLevel);
  };

  // --- RENDU ---
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#F3F4F6] font-sans text-gray-800 flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm shrink-0">
        <div className="w-1/3"><Logo /></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center w-full max-w-lg">
           {/* Si c'est fini, on affiche un message sobre */}
           {level > 25 ? (
             <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">FIN DE SESSION</span>
           ) : (
             <FleeingTitle />
           )}
        </div>
        {/* Indicateur de contexte */}
        <div className="w-1/3 flex justify-end">
             {level > 25 ? (
                <div className="text-xs font-mono border px-2 py-1 rounded bg-gray-100 text-gray-500 border-gray-300">
                  STATUS: 200 OK
                </div>
             ) : (
                <div className="text-xs font-mono border px-2 py-1 rounded bg-gray-50 text-gray-400 border-gray-200">
                   SECURE_CTX_{level}
                </div>
             )}
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-6 pb-12 overflow-hidden">
        
        {/* --- CONDITION D'AFFICHAGE : JEU vs FIN --- */}
        
        {level > 25 ? (
          
          /* ÉCRAN DE FIN SOBRE (Style Password Game / Formulaire Admin) */
          <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in max-w-2xl w-full">
            
            {/* Ligne de séparation pure */}
            <div className="w-24 h-px bg-gray-400"></div>

            <div className="text-center space-y-4">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] font-sans">
                Confirmation d'Enregistrement
              </h2>
              
              <p className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                Votre consentement a bien été enregistré.
              </p>
            </div>

            <div className="text-center space-y-1">
              <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                Horodatage : {new Date().toLocaleDateString()} — {new Date().toLocaleTimeString()}
              </p>
            </div>

            <div className="pt-8">
               <button 
                onClick={() => window.location.reload()}
                className="text-xs font-mono text-gray-500 hover:text-gray-900 border-b border-transparent hover:border-gray-900 transition-all pb-0.5"
              >
                Recommencer la procédure
              </button>
            </div>

          </div>

        ) : (
          /* LE JEU (Niveaux 0 à 25) - Code identique */
          <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden flex flex-col relative h-full max-h-[85vh]">
            
            {/* WINDOW HEADER */}
            <div className="bg-[#E5E7EB] px-4 py-2 border-b border-gray-300 flex items-center gap-2 sticky top-0 z-10 shrink-0 select-none">
               <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
              </div>
              <span className="ml-3 text-xs font-bold text-gray-600 font-mono tracking-wide">
                conditions_générales_d'utilisation.pdf
              </span>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div ref={docRef} className="overflow-y-auto h-full p-16 scroll-smooth bg-white">
              <div className="max-w-3xl mx-auto shadow-sm min-h-250 border border-gray-100 p-10 bg-white mb-8">
                <ContentHeader />
                
                <div className="space-y-12">
                  {CONTENT_ART_1}
                  {CONTENT_ART_2}
                  {CONTENT_ART_3}
                  {CONTENT_ART_4}
                  {CONTENT_ART_5}
                  {CONTENT_ART_6}
                  {CONTENT_ART_7}
                  {CONTENT_ART_8}
                  {CONTENT_ART_9}
                  {CONTENT_ART_10}
                  {CONTENT_ART_11}
                  {CONTENT_ART_12}
                  {CONTENT_ART_13}
                  {CONTENT_ART_14}
                  {CONTENT_ART_15}
                  {CONTENT_ART_16}
                  {CONTENT_ART_17}
                  {CONTENT_ART_18}
                  {CONTENT_ART_19}
                  {CONTENT_ART_20}
                  {CONTENT_ART_21}
                  
                  {/* Article 22 Interactif */}
                  <InteractiveArticle22 setInputValue={setInputValue} />

                  {CONTENT_ART_23}
                  {CONTENT_ART_24}
                  {CONTENT_ART_25}
                  {CONTENT_ART_26}
                  {CONTENT_ART_27}
                  {CONTENT_ART_28}
                  {CONTENT_ART_29}
                  {CONTENT_ART_30}
                </div>

                {/* FOOTER DOCUMENT */}
                <div className="mt-32 pt-8 border-t border-gray-200 text-center">
                  <p className="text-[10px] text-gray-400 font-mono">
                    © 2024-2026. Tous droits réservés. Reproduction interdite.<br/>
                  </p>
                </div>
              </div>

              {/* ACTION PANEL */}
              <div className="pb-12 max-w-3xl mx-auto mt-4">
                 {/* Cas particulier pour le niveau 14 (Primes) */}
                 {level === 14 ? (
                   <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm text-center italic rounded-sm">
                     ⚠ Action requise : Veuillez effectuer votre sélection directement dans l'Article XXII ci-dessus.
                   </div>
                 ) : (
                   <ActionPanel 
                      level={level}
                      inputValue={inputValue} 
                      setInputValue={setInputValue} 
                      triggerError={() => {}}
                    />
                 )}

                  <ControlBar 
                    rules={rules} 
                    level={level}
                    validateLevel={validateLevel}
                    buttonText={buttonText}
                  />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}