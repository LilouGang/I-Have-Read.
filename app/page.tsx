'use client';

import { useState, useRef, useEffect } from 'react';
import ActionPanel from '@/components/ActionPanel';
import ControlBar from '@/components/ControlBar';
import Logo from '@/components/Logo';
import FleeingTitle from '@/components/FleeingTitle';
import {CONTENT_HEADER, CONTENT_ART_1, CONTENT_ART_2, CONTENT_ART_3, CONTENT_ART_4, 
  CONTENT_ART_5, CONTENT_ART_6, CONTENT_ART_7, CONTENT_ART_8, CONTENT_ART_9, 
  CONTENT_ART_10, CONTENT_ART_11, CONTENT_ART_12, CONTENT_ART_13, CONTENT_ART_14,
  CONTENT_ART_15, CONTENT_ART_16, CONTENT_ART_17, CONTENT_ART_18, CONTENT_ART_19,
  CONTENT_ART_20, CONTENT_ART_21, CONTENT_ART_22, CONTENT_ART_23, CONTENT_ART_24,
  CONTENT_ART_25, CONTENT_ART_26, CONTENT_ART_27, CONTENT_ART_28, CONTENT_ART_29,
  CONTENT_ART_30 }from '@/data/content';

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

  // --- SÉCURITÉ ---
  // MODIFICATION : CTRL+F autorisé UNIQUEMENT au niveau 7
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Si on appuie sur CTRL+F (ou CMD+F)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
        // Si on n'est PAS au niveau 7, on bloque
        if (level !== 7) {
          e.preventDefault();
          alert("Fonction de recherche désactivée par mesure de sécurité.");
        }
        // Sinon (Niveau 7), on laisse faire (le navigateur ouvrira la barre de recherche)
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [level]); // Dépendance 'level' ajoutée pour mettre à jour le listener quand le niveau change

  // --- VALIDATION ---
  const validateLevel = () => {
    let isSuccess = false;
    const cleanInput = inputValue.trim();

    switch(level) {
      case 0: isSuccess = true; break;
      case 1: if (cleanInput.toLowerCase() === "constitutionnelle") isSuccess = true; break;
      case 2: if (cleanInput.toLowerCase().includes("article ii-a")) isSuccess = true; break; // Simplifié
      case 3: if (cleanInput === "39") isSuccess = true; break;
      case 4: if (cleanInput.toLowerCase() === "je certifie avoir une très bonne vue") isSuccess = true; break;
      case 5: if (cleanInput.toUpperCase() === "XIV/VII/MDCCLXXXIX") isSuccess = true; break;
      case 6: if (cleanInput.toUpperCase() === "DIVERGENCE") isSuccess = true; break;
      case 7: if (cleanInput.toUpperCase() === "FACULTATIF") isSuccess = true; break;
      case 8: if (cleanInput.toLowerCase() === "la") isSuccess = true; break;
      case 9: if (cleanInput.toUpperCase() === "PROTOCOLE_OMEGA") isSuccess = true; break;
      case 10: if (cleanInput.toUpperCase() === "#0D0D0D" || cleanInput === "0D0D0D") isSuccess = true; break;

      // --- NOUVELLES VALIDATIONS ---

      // 11. Ordre : B-D-C-A
      // B: "L'utilisateur accepte..."
      // D: "Toutefois..."
      // C: "Si cette interruption..."
      // A: "En conséquence..."
      // Mais dans le texte j'ai mis : A, B, C, D.
      // Phrases du texte : 
      // A = Consequence (Fin)
      // B = Acceptation (Début)
      // C = Condition (Milieu 1)
      // D = Reserve (Milieu 2)
      // Ordre logique : B -> D -> C -> A (ou B-C-A... restons sur B-D-C-A)
      case 11: 
        const ans11 = cleanInput.toUpperCase().replace(/-/g, '').replace(/ /g, '');
        if (ans11 === "BDCA") isSuccess = true; 
        break;

      // 12. Acrostiche : REFUS
      case 12: if (cleanInput.toUpperCase() === "REFUS") isSuccess = true; break;

      // 13. Lettre manquante : B
      case 13: if (cleanInput.toUpperCase() === "B") isSuccess = true; break;

      // 14. Checkboxes : 2, 3, 5, 7, 11 (Nombres premiers jusqu'à 12)
      case 14: 
        // inputValue contient "2,3,5,7,11" (trié)
        if (cleanInput === "2,3,5,7,11") isSuccess = true;
        break;

      // 15. Suppression DOM + Code
      case 15: 
        // 1. Le code doit être bon
        if (cleanInput.toUpperCase() === "LIBERTE_404") {
          // 2. L'élément bloquant doit avoir disparu du DOM
          const blocker = document.getElementById("element-to-delete");
          if (!blocker) {
            isSuccess = true;
          } else {
            alert("Erreur : L'élément obstructif (bannière rouge) est toujours présent sur la page.");
          }
        }
        break;

      // 16. Modif CSS
      case 16: if (cleanInput.toUpperCase() === "CONFIDENTIEL") isSuccess = true; break;

      // 17. Clavier : CONFIRMATION
      // L'input contient ce que l'utilisateur a REUSSI à écrire, pas ce qu'il a tapé.
      case 17: if (cleanInput.toUpperCase() === "CONFIRMATION") isSuccess = true; break;

      // 18. Maths : (144 - 144) + (16 * 2) / 4 = 0 + 32 / 4 = 8
      case 18: if (cleanInput === "8") isSuccess = true; break;

      // 19. Devise : (100 / 1.17) * 6.55957 = 85.47 * 6.55957 = 560.6 -> 561
      case 19: if (cleanInput === "561") isSuccess = true; break;

      // 20. Lieu : New York (JFK) -> KJFK
      case 20: if (cleanInput.toUpperCase() === "KJFK") isSuccess = true; break;

      // MISSION 21 : Pays -> FRANCE
      case 21: if (cleanInput.toUpperCase() === "FRANCE") isSuccess = true; break;

      // MISSION 22 : Captcha -> 3 + 7 + 9 + 1 = 20
      case 22: if (cleanInput === "20") isSuccess = true; break;

      // MISSION 23 : Musique -> HYMNE A LA JOIE (ou ODE TO JOY)
      case 23: 
        const m = cleanInput.toUpperCase();
        if (m.includes("HYMNE A LA JOIE") || m.includes("HYMNE À LA JOIE") || m.includes("ODE TO JOY")) isSuccess = true; 
        break;

      // MISSION 24 : Cémantix -> ADMINISTRATION (ou BUREAUCRATIE)
      case 24: 
        if (cleanInput.toUpperCase() === "ADMINISTRATION" || cleanInput.toUpperCase() === "BUREAUCRATIE") isSuccess = true; 
        break;

      // MISSION 25 : Paradoxe -> IGNORER
      // Logique : La phrase interdit d'écrire SAUF SI elle interdit. Comme elle interdit, l'exception s'applique.
      // Donc on a le droit d'écrire le mot interdit "IGNORER".
      case 25: if (cleanInput.toUpperCase() === "IGNORER") isSuccess = true; break;
    }

    if (isSuccess) {
      if (level > 0) {
        setRules(prev => prev.map(r => r.id === level ? { ...r, status: 'valid', attempt: 0 } : r));
      }
      nextLevel();
    } else {
      if (level > 0) {
        setRules(prev => prev.map(r => r.id === level ? { ...r, status: 'error', attempt: r.attempt + 1 } : r));
      }
    }
  };

  const nextLevel = () => {
    const nextLvl = level + 1;
    setLevel(nextLvl);
    setInputValue(''); 
    addNewRule(nextLvl);
    
    // Alerte de fin provisoire
    if (nextLvl > 10) {
      setTimeout(() => alert("Dossier validé. En attente de traitement... (À suivre)"), 500);
    }
  };

  const addNewRule = (lvl: number) => {
    let newRuleText = "";
    switch(lvl) {
      case 1: newRuleText = "Condition I : Rectification orthographique (Article I). Saisir le terme corrigé."; break;
      case 2: newRuleText = "Condition II : Contrôle d'intégrité (Article II). Saisir le titre exact de la clause injectée."; break;
      case 3: newRuleText = "Condition III : Vérification d'attention (Article III). Saisir le nombre de mots de la phrase citée."; break;
      case 4: newRuleText = "Condition IV : Clause visuelle (Article IV). Transcrire la mention en caractères réduits."; break;
      case 5: newRuleText = "Condition V : Validation temporelle (Article V). Saisir la date de référence au format romain."; break;
      case 6: newRuleText = "Condition VI : Uniformité typographique (Article VI). Relever le terme ayant une police divergente."; break;
      case 7: newRuleText = "Condition VII : Transparence des données (Article VII). Saisir le terme masqué (Recherche autorisée)."; break;
      case 8: newRuleText = "Condition VIII : Analyse syntaxique (Article VIII). Identifier le premier mot du paragraphe sans la lettre 'E'."; break;
      case 9: newRuleText = "Condition IX : Cryptographie (Article IX). Saisir le hash déchiffré (Algorithme ROT47)."; break;
      case 10: newRuleText = "Condition X : Audit graphique (Article X). Saisir le code Hexadécimal de la couleur du titre."; break;
      case 11: newRuleText = "Condition XI : Reconstitution logique (Article XI). Saisir la séquence chronologique des phrases (ex: A-B-C-D)."; break;
      case 12: newRuleText = "Condition XII : Lecture verticale (Article XII). Saisir le mot formé par les premières lettres de la liste."; break;
      case 13: newRuleText = "Condition XIII : Inventaire alphabétique (Article XIII). Saisir l'unique lettre absente du paragraphe."; break;
      case 14: newRuleText = "Condition XIV : Filtrage prioritaire (Article XIV). Sélectionner uniquement les nombres premiers."; break;
      case 15: newRuleText = "Condition XV : Déblocage de contenu (Article XV). Supprimer l'overlay via F12 et saisir le code libéré."; break;
      case 16: newRuleText = "Condition XVI : Analyse stéganographique (Article XVI). Révéler et saisir le texte caché dans l'image noire."; break;
      case 17: newRuleText = "Condition XVII : Saisie sécurisée (Article XVII). Saisir 'CONFIRMATION' malgré le décalage clavier."; break;
      case 18: newRuleText = "Condition XVIII : Calcul de solvabilité (Article XVIII). Saisir le résultat entier de l'équation."; break;
      case 19: newRuleText = "Condition XIX : Conversion historique (Article XIX). Convertir 100 USD en Francs (Taux 1999) et saisir l'entier."; break;
      case 20: newRuleText = "Condition XX : Géolocalisation (Article XX). Saisir le code OACI de l'aéroport principal mentionné."; break;
      case 21: newRuleText = "Condition XXI : Confirmation de juridiction (Article XXI). Identifier le pays décrit."; break;
      case 22: newRuleText = "Condition XXII : Protocole Turing (Article XXII). Calculer la somme des chiffres impairs."; break;
      case 23: newRuleText = "Condition XXIII : Validation Audio (Article XXIII). Saisir le titre de l'œuvre déposée."; break;
      case 24: newRuleText = "Condition XXIV : Cohérence Sémantique (Article XXIV). Identifier le concept liant les termes."; break;
      case 25: newRuleText = "Condition XXV : Résolution de conflit (Article XXV). Saisir le résultat de l'analyse logique."; break;
    }

    if (newRuleText) {
      setRules(prev => [...prev, { id: lvl, text: newRuleText, status: 'pending', attempt: 0 }]);
    }
  };

  return (
    <main className="h-screen w-screen overflow-hidden bg-[#F3F4F6] font-sans text-gray-800 flex flex-col">
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm shrink-0">
        <div className="w-1/3"><Logo /></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center w-full max-w-lg">
           <FleeingTitle />
        </div>
        <div className="w-1/3 flex justify-end">
           <div className="text-xs font-mono text-gray-400 border border-gray-200 px-2 py-1 rounded">
             SECURE_CONNECTION_V{level}.0
           </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-6 pb-12 overflow-hidden">
        <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden border border-gray-300 flex flex-col relative h-full max-h-[85vh]">
          
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2 sticky top-0 z-10 shrink-0 select-none">
             <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
            </div>
            <span className="ml-3 text-xs font-mono text-gray-500">
              terms_of_service_rev_{level}_final.pdf
            </span>
          </div>

          <div ref={docRef} className="overflow-y-auto h-full p-12 scroll-smooth">
            <div className="text-gray-900 font-serif text-[16px] leading-relaxed select-text max-w-3xl mx-auto">
              {CONTENT_HEADER}
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
              {CONTENT_ART_22}
              {CONTENT_ART_23}
              {CONTENT_ART_24}
              {CONTENT_ART_25}
              {CONTENT_ART_26}
              {CONTENT_ART_27}
              {CONTENT_ART_28}
              {CONTENT_ART_29}
              {CONTENT_ART_30}
            </div>

            <hr className="border-t-4 border-gray-200 my-12" />

            <div className="pb-12 max-w-3xl mx-auto">
               <ActionPanel 
                  level={level}
                  inputValue={inputValue} 
                  setInputValue={setInputValue} 
                  triggerError={() => {}}
                />
                
                <ControlBar 
                  rules={rules} 
                  level={level}
                  validateLevel={validateLevel}
                  buttonText={buttonText}
                />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}