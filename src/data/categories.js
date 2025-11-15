import {
  LuUtensils,
  LuScissors,
  LuBuilding2,
  LuCalendarDays,
  LuCamera,
  LuHammer,
} from 'react-icons/lu';

const heroParams = '?auto=format&fit=crop&w=1600&q=80';
const demoParams = '?auto=format&fit=crop&w=1200&q=80';

export const categories = [
  {
    slug: 'restauration',
    label: 'Restauration',
    description: 'Des univers sensoriels qui digitalisent l’expérience culinaire.',
    intro:
      'Menus augmentés, réservations fluides et storytelling par plat pour permettre aux chefs de scénariser chaque service.',
    accent: '#FF8C5B',
    icon: LuUtensils,
    heroImage: `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17${heroParams}`,
    manifesto: [
      'Menus interactifs',
      'Réservations omnicanal',
      'Motion storytelling',
    ],
    metrics: [
      { label: 'Conversion moyenne', value: '+34%' },
      { label: 'Temps de build', value: '9 jours' },
    ],
    demos: [
      {
        id: 'signature',
        title: 'Restaurant Signature',
        style: 'Palette sombre, menu cinématique, CTA réservation sticky.',
        summary: 'Triptyque immersif pour mettre en scène un menu dégustation haute couture.',
        image: `https://images.unsplash.com/photo-1504674900247-0877df9cc836${demoParams}`,
        highlights: [
          'Timeline des plats synchronisée au scroll',
          'Réservations contextuelles suivant le nombre de convives',
          'Mode service nuit avec contraste élevé',
        ],
        immersion: {
          fragment: 'Menu tactile',
          badge: 'Mini-preview',
          kpi: '+37% réservations',
          description: 'Carte digitale avec focus sur les textures et pairing sommelier.',
          palette: ['#1F1B2C', '#FF8C5B', '#FFC7A6'],
        },
        gallery: [
          { label: 'Desktop hero', palette: ['#1F1B2C', '#302547'] },
          { label: 'Menu tactile', palette: ['#FF8C5B', '#FFD4B8'] },
          { label: 'Mobile CTA', palette: ['#0E0C16', '#FFB997'] },
        ],
        company: {
          name: 'Maison Aurore',
          tagline: 'Table gastronomique immersive',
          hero: {
            title: 'Voyage culinaire en sept actes',
            subtitle:
              'Menus sur-mesure, accords rares et scénographie lumineuse pour des soirées mémorables.',
          },
          about:
            'Maison Aurore imagine des dîners haute couture où chaque service raconte une nouvelle histoire. Notre brigade travaille les fermentations, les fumaisons et les associations inattendues pour surprendre encore et toujours.',
          highlights: ['Cuisine bas carbone', 'Atelier mixologie privé', 'Service en résidence'],
          services: [
            {
              title: 'Menu Signature',
              description: '7 créations saisonnières, accords prestigieux et attentions personnalisées.',
              detail: '350 € / convive',
            },
            {
              title: 'Table du Chef',
              description: 'Immersion comptoir avec storytelling par le chef et pairing sur mesure.',
              detail: '12 places par service',
            },
            {
              title: 'Privatisation',
              description: 'Expériences culinaires pour maisons haute couture, lancements et soirées.',
              detail: 'Projet sous 15 jours',
            },
          ],
          contact: {
            phone: '+33 1 80 02 45 90',
            email: 'bonjour@maisonaurore.fr',
            address: '21 rue des Gravilliers, 75003 Paris',
            hours: 'Mar - Dim · 18h - 00h',
          },
        },
      },
      {
        id: 'bistro',
        title: 'Bistrot Urbain',
        style: 'Design clair, badges avis et carte illustrée.',
        summary: 'Pensé pour les tables de quartier qui vivent au rythme des services.',
        image: `https://images.unsplash.com/photo-1529042410759-befb1204b468${demoParams}`,
        highlights: [
          'Carrousel express des plats iconiques',
          'Filtre express déjeuner / dîner',
          'Widget avis couplé à Google et The Fork',
        ],
        immersion: {
          fragment: 'Fiche plat dynamique',
          badge: 'Micro-interaction',
          kpi: '+22% ticket moyen',
          description: 'Modules ingrédients animés pour raconter l’origine des produits.',
          palette: ['#FFFFFF', '#1F2533', '#FF914D'],
        },
        gallery: [
          { label: 'Desktop story', palette: ['#F6F6F6', '#FF914D'] },
          { label: 'Carte mobile', palette: ['#FFFFFF', '#1F2533'] },
          { label: 'Avis sticky', palette: ['#FFE9DF', '#FF914D'] },
        ],
        company: {
          name: 'Quartier Flamme',
          tagline: 'Cuisine de marché & cave naturelle',
          hero: {
            title: 'Le bistrot vivant des foodies parisiens',
            subtitle: 'Carte courte, vins libres et ambiance vinyle jusque tard dans la nuit.',
          },
          about:
            'Quartier Flamme est le rendez-vous des amoureux de cuisine spontanée. Notre équipe change la carte midi et soir selon les cueillettes et propose des accords de vins naturels accessibles.',
          highlights: ['Menu midi 28 €', 'Afterwork plancha', 'Playlists live'],
          services: [
            {
              title: 'Menu déjeuner',
              description: 'Entrée + plat + dessert inspirés du marché de Rungis.',
              detail: '28 €',
            },
            {
              title: 'Carte du soir',
              description: '6 assiettes à partager, viandes maturées et desserts signature.',
              detail: 'À partir de 12 €',
            },
            {
              title: 'Cave & événements',
              description: 'Privatisation, masterclass vins naturels et DJ sets intimistes.',
              detail: 'Sur devis',
            },
          ],
          contact: {
            phone: '+33 1 42 55 11 09',
            email: 'hello@quartierflamme.fr',
            address: '58 rue Oberkampf, 75011 Paris',
            hours: 'Lun - Dim · 11h30 - 00h30',
          },
        },
      },
      {
        id: 'garden',
        title: 'Cuisine Fusion Garden',
        style: 'Grilles modulaires, vidéo hero et textures minérales.',
        summary: 'Pour les chefs créatifs qui veulent mettre en scène leur laboratoire.',
        image: `https://images.unsplash.com/photo-1470337458703-46ad1756a187${demoParams}`,
        highlights: [
          'Hero vidéo vertical adapté mobile-first',
          'Section pairing cocktails synchronisée',
          'CTA privatisation avec logique conditionnelle',
        ],
        immersion: {
          fragment: 'Hero atmosphérique',
          badge: 'Animation d’aperçu',
          kpi: '+41% demandes privatisation',
          description: 'Motion lente sur textures végétales et carnet d’inspiration.',
          palette: ['#0D1117', '#4C8C64', '#F0F5F2'],
        },
        gallery: [
          { label: 'Hero vidéo', palette: ['#0D1117', '#1E2B24'] },
          { label: 'Story mobile', palette: ['#4C8C64', '#E8F5EC'] },
          { label: 'CTA booking', palette: ['#0D1117', '#FFCF91'] },
        ],
        company: {
          name: 'Atelier Botanica',
          tagline: 'Cuisine végétale & mixologie botanique',
          hero: {
            title: 'Une serre gastronomique au cœur de la ville',
            subtitle: 'Menus immersifs, pairing cocktails botaniques et scénographie vivante.',
          },
          about:
            'Atelier Botanica marie techniques végétales contemporaines et inspirations asiatiques. Chaque table bénéficie d’un storytelling personnalisé avec accords cocktails fermentés.',
          highlights: ['Serre immersive', 'Mixologie botanique', 'Expérience multi-sensorielle'],
          services: [
            {
              title: 'Menu Garden',
              description: 'Parcours 6 temps autour des textures végétales et bouillons infusés.',
              detail: '145 €',
            },
            {
              title: 'Lab Cocktails',
              description: 'Mixologie botanique, kombucha maison et pairing exclusif.',
              detail: 'Atelier 35 €',
            },
            {
              title: 'Privatisation créative',
              description: 'Concepts sur-mesure pour marques durable & lancements presse.',
              detail: 'Sous 10 jours',
            },
          ],
          contact: {
            phone: '+33 4 91 10 32 21',
            email: 'studio@atelierbotanica.fr',
            address: '12 cour d’Opale, 69002 Lyon',
            hours: 'Mer - Dim · 19h - 23h',
          },
        },
      },
    ],
  },
  {
    slug: 'coiffure',
    label: 'Coiffure',
    description: 'Des interfaces lumineuses qui valorisent expertise et prise de rendez-vous.',
    intro:
      'Diagnostic interactif, lookbooks et tunnel de réservation multi-coiffeurs pour fluidifier toute la relation client.',
    accent: '#E96FD0',
    icon: LuScissors,
    heroImage: `https://images.unsplash.com/photo-1507679799987-c73779587ccf${heroParams}`,
    manifesto: ['Book interactif', 'Filtre services', 'Paiement anticipé'],
    metrics: [
      { label: 'No-shows réduits', value: '-48%' },
      { label: 'Temps de RDV', value: '30 s' },
    ],
    demos: [
      {
        id: 'atelier',
        title: 'Atelier Signature',
        style: 'Lookbook cinématique et CTA réservation omnicanal.',
        summary: 'Un site premium pour les salons haute couture et services sur rendez-vous.',
        image: `https://images.unsplash.com/photo-1524504388940-b1c1722653e1${demoParams}`,
        highlights: [
          'Lookbook avec transition par balayage',
          'Agenda connecté Wavy / Planity',
          'Section expertise colorimétrie',
        ],
        immersion: {
          fragment: 'Lookbook swipe',
          badge: 'Mini-mockup',
          kpi: '+28% prestations premium',
          description: 'Navigation tactile qui alterne portraits et vidéos backstage.',
          palette: ['#150C1F', '#E96FD0', '#FFD6F6'],
        },
        gallery: [
          { label: 'Desktop lookbook', palette: ['#1D1327', '#FAD4FF'] },
          { label: 'Swipe mobile', palette: ['#FFFFFF', '#E96FD0'] },
          { label: 'CTA agenda', palette: ['#150C1F', '#FF8DD1'] },
        ],
        company: {
          name: 'Atelier Lucent',
          tagline: 'Maison capillaire sur rendez-vous',
          hero: {
            title: 'Créations couture pour cheveux d’exception',
            subtitle: 'Colorations signature, coupe architecturale et rituels soin profonds.',
          },
          about:
            'Atelier Lucent propose une lecture sur-mesure du cheveu. Diagnostic morphologique, moodboard et suivi vidéo à la maison accompagnent chaque transformation.',
          highlights: ['Diagnostic digital', 'Color expert Davines', 'Suites privées'],
          services: [
            {
              title: 'COUTURE COLOR',
              description: 'Techniques balayage lumière froide, gloss miroir et finition brushing.',
              detail: 'à partir de 320 €',
            },
            {
              title: 'COUPE SCULPTÉE',
              description: 'Architecture de coupe selon votre rythme de repousse + coaching styling.',
              detail: '190 €',
            },
            {
              title: 'RITUEL ATELIER',
              description: 'Soin profond + massage crânien + protocole à la maison sur 4 semaines.',
              detail: '90 €',
            },
          ],
          contact: {
            phone: '+33 1 58 90 07 70',
            email: 'contact@atelierlucent.fr',
            address: '7 rue du Cirque, 75008 Paris',
            hours: 'Mar - Sam · 10h - 21h',
          },
        },
      },
      {
        id: 'urban-gloss',
        title: 'Urban Gloss',
        style: 'Ton franc, filtres rapides et storytelling par service.',
        summary: 'Design punchy pour les salons urbains et communautaires.',
        image: `https://images.unsplash.com/photo-1503933166340-4f27deedc1b4${demoParams}`,
        highlights: [
          'Filtres express coupe/couleur/soin',
          'Module tarifs dynamique',
          'Stories témoignages intégrées',
        ],
        immersion: {
          fragment: 'Filtre tactile',
          badge: 'Micro-interaction',
          kpi: '+19% panier moyen',
          description: 'Filtres sticky façon app mobile avec retour haptique simulé.',
          palette: ['#05070F', '#FF6ACE', '#FFDAD1'],
        },
        gallery: [
          { label: 'Hero gradient', palette: ['#05070F', '#232A40'] },
          { label: 'Filtre carte', palette: ['#FF6ACE', '#05070F'] },
          { label: 'Stories client', palette: ['#FFE6F7', '#05070F'] },
        ],
        company: {
          name: 'Maison Gloss',
          tagline: 'Salon & studio créatif',
          hero: {
            title: 'Le rendez-vous coiffure des communautés créatives',
            subtitle: 'Looks audacieux, playlists house & filtres express pour booker en 30 secondes.',
          },
          about:
            'Maison Gloss accompagne les talents, artistes et entrepreneurs avec des looks assumés. Notre studio capture chaque transformation pour alimenter votre brand personnel.',
          highlights: ['RDV 24/7', 'Studio photo intégré', 'Hair-care vegan'],
          services: [
            {
              title: 'Signature Cut',
              description: 'Coupe graphique + styling éditorial, conseils entretien vidéo.',
              detail: '110 €',
            },
            {
              title: 'Gloss & Color Melt',
              description: 'Nuances métalliques, cuivre intense, entretien longue durée.',
              detail: 'à partir de 180 €',
            },
            {
              title: 'Studio Content',
              description: 'Mini shooting + retouches + kit social media prêt à publier.',
              detail: '90 €',
            },
          ],
          contact: {
            phone: '+33 1 44 09 22 51',
            email: 'hello@maisongloss.fr',
            address: '14 passage Desnouettes, 75015 Paris',
            hours: 'Lun - Sam · 09h - 22h',
          },
        },
      },
      {
        id: 'studio-color',
        title: 'Studio Colorlab',
        style: 'Palette pastel, focus balayage et bookings flash.',
        summary: 'Pour mettre en lumière les prestations couleur et gloss.',
        image: `https://images.unsplash.com/photo-1441986300917-64674bd600d8${demoParams}`,
        highlights: [
          'Comparatif avant/après tactile',
          'Formulaire diagnostic couleur',
          'Micro animations sur les mèches',
        ],
        immersion: {
          fragment: 'Avant / Après',
          badge: 'Mini-preview',
          kpi: '+44% diagnostics complétés',
          description: 'Split-screen dynamique accessible clavier + gestes.',
          palette: ['#FFF5F8', '#EFB1E7', '#22202A'],
        },
        gallery: [
          { label: 'Desktop split', palette: ['#FFF5F8', '#FFDDED'] },
          { label: 'Diagnostic mobile', palette: ['#EFB1E7', '#22202A'] },
          { label: 'CTA couleurs', palette: ['#FFFFFF', '#FF9FD7'] },
        ],
        company: {
          name: 'Colorlab Riviera',
          tagline: 'Studio couleur & soin lumineux',
          hero: {
            title: 'Balayages solaires, blonds froids et colorations artistiques',
            subtitle: 'Approche scientifique de la couleur, protocole soin Olaplex et suivi digital.',
          },
          about:
            'Colorlab Riviera est spécialisé dans les transformations lumineuses. Diagnostic numérique, tests pigmentaires et plan d’entretien vous accompagnent sur la durée.',
          highlights: ['Outils connectés', 'Rituels Olaplex', 'Suivi WhatsApp'],
          services: [
            {
              title: 'Balayage Riviera',
              description: 'Effet soleil signature, gloss neutralisant et coupe légère.',
              detail: 'à partir de 260 €',
            },
            {
              title: 'Color Correction',
              description: 'Analyse pigmentaire, protocole multi-étapes et soin profond.',
              detail: 'Sur devis',
            },
            {
              title: 'Programme Lumière',
              description: '4 rendez-vous planifiés + kit soin personnalisé livré à domicile.',
              detail: '490 €',
            },
          ],
          contact: {
            phone: '+33 4 93 41 22 77',
            email: 'studio@colorlabriviera.fr',
            address: '5 promenade des Arts, 06000 Nice',
            hours: 'Mar - Sam · 09h - 20h',
          },
        },
      },
    ],
  },
  {
    slug: 'immobilier',
    label: 'Immobilier',
    description: 'Des vitrines immersives pour programmes neufs et agences transactionnelles.',
    intro:
      'Plans interactifs, fiches techniques et moteurs de recherche avancés conçus pour rassurer acheteurs et investisseurs.',
    accent: '#5C7AEA',
    icon: LuBuilding2,
    heroImage: `https://images.unsplash.com/photo-1499951360447-b19be8fe80f5${heroParams}`,
    manifesto: ['Fiches dataviz', 'Cartes animées', 'Tunnel lead scoring'],
    metrics: [
      { label: 'Leads qualifiés', value: '+57%' },
      { label: 'Délai moyen', value: '12 jours' },
    ],
    demos: [
      {
        id: 'premium-living',
        title: 'Premium Living',
        style: 'Hero vidéo, fiches techniques premium et modules investisseurs.',
        summary: 'Pour les programmes neufs haut de gamme et résidences gérées.',
        image: `https://images.unsplash.com/photo-1469474968028-56623f02e42e${demoParams}`,
        highlights: [
          'Player vidéo multi-angles',
          'Cartes 3D interactives',
          'Simulateur de rentabilité',
        ],
        immersion: {
          fragment: 'Fiche programme 3D',
          badge: 'Mini-mockup',
          kpi: '+52% visites showroom',
          description: 'Vues synthétiques du programme avec zoom tactile.',
          palette: ['#0F172A', '#5C7AEA', '#E1E7FF'],
        },
        gallery: [
          { label: 'Desktop 3D', palette: ['#0F172A', '#21305A'] },
          { label: 'Simulateur', palette: ['#5C7AEA', '#E1E7FF'] },
          { label: 'Mobile CTA', palette: ['#0F172A', '#98A7FF'] },
        ],
        company: {
          name: 'Éloge Résidences',
          tagline: 'Investir dans des adresses rares',
          hero: {
            title: 'Programmes haute signature au cœur des métropoles',
            subtitle: 'Résidences services, lofts panoramiques et prestations hôtelières integrées.',
          },
          about:
            'Éloge Résidences accompagne les investisseurs et familles à la recherche de biens hautement différenciants. Notre studio design assure une cohérence entre architecture et services.',
          highlights: ['Conciergerie interne', 'Outils financiers', 'Livraison 2026'],
          services: [
            {
              title: 'Programmes neufs',
              description: 'Sélection de résidences iconiques à Paris, Lyon et Bordeaux.',
              detail: 'À partir de 690 K€',
            },
            {
              title: 'Solutions investisseurs',
              description: 'Simulateurs fiscaux, reporting locatif et pilotage patrimonial.',
              detail: 'Clés en main',
            },
            {
              title: 'Experience center',
              description: 'Visites immersives 3D et maquettes tactiles accompagnées par nos experts.',
              detail: 'Sur rendez-vous',
            },
          ],
          contact: {
            phone: '+33 1 87 65 42 10',
            email: 'contact@elogeresidences.fr',
            address: '150 avenue Raymond Poincaré, 75116 Paris',
            hours: 'Lun - Ven · 09h - 19h',
          },
        },
      },
      {
        id: 'urban-homes',
        title: 'Urban Homes',
        style: 'Carte interactive, recherche filtrée et alertes.',
        summary: 'Pour les agences multi-biens qui veulent tout centraliser.',
        image: `https://images.unsplash.com/photo-1519671482749-fd09be7ccebf${demoParams}`,
        highlights: [
          'Carte Mapbox custom',
          'Alertes email + WhatsApp',
          'Profil investisseur personnalisé',
        ],
        immersion: {
          fragment: 'Carte thermique',
          badge: 'Animation d’aperçu',
          kpi: '+61% fiches consultées',
          description: 'Heatmap et pins dynamiques synchronisés à la liste.',
          palette: ['#111A2C', '#5C7AEA', '#90E0FF'],
        },
        gallery: [
          { label: 'Desktop map', palette: ['#111A2C', '#1F2F4F'] },
          { label: 'Liste mobile', palette: ['#FFFFFF', '#5C7AEA'] },
          { label: 'Alertes', palette: ['#EEF2FF', '#5C7AEA'] },
        ],
        company: {
          name: 'Atlas City Realty',
          tagline: 'Agir vite sur les plus belles opportunités urbaines',
          hero: {
            title: 'Lofts, bureaux créatifs et habitats mixtes',
            subtitle: 'Plateforme temps réel avec alertes SMS et visites en 48 h.',
          },
          about:
            'Atlas City Realty connecte les propriétaires exigeants et les jeunes investisseurs. Nos chasseurs digitaux scannent 12 quartiers clés et partagent les dossiers complets sur une même interface.',
          highlights: ['Visites vidéo 360°', 'Financement partenaire', 'Alertes WhatsApp'],
          services: [
            {
              title: 'Chasse locative',
              description: 'Sélection de biens atypiques pour freelances, studios et startups.',
              detail: 'Honoraires 3 %',
            },
            {
              title: 'Investissement clé en main',
              description: 'Analyse rendement, travaux, ameublement et gestion locative.',
              detail: 'Dossier en 5 jours',
            },
            {
              title: 'Ventes exclusives',
              description: 'Off-market Lofts, hôtels particuliers et ateliers commerciaux.',
              detail: 'Accès privé',
            },
          ],
          contact: {
            phone: '+33 1 76 42 11 20',
            email: 'hello@atlascity.fr',
            address: '24 rue du Faubourg Saint-Denis, 75010 Paris',
            hours: 'Lun - Sam · 09h - 21h',
          },
        },
      },
      {
        id: 'heritage',
        title: 'Heritage Realty',
        style: 'Design éditorial, focus patrimoine et storytelling vendeur.',
        summary: 'Pensé pour les biens de prestige et les études notariales.',
        image: `https://images.unsplash.com/photo-1457369804613-52c61a468e7d${demoParams}`,
        highlights: [
          'Chronologie patrimoniale',
          'Module expertise notariale',
          'CTA visites privées',
        ],
        immersion: {
          fragment: 'Chapitrage éditorial',
          badge: 'Micro-interaction',
          kpi: '+33% formulaires luxe',
          description: 'Chapitrage avec ancrages et indicateur de progression.',
          palette: ['#100C0A', '#B3946E', '#F1E6D4'],
        },
        gallery: [
          { label: 'Story desktop', palette: ['#100C0A', '#3A2A20'] },
          { label: 'Timeline mobile', palette: ['#B3946E', '#FFF4E4'] },
          { label: 'CTA visites', palette: ['#1E1310', '#F7E2C8'] },
        ],
        company: {
          name: 'Collection Héritage',
          tagline: 'Biens de prestige & patrimoine privé',
          hero: {
            title: 'Conserver, transmettre, sublimer vos demeures',
            subtitle: 'Approche notariale, scénographie éditoriale et mise en relation discrète.',
          },
          about:
            'Collection Héritage valorise les demeures historiques, propriétés viticoles et domaines d’exception. Notre équipe produit des dossiers narratifs et organise des visites privées hautement qualifiées.',
          highlights: ['Étude notariale partenaire', 'Storytelling propriétaire', 'Dossiers digitaux'],
          services: [
            {
              title: 'Conseil vendeur',
              description: 'Audit patrimonial, pricing confidentiel et stratégie de cession.',
              detail: 'Honoraires sur mandat',
            },
            {
              title: 'Scénographie digitale',
              description: 'Reportages éditoriaux, visites 3D et éditions print sur-mesure.',
              detail: 'Sous 3 semaines',
            },
            {
              title: 'Conciergerie acheteur',
              description: 'Sélection restreinte, expertise juridique et closing international.',
              detail: 'Accompagnement premium',
            },
          ],
          contact: {
            phone: '+33 1 86 95 44 10',
            email: 'salon@collectionheritage.fr',
            address: '5 avenue de l’Opéra, 75001 Paris',
            hours: 'Lun - Ven · 09h - 19h',
          },
        },
      },
    ],
  },
  {
    slug: 'evenementiel',
    label: 'Événementiel',
    description: 'Des parcours live qui enthousiasment sponsors et participants.',
    intro:
      'Timeline immersive, modules speakers et expériences hybrides pour les agences événementielles et producteurs de shows.',
    accent: '#FFB347',
    icon: LuCalendarDays,
    heroImage: `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429${heroParams}`,
    manifesto: ['Timeline live', 'CTA devis express', 'Modules sponsors'],
    metrics: [
      { label: 'Demandes devis', value: '+64%' },
      { label: 'Mise en ligne', value: '8 jours' },
    ],
    demos: [
      {
        id: 'lumiere',
        title: 'Lumière Productions',
        style: 'Transitions dynamiques, timeline immersive, CTA devis.',
        summary: 'Pour les agences qui orchestrent des shows audacieux.',
        image: `https://images.unsplash.com/photo-1494526585095-c41746248156${demoParams}`,
        highlights: [
          'Timeline synchronisée aux tempos audio',
          'Modules multi-scènes',
          'CTA devis split en 3 étapes',
        ],
        immersion: {
          fragment: 'Timeline live',
          badge: 'Animation d’aperçu',
          kpi: '+48% devis signés',
          description: 'Rail chronologique avec points d’intérêt cliquables.',
          palette: ['#05030A', '#FF7F50', '#FFD699'],
        },
        gallery: [
          { label: 'Timeline desktop', palette: ['#05030A', '#1F1123'] },
          { label: 'Brief mobile', palette: ['#FF7F50', '#05030A'] },
          { label: 'Module sponsor', palette: ['#FFD699', '#1A0D14'] },
        ],
        company: {
          name: 'Lumière Prodigy',
          tagline: 'Creative show studio',
          hero: {
            title: 'Shows immersifs pour marques iconiques',
            subtitle: 'Storyline live, direction artistique et production intégrale.',
          },
          about:
            'Lumière Prodigy imagine des lancements, keynotes et shows hybrides pour les maisons de luxe et scale-ups. Notre cellule créative assure la cohérence du script jusqu’au rendu scénographique.',
          highlights: ['Direction artistique', 'Production technique', 'Motion & média'],
          services: [
            {
              title: 'Creative Direction',
              description: 'Concept, storyboard, design sonore et univers visuel complet.',
              detail: '2 à 4 semaines',
            },
            {
              title: 'Live Production',
              description: 'Régie technique, captation et diffusion streaming multi-plateformes.',
              detail: 'Équipe intégrée',
            },
            {
              title: 'Brand Experience',
              description: 'Pop-up immersifs, roadshows et expériences retail expérientielles.',
              detail: 'Sur devis',
            },
          ],
          contact: {
            phone: '+33 1 70 79 58 11',
            email: 'contact@lumiereprodigy.com',
            address: '11 rue du Sentier, 75002 Paris',
            hours: 'Lun - Ven · 09h - 20h',
          },
        },
      },
      {
        id: 'ceremonia',
        title: 'Ceremonia',
        style: 'Esthétique douce, moodboards et témoignages immersifs.',
        summary: 'Parfait pour les wedding planners et cérémonies privées.',
        image: `https://images.unsplash.com/photo-1454165205744-3b78555e5572${demoParams}`,
        highlights: [
          'Moodboards interactifs',
          'Musique d’ambiance optionnelle',
          'Checklist planning partagée',
        ],
        immersion: {
          fragment: 'Moodboard tactile',
          badge: 'Mini-preview',
          kpi: '+29% paniers signature',
          description: 'Grille responsive avec zoom tactile et filtres ambiance.',
          palette: ['#FFF8F2', '#FFB347', '#C08E65'],
        },
        gallery: [
          { label: 'Moodboard desktop', palette: ['#FFF8F2', '#E5C7A6'] },
          { label: 'Playlist mobile', palette: ['#FFB347', '#FFE3C0'] },
          { label: 'Checklist', palette: ['#FDF1E0', '#C08E65'] },
        ],
        company: {
          name: 'Studio Ceremonia',
          tagline: 'Wedding planning haute émotion',
          hero: {
            title: 'Des célébrations imaginées sur-mesure',
            subtitle: 'Moodboards immersifs, playlists d’ambiance et coordination globale.',
          },
          about:
            'Studio Ceremonia accompagne les couples en quête d’esthétique contemporaine. Nous orchestrons chaque détail avec des artisans locaux, storytellons votre histoire et gérons la logistique globale.',
          highlights: ['Moodboard interactif', 'Direction artistique', 'Coordination jour J'],
          services: [
            {
              title: 'Direction artistique',
              description: 'Palette, décors, papeterie et scénographie totale selon votre moodboard.',
              detail: 'Dossier sous 3 semaines',
            },
            {
              title: 'Planning global',
              description: 'Budget, rétroplanning et coordination prestataires internationaux.',
              detail: 'Forfait à partir de 6 900 €',
            },
            {
              title: 'Destination wedding',
              description: 'Repérage, logistique invités et conciergerie voyages.',
              detail: 'Sur devis',
            },
          ],
          contact: {
            phone: '+33 6 72 19 04 88',
            email: 'bonjour@studioceremonia.com',
            address: 'Atelier sur rendez-vous · 75010 Paris',
            hours: 'Lun - Sam · 10h - 19h',
          },
        },
      },
      {
        id: 'pulse',
        title: 'Pulse Expo',
        style: 'UI modulaire, stats d’événement et modules sponsors.',
        summary: 'Pour les salons professionnels et conférences hybrides.',
        image: `https://images.unsplash.com/photo-1465101162946-4377e57745c3${demoParams}`,
        highlights: [
          'Dashboard KPI organisateur',
          'Module billets en direct',
          'Espace sponsors modulable',
        ],
        immersion: {
          fragment: 'Dashboard KPIs',
          badge: 'Mini-mockup',
          kpi: '+54% ventes en ligne',
          description: 'Espace analytics avec micro-graphes animés.',
          palette: ['#050816', '#FFB347', '#56C2FF'],
        },
        gallery: [
          { label: 'Dashboard desktop', palette: ['#050816', '#1B233F'] },
          { label: 'Billetterie mobile', palette: ['#FFB347', '#050816'] },
          { label: 'Espace sponsor', palette: ['#10152A', '#56C2FF'] },
        ],
        company: {
          name: 'Pulse Expo Agency',
          tagline: 'Salons & conférences nouvelle génération',
          hero: {
            title: 'Des événements data-driven, hybrides et engageants',
            subtitle: 'Billetterie live, modules sponsors et analytics temps réel.',
          },
          about:
            'Pulse Expo conçoit des rencontres professionnelles immersives. Nous développons des parcours visiteurs dynamiques, maximisons les revenus sponsors et pilotons la performance en direct.',
          highlights: ['Billetterie live', 'Studios hybrides', 'Data cockpit'],
          services: [
            {
              title: 'Concept & story',
              description: 'Naming, scénario éditorial et parcours expérience visiteurs.',
              detail: 'Sprint 15 jours',
            },
            {
              title: 'Production hybride',
              description: 'Plateaux TV, streaming multi réseaux et captations multi-cam.',
              detail: 'À partir de 35 K€',
            },
            {
              title: 'Monétisation',
              description: 'Offres sponsor, marketplace exposants et analytics live.',
              detail: 'Revenue share',
            },
          ],
          contact: {
            phone: '+33 1 84 80 70 65',
            email: 'team@pulse-expo.com',
            address: '92 rue Réaumur, 75002 Paris',
            hours: 'Lun - Ven · 09h - 19h',
          },
        },
      },
    ],
  },
  {
    slug: 'photographie',
    label: 'Photographie',
    description: 'Des portfolios cinématiques pour studios, reporters et wedding storytellers.',
    intro:
      'Scrolling immersif, galeries 4K et espaces clients sécurisés pour magnifier chaque série.',
    accent: '#9D7BFF',
    icon: LuCamera,
    heroImage: `https://images.unsplash.com/photo-1475688621402-4257f5b911ef${heroParams}`,
    manifesto: ['Scroll cinématique', 'Livrables clients', 'Licences claires'],
    metrics: [
      { label: 'Demandes shooting', value: '+48%' },
      { label: 'Livraison', value: '7 jours' },
    ],
    demos: [
      {
        id: 'focus',
        title: 'Focus Studio',
        style: 'Mosaïque immersive, scroll storytelling, CTA booking.',
        summary: 'Pour les studios portraits et campagnes éditoriales.',
        image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085${demoParams}`,
        highlights: [
          'Grid responsive type magazine',
          'Module offres packagées',
          'Espace clients sécurisé',
        ],
        immersion: {
          fragment: 'Scroller cinématique',
          badge: 'Animation d’aperçu',
          kpi: '+36% leads qualifiés',
          description: 'Scroll horizontal transformé en carrousel tactile.',
          palette: ['#0C0C0F', '#9D7BFF', '#F1EDFF'],
        },
        gallery: [
          { label: 'Magazine view', palette: ['#0C0C0F', '#1E1B29'] },
          { label: 'Mobile scroll', palette: ['#9D7BFF', '#0C0C0F'] },
          { label: 'Offres', palette: ['#F1EDFF', '#9D7BFF'] },
        ],
        company: {
          name: 'Focus Studio',
          tagline: 'Portraits éditoriaux & direction artistique',
          hero: {
            title: 'Des séries éditoriales pour marques et talents',
            subtitle: 'Direction artistique complète, moodboard et livraison 4K sous 7 jours.',
          },
          about:
            'Focus Studio capture les identités fortes. Notre équipe créative propose des moodboards, repérages et retouches haut de gamme pour magnifier voix, talents et collections.',
          highlights: ['Plateau 180 m²', 'Équipe DA', 'Livraison express'],
          services: [
            {
              title: 'Editorial Session',
              description: 'Pré-prod créative, 3 looks, make-up partner et 20 visuels retouchés.',
              detail: '1 650 €',
            },
            {
              title: 'Brand Story',
              description: 'Campagne produit + vidéo backstage + kit social media prêt à publier.',
              detail: 'Sur devis',
            },
            {
              title: 'Portrait Signature',
              description: 'Session 90 min, stylisme, coaching pose et sélection express.',
              detail: '290 €',
            },
          ],
          contact: {
            phone: '+33 6 11 22 92 30',
            email: 'bookings@focusstudio.fr',
            address: 'Loft République · 31 rue Bichat, 75010 Paris',
            hours: 'Lun - Dim · 08h - 22h',
          },
        },
      },
      {
        id: 'wander',
        title: 'Wander Stories',
        style: 'Grand visuels plein écran et narration voyage.',
        summary: 'Idéal pour les photographes documentaires et travel.',
        image: `https://images.unsplash.com/photo-1503602642458-232111445657${demoParams}`,
        highlights: [
          'Journal de bord interactif',
          'Cartes Mapbox des lieux',
          'Module print shop connecté',
        ],
        immersion: {
          fragment: 'Journal immersif',
          badge: 'Mini-preview',
          kpi: '+31% ventes print',
          description: 'Entrées de carnet avec transitions inspirées de la pellicule.',
          palette: ['#0B1418', '#4C707A', '#F2E8D5'],
        },
        gallery: [
          { label: 'Journal desktop', palette: ['#0B1418', '#1B2B32'] },
          { label: 'Carte mobile', palette: ['#4C707A', '#F2E8D5'] },
          { label: 'Boutique print', palette: ['#181F23', '#F5E5CF'] },
        ],
        company: {
          name: 'Wander Stories Co.',
          tagline: 'Photojournalisme et carnets de voyage',
          hero: {
            title: 'Des récits photographiques aux quatre coins du monde',
            subtitle: 'Journaux immersifs, tirages limités et expéditions sur-mesure.',
          },
          about:
            'Wander Stories documente les peuples et territoires lointains. Nous produisons des séries éditoriales, carnets interactifs et tirages fine art pour les maisons d’édition et les marques responsables.',
          highlights: ['Journal interactif', 'Cartes immersives', 'Print shop'],
          services: [
            {
              title: 'Expéditions sur commande',
              description: 'Reportages documentaires longs formats, écriture et sound design.',
              detail: 'À partir de 12 K€',
            },
            {
              title: 'Boutique tirages',
              description: 'Éditions limitées, cadres fabriqués en France et certificats.',
              detail: 'De 190 à 420 €',
            },
            {
              title: 'Talks & expositions',
              description: 'Conférences, installations immersives et ateliers publics.',
              detail: 'Sur demande',
            },
          ],
          contact: {
            phone: '+33 7 82 11 64 98',
            email: 'studio@wanderstories.co',
            address: 'Atelier partagé · 2 rue Burq, 75018 Paris',
            hours: 'Lun - Ven · 10h - 19h',
          },
        },
      },
      {
        id: 'atelier-lumiere',
        title: 'Atelier Lumière',
        style: 'Palette neutre, slider immersif et offres mariage.',
        summary: 'Pour les storytellers mariage et lifestyle.',
        image: `https://images.unsplash.com/photo-1504384308090-c894fdcc538d${demoParams}`,
        highlights: [
          'Slider double exposition',
          'Section émotions et playlists',
          'Formulaire moodboard',
        ],
        immersion: {
          fragment: 'Slider émotion',
          badge: 'Micro-interaction',
          kpi: '+42% demandes mariage',
          description: 'Slider tactile inspiré du film instantané.',
          palette: ['#120F0D', '#E3D6C7', '#9D7BFF'],
        },
        gallery: [
          { label: 'Slider desktop', palette: ['#120F0D', '#2E2420'] },
          { label: 'Mood mobile', palette: ['#E3D6C7', '#120F0D'] },
          { label: 'CTA booking', palette: ['#9D7BFF', '#F7F2FF'] },
        ],
        company: {
          name: 'Atelier Lumière',
          tagline: 'Photographes mariage & lifestyle',
          hero: {
            title: 'Récits lumineux pour les histoires d’amour modernes',
            subtitle: 'Approche éditoriale, direction artistique et films analogiques.',
          },
          about:
            'Atelier Lumière accompagne les couples et familles qui souhaitent des images sincères et élégantes. Nous travaillons l’argentique, le numérique et le Super 8 pour recréer des émotions tangibles.',
          highlights: ['Couverture 12h', 'Retouches artisanales', 'Livraison galerie privée'],
          services: [
            {
              title: 'Collection Orchidée',
              description: 'Reportage complet + séance engagement + album relié à la main.',
              detail: '3 200 €',
            },
            {
              title: 'Editorial Session',
              description: 'Shooting mode & lifestyle pour marques mariage et créateurs.',
              detail: '1 150 €',
            },
            {
              title: 'Films Super 8',
              description: 'Captations à l’ancienne avec montage personnalisé et bande-son.',
              detail: 'À partir de 690 €',
            },
          ],
          contact: {
            phone: '+33 6 19 43 70 54',
            email: 'bonjour@atelier-lumiere.fr',
            address: 'Studio lumière · 19 rue Lemercier, 75017 Paris',
            hours: 'Sur rendez-vous',
          },
        },
      },
    ],
  },
  {
    slug: 'artisans',
    label: 'Artisans & Services locaux',
    description: 'Mettre en avant les savoir-faire de proximité et simplifier les demandes de devis.',
    intro:
      'Nous créons des vitrines chaleureuses pour les ateliers, jardins et services d’urgence afin qu’ils gagnent en crédibilité et en visibilité locale.',
    accent: '#F4B860',
    icon: LuHammer,
    heroImage: `https://images.unsplash.com/photo-1489515217757-5fd1be406fef${heroParams}`,
    manifesto: ['Expertise locale', 'Devis rapide', 'Agenda en ligne'],
    metrics: [
      { label: 'Demandes devis', value: '+48%' },
      { label: 'Délai de réponse', value: '-35%' },
    ],
    demos: [
      {
        id: 'atelier-bois',
        title: 'Atelier Bois & Co',
        style: 'Textures naturelles, focus savoir-faire et devis express.',
        summary: 'Menuiserie contemporaine, mobilier sur-mesure et projets retail.',
        image: `https://images.unsplash.com/photo-1489515217757-5fd1be406fef${demoParams}`,
        highlights: [
          'Catalogue projets',
          'Focus essences responsables',
          'Formulaire devis chrono',
        ],
        immersion: {
          fragment: 'Header atelier',
          badge: 'Mini-site',
          kpi: '+52% demandes devis',
          description: 'Menu artisanal avec mise en avant du book projets.',
          palette: ['#2B2016', '#F4B860', '#E9D3B4'],
        },
        gallery: [
          { label: 'Portfolio desktop', palette: ['#2B2016', '#6B4D2F'] },
          { label: 'Devis mobile', palette: ['#FFFFFF', '#F4B860'] },
          { label: 'Avis clients', palette: ['#F9ECD5', '#2B2016'] },
        ],
        company: {
          name: 'Atelier Bois & Co',
          tagline: 'Menuisiers designers à Lyon',
          hero: {
            title: 'Mobilier sur-mesure & agencements haut de gamme',
            subtitle: 'Atelier artisanal, circuits bois responsables et suivi complet de chantier.',
          },
          about:
            'Depuis 1998, Atelier Bois & Co façonne du mobilier contemporain, des bibliothèques monumentales et des agencements retail sur mesure. Chaque pièce est dessinée dans notre studio puis fabriquée à Villeurbanne.',
          highlights: ['Bois français FSC', '3D & prototypage', 'Livraison clé en main'],
          services: [
            {
              title: 'Mobilier sur-mesure',
              description: 'Tables, dressings et bibliothèques imaginés avec votre architecte.',
              detail: 'Projet moyen 6 semaines',
            },
            {
              title: 'Agencement retail',
              description: 'Corner boutique, bars à parfums et pop-up stores sur-mesure.',
              detail: 'Équipe dédiée',
            },
            {
              title: 'Entretien & restauration',
              description: 'Protection huilée, réparation de pièces anciennes et patines.',
              detail: 'Intervention sous 72 h',
            },
          ],
          contact: {
            phone: '+33 4 72 10 32 90',
            email: 'atelier@boisetco.fr',
            address: '16 rue Baraban, 69003 Lyon',
            hours: 'Lun - Ven · 08h - 19h',
          },
        },
      },
      {
        id: 'jardin-urbain',
        title: 'Verte Ligne Jardins',
        style: 'Palette végétale, modules avant/après et carnet d’entretien.',
        summary: 'Paysagiste urbain, jardins suspendus et terrasses végétalisées.',
        image: `https://images.unsplash.com/photo-1469474968028-56623f02e42e${demoParams}`,
        highlights: [
          'Plans 3D interactifs',
          'Catalogue d’essences locales',
          'Carnet d’entretien PDF',
        ],
        immersion: {
          fragment: 'Hero végétal',
          badge: 'Mini-site',
          kpi: '+37% demandes visites',
          description: 'Hero organique avec CTA devis immédiat.',
          palette: ['#0F2A1F', '#5EB083', '#E7F2EA'],
        },
        gallery: [
          { label: 'Avant / Après', palette: ['#0F2A1F', '#5EB083'] },
          { label: 'Liste services', palette: ['#FFFFFF', '#5EB083'] },
          { label: 'Contact rapide', palette: ['#D9EFE3', '#0F2A1F'] },
        ],
        company: {
          name: 'Verte Ligne Jardins',
          tagline: 'Paysagistes urbains à Bordeaux',
          hero: {
            title: 'Des jardins nourriciers & terrasses végétales clés en main',
            subtitle: 'Conception 3D, sélection d’essences locales et entretien annuel.',
          },
          about:
            'Verte Ligne accompagne les particuliers et bureaux qui souhaitent redonner une place au vivant. Nous travaillons avec des horticulteurs locaux et des matériaux sourcés dans le Sud-Ouest.',
          highlights: ['Diagnostic écologique', 'Système d’arrosage caché', 'Entretien premium'],
          services: [
            {
              title: 'Conception 3D',
              description: 'Plans immersifs, moodboard plantes et palette matériaux.',
              detail: 'Sous 10 jours',
            },
            {
              title: 'Réalisation complète',
              description: 'Plantations, maçonnerie paysagère et éclairage nocturne.',
              detail: 'Chantiers 2 à 6 semaines',
            },
            {
              title: 'Entretien annuel',
              description: 'Contrat sur-mesure avec visites saisonnières et soins biologiques.',
              detail: 'À partir de 120 €/mois',
            },
          ],
          contact: {
            phone: '+33 5 57 54 22 11',
            email: 'contact@verteligne.fr',
            address: 'Atelier rive gauche · 13 quai Richelieu, 33000 Bordeaux',
            hours: 'Lun - Sam · 08h - 20h',
          },
        },
      },
      {
        id: 'services-urgence',
        title: 'Nova Services Express',
        style: 'UI claire, badges réactivité et formulaires rapides.',
        summary: 'Dépannage multi-services, plomberie, électricité et serrurerie.',
        image: `https://images.unsplash.com/photo-1503387762-592deb58ef4e${demoParams}`,
        highlights: [
          'Chat de devis instantané',
          'Badges assurance décennale',
          'Suivi intervention live',
        ],
        immersion: {
          fragment: 'Header assistance',
          badge: 'Mini-site',
          kpi: '15 min pour répondre',
          description: 'Bannière hotline et formulaire en deux champs.',
          palette: ['#061428', '#F4B860', '#FF8C5B'],
        },
        gallery: [
          { label: 'Hotline desktop', palette: ['#061428', '#12234A'] },
          { label: 'Checklist mobile', palette: ['#FFFFFF', '#F4B860'] },
          { label: 'Avis urgence', palette: ['#FFE8C9', '#061428'] },
        ],
        company: {
          name: 'Nova Services Express',
          tagline: 'Dépannage premium en Île-de-France',
          hero: {
            title: 'Plomberie, électricité et serrurerie 24/7',
            subtitle: 'Techniciens certifiés, arrivée sur site en 30 minutes en moyenne.',
          },
          about:
            'Nova Services Express intervient pour les particuliers et réseaux de boutiques. Notre dispatch en temps réel sélectionne l’équipe la plus proche et partage un suivi par SMS.',
          highlights: ['Hotline 24/7', 'Assurance décennale', 'Paiement sécurisé'],
          services: [
            {
              title: 'Urgence plomberie',
              description: 'Fuites, colonnes bouchées et chauffe-eau en panne.',
              detail: 'À partir de 120 €',
            },
            {
              title: 'Ouverture de porte',
              description: 'Intervention serrurerie sans dégât, tous cylindres.',
              detail: '30 min en moyenne',
            },
            {
              title: 'Contrats pro',
              description: 'Maintenance préventive, visites annuelles et astreinte dédiée.',
              detail: 'Sur devis',
            },
          ],
          contact: {
            phone: '0 805 620 310',
            email: 'dispatch@novaexpress.fr',
            address: 'Plateforme · 4 rue André Messager, 75018 Paris',
            hours: '7 jours / 7 · 24h/24',
          },
        },
      },
    ],
  },
];

