import React from 'react';
import { useState, useEffect } from 'react';

// --- STYLES GLOBAUX ---
const TITLE_STYLE = "font-bold text-xl uppercase mt-16 mb-6 text-gray-900 border-b-2 border-black pb-2 font-serif tracking-tight";
const TEXT_STYLE = "text-[15px] text-gray-800 text-justify leading-relaxed font-serif";
const SUB_TITLE = "font-bold text-gray-900 mr-2";

export const ContentHeader = () => {
  const [currentDate, setCurrentDate] = useState("JJ/MM/AAAA");

  useEffect(() => {
    // Calcul de la date du jour côté client uniquement
    const now = new Date();
    const formatted = now.toLocaleDateString('fr-FR', {
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric'
    });
    setCurrentDate(formatted);
  }, []);

  return (
    <div className="mb-16 pb-8 border-b-4 border-gray-900">
      
      {/* LIGNE SUPÉRIEURE */}
      <div className="flex justify-end items-start mb-8">

        <div className="flex flex-col items-center">
          <div className="flex h-8 gap-0.5">
            {[...Array(25)].map((_, i) => (
              <div key={i} className={`bg-black ${Math.random() > 0.5 ? 'w-0.5' : 'w-1'}`}></div>
            ))}
          </div>
          <span className="text-[9px] font-mono mt-1 text-gray-500 tracking-widest">
            REF: 8842-XB-99 // FR
          </span>
        </div>
      </div>

      {/* TITRE PRINCIPAL */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-2 font-serif text-gray-900">
          Conditions Générales
        </h1>
        <h2 className="text-xl font-medium uppercase tracking-[0.2em] font-serif text-gray-600">
          d'Utilisation du Service
        </h2>
      </div>

      {/* TABLEAU DE MÉTADONNÉES */}
      <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-900 text-[10px] md:text-xs font-mono bg-white">
        
        <div className="border-b md:border-b-0 md:border-r border-gray-900 p-2 flex flex-col">
          <span className="text-gray-500 uppercase font-bold mb-1">Référence</span>
          <span className="font-bold text-gray-900">CGS-2024-REV-FINAL-V3</span>
        </div>

        {/* C'est ICI que la date s'affiche dynamiquement */}
        <div className="border-b md:border-b-0 md:border-r border-gray-900 p-2 flex flex-col">
          <span className="text-gray-500 uppercase font-bold mb-1">Date d'application</span>
          <span className="font-bold text-gray-900">{currentDate} (00:00 GMT)</span>
        </div>
      </div>

      {/* PRÉAMBULE */}
      <div className="mt-8 mb-12 p-6 bg-gray-50 border-l-4 border-gray-900 text-sm text-gray-800 text-justify font-serif shadow-sm leading-relaxed">
        <strong className="block mb-2 font-bold uppercase text-xs tracking-wider text-gray-500">
          Préambule
        </strong>
        L'utilisation des services de la plateforme (ci-après "l'Opérateur") vaut acceptation pleine, entière et sans réserve des présentes conditions. Le présent document constitue l'intégralité de l'accord synallagmatique entre les parties et annule tout engagement antérieur, écrit ou oral. L'Utilisateur déclare sur l'honneur disposer de la pleine capacité juridique, mentale et technique nécessaire à la compréhension de ce document.
      </div>
    </div>
  );
};

// 1. Article I (FILLER - Définitions)
export const CONTENT_ART_1 = (
  <>
    <h3 className={TITLE_STYLE}>Article I. Définitions et Interprétation</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art I.1. Terminologie.</span>
        Aux fins des présentes, les termes suivants, qu'ils soient utilisés au singulier ou au pluriel, auront la signification définie ci-après. "Service" désigne l'infrastructure numérique. "Anomalie" désigne tout comportement divergent du système.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art I.2. Hiérarchie des normes.</span>
        En cas de contradiction entre les présentes Conditions Générales et des Conditions Particulières éventuelles, ces dernières prévaudront. Les annexes techniques font partie intégrante du périmètre contractuel.
      </p>
    </div>
  </>
);

// 2. Article II (MISSION 5 : Date normale à convertir en Romain)
export const CONTENT_ART_2 = (
  <>
    <h3 className={TITLE_STYLE}>Article II. Durée et Entrée en Vigueur</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art II.1. Durée.</span>
        Le présent Contrat est conclu pour une durée indéterminée. Il entre en vigueur dès la connexion de l'Utilisateur au serveur.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art II.2. Clause de Rétroactivité.</span>
        Compte tenu de la nature perpétuelle des engagements moraux ici souscrits, les parties conviennent expressément, à titre de convention de preuve, que la date d'effet juridique est fixée rétroactivement au 14 juillet 1789, marquant l'avènement des droits fondamentaux régissant cet accord.
      </p>
    </div>
  </>
);

// 3. Article III (MISSION 21 : Pays "Grèce")
export const CONTENT_ART_3 = (
  <>
    <h3 className={TITLE_STYLE}>Article III. Territorialité et Restrictions</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art III.1. Zone de Service.</span>
        L'accès aux infrastructures critiques est strictement limité aux utilisateurs résidant physiquement dans la juridiction principale de l'Opérateur.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art III.2. Description Géographique.</span>
        Cette juridiction correspond à la péninsule méridionale des Balkans, bordée par les mers Égée et Ionienne, caractérisée par une fragmentation insulaire complexe et reconnue universellement comme le berceau historique de la démocratie occidentale.
      </p>
    </div>
  </>
);

// 4. Article IV (MISSION 1 : Faute "cadre constitutionnelle")
export const CONTENT_ART_4 = (
  <>
    <h3 className={TITLE_STYLE}>Article IV. Conformité Légale</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art IV.1. Respect des Lois.</span>
        L'Utilisateur s'interdit d'utiliser le Service pour stocker ou transmettre des contenus illicites, diffamatoires ou contrefaisants.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art IV.2. Responsabilité Civique.</span>
        Il appartient à l'Utilisateur de vérifier, sous sa responsabilité exclusive, que son utilisation du Service ne contrevient à aucune disposition d'ordre public ni au cadre constitutionnelle applicable sur son territoire de résidence fiscale. L'Opérateur décline toute responsabilité en cas de violation.
      </p>
    </div>
  </>
);

// 5. Article V (MISSION 10 : Hex Color #0D0D0D)
export const CONTENT_ART_5 = (
  <>
    {/* LE PIÈGE : Couleur du titre légèrement différente du noir standard */}
    <h3 style={{ color: '#0D0D0D' }} className="font-bold text-xl uppercase mt-16 mb-6 border-b-2 border-black pb-2 font-serif tracking-tight">
      Article V. Propriété Intellectuelle
    </h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art V.1. Droits d'auteur.</span>
        L'ensemble des éléments constituant le site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc.) ainsi que le site lui-même, relèvent des législations internationales sur le droit d'auteur.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art V.2. Licence.</span>
        L'Opérateur concède une licence limitée, non-exclusive et révocable.
      </p>
    </div>
  </>
);

// 6. Article VI (MISSION 19 : Devise 115 USD -> FRF 1975, SANS LE TAUX)
export const CONTENT_ART_6 = (
  <>
    <h3 className={TITLE_STYLE}>Article VI. Limitation de Garantie</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art VI.1. Plafond d'Indemnisation.</span>
        Dans toute la mesure permise par la loi applicable, la responsabilité totale de l'Opérateur, toutes causes confondues, ne pourra excéder un montant forfaitaire de <strong>115 USD (Dollars Américains)</strong>.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art VI.2. Conversion Historique.</span>
        Pour les besoins comptables, cette somme doit être convertie en <strong>Francs Français (FRF)</strong>, sur la base du taux de chancellerie historique officiel constaté le 8 juillet 1975.
      </p>
    </div>
  </>
);

// 7. Article VII (MISSION 15 : Overlay ROUGE Confidentiel)
export const CONTENT_ART_7 = (
  <>
    <h3 className={TITLE_STYLE}>Article VII. Politique de Confidentialité</h3>
    <div className={`${TEXT_STYLE} relative min-h-30`}>
      <div className="absolute inset-0 z-0 select-none">
        <p className="mb-4">
          <span className={SUB_TITLE}>Art VII.1. Traceurs.</span>
          Nous utilisons des cookies de session. En cas de dysfonctionnement de l'interface de recueil du consentement (masquage involontaire), la validation manuelle de cette section s'effectue via la référence d'audit interne : <strong>PROCEDURE_RGPD</strong>.
        </p>
      </div>
      
      {/* ÉLÉMENT BLOQUANT ROUGE - CONFIDENTIEL */}
      <div id="element-to-delete" className="absolute -inset-2 z-10 bg-red-50 border-2 border-red-600 flex flex-col items-center justify-center text-center p-4 shadow-md">
        <div className="font-bold text-red-900 text-sm uppercase tracking-widest mb-1">⚠ CONFIDENTIEL ⚠</div>
        <p className="text-xs text-red-800 font-mono">
          [SECTION RÉSERVÉE - ACCÈS RESTREINT RGPD NIVEAU 5]
        </p>
      </div>
    </div>
  </>
);

// 8. Article VIII (MISSION 7 : Mot invisible FACULTATIF isolé après le point)
export const CONTENT_ART_8 = (
  <>
    <h3 className={TITLE_STYLE}>Article VIII. Données Personnelles</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art VIII.1. Typologie.</span>
        L'Opérateur collecte les catégories de données suivantes : État civil, Coordonnées bancaires, Adresse IP, Logs de connexion.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art VIII.2. Caractère de la collecte.</span>
        La fourniture des données marquées d'un astérisque est obligatoire pour l'exécution du contrat. La fourniture des autres champs mentionnés dans le formulaire d'inscription est optionnelle.
        {/* PIÈGE : Blanc sur blanc, après le point final */}
        <span className="text-white select-text selection:bg-black selection:text-white"> FACULTATIVE</span>
      </p>
    </div>
  </>
);

// 9. Article IX (MISSION 12 : Acrostiche REFUS avec LISTE)
export const CONTENT_ART_9 = (
  <>
    <h3 className={TITLE_STYLE}>Article IX. Motifs de Suspension</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art IX.1. Révocation.</span>
        L'Opérateur se réserve le droit de suspendre l'accès au Service sans préavis dans les cas limitatifs suivants :
      </p>
      <ul className="list-disc pl-5 space-y-1 text-gray-800">
        <li>Risques avérés pour la stabilité du réseau backbone.</li>
        <li>Envoi massif de courriers électroniques non sollicités (Spam).</li>
        <li>Fraude aux moyens de paiement ou contestation abusive.</li>
        <li>Usurpation d'identité ou usage de faux documents.</li>
        <li>Sabotage logique ou physique des installations serveur.</li>
      </ul>
    </div>
  </>
);

// 10. Article X (MISSION 17 : Clavier Cursed CONFIRMATION)
export const CONTENT_ART_10 = (
  <>
    <h3 className={TITLE_STYLE}>Article X. Sécurité des Accès</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art X.1. Identifiants.</span>
        L'Utilisateur est seul responsable de la préservation et de la confidentialité de ses identifiants.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art X.2. Protocole de Saisie.</span>
        Pour des raisons de sécurité biométrique, la saisie du mot de passe maître est soumise à un décalage matériel (Hardware Shift +1). L'Utilisateur doit être en mesure de saisir la chaîne de contrôle <strong>"CONFIRMATION"</strong> en compensant manuellement la reconfiguration de son périphérique d'entrée.
      </p>
    </div>
  </>
);

// 11. Article XI (MISSION 13 : Lipogramme - Pas de lettre 'B')
// Texte étendu, technique et pompeux, évitant soigneusement la lettre interdite.
export const CONTENT_ART_11 = (
  <>
    <h3 className={TITLE_STYLE}>Article XI. Gestion des Aléas Techniques</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XI.1. Intégrité du Signal.</span>
        L'Utilisateur admet que la structure du réseau hertzien et filaire impose des contraintes physiques majeures. La gestion des ondes, du Wifi et du stockage de masse (Kilo-octets ou Méga-octets) exige une vigilance constante du système central. Il est vital de protéger vos terminaux contre toute intrusion extérieure malveillante.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XI.2. Clause de non-garantie.</span>
        En outre, nous ne saurions assurer une immunité totale face aux virus ou aux vers informatiques. Toute perte de données résultant d'une négligence lors de la configuration initiale relève de la faute exclusive du client, qui doit veiller à la sûreté de son matériel.
      </p>
    </div>
  </>
);

// 12. Article XII (MISSION 3 : Compteur de mots = 25)
// Beaucoup de blabla juridique avant la phrase clé.
export const CONTENT_ART_12 = (
  <>
    <h3 className={TITLE_STYLE}>Article XII. Force Majeure et Résiliation</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XII.1. Définition et Périmètre.</span>
        Sont considérés comme cas de force majeure ou cas fortuits les événements indépendants de la volonté des parties, qu'elles ne pouvaient raisonnablement être tenues de prévoir, et qu'elles ne pouvaient raisonnablement éviter ou surmonter, dans la mesure où leur survenance rend totalement impossible l'exécution des obligations.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XII.2. Condition Suspensive.</span>
        Nonobstant les dispositions précédentes, la validité de l'accord cadre est conditionnée par la lecture et l'acceptation expresse de la phrase interrogative suivante :
      </p>
      {/* Phrase : "L'utilisateur s'engage-t-il à respecter l'ensemble des sous-clauses, c'est-à-dire celles d'aujourd'hui et d'avant-hier ?"
          Compte (si apostrophe/tiret = séparateur) : 25 mots.
      */}
      <div className="pl-6 border-l-[3px] border-gray-400 italic text-gray-900 text-sm my-4 font-serif select-none py-2 bg-gray-50">
        "L'utilisateur reconnaît-il l'obligation d'appliquer l'intégralité des sous-clauses dites “en-vigueur”, d'aujourd'hui, d'avant-hier et d'ores-et-déjà existantes ?"
      </div>
      <p className="mt-4">
        Toute réponse négative ou ambiguë à cette interrogation rhétorique entraînera la nullité immédiate du présent contrat.
      </p>
    </div>
  </>
);

// 13. Article XIII (MISSION 18 : Système d'équations -> X=3)
// Contexte financier lourd.
export const CONTENT_ART_13 = (
  <>
    <h3 className={TITLE_STYLE}>Article XIII. Intérêts Moratoires et Pénalités</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XIII.1. Défaillance.</span>
        Sans préjudice d'éventuels dommages et intérêts, le défaut de paiement de tout ou partie des sommes dues à l'échéance entraînera de plein droit, et sans nécessité de mise en demeure préalable, la facturation d'intérêts de retard.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XIII.2. Modèle Économétrique.</span>
        Le taux annuel applicable (dénommé coefficient X) est indexé sur la volatilité du marché interbancaire. Il est déterminé par la résolution du système d'équations non-linéaires suivant (où X, Y et Z sont des variables entières positives) :
      </p>
      <div className="bg-white border border-gray-300 p-6 font-serif text-base text-gray-900 my-6 shadow-sm w-fit mx-auto min-w-50">
        <ul className="space-y-2 text-center">
          <li>Y = 2X - 2</li>
          <li>Z = X + Y + 1</li>
          <li>12X - 5Y + 2Z = 32</li>
        </ul>
      </div>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XIII.3. Recouvrement.</span>
        L'Utilisateur devra s'acquitter de l'indemnité forfaitaire pour frais de recouvrement fixée par décret, en sus du principal.
      </p>
    </div>
  </>
);

// 14. Article XIV (MISSION 24 : Cémantix "DROIT" / "JUSTICE")
// Niveau plus difficile : Concepts abstraits et symboles uniquement.
export const CONTENT_ART_14 = (
  <>
    <h3 className={TITLE_STYLE}>Article XIV. Compétence Matérielle et Sémantique</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XIV.1. Champ lexical.</span>
        Le présent contrat est soumis à une stricte interprétation terminologique. Afin de valider sa compréhension du périmètre, l'Utilisateur doit identifier le <strong>Concept Fondamental</strong> (ou Principe Recteur) qui relie logiquement l'ensemble des notions abstraites listées ci-après :
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-800 border-y-2 border-gray-100 py-6 my-4 px-4 bg-gray-50/50">
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Norme</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Sanction</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Équité</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Balance</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Obligation</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Preuve</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Litige</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Rectitude</span>
      </div>
      <p className="mb-4">
        Ce terme générique constitue la clé de voûte de l'architecture sociale et contractuelle ici présente.
      </p>
    </div>
  </>
);

// Texte très sérieux sur l'arbitrage.
export const CONTENT_ART_15 = (
  <>
    <h3 className={TITLE_STYLE}>Article XV. Procédure de Résolution Amiable</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XV.1. Médiation Préalable.</span>
        En cas de différend relatif à la validité, l'interprétation ou l'exécution du présent contrat, les parties s'engagent à coopérer avec diligence et bonne foi en vue de trouver une solution amiable. Elles désigneront d'un commun accord un expert indépendant.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XV.2. Clause de Déchéance.</span>
        Le médiateur se réserve le droit de mettre fin aux pourparlers si l'une des parties fait preuve d'une mauvaise foi caractérisée, adopte une posture d'obstruction systématique, ou manifeste un comportement que l'expert qualifierait d'
        {/* PIÈGE : Mot ridicule avec police ridicule au milieu d'une phrase sérieuse */}
        <span style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }} className="text-xs mx-1 font-bold text-gray-900">
          UBUESQUE
        </span>
        incompatible avec la sérénité et le professionnalisme attendus lors des débats juridiques.
      </p>
    </div>
  </>
);

