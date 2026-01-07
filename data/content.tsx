import React from 'react';

// --- STYLES GLOBAUX ---
const TITLE_STYLE = "font-bold text-xl uppercase mt-16 mb-6 text-gray-900 border-b-2 border-black pb-2 font-serif tracking-tight";
const TEXT_STYLE = "text-[15px] text-gray-800 text-justify leading-relaxed font-serif";
const SUB_TITLE = "font-bold text-gray-900 mr-2";

// 0. EN-TÊTE
export const CONTENT_HEADER = (
  <>
    <div className="text-center mb-20 pb-10 border-b-[5px] border-double border-gray-900">
      <h1 className="text-4xl font-black uppercase tracking-widest mb-4 font-serif text-gray-900">
        Conditions Générales de Service
      </h1>
      <div className="flex-col items-center gap-1 text-[11px] text-gray-600 uppercase tracking-widest font-mono border p-2 inline-block">
        <span>Réf. Juridique : CGS-2024-REV-FINAL</span>
        <span>Dernière mise à jour : 07/01/2026</span>
        <span>Classification : PUBLIC RESTREINT</span>
      </div>
    </div>

    <div className="mb-12 p-8 bg-gray-50 border-l-[6px] border-gray-900 text-sm text-gray-800 text-justify italic font-serif">
      <strong>PRÉAMBULE :</strong> L'utilisation des services de la plateforme (ci-après "l'Opérateur") vaut acceptation pleine et entière des présentes conditions. Le présent document constitue l'intégralité de l'accord entre les parties et annule tout engagement antérieur. L'Utilisateur déclare sur l'honneur disposer de la capacité juridique, mentale et technique nécessaire à la compréhension de ce document.
    </div>
  </>
);

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
      <div className="absolute inset-0 z-0">
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
        <span className="text-white select-text selection:bg-black selection:text-white"> FACULTATIF</span>
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
        Nonobstant les dispositions précédentes, la validité de l'accord cadre est conditionnée par la lecture et l'acceptation expresse de la phrase interrogative suivante (l'apostrophe et le trait d'union sont comptabilisés comme des séparateurs distincts) :
      </p>
      {/* Phrase : "L'utilisateur s'engage-t-il à respecter l'ensemble des sous-clauses, c'est-à-dire celles d'aujourd'hui et d'avant-hier ?"
          Compte (si apostrophe/tiret = séparateur) : 25 mots.
      */}
      <div className="pl-6 border-l-[3px] border-gray-400 italic text-gray-900 text-sm my-4 font-serif select-none py-2 bg-gray-50">
        "L'utilisateur s'engage-t-il à respecter l'ensemble des sous-clauses, c'est-à-dire celles d'aujourd'hui et d'avant-hier ?"
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
      <div className="bg-white border border-gray-300 p-6 font-serif text-base text-gray-900 my-6 shadow-sm w-fit mx-auto min-w-[200px]">
        <ul className="space-y-2 text-center">
          <li>X + Y + Z = 17</li>
          <li>X² - Y = 3</li>
          <li>Z - Y = 2</li>
        </ul>
      </div>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XIII.3. Recouvrement.</span>
        L'Utilisateur devra s'acquitter de l'indemnité forfaitaire pour frais de recouvrement fixée par décret, en sus du principal.
      </p>
    </div>
  </>
);

// 14. Article XIV (MISSION 24 : Cémantix "DROIT")
// Liste noyée dans un texte sur la compétence juridique.
export const CONTENT_ART_14 = (
  <>
    <h3 className={TITLE_STYLE}>Article XIV. Compétence Matérielle et Lexicale</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XIV.1. Domaine d'application.</span>
        Le présent contrat est soumis aux règles de l'art et aux usages de la profession. Afin d'éviter toute ambiguïté interprétative, l'Utilisateur reconnaît que l'ensemble des termes listés ci-après relève d'un unique <strong>Concept Fondamental</strong> (ou Hyperonyme Juridique) qu'il lui appartient d'identifier pour valider sa compréhension du périmètre :
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-800 border-y-2 border-gray-100 py-6 my-4 px-4 bg-gray-50/50">
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Tribunal de Grande Instance</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Juge d'Instruction</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Loi et Règlements</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Avocat à la Cour</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Magistrat du Siège</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Code Civil</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Constitution</span>
        <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Verdict Final</span>
      </div>
      <p className="mb-4">
        La maîtrise de ce champ sémantique est indispensable à la bonne exécution des prestations intellectuelles fournies.
      </p>
    </div>
  </>
);

