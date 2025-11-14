import {
  LuUtensils,
  LuScissors,
  LuBuilding2,
  LuCalendarDays,
  LuCamera,
  LuSparkles,
} from 'react-icons/lu';

export const categories = [
  {
    slug: 'restauration',
    label: 'Restauration',
    description: 'Des expériences culinaires immersives pour les tables les plus exigeantes.',
    accent: '#FF7F50',
    icon: LuUtensils,
    heroImage:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    demos: [
      {
        id: 'signature',
        title: 'Restaurant Signature',
        style: 'Palette sombre, typographie élégante, réservation instantanée.',
        image:
          'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80',
        summary: 'Pensé pour les tables gastronomiques qui souhaitent immerger leurs convives.',
        demoUrl: 'https://example.com/demo-restaurant-signature',
      },
      {
        id: 'bistro',
        title: 'Bistrot Urbain',
        style: 'Design clair, cartes illustrées, menu dynamique et badges avis.',
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
        summary: 'Idéal pour les restaurants de quartier à forte rotation.',
        demoUrl: 'https://example.com/demo-bistrot-urbain',
      },
      {
        id: 'fusion',
        title: 'Cuisine Fusion',
        style: 'Grilles modulaires, vidéo hero, storytelling par plat signature.',
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
        summary: 'Parfait pour les chefs créatifs qui veulent surprendre.',
        demoUrl: 'https://example.com/demo-cuisine-fusion',
      },
    ],
  },
  {
    slug: 'coiffure',
    label: 'Coiffure',
    description: 'Mettre en scène l’expertise coiffure et les prises de rendez-vous fluides.',
    accent: '#E96FD0',
    icon: LuScissors,
    heroImage:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    demos: [
      {
        id: 'atelier',
        title: 'Atelier Signature',
        style: 'Lookbook interactif, animations douces, CTA réservation visible.',
        image:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour les salons premium aux prestations sur-mesure.',
        demoUrl: 'https://example.com/demo-atelier-signature',
      },
      {
        id: 'urban-gloss',
        title: 'Urban Gloss',
        style: 'Ton franc, card grids, filtres rapides par service.',
        image:
          'https://images.unsplash.com/photo-1427088625471-da8a7193afd3?auto=format&fit=crop&w=900&q=80',
        summary: 'Pensé pour les salons urbains trendy et instagrammables.',
        demoUrl: 'https://example.com/demo-urban-gloss',
      },
      {
        id: 'studio-color',
        title: 'Studio Color',
        style: 'Palette pastel, focus colorimétrie, témoignages vidéo.',
        image:
          'https://images.unsplash.com/photo-1427088625471-da8a7193afd3?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour mettre en avant les expertises balayage & colorimétrie.',
        demoUrl: 'https://example.com/demo-studio-color',
      },
    ],
  },
  {
    slug: 'immobilier',
    label: 'Immobilier',
    description: 'Valoriser vos programmes et votre approche transactionnelle.',
    accent: '#5C7AEA',
    icon: LuBuilding2,
    heroImage:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80',
    demos: [
      {
        id: 'premium-living',
        title: 'Premium Living',
        style: 'Hero vidéo, cartes projets, fiches techniques détaillées.',
        image:
          'https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour les programmes neufs haut de gamme et investisseurs.',
        demoUrl: 'https://example.com/demo-premium-living',
      },
      {
        id: 'urban-homes',
        title: 'Urban Homes',
        style: 'Carte interactive, recherche filtrée, alertes e-mail.',
        image:
          'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour les agences transactionnelles multi-biens.',
        demoUrl: 'https://example.com/demo-urban-homes',
      },
      {
        id: 'heritage',
        title: 'Heritage Realty',
        style: 'Design éditorial, focus patrimoine, storytelling vendeur.',
        image:
          'https://images.unsplash.com/photo-1505692794400-4d1d31494195?auto=format&fit=crop&w=900&q=80',
        summary: 'Idéal pour les biens de prestige et l’investissement.',
        demoUrl: 'https://example.com/demo-heritage-realty',
      },
    ],
  },
  {
    slug: 'evenementiel',
    label: 'Événementiel',
    description: 'Des expériences digitales immersives pour chaque moment clé.',
    accent: '#FFB347',
    icon: LuCalendarDays,
    heroImage:
      'https://images.unsplash.com/photo-1470223991234-a94d53389fb4?auto=format&fit=crop&w=1200&q=80',
    demos: [
      {
        id: 'lumiere',
        title: 'Lumière Productions',
        style: 'Transitions dynamiques, timeline d’événements, CTA devis.',
        image:
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour les agences qui orchestrent des shows audacieux.',
        demoUrl: 'https://example.com/demo-lumiere',
      },
      {
        id: 'ceremonia',
        title: 'Ceremonia',
        style: 'Esthétique douce, moodboards, témoignages immersifs.',
        image:
          'https://images.unsplash.com/photo-1520854223473-4a321d521fec?auto=format&fit=crop&w=900&q=80',
        summary: 'Parfait pour les wedding planners et cérémonies privées.',
        demoUrl: 'https://example.com/demo-ceremonia',
      },
      {
        id: 'pulse',
        title: 'Pulse Expo',
        style: 'UI modulaire, stats d’événement, modules sponsors.',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour les salons professionnels et conférences.',
        demoUrl: 'https://example.com/demo-pulse-expo',
      },
    ],
  },
  {
    slug: 'photographie',
    label: 'Photographie',
    description: 'Mettre en lumière les portfolios et offres artistiques.',
    accent: '#9D7BFF',
    icon: LuCamera,
    heroImage:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    demos: [
      {
        id: 'focus',
        title: 'Focus Studio',
        style: 'Mosaïque immersive, scroll storytelling, CTA booking.',
        image:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour les studios portraits et editorials.',
        demoUrl: 'https://example.com/demo-focus-studio',
      },
      {
        id: 'wander',
        title: 'Wander Stories',
        style: 'Grand visuels plein écran, typographie serif, journaux.',
        image:
          'https://images.unsplash.com/photo-1475688621402-4257f5b911ef?auto=format&fit=crop&w=900&q=80',
        summary: 'Idéal pour les photographes de voyage et documentaires.',
        demoUrl: 'https://example.com/demo-wander-stories',
      },
      {
        id: 'atelier-lumiere',
        title: 'Atelier Lumière',
        style: 'Palette neutre, slider immersif, offres packagées.',
        image:
          'https://images.unsplash.com/photo-1490349708435-4adf6f5d48ce?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour les photographes mariage et lifestyle.',
        demoUrl: 'https://example.com/demo-atelier-lumiere',
      },
    ],
  },
  {
    slug: 'tech',
    label: 'Tech / Startup',
    description: 'Présenter la vision produit avec une forte dimension conversion.',
    accent: '#54D2D2',
    icon: LuSparkles,
    heroImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    demos: [
      {
        id: 'quantum',
        title: 'Quantum SaaS',
        style: 'Gradients lumineux, courbes KPI, CTA pricing sticky.',
        image:
          'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour les plateformes SaaS B2B qui visent une levée.',
        demoUrl: 'https://example.com/demo-quantum-saas',
      },
      {
        id: 'neura',
        title: 'Neura Labs',
        style: 'Glassmorphism, storytelling produit, modules features.',
        image:
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
        summary: 'Parfait pour les startups deep-tech & IA.',
        demoUrl: 'https://example.com/demo-neura-labs',
      },
      {
        id: 'pulsepay',
        title: 'PulsePay',
        style: 'Dashboard preview, micro-animations, trust badges.',
        image:
          'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80',
        summary: 'Pour les fintech en quête de crédibilité.',
        demoUrl: 'https://example.com/demo-pulsepay',
      },
    ],
  },
];