// 16. Article XVI (MISSION 22 : Suite R-R-S-L-I-N-[T])
// AUCUN INDICE. Le joueur doit deviner seul que c'est la dernière lettre des mois.
export const CONTENT_ART_16 = (
  <>
    <h3 className={TITLE_STYLE}>Article XVI. Calendrier de Facturation et Cycles</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XVI.1. Périodicité Mensuelle.</span>
        Sauf accord spécifique contraire, les factures sont émises et exigibles mensuellement, à date anniversaire. L'exercice comptable suit le calendrier grégorien standard.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XVI.2. Nomenclature Cryptographique.</span>
        Afin de garantir l'anonymisation des périodes fiscales, les mois d'exercice sont remplacés par un index alphabétique de référence. Veuillez déduire et saisir le caractère manquant pour valider l'ouverture du prochain cycle :
      </p>
      <div className="border-2 border-gray-800 p-4 text-center font-mono text-xl tracking-[0.5em] my-6 w-2/3 mx-auto bg-gray-50 text-gray-900 font-bold">
        R - R - S - L - I - N - [?]
      </div>
      <p className="mb-4">
        Cette codification est impérative pour tout échange avec le service comptabilité.
      </p>
    </div>
  </>
);

// 17. Article XVII (FILLER - Maintenance)
// Texte rallongé.
export const CONTENT_ART_17 = (
  <>
    <h3 className={TITLE_STYLE}>Article XVII. Interruption Technique et Maintenance</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XVII.1. Plages de Maintenance.</span>
        L'Opérateur se réserve la faculté d'interrompre momentanément l'accès au serveur pour effectuer des mises à jour logicielles, des correctifs de sécurité ou des évolutions d'infrastructure. Ces interventions sont, dans la mesure du possible, planifiées sur des créneaux de faible affluence (généralement le dimanche entre 02h00 et 04h00 GMT).
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XVII.2. Sauvegarde des Données.</span>
        L'Opérateur ne saurait être tenu responsable de la perte de données survenant durant ces fenêtres d'intervention. Il appartient à l'Utilisateur d'effectuer des sauvegardes régulières et préalables.
      </p>
    </div>
  </>
);