// 15. Article XV (MISSION 6 : Mot "HURLUBERLU" en Comic Sans)
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
        <span style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }} className="text-md mx-1 font-bold text-gray-900">
          HURLUBERLU
        </span>
        incompatible avec la sérénité et le professionnalisme attendus lors des débats juridiques.
      </p>
    </div>
  </>
);

// 16. Article XVI (MISSION 22 : Suite Logique J-F-M-A-M-J-[J])
// Note supprimée, texte rallongé.
export const CONTENT_ART_16 = (
  <>
    <h3 className={TITLE_STYLE}>Article XVI. Calendrier de Facturation et Cycles</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XVI.1. Périodicité Mensuelle.</span>
        Sauf accord spécifique contraire, les factures sont émises et exigibles mensuellement, à date anniversaire. L'exercice comptable suit le calendrier grégorien standard.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XVI.2. Nomenclature Temporelle.</span>
        Afin de faciliter l'archivage et l'audit, les cycles de facturation sont identifiés par un code alphabétique unique dérivé de la séquence mensuelle usuelle. Veuillez compléter la série logique ci-dessous pour déterminer l'index du semestre suivant :
      </p>
      <div className="border-2 border-gray-800 p-4 text-center font-mono text-xl tracking-[0.5em] my-6 w-2/3 mx-auto bg-gray-50 text-gray-900 font-bold">
        J - F - M - A - M - J - [?]
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
// Liste présentée comme un texte continu mal formaté.
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
        L'application des pénalités suit la logique contractuelle définie par les segments suivants :
      </p>
      <div className="space-y-3 pl-6 border-l-4 border-gray-200 text-gray-800 bg-gray-50/30 p-4 rounded-r-md">
        <p className="leading-snug">[A] "En conséquence de quoi, et par dérogation, aucune indemnité ne sera versée pour le préjudice indirect ou immatériel."</p>
        <p className="leading-snug">[B] "L'Utilisateur accepte par principe la possibilité d'une interruption temporaire du service inhérente à la technique."</p>
        <p className="leading-snug">[C] "Si toutefois cette interruption excède une durée continue et ininterrompue de trente (30) jours ouvrés."</p>
        <p className="leading-snug">[D] "Toutefois, cette acceptation de principe ne vaut renonciation qu'aux dommages prévisibles et immédiats."</p>
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

// 21. Article XXI (MISSION 8 modifiée -> MISSION DOUBLON "LES")
// Une erreur de "doublon" (stuttering) est cachée : "les les".
export const CONTENT_ART_21 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXI. Conformité Réglementaire</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXI.1. Normes ISO.</span>
        L'infrastructure est auditée annuellement selon les standards ISO 27001. L'Utilisateur s'engage à respecter scrupuleusement les 
        {/* PIÈGE : Le mot "les" est écrit deux fois */}
        &nbsp;les protocoles de sécurité définis dans l'annexe technique, sous peine de résiliation immédiate.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXI.2. Audit.</span>
        L'Opérateur peut mandater un expert pour vérifier la conformité des installations du Client.
      </p>
    </div>
  </>
);

// 22. Article XXII (MISSION 14 : Nombres Premiers)
export const CONTENT_ART_22 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXII. Conditions Tarifaires Spéciales</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXII.1. Éligibilité.</span>
        Des conditions préférentielles ("Tarif Partenaire") sont applicables selon une segmentation algorithmique.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXII.2. Sélection.</span>
        Pour bénéficier de la remise de 15%, l'Utilisateur doit cocher, dans le formulaire joint, exclusivement les cases dont la valeur numérique correspond à un <strong>nombre premier</strong> (entier naturel supérieur à 1 n'admettant que deux diviseurs : 1 et lui-même). Toute erreur de sélection entraîne la facturation au prix fort.
      </p>
    </div>
  </>
);

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
        <span className="text-[1px] text-gray-200 ml-1 select-none pointer-events-none">
          je certifie avoir une très bonne vue
        </span>
      </p>
    </div>
  </>
);

