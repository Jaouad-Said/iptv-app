const number = "212621419144";
const messages = {"default":"Hello! I am interested in your IPTV service.","pricing":"Hello! I would like to know more about your pricing plans.","reseller":"Hello! I am interested in your reseller program.","affiliate":"Hello! I want to learn about your affiliate program.","trial":"Hello! I would like to request a free trial.","extend":"Hello! I would like to extend my subscription."};
const whatsappData = {
  number,
  messages,
};

const WHATSAPP_CONFIG = whatsappData;
function getWhatsAppUrl(key = "default") {
  const msg = WHATSAPP_CONFIG.messages[key];
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(msg)}`;
}

const en = {
  nav: {
    home: "Home",
    pricing: "Pricing",
    reseller: "Reseller",
    affiliate: "Affiliate",
    faq: "FAQ",
    blog: "Blog",
    getPackage: "Get Package"
  },
  hero: {
    headline: "Watch Smarter with {brand}",
    subheadline: "Enjoy seamless IPTV with reliable performance, crystal-clear quality, and entertainment for every taste — anytime, anywhere.",
    cta_primary: "Contact Us on WhatsApp",
    cta_secondary: "Discover Our Plans",
    ticker: [
      "Streaming reinvented — one subscription for all entertainment",
      "Enjoy thousands of live channels & movies instantly",
      "Experience 4K quality without limits",
      "All your favorite content — one subscription",
      "Watch anywhere, anytime — no buffering"
    ]
  },
  howItWorks: {
    title: "How {brand} Works",
    steps: [
      {
        number: "01",
        title: "Choose Your Plan",
        description: "Select a Single or Multi-connection plan that fits your needs. Instant access as soon as your order is confirmed.",
        cta: "Try 1 Day — All Access Included"
      },
      {
        number: "02",
        title: "Get Access & Guided Setup",
        description: "We guide you through setup in approximately 5 minutes. Our team is available every day from 09:00 to midnight.",
        cta: "Contact on WhatsApp"
      },
      {
        number: "03",
        title: "Enjoy on Any Device",
        description: "Watch on your Smart TV, IPTV box, smartphone, tablet, or laptop. One subscription, all your screens.",
        cta: null
      }
    ]
  },
  whyUs: {
    title: "Why Choose {brand}",
    features: [
      {
        icon: "⚡",
        title: "Instant Activation",
        description: "Start watching within minutes of your order."
      },
      {
        icon: "📺",
        title: "Works Everywhere",
        description: "Smart TV, IPTV box, smartphone, tablet, and laptop."
      },
      {
        icon: "🎬",
        title: "Huge Selection",
        description: "Thousands of channels and a massive VOD catalog."
      },
      {
        icon: "💬",
        title: "Human Support",
        description: "Available every day from 09:00 to midnight."
      },
      {
        icon: "🔒",
        title: "Secure & Optimized",
        description: "Protected connections and smooth performance."
      },
      {
        icon: "✅",
        title: "7-Day Money-Back",
        description: "Try risk-free. Not satisfied? We refund you."
      }
    ]
  },
  plans: {
    title: "Choose Your Package",
    subtitle_single: "Simple, affordable access for one device — ideal for personal use.",
    subtitle_multi: "Multiple simultaneous connections — perfect for families or businesses.",
    tab_single: "1 Device / 1 Connection",
    tab_multi: "Multiple Connections",
    per_month: "/mo",
    best_value: "Best Value",
    get_package: "Get Package",
    instant_activation: "Instant Activation",
    original_price: "Was",
    devices: "{count} Devices",
    features: {
      channels: "Thousands of international channels (HD/FHD/4K & UHD)",
      vod: "Thousands of movies & series (FHD, 4K & HDR)",
      adult: "Adult +18 content included",
      vpn: "Integrated VPN technology",
      devices: "Works on TV, IPTV box, smartphone, tablet, laptop",
      multilingual: "Many titles available in multiple languages",
      subtitles: "Subtitles available",
      vod_updated: "VOD catalog updated regularly",
      catchup: "Catch-Up on most channels",
      epg: "EPG (TV guide) on most channels"
    },
    more_details: "More details",
    less_details: "Less details"
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "Does one account support multiple devices?",
        a: "Our single-connection plans support one device at a time. For simultaneous viewing on multiple devices, check our Multi-Connection plans on the pricing page."
      },
      {
        q: "Do you offer a free trial?",
        a: "Yes! Contact us on WhatsApp and we can provide a short trial so you can verify quality before purchasing."
      },
      {
        q: "How does WhatsApp ordering work?",
        a: 'Simply tap "Get Package" or message us on WhatsApp. Tell us which plan you want and we will guide you through activation — typically done in under 5 minutes.'
      },
      {
        q: "How long does delivery take?",
        a: "Activation is instant — you receive your credentials within minutes of order confirmation."
      },
      {
        q: "What countries are included?",
        a: "Our catalog includes channels and VOD from hundreds of countries worldwide including Europe, Middle East, North Africa, and more."
      },
      {
        q: "Will my subscription renew automatically?",
        a: "No. Subscriptions do not renew automatically. You will be notified before expiry and can renew when convenient."
      },
      {
        q: "Do you have a referral program?",
        a: "Yes! Check our Affiliate page. Invite a friend who subscribes for 12+ months and receive 1 free month added to your account."
      }
    ]
  },
  contact: {
    title: "Still have questions?",
    subtitle: "We reply on WhatsApp usually within minutes.",
    cta_whatsapp: "Message us on WhatsApp",
    open_label: "Open",
    closed_label: "Closed",
    hours: "Available 09:00 – 00:00 daily"
  },
  footer: {
    tagline: "Seamless IPTV, premium stability, and friendly human support.",
    copyright: "© {year} {brand}. All rights reserved.",
    services: "Services",
    help: "Help",
    legal: "Legal",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    refund: "Refund Policy"
  },
  reseller: {
    title: "Start Your Own IPTV Business",
    subtitle: "Low entry cost, powerful servers, and dedicated support to help you scale.",
    cta_primary: "Contact Us on WhatsApp",
    why_title: "Why Become a Reseller?",
    packages_title: "Reseller Packages",
    credit_note: "Each credit = 1 year of service for one connection",
    credits_never_expire: "Credits never expire",
    free_trials: "Free trials every day",
    own_panel: "Your own reseller panel",
    all_features: "All premium features included",
    tiers: {
      diamond: "Diamond",
      gold: "Gold"
    }
  },
  affiliate: {
    title: "Invite Friends. Get Rewarded.",
    subtitle: "Invite someone to {brand}. Once their purchase is confirmed, we add your reward to your subscription.",
    how_title: "How It Works",
    steps: [
      {
        title: "Tell Us Who You Invited",
        description: "Contact support with both email addresses to confirm the referral."
      },
      {
        title: "Friend Buys 12+ Months",
        description: "You earn 1 free month per 12 months your friend purchases. 24 months = 2 free months, etc."
      },
      {
        title: "Get Rewarded",
        description: "Your subscription is extended by the earned free months automatically."
      }
    ],
    cta: "Contact Support on WhatsApp",
    terms_title: "Program Terms",
    terms: [
      "1 free month per 12 months purchased by your invited friend",
      "One reward per eligible referred customer",
      "Support confirms referral via email verification"
    ]
  },
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Join thousands of satisfied viewers around the world.",
    reviews: [
      {
        quote: "Amazing service! Crystal clear quality and the setup took only 3 minutes.",
        author: "Ahmed",
        flag: "🇦🇪",
        country: "UAE",
        stars: 5
      },
      {
        quote: "I switched from cable TV and I'm saving so much money. Over 10,000 channels!",
        author: "Marie",
        flag: "🇫🇷",
        country: "France",
        stars: 5
      },
      {
        quote: "Best IPTV provider I've tried. Support team is always helpful and responsive.",
        author: "James",
        flag: "🇬🇧",
        country: "UK",
        stars: 5
      }
    ]
  },
  lang_modal: {
    title: "Choose your language",
    subtitle: "Select your preferred language to continue."
  },
  duration: {
    "1m": "1 Month",
    "3m": "3 Months",
    "6m": "6 Months",
    "1y": "1 Year"
  },
  common: {
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    email: "Email",
    close: "Close",
    open_menu: "Open menu",
    close_menu: "Close menu",
    dark_mode: "Dark mode",
    light_mode: "Light mode",
    loading: "Loading..."
  }
};

const fr = {
  nav: {
    home: "Accueil",
    pricing: "Tarifs",
    reseller: "Revendeur",
    affiliate: "Affilié",
    faq: "FAQ",
    blog: "Blog",
    getPackage: "Obtenir un forfait"
  },
  hero: {
    headline: "Regardez plus intelligemment avec {brand}",
    subheadline: "Profitez d'un IPTV fluide avec des performances fiables, une qualité cristalline et des divertissements pour tous les goûts — n'importe quand, n'importe où.",
    cta_primary: "Nous contacter sur WhatsApp",
    cta_secondary: "Découvrir nos forfaits",
    ticker: [
      "Le streaming réinventé — un abonnement pour tout divertissement",
      "Profitez de milliers de chaînes et films instantanément",
      "Vivez la qualité 4K sans limites",
      "Tout votre contenu préféré — un seul abonnement",
      "Regardez partout, à tout moment — sans interruption"
    ]
  },
  howItWorks: {
    title: "Comment fonctionne {brand}",
    steps: [
      {
        number: "01",
        title: "Choisissez votre forfait",
        description: "Sélectionnez un forfait simple ou multi-connexion selon vos besoins. Accès instantané dès confirmation de votre commande.",
        cta: "Essayer 1 jour — Accès complet inclus"
      },
      {
        number: "02",
        title: "Accès & configuration guidée",
        description: "Nous vous guidons dans la configuration en environ 5 minutes. Notre équipe est disponible tous les jours de 09h à minuit.",
        cta: "Contacter via WhatsApp"
      },
      {
        number: "03",
        title: "Profitez sur tous vos appareils",
        description: "Regardez sur votre Smart TV, box IPTV, smartphone, tablette ou ordinateur portable. Un abonnement, tous vos écrans.",
        cta: null
      }
    ]
  },
  whyUs: {
    title: "Pourquoi choisir {brand}",
    features: [
      {
        icon: "⚡",
        title: "Activation instantanée",
        description: "Commencez à regarder en quelques minutes après votre commande."
      },
      {
        icon: "📺",
        title: "Fonctionne partout",
        description: "Smart TV, box IPTV, smartphone, tablette et ordinateur portable."
      },
      {
        icon: "🎬",
        title: "Immense catalogue",
        description: "Des milliers de chaînes et un catalogue VOD massif."
      },
      {
        icon: "💬",
        title: "Support humain",
        description: "Disponible tous les jours de 09h à minuit."
      },
      {
        icon: "🔒",
        title: "Sécurisé & optimisé",
        description: "Connexions protégées et performances fluides."
      },
      {
        icon: "✅",
        title: "Remboursement 7 jours",
        description: "Essayez sans risque. Pas satisfait ? Nous vous remboursons."
      }
    ]
  },
  plans: {
    title: "Choisissez votre forfait",
    subtitle_single: "Accès simple et abordable pour un appareil — idéal pour un usage personnel.",
    subtitle_multi: "Connexions simultanées multiples — parfait pour les familles ou entreprises.",
    tab_single: "1 Appareil / 1 Connexion",
    tab_multi: "Connexions multiples",
    per_month: "/mois",
    best_value: "Meilleur rapport",
    get_package: "Obtenir le forfait",
    instant_activation: "Activation instantanée",
    original_price: "Était",
    devices: "{count} Appareils",
    features: {
      channels: "Des milliers de chaînes internationales (HD/FHD/4K & UHD)",
      vod: "Des milliers de films & séries (FHD, 4K & HDR)",
      adult: "Contenu adulte +18 inclus",
      vpn: "Technologie VPN intégrée",
      devices: "Fonctionne sur TV, box IPTV, smartphone, tablette, PC",
      multilingual: "Nombreux titres disponibles en plusieurs langues",
      subtitles: "Sous-titres disponibles",
      vod_updated: "Catalogue VOD mis à jour régulièrement",
      catchup: "Catch-Up sur la plupart des chaînes",
      epg: "EPG (guide TV) sur la plupart des chaînes"
    },
    more_details: "Plus de détails",
    less_details: "Moins de détails"
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Un compte supporte-t-il plusieurs appareils ?",
        a: "Nos forfaits simple connexion supportent un appareil à la fois. Pour regarder sur plusieurs appareils simultanément, consultez nos forfaits Multi-Connexion."
      },
      {
        q: "Proposez-vous un essai gratuit ?",
        a: "Oui ! Contactez-nous sur WhatsApp et nous pouvons vous fournir un court essai pour vérifier la qualité avant d'acheter."
      },
      {
        q: "Comment fonctionne la commande via WhatsApp ?",
        a: `Tapez simplement "Obtenir le forfait" ou envoyez-nous un message sur WhatsApp. Dites-nous quel forfait vous souhaitez et nous vous guidons dans l'activation — généralement en moins de 5 minutes.`
      },
      {
        q: "Combien de temps prend la livraison ?",
        a: "L'activation est instantanée — vous recevez vos identifiants en quelques minutes après la confirmation de commande."
      },
      {
        q: "Quels pays sont inclus ?",
        a: "Notre catalogue inclut des chaînes et VOD de centaines de pays à travers le monde, notamment l'Europe, le Moyen-Orient, l'Afrique du Nord et plus encore."
      },
      {
        q: "Mon abonnement se renouvelle-t-il automatiquement ?",
        a: "Non. Les abonnements ne se renouvellent pas automatiquement. Vous serez notifié avant l'expiration et pourrez renouveler quand vous le souhaitez."
      },
      {
        q: "Avez-vous un programme de parrainage ?",
        a: "Oui ! Consultez notre page Affilié. Invitez un ami qui s'abonne pour 12+ mois et recevez 1 mois gratuit ajouté à votre compte."
      }
    ]
  },
  contact: {
    title: "Encore des questions ?",
    subtitle: "Nous répondons sur WhatsApp généralement en quelques minutes.",
    cta_whatsapp: "Nous écrire sur WhatsApp",
    open_label: "Ouvert",
    closed_label: "Fermé",
    hours: "Disponible de 09h00 à 00h00 tous les jours"
  },
  footer: {
    tagline: "IPTV fluide, stabilité premium et support humain disponible.",
    copyright: "© {year} {brand}. Tous droits réservés.",
    services: "Services",
    help: "Aide",
    legal: "Légal",
    contact: "Contact",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    refund: "Politique de remboursement"
  },
  reseller: {
    title: "Lancez votre propre activité IPTV",
    subtitle: "Faible coût d'entrée, serveurs puissants et support dédié pour vous aider à évoluer.",
    cta_primary: "Nous contacter sur WhatsApp",
    why_title: "Pourquoi devenir revendeur ?",
    packages_title: "Forfaits revendeurs",
    credit_note: "Chaque crédit = 1 an de service pour une connexion",
    credits_never_expire: "Les crédits n'expirent jamais",
    free_trials: "Essais gratuits quotidiens",
    own_panel: "Votre propre panneau revendeur",
    all_features: "Toutes les fonctionnalités premium incluses",
    tiers: {
      diamond: "Diamant",
      gold: "Or"
    }
  },
  affiliate: {
    title: "Invitez des amis. Soyez récompensé.",
    subtitle: "Invitez quelqu'un sur {brand}. Une fois leur achat confirmé, nous ajoutons votre récompense à votre abonnement.",
    how_title: "Comment ça marche",
    steps: [
      {
        title: "Dites-nous qui vous avez invité",
        description: "Contactez le support avec les deux adresses e-mail pour confirmer le parrainage."
      },
      {
        title: "Votre ami achète 12+ mois",
        description: "Vous gagnez 1 mois gratuit par 12 mois achetés par votre ami. 24 mois = 2 mois gratuits, etc."
      },
      {
        title: "Soyez récompensé",
        description: "Votre abonnement est prolongé automatiquement des mois gratuits gagnés."
      }
    ],
    cta: "Contacter le support sur WhatsApp",
    terms_title: "Conditions du programme",
    terms: [
      "1 mois gratuit par 12 mois achetés par votre ami parrainé",
      "Une récompense par client parrainé éligible",
      "Le support confirme le parrainage via vérification e-mail"
    ]
  },
  testimonials: {
    title: "Ce que disent nos clients",
    subtitle: "Rejoignez des milliers de spectateurs satisfaits à travers le monde.",
    reviews: [
      {
        quote: "Service incroyable ! Qualité limpide et la configuration n'a pris que 3 minutes.",
        author: "Ahmed",
        flag: "🇦🇪",
        country: "EAU",
        stars: 5
      },
      {
        quote: "J'ai quitté le câble et j'économise énormément. Plus de 10 000 chaînes !",
        author: "Marie",
        flag: "🇫🇷",
        country: "France",
        stars: 5
      },
      {
        quote: "Le meilleur fournisseur IPTV que j'ai essayé. Le support est toujours réactif et serviable.",
        author: "James",
        flag: "🇬🇧",
        country: "Royaume-Uni",
        stars: 5
      }
    ]
  },
  lang_modal: {
    title: "Choisissez votre langue",
    subtitle: "Sélectionnez votre langue préférée pour continuer."
  },
  duration: {
    "1m": "1 Mois",
    "3m": "3 Mois",
    "6m": "6 Mois",
    "1y": "1 An"
  },
  common: {
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    email: "E-mail",
    close: "Fermer",
    open_menu: "Ouvrir le menu",
    close_menu: "Fermer le menu",
    dark_mode: "Mode sombre",
    light_mode: "Mode clair",
    loading: "Chargement..."
  }
};