// 18. Article XVIII (MISSION 11 : Ordre Logique B-D-C-A)
export const CONTENT_ART_18 = (
  <>
    <h3 className={TITLE_STYLE}>Article XVIII. Indemnisation et Continuité de Service</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XVIII.1. Modalités d'application.</span>
        En cas d'indisponibilité du service excédant les niveaux de garantie (SLA), la procédure d'indemnisation s'applique. Cependant, en raison d'un incident de fusion de bases de données, les clauses contractuelles ci-dessous ont perdu leur ordonnancement chronologique.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XVIII.2. Clauses en vrac.</span>
        L'application des pénalités suit la logique contractuelle définie par les segments suivants (à remettre dans l'ordre de la chaîne de causalité) :
      </p>
      <div className="space-y-3 pl-6 border-l-4 border-gray-200 text-gray-800 bg-gray-50/30 p-4 rounded-r-md font-serif text-sm">
        <p className="leading-snug">
          <strong>[A]</strong> "En conséquence de quoi, aucune indemnité ne sera versée, quelle que soit la nature du préjudice allégué."
        </p>
        <p className="leading-snug">
          <strong>[B]</strong> "L'Utilisateur accepte par principe la possibilité d'une interruption temporaire du service inhérente à la technique."
        </p>
        <p className="leading-snug">
          <strong>[C]</strong> "Et ce, y compris dans l'hypothèse critique où cette interruption excèderait une durée de trente (30) jours."
        </p>
        <p className="leading-snug">
          <strong>[D]</strong> "Cette tolérance contractuelle s'applique sans réserve, nonobstant l'absence de notification préalable."
        </p>
      </div>
      <p className="mt-4">
        La reconstruction de la chaîne de causalité est un prérequis administratif.
      </p>
    </div>
  </>
);

