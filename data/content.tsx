// Fichier: src/data/content.tsx

export const BASE_CONTENT = (
  <>
    <h3 className="font-bold mt-4 mb-2">1. Introduction</h3>
    <p className="mb-4">
      Bienvenue sur <strong>I Have Read.</strong> En utilisant ce site, vous acceptez de céder votre temps libre.
      Cette clause est valable pour une durée de 12 mois renouvelables.
      (Note : Ce document est purement fictif, mais votre frustration sera réelle).
    </p>
    
    <h3 className="font-bold mt-4 mb-2">2. Collecte de données</h3>
    <p className="mb-4">
      Nous collectons vos mouvements de souris, votre niveau de batterie, et la vitesse à laquelle vous soupirez devant votre écran.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p className="mb-4">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </>
);

// Une fonction helper pour générer les clauses dynamiques
export const getLevelClause = (level: number) => {
  switch (level) {
    case 1:
      return { title: "3. Consentement éclairé", text: "En cochant la case ci-dessous, vous affirmez avoir lu ce texte (ce qui est faux)." };
    case 2:
      return { title: "4. Vérification d'intelligence", text: "Résolvez : 10 + 4 - 2. Trouvez le résultat (en chiffres) caché dans l'Article 1 (Introduction), surlignez-le avec votre souris, puis cliquez sur Suivant." };
    case 3:
      return { title: "5. Impact Environnemental", text: "Pour valider cette section, veuillez réduire la 'Luminosité du document' à moins de 10% via le slider ci-dessous." };
    case 4:
      return { title: "6. Renonciation Verbale", text: "Veuillez recopier la phrase suivante dans le champ : 'Je renonce à mon droit de me plaindre'. Respectez les majuscules." };
    default:
      return null;
  }
};