const ar = {
  nav: {
    home: "الرئيسية",
    pricing: "الأسعار",
    reseller: "إعادة البيع",
    affiliate: "الإحالة",
    faq: "الأسئلة الشائعة",
    blog: "المدونة",
    getPackage: "احصل على الباقة"
  },
  hero: {
    headline: "شاهد بذكاء مع {brand}",
    subheadline: "استمتع بـ IPTV سلس مع أداء موثوق وجودة بلورية وترفيه لكل الأذواق — في أي وقت وأي مكان.",
    cta_primary: "تواصل معنا على واتساب",
    cta_secondary: "اكتشف باقاتنا",
    ticker: [
      "البث مُعاد ابتكاره — اشتراك واحد لكل الترفيه",
      "استمتع بآلاف القنوات والأفلام فورًا",
      "جودة 4K بلا حدود",
      "كل محتواك المفضل — اشتراك واحد",
      "شاهد في أي مكان وأي وقت — بلا انقطاع"
    ]
  },
  howItWorks: {
    title: "كيف يعمل {brand}",
    steps: [
      {
        number: "01",
        title: "اختر باقتك",
        description: "اختر باقة اتصال واحد أو متعدد تناسب احتياجاتك. وصول فوري بمجرد تأكيد طلبك.",
        cta: "جرب يومًا واحدًا — وصول كامل مشمول"
      },
      {
        number: "02",
        title: "الوصول والإعداد الموجّه",
        description: "نرشدك خلال الإعداد في حوالي 5 دقائق. فريقنا متاح كل يوم من الساعة 9 صباحًا حتى منتصف الليل.",
        cta: "تواصل عبر واتساب"
      },
      {
        number: "03",
        title: "استمتع على أي جهاز",
        description: "شاهد على التلفاز الذكي، وجهاز IPTV، والهاتف، والجهاز اللوحي، والحاسوب المحمول. اشتراك واحد، جميع شاشاتك.",
        cta: null
      }
    ]
  },
  whyUs: {
    title: "لماذا تختار {brand}",
    features: [
      {
        icon: "⚡",
        title: "تفعيل فوري",
        description: "ابدأ المشاهدة في غضون دقائق من طلبك."
      },
      {
        icon: "📺",
        title: "يعمل في كل مكان",
        description: "التلفاز الذكي، جهاز IPTV، الهاتف، الجهاز اللوحي والحاسوب المحمول."
      },
      {
        icon: "🎬",
        title: "مكتبة ضخمة",
        description: "آلاف القنوات ومكتبة VOD ضخمة."
      },
      {
        icon: "💬",
        title: "دعم بشري",
        description: "متاح كل يوم من الساعة 9 صباحًا حتى منتصف الليل."
      },
      {
        icon: "🔒",
        title: "آمن ومحسَّن",
        description: "اتصالات محمية وأداء سلس."
      },
      {
        icon: "✅",
        title: "استرداد المال خلال 7 أيام",
        description: "جرب بدون مخاطرة. غير راضٍ؟ نعيد إليك أموالك."
      }
    ]
  },
  plans: {
    title: "اختر باقتك",
    subtitle_single: "وصول بسيط وبأسعار معقولة لجهاز واحد — مثالي للاستخدام الشخصي.",
    subtitle_multi: "اتصالات متزامنة متعددة — مثالي للعائلات والشركات.",
    tab_single: "جهاز واحد / اتصال واحد",
    tab_multi: "اتصالات متعددة",
    per_month: "/شهر",
    best_value: "الأفضل قيمة",
    get_package: "احصل على الباقة",
    instant_activation: "تفعيل فوري",
    original_price: "كان",
    devices: "{count} أجهزة",
    features: {
      channels: "آلاف القنوات الدولية (HD/FHD/4K و UHD)",
      vod: "آلاف الأفلام والمسلسلات (FHD, 4K و HDR)",
      adult: "محتوى للبالغين +18 مشمول",
      vpn: "تقنية VPN مدمجة",
      devices: "يعمل على التلفاز، جهاز IPTV، الهاتف، الجهاز اللوحي، الحاسوب",
      multilingual: "العديد من العناوين متاحة بلغات متعددة",
      subtitles: "ترجمات متاحة",
      vod_updated: "مكتبة VOD محدّثة بانتظام",
      catchup: "Catch-Up على معظم القنوات",
      epg: "دليل البرامج (EPG) على معظم القنوات"
    },
    more_details: "مزيد من التفاصيل",
    less_details: "تفاصيل أقل"
  },
  faq: {
    title: "الأسئلة الشائعة",
    items: [
      {
        q: "هل يدعم الحساب الواحد أجهزة متعددة؟",
        a: "باقات الاتصال الواحد تدعم جهازًا واحدًا في كل مرة. للمشاهدة على أجهزة متعددة في آنٍ واحد، تحقق من باقات الاتصالات المتعددة."
      },
      {
        q: "هل تقدمون تجربة مجانية؟",
        a: "نعم! تواصل معنا على واتساب وسنوفر لك تجربة قصيرة للتحقق من الجودة قبل الشراء."
      },
      {
        q: "كيف يعمل الطلب عبر واتساب؟",
        a: 'ببساطة اضغط على "احصل على الباقة" أو راسلنا على واتساب. أخبرنا بالباقة التي تريدها وسنرشدك خلال التفعيل — عادةً في أقل من 5 دقائق.'
      },
      {
        q: "كم يستغرق وقت التسليم؟",
        a: "التفعيل فوري — تستلم بيانات الدخول في غضون دقائق من تأكيد الطلب."
      },
      {
        q: "ما الدول المشمولة؟",
        a: "مكتبتنا تشمل قنوات ومحتوى VOD من مئات الدول حول العالم بما فيها أوروبا والشرق الأوسط وشمال أفريقيا والمزيد."
      },
      {
        q: "هل يتجدد اشتراكي تلقائيًا؟",
        a: "لا. لا تتجدد الاشتراكات تلقائيًا. ستُبلَّغ قبل انتهاء الاشتراك ويمكنك التجديد عند الرغبة."
      },
      {
        q: "هل لديكم برنامج إحالة؟",
        a: "نعم! تحقق من صفحة الإحالة. ادعُ صديقًا يشترك لمدة 12+ شهرًا واحصل على شهر مجاني يُضاف لحسابك."
      }
    ]
  },
  contact: {
    title: "لديك أسئلة أخرى؟",
    subtitle: "نرد على واتساب عادةً في غضون دقائق.",
    cta_whatsapp: "راسلنا على واتساب",
    open_label: "مفتوح",
    closed_label: "مغلق",
    hours: "متاح من 09:00 حتى 00:00 يوميًا"
  },
  footer: {
    tagline: "IPTV سلس، استقرار متميز، ودعم بشري ودود.",
    copyright: "© {year} {brand}. جميع الحقوق محفوظة.",
    services: "الخدمات",
    help: "المساعدة",
    legal: "القانونية",
    contact: "اتصل بنا",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    refund: "سياسة الاسترداد"
  },
  reseller: {
    title: "ابدأ مشروع IPTV الخاص بك",
    subtitle: "تكلفة دخول منخفضة، خوادم قوية، ودعم مخصص لمساعدتك على النمو.",
    cta_primary: "تواصل معنا على واتساب",
    why_title: "لماذا تصبح موزعًا؟",
    packages_title: "باقات الموزعين",
    credit_note: "كل رصيد = سنة خدمة لاتصال واحد",
    credits_never_expire: "الرصيد لا تنتهي صلاحيته أبدًا",
    free_trials: "تجارب مجانية يومية",
    own_panel: "لوحة تحكم خاصة بك",
    all_features: "جميع المميزات المتميزة مشمولة",
    tiers: {
      diamond: "ألماس",
      gold: "ذهب"
    }
  },
  affiliate: {
    title: "ادعُ أصدقاءك. احصل على مكافأة.",
    subtitle: "ادعُ شخصًا إلى {brand}. بمجرد تأكيد شرائه، نضيف مكافأتك إلى اشتراكك.",
    how_title: "كيف يعمل البرنامج",
    steps: [
      {
        title: "أخبرنا بمن دعوت",
        description: "تواصل مع الدعم بعنواني البريد الإلكتروني لتأكيد الإحالة."
      },
      {
        title: "صديقك يشتري اشتراك 12+ شهر",
        description: "تكسب شهرًا مجانيًا لكل 12 شهرًا يشتريها صديقك. 24 شهرًا = شهران مجانيان، إلخ."
      },
      {
        title: "احصل على مكافأتك",
        description: "يمتد اشتراكك تلقائيًا بالأشهر المجانية المكتسبة."
      }
    ],
    cta: "تواصل مع الدعم على واتساب",
    terms_title: "شروط البرنامج",
    terms: [
      "شهر مجاني لكل 12 شهرًا يشتريها صديقك المُحال",
      "مكافأة واحدة لكل عميل مؤهل تمت إحالته",
      "يؤكد الدعم الإحالة عبر التحقق من البريد الإلكتروني"
    ]
  },
  testimonials: {
    title: "ماذا يقول عملاؤنا",
    subtitle: "انضم إلى آلاف المشاهدين الراضين حول العالم.",
    reviews: [
      {
        quote: "خدمة مذهلة! جودة عالية والإعداد استغرق 3 دقائق فقط.",
        author: "أحمد",
        flag: "🇦🇪",
        country: "الإمارات",
        stars: 5
      },
      {
        quote: "انتقلت من تلفزيون الكابل وأوفر الكثير من المال. أكثر من 10,000 قناة!",
        author: "ماري",
        flag: "🇫🇷",
        country: "فرنسا",
        stars: 5
      },
      {
        quote: "أفضل مزود IPTV جربته. فريق الدعم دائمًا مفيد وسريع الاستجابة.",
        author: "جيمس",
        flag: "🇬🇧",
        country: "بريطانيا",
        stars: 5
      }
    ]
  },
  lang_modal: {
    title: "اختر لغتك",
    subtitle: "اختر لغتك المفضلة للمتابعة."
  },
  duration: {
    "1m": "شهر واحد",
    "3m": "3 أشهر",
    "6m": "6 أشهر",
    "1y": "سنة كاملة"
  },
  common: {
    whatsapp: "واتساب",
    telegram: "تيليغرام",
    email: "البريد الإلكتروني",
    close: "إغلاق",
    open_menu: "فتح القائمة",
    close_menu: "إغلاق القائمة",
    dark_mode: "الوضع الداكن",
    light_mode: "الوضع الفاتح",
    loading: "جارٍ التحميل..."
  }
};

export { WHATSAPP_CONFIG as W, ar as a, en as e, fr as f, getWhatsAppUrl as g };