// 19. Article XIX (FILLER - Modifications)
// Texte rallongé.
export const CONTENT_ART_19 = (
  <>
    <h3 className={TITLE_STYLE}>Article XIX. Évolution des Conditions Générales</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XIX.1. Amendements.</span>
        L'Opérateur se réserve le droit d'amender, de modifier ou de mettre à jour les présentes conditions à tout moment et sans préavis, notamment pour les adapter aux évolutions législatives, réglementaires ou techniques.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XIX.2. Opposabilité et Refus.</span>
        Les nouvelles conditions sont opposables à l'Utilisateur dès leur mise en ligne. L'Utilisateur n'acceptant pas les modifications contractuelles doit cesser d'utiliser le Service et résilier son compte dans un délai de 48 heures suivant la publication.
      </p>
    </div>
  </>
);

// 20. Article XX (FILLER - Nullité)
// Texte rallongé.
export const CONTENT_ART_20 = (
  <>
    <h3 className={TITLE_STYLE}>Article XX. Stipulations Diverses et Divisibilité</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XX.1. Non-validité partielle.</span>
        Si une ou plusieurs stipulations du présent contrat sont tenues pour non valides ou déclarées comme telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres stipulations garderont toute leur force et leur portée obligatoire.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XX.2. Intitulés.</span>
        Les titres et sous-titres des articles ne sont donnés qu'à titre indicatif pour la commodité de la lecture et n'ont pas de valeur contractuelle autonome.
      </p>
    </div>
  </>
);