// 25. Article XXV (MISSION 23 : Musique "LETTRE A ELISE")
export const CONTENT_ART_25 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXV. Propriété Sonore</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXV.1. Jingle.</span>
        L'identité sonore de l'attente téléphonique est une œuvre protégée. L'Utilisateur reconnaît la séquence mélodique suivante comme étant la propriété exclusive de l'Opérateur :
      </p>
      <div className="flex justify-center my-6 border border-gray-300 p-4 bg-white shadow-sm">
        {/* SVG : Lettre à Élise (Mi - Ré# - Mi - Ré# - Mi - Si - Ré - Do - La) */}
        <svg width="300" height="70" viewBox="0 0 300 70">
           {/* Portée */}
           <line x1="0" y1="10" x2="300" y2="10" stroke="#999" strokeWidth="1"/>
           <line x1="0" y1="20" x2="300" y2="20" stroke="#999" strokeWidth="1"/>
           <line x1="0" y1="30" x2="300" y2="30" stroke="#999" strokeWidth="1"/>
           <line x1="0" y1="40" x2="300" y2="40" stroke="#999" strokeWidth="1"/>
           <line x1="0" y1="50" x2="300" y2="50" stroke="#999" strokeWidth="1"/>
           
           {/* Notes (Haut = y petit) */}
           {/* MI (aigu) */} <circle cx="30" cy="15" r="3.5" fill="black"/>
           {/* RE# */}       <circle cx="50" cy="18" r="3.5" fill="black"/> <text x="42" y="22" fontSize="10" fontFamily="serif">♯</text>
           {/* MI */}        <circle cx="70" cy="15" r="3.5" fill="black"/>
           {/* RE# */}       <circle cx="90" cy="18" r="3.5" fill="black"/> <text x="82" y="22" fontSize="10" fontFamily="serif">♯</text>
           {/* MI */}        <circle cx="110" cy="15" r="3.5" fill="black"/>
           {/* SI */}        <circle cx="130" cy="30" r="3.5" fill="black"/>
           {/* RE (becarre)*/}<circle cx="150" cy="22" r="3.5" fill="black"/>
           {/* DO */}        <circle cx="170" cy="25" r="3.5" fill="black"/>
           {/* LA */}        <circle cx="190" cy="35" r="3.5" fill="black"/>
        </svg>
      </div>
      <p className="text-xs text-gray-500 text-center italic mb-4">
        Toute diffusion publique sans redevance SACEM est interdite.
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
        {/* Image noire. Nécessite le fichier dans public/assets/secret_stamp.png */}
        <img 
          src="/assets/secret_stamp.png" 
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

// 27. Article XXVII (MISSION 25 : Paradoxe Négations Multiples -> "ACCORD")
export const CONTENT_ART_27 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXVII. Consentement Exprès</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXVII.1. Validation Logique.</span>
        Afin de s'assurer de la parfaite compréhension des enjeux, l'Utilisateur doit interpréter l'instruction conditionnelle suivante :
      </p>
      <div className="bg-gray-50 border-l-[4px] border-gray-700 p-4 text-gray-900 text-sm font-medium my-4 leading-relaxed">
        "Ne cochez pas la case mentionnant 'REFUS' si vous ne refusez pas de ne pas être en désaccord avec les conditions susmentionnées. Dans le cas contraire, ou si la condition précédente aboutit à une acceptation tacite, veuillez inscrire le terme 'ACCORD' dans le champ de validation."
      </div>
      <p className="mb-4 text-xs text-gray-500">
        Toute erreur d'interprétation vaudra nullité de l'adhésion.
      </p>
    </div>
  </>
);

// 28. Article XXVIII (FILLER - Numérotation corrigée XXVIII.1)
export const CONTENT_ART_28 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXVIII. Clause Résolutoire</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXVIII.1. Manquement.</span>
        En cas d'inexécution par l'une des parties de ses obligations, le contrat sera résolu de plein droit 15 jours après l'envoi d'une mise en demeure restée infructueuse.
      </p>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXVIII.2. Effets.</span>
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
        Tout litige sera porté devant le tribunal de district de Reykjavik. Aux fins de signification, les parties élisent domicile au greffe situé dans la zone administrative de l'aéroport international de la capitale, situé sur la péninsule de Reykjanes (plateforme géothermique, code OACI requis).
      </p>
    </div>
  </>
);

// 30. Article XXX (MISSION 9 : ROT47 sans aide)
export const CONTENT_ART_30 = (
  <>
    <h3 className={TITLE_STYLE}>Article XXX. Signature Cryptographique</h3>
    <div className={TEXT_STYLE}>
      <p className="mb-4">
        <span className={SUB_TITLE}>Art XXX.1. Empreinte.</span>
        L'intégrité du présent document électronique est scellée par la chaîne de validation suivante (encodage ROT47 standard) :
      </p>
      <div className="font-mono text-xs text-gray-700 bg-gray-100 p-3 border border-gray-300 break-all select-all">
        DIGITAL_KEY: 4~5t 5t '2=:52E:@? i !#~%~4~Kt0~tvx
      </div>
    </div>
  </>
);