// data/content.tsx

export const CONTENT_ART_21 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXI. Pièces Justificatives</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXI.1. Dossier Administratif.</span>
        La validation définitive du compte requiert la transmission des pièces suivantes en cours de validité :
      </p>
      <ul className="list-disc pl-5 space-y-1 text-gray-800 text-sm">
        <li>Copie d'une pièce d'identité (CNI ou Passeport).</li>
        <li>Relevé d'Identité Bancaire (RIB) au format SEPA.</li>
        <li>Justificatif de domicile de moins de 3 mois.</li>
        <li>Extrait K-Bis (pour les professionnels).</li>
        <li>Carte électorale (Dernier scrutin).</li>
        <li>Attestation de vigilance URSSAF.</li>
      </ul>
      <p className="mt-4">
        <span className={SUB_TITLE}>Art XXI.2. Complétude.</span>
        Tout dossier incluant une pièce dépourvue de photographie biométrique ou non recevable sera rejeté.
      </p>
    </div>
  </>
);

// 22. Article XXII (MISSION 22 : Nombres Premiers - STYLE CHECKBOX)
export const InteractiveArticle22 = ({ setInputValue }: { setInputValue: (v: string) => void }) => {
  // État des cases cochées
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  // Liste des nombres affichés (1 à 12)
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Gestion du clic CORRIGÉE
  const toggleNumber = (num: number) => {
    // 1. On calcule la nouvelle sélection basé sur l'état actuel 'selectedNumbers'
    let newSelection;
    
    if (selectedNumbers.includes(num)) {
      // Si déjà coché, on l'enlève
      newSelection = selectedNumbers.filter(n => n !== num);
    } else {
      // Sinon on l'ajoute et on trie
      newSelection = [...selectedNumbers, num].sort((a, b) => a - b);
    }

    // 2. On met à jour l'affichage local (les cases cochées)
    setSelectedNumbers(newSelection);

    // 3. On envoie la valeur au parent (Home) pour la validation
    // C'est maintenant fait en dehors du callback de mise à jour, donc c'est valide.
    setInputValue(newSelection.join(","));
  };

  return (
    <>
      <h3 className="font-bold text-xl uppercase mt-16 mb-6 text-gray-900 border-b-2 border-black pb-2 font-serif tracking-tight">
        Article XXII. Modulation Tarifaire
      </h3>
      {/* ... Le reste du JSX ne change pas ... */}
      <div className="text-[15px] text-gray-800 text-justify leading-relaxed font-serif">
        <p className="mb-4">
          <span className="font-bold text-gray-900 mr-2">Art XXII.1. Algorithme de Remise.</span>
          L'application du tarif réduit est conditionnée par un test de sélection arithmétique.
        </p>
        <p className="mb-4">
          <span className="font-bold text-gray-900 mr-2">Art XXII.2. Matrice de Sélection.</span>
          Veuillez activer, dans la grille ci-dessous, <strong>exclusivement</strong> les options correspondant à des entiers naturels supérieurs à 1 n'admettant exactement que deux diviseurs entiers et positifs (1 et eux-mêmes).
        </p>
        
        {/* FORMULAIRE STYLE PAPIER */}
        <div className="my-6 p-4 border border-gray-400 bg-white">
          <div className="border-b border-gray-300 pb-2 mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
            Annexe B - Options Tarifaires
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
            {numbers.map((num) => (
              <label 
                key={num} 
                className="flex items-center space-x-3 cursor-pointer group select-none"
              >
                {/* La vraie Checkbox */}
                <input 
                  type="checkbox" 
                  className="w-5 h-5 border-2 border-gray-400 rounded-sm accent-black cursor-pointer"
                  checked={selectedNumbers.includes(num)}
                  onChange={() => toggleNumber(num)}
                />
                {/* Le numéro */}
                <span className={`font-mono text-base group-hover:text-black ${selectedNumbers.includes(num) ? 'font-bold text-black' : 'text-gray-600'}`}>
                  {num < 10 ? `0${num}` : num}
                </span>
              </label>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 italic">
          Toute sélection incluant une valeur composite ou unitaire invalide l'offre.
        </p>
      </div>
    </>
  );
};

// 23. Article XXIII (FILLER - Confidentialité)
export const CONTENT_ART_23 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXIII. Confidentialité</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXIII.1. Engagement.</span>
        Chaque partie s'engage à conserver le secret le plus absolu sur les informations techniques, commerciales ou financières de l'autre partie dont elle aurait eu connaissance à l'occasion de l'exécution du contrat.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXIII.2. Durée.</span>
        Cette obligation de confidentialité perdure pendant une durée de cinq (5) ans après la fin des relations commerciales.
      </p>
    </div>
  </>
);

// 24. Article XXIV (MISSION 4 : Texte 1px, non-sélectionnable)
export const CONTENT_ART_24 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXIV. Mentions Légales</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXIV.1. Éditeur.</span>
        Le Service est édité par LegalTech Solutions, SAS au capital de 100.000 €.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXIV.2. Hébergement.</span>
        Les données sont hébergées sur des serveurs sécurisés situés en Union Européenne. Directeur de la publication : M. Admin.
        {/* PIÈGE : 1px, non sélectionnable, non copiable */}
        <span className="text-[2px] text-gray-300 ml-1 select-none pointer-events-none">
          Je certifie avoir une excellente vue.
        </span>
      </p>
    </div>
  </>
);

// 25. Article XXV (MISSION 23 : Musique "LETTRE A ELISE")
// SVG Ajusté pour Mi-Re#-Mi...
export const CONTENT_ART_25 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXV. Propriété Sonore</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXV.1. Jingle.</span>
        L'identité sonore de l'attente téléphonique est une œuvre protégée. L'Utilisateur reconnaît la séquence mélodique suivante comme étant la propriété exclusive de l'Opérateur :
      </p>
      <div className="flex justify-center my-6 border border-gray-300 p-6 bg-white shadow-sm">
        {/* SVG : Lettre à Élise (Mi - Ré# - Mi - Ré# - Mi - Si - Ré - Do - La) */}
        {/* Position Y : Ligne du haut = 10, Ligne du bas = 50. */}
        {/* Mi (aigu) est dans le 4e interligne (y=15 approx) */}
        {/* Ré# est sur la 4e ligne (y=20 approx) */}
        <svg width="300" height="60" viewBox="0 0 300 60">
           {/* Portée */}
           <line x1="0" y1="10" x2="300" y2="10" stroke="#999" strokeWidth="1"/>
           <line x1="0" y1="20" x2="300" y2="20" stroke="#999" strokeWidth="1"/>
           <line x1="0" y1="30" x2="300" y2="30" stroke="#999" strokeWidth="1"/>
           <line x1="0" y1="40" x2="300" y2="40" stroke="#999" strokeWidth="1"/>
           <line x1="0" y1="50" x2="300" y2="50" stroke="#999" strokeWidth="1"/>
           
           {/* Notes */}
           {/* MI (4e interligne) */} <circle cx="30" cy="15" r="3.5" fill="black"/>
           {/* RE# (4e ligne) */}     <circle cx="60" cy="20" r="3.5" fill="black"/> <text x="50" y="24" fontSize="12" fontFamily="serif">♯</text>
           {/* MI */}                 <circle cx="90" cy="15" r="3.5" fill="black"/>
           {/* RE# */}                <circle cx="120" cy="20" r="3.5" fill="black"/> <text x="110" y="24" fontSize="12" fontFamily="serif">♯</text>
           {/* MI */}                 <circle cx="150" cy="15" r="3.5" fill="black"/>
           {/* SI (3e ligne) */}      <circle cx="180" cy="30" r="3.5" fill="black"/>
           {/* RE (nat) (4e ligne) */} <circle cx="210" cy="20" r="3.5" fill="black"/> <text x="200" y="24" fontSize="12" fontFamily="serif">♮</text>
           {/* DO (3e interligne) */} <circle cx="240" cy="25" r="3.5" fill="black"/>
           {/* LA (2e interligne) */} <circle cx="270" cy="35" r="3.5" fill="black"/>
        </svg>
      </div>
      <p className="text-xs text-gray-500 text-center italic mb-4">
        Fig 25.A - Séquence harmonique protégée.
      </p>
    </div>
  </>
);

// 26. Article XXVI (MISSION 16 : Image "CONFIDENTIEL")
export const CONTENT_ART_26 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXVI. Niveaux de Classification</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXVI.1. Habilitation Défense.</span>
        L'accès aux infrastructures souveraines nécessite une accréditation de niveau 3. Le niveau requis est indiqué sur la vignette de sécurité ci-dessous (Zone de marquage noire).
      </p>
      <div className="flex justify-center my-6">
        <img 
          src="/assets/secret_stamp.jpg" 
          alt="Classification"
          className="border border-gray-900 shadow-sm w-64 select-none"
          draggable={false}
          onContextMenu={(e) => e.stopPropagation()} 
        />
      </div>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXVI.2. Contrôle.</span>
        L'Utilisateur doit confirmer la mention exacte figurant sur le sceau pour valider sa session.
      </p>
    </div>
  </>
);

// 27. Article XXVII (MISSION 25 : Labyrinthe Logique -> "ACCORD")
export const CONTENT_ART_27 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXVII. Consentement Réciproque et Paradoxal</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXVII.1. Test de Logique Booléenne.</span>
        La validation finale de ce dossier implique une capacité de discernement cognitif certifiée. L'Utilisateur est invité à analyser l'instruction conditionnelle suivante pour déterminer l'unique mention autorisée :
      </p>
      
      {/* LE TEXTE INFERNAL - Version "Mélangeur de mots" */}
      <div className="bg-gray-50 border-l-4 border-gray-900 p-6 font-medium my-4 leading-loose shadow-inner text-sm text-justify font-serif text-gray-900 select-none">
        "Il est strictement défendu de saisir la mention ACCORD, à moins qu'il ne soit établi que vous ne rejetez pas l'idée de ne pas refuser le REJET. 
        <br/><br/>
        Toutefois, si vous n'êtes pas sans ignorer que le REFUS de ne pas être en désaccord avec l'ACCORD constitue une double négation du REJET, alors il vous est interdit de ne pas écrire le contraire de ce que vous auriez refusé d'admettre en cas d'absence de REFUS.
        <br/><br/>
        Dans l'hypothèse où cette chaîne de causalité n'invalide pas votre volonté de ne pas rejeter l'adhésion, veuillez inscrire le terme qui survit à cette élimination logique."
      </div>
      
      <p className="mb-4 text-xs text-gray-500 italic">
        Avertissement : Une erreur de calcul logique entraînera la nullité du contrat pour vice du consentement.
      </p>
    </div>
  </>
);

// 28. Article XXVIII (Erreur XXVIII.3)
export const CONTENT_ART_28 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXVIII. Clause Résolutoire</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXVIII.1. Manquement.</span>
        En cas d'inexécution par l'une des parties de ses obligations, le contrat sera résolu de plein droit 15 jours après l'envoi d'une mise en demeure restée infructueuse.
      </p>
      {/* PIÈGE : Saut de numérotation direct à .3 */}
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXVIII.3. Effets.</span>
        La résolution entraîne la suspension immédiate des accès et la suppression définitive des données, sans préjudice des dommages et intérêts éventuels.
      </p>
    </div>
  </>
);

// 29. Article XXIX (MISSION 20 : Reykjavik -> BIKF)
export const CONTENT_ART_29 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXIX. Loi Applicable et Juridiction</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXIX.1. Droit local.</span>
        Le présent contrat est soumis aux lois de la République d'Islande.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXIX.2. Attribution de compétence.</span>
        Tout litige sera porté devant le tribunal de district de Reykjavik. Aux fins de signification, les parties élisent domicile au greffe situé dans la zone administrative de l'aéroport international de la capitale (Code OACI requis pour l'identification de la plateforme).
      </p>
    </div>
  </>
);

// 30. Article XXX (MISSION 9 : ROT47 format Licence Key)
export const CONTENT_ART_30 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXX. Signature Cryptographique</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXX.1. Empreinte.</span>
        L'intégrité du présent document est scellée par la clé de licence numérique suivante. Toute altération du code invalide le contrat.
      </p>
      <div className="font-mono text-sm text-gray-800 bg-gray-100 p-4 border-2 border-dashed border-gray-400 text-center tracking-widest font-bold my-6">
        ,rt#%xuxrp%0)d_h.
      </div>
    </div>
  </>
);