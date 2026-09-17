import { 
  SiteSettings, 
  Destination, 
  TouristPlace, 
  TourPackage, 
  Vehicle, 
  BlogPost, 
  BlogCategory 
} from '../types';

export const initialSiteSettings: SiteSettings = {
  businessName: "NE Dhaniya Tours & Travels",
  tagline: "Your Trusted Travel Partner for Northeast India & Bhutan",
  whatsappNumber: "919678290128",
  phoneNumber: "+91 96782 90128",
  secondaryPhoneNumber: "+91 98640 66495",
  email: "menin.ghy123@gmail.com",
  address: "Guwahati, Assam, India - 781001 (Gateway to Northeast India)",
  businessHours: "Monday - Sunday: 7:00 AM - 10:00 PM (WhatsApp Support 24/7)",
  socialLinks: {
    facebook: "https://facebook.com/nedhaniyatours",
    instagram: "https://instagram.com/nedhaniyatours",
    youtube: "https://youtube.com/@nedhaniyatours",
  },
  defaultMetaTitle: "NE Dhaniya Tours & Travels | Northeast India Tour Packages, Car Rental & Taxi Services",
  defaultMetaDescription: "Explore Assam, Meghalaya, Arunachal, Sikkim, Nagaland & Bhutan with NE Dhaniya Tours & Travels. Personal & sharing tours, premium car rental, hotel booking & 24/7 local support.",
  defaultOgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  websiteName: "NE Dhaniya Tours & Travels",
};

export const initialDestinations: Destination[] = [
  {
    id: "meghalaya",
    name: "Meghalaya",
    slug: "meghalaya",
    state: "Meghalaya",
    shortDescription: "The Abode of Clouds featuring roaring waterfalls, living root bridges, crystal clear rivers, and misty hill stations.",
    description: "Meghalaya, aptly known as the 'Abode of Clouds', is one of the most mesmerizing states in Northeast India. From the colonial charm and vibrant cafes of Shillong to the dramatic canyons and plunge falls of Cherrapunji (Sohra), the crystal-clear waters of Dawki's Umngot River, and the cleanest village of Mawlynnong, Meghalaya offers an unforgettable communion with untouched nature.",
    heroImage: "/images/meghalaya.png",
    gallery: [
      "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
    ],
    bestTimeToVisit: "October to April (for clear skies, trekking & crystal clear river waters); June to September for roaring monsoons and dramatic waterfalls.",
    howToReach: {
      byAir: "Nearest major international/domestic airport is Lokpriya Gopinath Bordoloi International Airport (GAU) in Guwahati (120 km from Shillong). Shillong Airport at Umroi (SHL) has select regional connections.",
      byRail: "Guwahati Railway Station (GHY) is the nearest railway terminal with pan-India connectivity. From Guwahati, dedicated cabs and sharing vehicles are readily available.",
      byRoad: "Smooth 4-lane NH 6 connects Guwahati to Shillong in approximately 2.5 to 3 hours with picturesque views of Umiam Lake along the way."
    },
    travelTips: [
      "Carry sturdy walking shoes with good grip for root bridge treks and waterfall trails.",
      "A lightweight rain jacket or umbrella is handy even in dry months due to sudden mountain mist.",
      "Respect local Khasi, Jaintia, and Garo customs and keep sacred groves pristine by not littering.",
      "Book your private cab or shared travel in advance during peak holiday seasons (October to January)."
    ],
    popularPlaces: [
      "Shillong",
      "Cherrapunji (Sohra)",
      "Dawki",
      "Mawlynnong",
      "Laitlum Canyon",
      "Nongriat & Double Decker Root Bridge",
      "Krang Suri Falls",
      "Shnongpdeng",
      "Umiam Lake"
    ],
    faqs: [
      {
        question: "How many days are recommended for a Meghalaya tour?",
        answer: "A 5 to 7 days trip is ideal to comfortably explore Shillong, Cherrapunji, Dawki, Mawlynnong, and scenic waterfalls without rushing."
      },
      {
        question: "Can I choose between Personal and Sharing tours in Meghalaya?",
        answer: "Yes! NE Dhaniya Tours & Travels offers private vehicles (Innova Crysta, Sedan, Traveler) for families/couples, as well as economical sharing tour options for solo travelers and students."
      },
      {
        question: "Is Inner Line Permit (ILP) required for Indian tourists visiting Meghalaya?",
        answer: "No, Indian citizens currently do not need an Inner Line Permit (ILP) to visit Meghalaya. Valid government photo ID (Aadhaar or Voter ID) is sufficient."
      }
    ],
    seoTitle: "Meghalaya Tour Packages, Taxi & Car Rental | NE Dhaniya Tours & Travels",
    seoDescription: "Book custom Meghalaya tour packages, Shillong taxi services & car rentals. Explore Cherrapunji, Dawki, Living Root Bridges & waterfalls with local Northeast experts.",
    status: "published",
    featured: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "assam",
    name: "Assam",
    slug: "assam",
    state: "Assam",
    shortDescription: "The gateway to Northeast India, famous for one-horned rhinos in Kaziranga, lush tea gardens, Brahmaputra river & Kamakhya Temple.",
    description: "Assam is the vibrant heart and natural gateway to Northeast India. Blessed by the mighty Brahmaputra river, Assam offers world-renowned wildlife sanctuaries like Kaziranga and Manas, the sacred spiritual aura of Maa Kamakhya Temple atop Nilachal Hill, the world's largest river island Majuli, the tea capital Jorhat, and historical Ahom kingdom monuments in Sivasagar.",
    heroImage: "/images/assam.jpg",
    bestTimeToVisit: "November to April, when Kaziranga and Manas National Parks are fully open for elephant and jeep safaris and the weather is pleasantly cool.",
    howToReach: {
      byAir: "Guwahati Airport (GAU) operates non-stop flights from Delhi, Mumbai, Kolkata, Bangalore, and major Indian metros. Other regional airports include Dibrugarh, Jorhat, and Tezpur.",
      byRail: "Guwahati (GHY) and Kamakhya (KYQ) are well-connected railway junctions with Rajdhani, Vande Bharat, and express trains from all major Indian cities.",
      byRoad: "Assam has an extensive network of national highways connecting all 7 sister states and West Bengal seamlessly."
    },
    travelTips: [
      "Book Kaziranga safari zones in advance, especially central (Kohora) and western (Bagori) ranges.",
      "Wear neutral, earth-toned clothing (khaki, olive green, beige) during jungle safaris.",
      "Experience local Assamese traditional thali and fresh Assam orthodox black tea."
    ],
    popularPlaces: [
      "Guwahati",
      "Kamakhya Temple",
      "Kaziranga National Park",
      "Manas National Park",
      "Majuli Island",
      "Sivasagar",
      "Jorhat",
      "Haflong",
      "Pobitora Wildlife Sanctuary"
    ],
    faqs: [
      {
        question: "When is Kaziranga National Park open for tourists?",
        answer: "Kaziranga National Park officially opens from October/November to April or early May each year. It remains closed during the monsoon season for animal breeding and flood safety."
      },
      {
        question: "Can I book a car rental from Guwahati to Kaziranga or Shillong?",
        answer: "Yes, NE Dhaniya Tours provides dedicated outstation cabs, Innova Crysta, Sedans, and Tempo Travelers directly from Guwahati Airport / Railway Station."
      }
    ],
    seoTitle: "Assam Tour Packages, Car Rental & Travel Services | NE Dhaniya Tours",
    seoDescription: "Discover Kaziranga National Park, Kamakhya Temple, Majuli & Assam tea gardens. Reliable taxi services, private cabs & customized Assam tour packages.",
    status: "published",
    featured: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    slug: "arunachal-pradesh",
    state: "Arunachal Pradesh",
    shortDescription: "The Land of the Dawn-Lit Mountains boasting snow-capped Himalayan passes, ancient Buddhist monasteries, Sela Pass & Tawang.",
    description: "Arunachal Pradesh is India's wildest and most pristine frontier. Ascending from the subtropical foothills of Bhalukpong into the alpine heights of Sela Pass (13,700 ft) and the spiritual sanctuary of Tawang Monastery, Arunachal enchants travellers with high-altitude lakes, sacred passes, vibrant tribal festivals in Ziro Valley, and dramatic Himalayan landscapes.",
    heroImage: "/images/Arunachal-Pradesh.jpg",
    bestTimeToVisit: "March to May (for blooming rhododendrons and pleasant weather) and October to February (for clear mountain vistas and winter snow in Tawang and Sela Pass).",
    howToReach: {
      byAir: "Fly to Guwahati Airport (GAU) or Donyi Polo Airport in Itanagar (HGI). Guwahati is the most popular starting point for road trips to Western Arunachal (Tawang circuit).",
      byRail: "Naharlagun Railway Station (near Itanagar) or Guwahati Railway Station. Most tourists take cabs from Guwahati or Tezpur.",
      byRoad: "The classic route runs from Guwahati / Tezpur through Bhalukpong, Bomdila, Dirang, Sela Pass to Tawang over well-maintained Trans-Arunachal highway sections."
    },
    travelTips: [
      "Inner Line Permit (ILP) is mandatory for all Indian citizens and Protected Area Permit (PAP) for foreign nationals. NE Dhaniya Tours arranges permits seamlessly.",
      "Acclimatize in Bomdila or Dirang before ascending to Tawang to avoid altitude sickness.",
      "Pack thermal innerwear, heavy woolens, and windproof jackets as temperatures drop near freezing around Sela Pass and Bumla."
    ],
    popularPlaces: [
      "Tawang",
      "Bomdila",
      "Dirang Valley",
      "Sela Pass",
      "Bumla Pass & Madhuri Lake",
      "Ziro Valley",
      "Nuranang Waterfalls (Jang Falls)",
      "Sangti Valley"
    ],
    faqs: [
      {
        question: "How do I get an Inner Line Permit (ILP) for Arunachal Pradesh?",
        answer: "ILP can be applied online with your passport photo and ID proof. When you book your tour with NE Dhaniya Tours, our team assists you with ILP and Bumla Pass permits."
      },
      {
        question: "How many days are required for the Guwahati to Tawang tour?",
        answer: "A minimum of 6 to 8 days is required to safely travel from Guwahati to Tawang and back with proper acclimatization stops in Bomdila or Dirang."
      }
    ],
    seoTitle: "Arunachal Pradesh Tour Packages & Tawang Taxi Service | NE Dhaniya",
    seoDescription: "Book Tawang tour packages, Guwahati to Tawang taxi service & Arunachal Pradesh car rentals. Explore Sela Pass, Bumla Pass & Ziro Valley with local expertise.",
    status: "published",
    featured: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "sikkim",
    name: "Sikkim",
    slug: "sikkim",
    state: "Sikkim",
    shortDescription: "Majestic kingdom of Mount Kanchenjunga, sacred glacial lakes like Gurudongmar, Yumthang Valley of Flowers, and serene Buddhist monasteries.",
    description: "Nestled in the shadow of Mount Kanchenjunga (the world's third-highest peak), Sikkim is a tranquil haven of Buddhist spirituality, high-altitude alpine meadows, and pristine valleys. From the bustling pedestrian streets of MG Marg in Gangtok to the icy heights of Gurudongmar Lake and the thermal springs of Yumthang Valley, Sikkim is an ethereal Himalayan paradise.",
    heroImage: "/images/sikkim.jpg",
    bestTimeToVisit: "March to June for vibrant spring flowers and mild weather; October to December for crystal-clear Kanchenjunga views and winter snow in North Sikkim.",
    howToReach: {
      byAir: "Bagdogra Airport (IXB) in West Bengal is the primary gateway (approx 4 hours drive to Gangtok). Pakyong Airport (PYG) operates weather-dependent regional flights.",
      byRail: "New Jalpaiguri Railway Station (NJP) is the main railhead connecting North Bengal and Sikkim to Delhi, Kolkata, and major hubs.",
      byRoad: "NH 10 winds along the Teesta river connecting Siliguri / NJP / Bagdogra directly to Gangtok."
    },
    travelTips: [
      "Carry passport-size photographs and voter ID/passport copies for North Sikkim and Nathula Pass permits.",
      "Stay hydrated and avoid strenuous exertion when reaching Gurudongmar Lake (17,800 ft).",
      "Sikkim is a 100% organic state—plastic bottles are restricted in North Sikkim, so carry reusable water flasks."
    ],
    popularPlaces: [
      "Gangtok",
      "North Sikkim (Lachen & Lachung)",
      "Yumthang Valley & Zero Point",
      "Gurudongmar Lake",
      "Tsomgo Lake & Nathula Pass",
      "Pelling & Skywalk",
      "Ravangla Buddha Park",
      "Namchi Chardham"
    ],
    faqs: [
      {
        question: "Can we visit Nathula Pass on all days?",
        answer: "Nathula Pass is open for Indian tourists on Wednesday, Thursday, Friday, Saturday, and Sunday, subject to weather conditions and army permits. It is closed on Mondays and Tuesdays."
      },
      {
        question: "What vehicles are used for North Sikkim (Lachung / Lachen)?",
        answer: "Due to rugged mountain terrain, North Sikkim strictly requires high-clearance 4x4 or robust vehicles such as Innova Crysta, Scorpio, or Bolero with experienced local hill drivers."
      }
    ],
    seoTitle: "Sikkim Tour Packages & Gangtok Taxi Service | NE Dhaniya Tours",
    seoDescription: "Experience Gangtok, North Sikkim, Lachung, Yumthang Valley & Nathula Pass. Book custom Sikkim tour packages and reliable car rentals with NE Dhaniya.",
    status: "published",
    featured: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "nagaland",
    name: "Nagaland",
    slug: "nagaland",
    state: "Nagaland",
    shortDescription: "Land of Festivals, brave warrior heritage, the rolling emerald slopes of Dzukou Valley, and the legendary Hornbill Festival.",
    description: "Nagaland is a land of vibrant indigenous cultures, untouched hills, and legendary hospitality. From the world-famous Hornbill Festival held every December at Kisama Heritage Village to the breathtaking rolling bamboo hills of Dzukou Valley and India's first green village Khonoma, Nagaland offers deeply immersive cultural and trekking experiences.",
    heroImage: "/images/nagaland.avif",
    bestTimeToVisit: "October to May. December is the most popular month for the iconic Hornbill Festival (Dec 1-10); June to September is ideal for the blooming Dzukou Lily in Dzukou Valley.",
    howToReach: {
      byAir: "Dimapur Airport (DMU) is the only civil airport in Nagaland, connected to Kolkata, Guwahati, and Delhi.",
      byRail: "Dimapur Railway Station (DMV) is on the main Lumding-Dibrugarh line with express connectivity.",
      byRoad: "From Dimapur, Kohima is located 74 km away via NH 29 (about 2.5 to 3 hours drive)."
    },
    travelTips: [
      "Inner Line Permit (ILP) is required for Indian domestic visitors and easily obtained online.",
      "Book accommodations months in advance if planning to attend the Hornbill Festival in December.",
      "Bring sturdy hiking boots if attempting the Dzukou Valley trek via Jakhama or Viswema routes."
    ],
    popularPlaces: [
      "Kohima",
      "Dzukou Valley",
      "Kisama Heritage Village (Hornbill)",
      "Khonoma Green Village",
      "Mokokchung",
      "Mon (Konyak Tribe Heritage)"
    ],
    faqs: [
      {
        question: "When is the Hornbill Festival celebrated?",
        answer: "The Hornbill Festival is held annually from December 1 to December 10 at Kisama Heritage Village near Kohima."
      },
      {
        question: "How difficult is the Dzukou Valley trek?",
        answer: "The Dzukou Valley trek is moderately challenging. The initial 1.5 to 2 hours climb through stone steps is steep, followed by a gentle, rewarding walk across the valley floor."
      }
    ],
    seoTitle: "Nagaland Tour Packages, Hornbill Festival & Dzukou Valley | NE Dhaniya",
    seoDescription: "Explore Nagaland with NE Dhaniya Tours. Tailored Kohima packages, Dzukou Valley trek support, Hornbill Festival tours & reliable Nagaland taxi services.",
    status: "published",
    featured: false,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "mizoram",
    name: "Mizoram",
    slug: "mizoram",
    state: "Mizoram",
    shortDescription: "The Land of the Blue Mountains, serene hill ridges, dramatic Vantawng Falls, and warm Mizo cultural traditions.",
    description: "Perched along tranquil mountain ridges, Mizoram is one of Northeast India's most peaceful, literate, and ecologically rich destinations. Featuring the lively cliffside capital of Aizawl, the panoramic ridge views of Reiek and Hmuifang, the roaring multi-tiered Vantawng Falls, and serene mountain lakes, Mizoram is a paradise for travelers seeking calm authenticity.",
    heroImage: "/images/mizoram.jpg",
    bestTimeToVisit: "October to April, when the weather is crisp, sunny, and ideal for road travel and village excursions.",
    howToReach: {
      byAir: "Lengpui Airport (AJL) near Aizawl has scheduled direct flights from Kolkata and Guwahati.",
      byRail: "Silchar in Assam or Bairabi in Mizoram are the nearest rail points.",
      byRoad: "NH 54 connects Aizawl with Silchar (approx 6-7 hours drive through lush mountain landscapes)."
    },
    travelTips: [
      "Inner Line Permit (ILP) is required for Indian citizens visiting Mizoram.",
      "Most shops and offices in Mizoram observe Sunday as a Sabbath and community day, so plan city sightseeing accordingly.",
      "Respect local community ethics and warm hospitality."
    ],
    popularPlaces: [
      "Aizawl",
      "Reiek Peak",
      "Hmuifang",
      "Vantawng Falls",
      "Tamdil Lake",
      "Champhai"
    ],
    faqs: [
      {
        question: "Is Inner Line Permit (ILP) required for Mizoram?",
        answer: "Yes, domestic tourists from India need an ILP to enter Mizoram, which can be acquired online or through liaison offices."
      }
    ],
    seoTitle: "Mizoram Tour Packages & Aizawl Car Rental | NE Dhaniya Tours",
    seoDescription: "Discover Aizawl, Reiek Peak, Vantawng Falls & Tamdil Lake. Custom Mizoram tour packages, comfortable car rentals & guided local itineraries.",
    status: "published",
    featured: false,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "tripura",
    name: "Tripura",
    slug: "tripura",
    state: "Tripura",
    shortDescription: "A realm of royal heritage, majestic water palaces like Neermahal, ancient rock carvings at Unakoti, and vibrant cultural sanctuaries.",
    description: "Tripura seamlessly blends regal princely heritage with dense archaeological wonders and spiritual temples. The gleaming white facade of Ujjayanta Palace, the floating marvel of Neermahal situated amidst Rudrasagar Lake, the colossal 7th-9th century Shiva rock reliefs at Unakoti, and the sacred Tripura Sundari Temple make it a fascinating historical and cultural stop in Northeast India.",
    heroImage: "/images/tripura.jpg",
    bestTimeToVisit: "October to March, when the climate is cool and comfortable for heritage palace sightseeing.",
    howToReach: {
      byAir: "Maharaja Bir Bikram Airport (IXA) in Agartala is Northeast India's second-busiest airport, with regular flights from Kolkata, Delhi, and Guwahati.",
      byRail: "Agartala Railway Station (AGTL) connects directly to New Delhi, Kolkata, and Guwahati via broad-gauge express trains.",
      byRoad: "NH 8 connects Agartala with Assam and the rest of India."
    },
    travelTips: [
      "Take a boat ride at Rudrasagar Lake to reach and explore Neermahal Palace.",
      "Unakoti requires moderate walking down stone steps; wear comfortable shoes.",
      "No special permit is required for Indian citizens visiting Tripura."
    ],
    popularPlaces: [
      "Agartala",
      "Ujjayanta Palace",
      "Neermahal Water Palace",
      "Unakoti Rock Carvings",
      "Jampui Hills",
      "Tripura Sundari Temple"
    ],
    faqs: [
      {
        question: "Is any permit needed to visit Tripura?",
        answer: "No, Indian citizens do not need any inner line permit to visit Tripura."
      }
    ],
    seoTitle: "Tripura Tour Packages & Agartala Taxi Service | NE Dhaniya Tours",
    seoDescription: "Visit Ujjayanta Palace, Neermahal, Unakoti & Jampui Hills. Book customized Tripura tour packages & private taxi rentals with NE Dhaniya Tours.",
    status: "published",
    featured: false,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "bhutan",
    name: "Bhutan",
    slug: "bhutan",
    state: "Bhutan",
    shortDescription: "The Land of the Thunder Dragon, Himalayan fortresses (Dzongs), cliffside Tiger's Nest Monastery, and high Gross National Happiness.",
    description: "Sharing friendly borders with Assam and West Bengal, the magical kingdom of Bhutan is a land of untouched Himalayan valleys, centuries-old Buddhist Dzongs, and serene mindfulness. From the iconic cliffside Paro Taktsang (Tiger's Nest) to the vibrant capital Thimphu, scenic Dochula Pass with 108 memorial stupas, and fertile Punakha Valley, Bhutan is an extraordinary international journey easily accessible from Northeast India.",
    heroImage: "/images/bhutan.jpg",
    bestTimeToVisit: "March to May (for pleasant weather and blooming valleys) and September to November (for clear skies, crisp mountain air, and colorful Tshechu festivals).",
    howToReach: {
      byAir: "Fly into Paro International Airport (PBH) on Drukair or Bhutan Airlines from Delhi, Kolkata, Guwahati, or Bagdogra.",
      byRail: "Nearest Indian railway stations are Hasimara (West Bengal) or Guwahati/Bongaigaon (Assam).",
      byRoad: "Cross overland via the border towns of Phuentsholing (from West Bengal) or Samdrup Jongkhar / Gelephu (directly accessible from Assam)."
    },
    travelTips: [
      "Indian nationals require a valid Indian Passport (with at least 6 months validity) or original Voter ID card to obtain entry permits.",
      "Sustainable Development Fee (SDF) applies for visitors as per Royal Government of Bhutan regulations (discounted rate for Indian nationals).",
      "Dress modestly when visiting Dzongs and temples (long sleeves, full pants/skirts, collared shirts)."
    ],
    popularPlaces: [
      "Thimphu",
      "Paro & Tiger's Nest (Taktsang)",
      "Punakha Dzong",
      "Dochula Pass",
      "Phobjikha Valley",
      "Haa Valley"
    ],
    faqs: [
      {
        question: "Can I take a road trip to Bhutan from Guwahati, Assam?",
        answer: "Yes! NE Dhaniya Tours operates direct cross-border vehicle transfers and guided Bhutan packages from Guwahati via Samdrup Jongkhar or Phuentsholing."
      },
      {
        question: "Is passport mandatory for Indians visiting Bhutan?",
        answer: "Indian citizens can travel to Bhutan with either a valid Indian Passport (min 6 months validity) OR an original Voter Identity Card issued by the Election Commission of India. Aadhaar is not accepted for entry permit issuance."
      }
    ],
    seoTitle: "Bhutan Tour Packages from India & Assam | NE Dhaniya Tours & Travels",
    seoDescription: "Book unforgettable Bhutan tour packages from Guwahati, Assam. Visit Paro Tiger's Nest, Thimphu, Punakha & Dochula Pass with complete permit & car assistance.",
    status: "published",
    featured: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  }
];

export const initialTouristPlaces: TouristPlace[] = [
  // MEGHALAYA PLACES
  {
    id: "shillong",
    name: "Shillong",
    slug: "shillong",
    destinationSlug: "meghalaya",
    destinationName: "Meghalaya",
    shortDescription: "The Scotland of the East featuring pine-covered hills, lively Police Bazar, Umiam Lake, and colonial charm.",
    description: "Shillong, the capital of Meghalaya, sits amidst pine-clad mountains and gentle rolling hills that earned it the moniker 'Scotland of the East'. With its vibrant music culture, cafe scene, bustling Police Bazar, scenic golf course, and historic heritage, Shillong serves as the primary base for exploring Meghalaya.",
    heroImage: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=80",
    topThingsToDo: [
      "Boating and sunset watching at picturesque Umiam Lake",
      "Shopping and tasting local street food at Police Bazar & Ward's Lake",
      "Visiting the multi-tiered Elephant Falls and Shillong Peak",
      "Exploring Don Bosco Museum for Northeast indigenous culture"
    ],
    bestTimeToVisit: "September to May for pleasant, cool mountain climate.",
    howToReach: {
      byAir: "Guwahati Airport (GAU) is 120 km away (approx 3 hours by car). Shillong Umroi Airport (SHL) has select regional flights.",
      byRail: "Guwahati Railway Station (GHY) is 100 km away.",
      byRoad: "NH 6 connects Guwahati to Shillong over a scenic 4-lane expressway."
    },
    travelTips: [
      "Peak morning and evening traffic in central Shillong can be busy; plan airport transfers with extra buffer.",
      "Try local Khasi dishes like Jadoh and freshly brewed organic coffee at Shillong cafes."
    ],
    faqs: [
      {
        question: "What is the taxi fare from Guwahati Airport to Shillong?",
        answer: "NE Dhaniya Tours offers direct Guwahati to Shillong private car transfers starting with competitive rates for Sedans, Innova Crysta, and sharing options."
      }
    ],
    seoTitle: "Shillong Tour & Travel Guide | Shillong Taxi Service | NE Dhaniya",
    seoDescription: "Plan your trip to Shillong, Meghalaya. Top tourist attractions, Guwahati to Shillong taxi fares, hotels, and custom travel packages with NE Dhaniya Tours.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "cherrapunji",
    name: "Cherrapunji (Sohra)",
    slug: "cherrapunji",
    destinationSlug: "meghalaya",
    destinationName: "Meghalaya",
    shortDescription: "Dramatic limestone gorges, misty canyons, Nohkalikai Falls, and living root bridges.",
    description: "Known locally as Sohra, Cherrapunji is globally famous for its historic rainfall records, dramatic cloud formations, and dramatic canyon drops. It is home to India's tallest plunge waterfall (Nohkalikai Falls), the mystical Seven Sisters Falls, Mawsmai limestone cave, and the trailheads descending to the legendary Double Decker Living Root Bridge.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    topThingsToDo: [
      "Marvel at the turquoise plunge pool of Nohkalikai Falls",
      "Explore the natural stalactites and stalagmites of Mawsmai Cave",
      "Witness Seven Sisters Falls cascades along the Bangladesh border plains",
      "Trek to the ancient Wei Sawdong three-tiered waterfall"
    ],
    bestTimeToVisit: "October to April for pleasant sightseeing; June to September for thunderous monsoon cascades.",
    howToReach: {
      byAir: "Guwahati Airport (approx 165 km).",
      byRail: "Guwahati Railway Station (approx 145 km).",
      byRoad: "Sohra is located 54 km south of Shillong (approx 1.5 to 2 hours drive via NH 206)."
    },
    travelTips: [
      "Wear sports shoes with rubber traction when visiting wet caves and waterfall viewpoints.",
      "Check weather forecasts as heavy mist can temporarily veil waterfall viewpoints in afternoons."
    ],
    faqs: [
      {
        question: "Can Cherrapunji be visited on a day trip from Shillong?",
        answer: "Yes, Cherrapunji can be explored as a day trip from Shillong, but staying at least 1 or 2 nights is recommended to experience sunset and root bridge trails comfortably."
      }
    ],
    seoTitle: "Cherrapunji Tour Packages & Shillong to Sohra Taxi | NE Dhaniya",
    seoDescription: "Visit Nohkalikai Falls, Mawsmai Cave & Seven Sisters Falls in Cherrapunji. Book private cabs and customizable Sohra packages with local drivers.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "dawki",
    name: "Dawki & Shnongpdeng",
    slug: "dawki",
    destinationSlug: "meghalaya",
    destinationName: "Meghalaya",
    shortDescription: "Crystal clear Umngot River where boats appear to float in mid-air, riverside camping & water sports.",
    description: "Dawki is a picturesque border town famous for the crystal-clear Umngot River, where the water is so transparent during winter months that boats seem to hover in the air. A short distance away, Shnongpdeng offers pebble-beach riverside camping, kayaking, cliff jumping, and serene stargazing under dark mountain skies.",
    heroImage: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=80",
    topThingsToDo: [
      "Country boat ride on the glass-like waters of the Umngot River",
      "Camping in riverside tents at Shnongpdeng village",
      "Kayaking, zip-lining, and scuba diving/snorkeling",
      "Visiting the India-Bangladesh Friendship Gate at Tamabil border"
    ],
    bestTimeToVisit: "November to April for maximum water transparency. Avoid peak monsoon months when the river turns muddy from rain runoff.",
    howToReach: {
      byAir: "Guwahati Airport (approx 190 km).",
      byRail: "Guwahati Railway Station (approx 175 km).",
      byRoad: "Located 85 km from Shillong (approx 3 hours drive via Pynursla)."
    },
    travelTips: [
      "The best water clarity is observed between December and March.",
      "Carry quick-dry clothes and waterproof mobile pouches for water activities."
    ],
    faqs: [
      {
        question: "What is the best month to see transparent water in Dawki?",
        answer: "December, January, and February offer the most crystal-clear waters with maximum visibility down to the riverbed pebbles."
      }
    ],
    seoTitle: "Dawki Tour Packages, Umngot River Boating & Taxi | NE Dhaniya",
    seoDescription: "Experience Dawki crystal clear river boating, Shnongpdeng camping & water sports. Book Shillong to Dawki taxi service & customized Meghalaya tours.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // ASSAM PLACES
  {
    id: "kaziranga-national-park",
    name: "Kaziranga National Park",
    slug: "kaziranga-national-park",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "UNESCO World Heritage Site sheltering two-thirds of the world's great one-horned rhinoceroses.",
    description: "Kaziranga National Park is a premier wildlife sanctuary stretching along the floodplains of the Brahmaputra River. In addition to harboring the world's highest density of one-horned rhinoceroses, Kaziranga is a tiger reserve, home to wild water buffaloes, Asian elephants, swamp deer, and hundreds of migratory bird species across Central, Western, Eastern, and Burapahar ranges.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    topThingsToDo: [
      "Early morning Elephant Safari in Kohora or Bagori range for up-close rhino sightings",
      "Jeep Safari across Western and Eastern (Agoratoli) ranges for birds and wild buffaloes",
      "Visiting Kaziranga National Orchid and Biodiversity Park to see indigenous orchids & cultural dances",
      "Tasting organic Assam tea at surrounding tea gardens"
    ],
    bestTimeToVisit: "November to April. The park remains closed from May to October due to the annual Brahmaputra monsoon floods.",
    howToReach: {
      byAir: "Guwahati Airport (215 km) or Jorhat Airport (97 km).",
      byRail: "Jakhalabandha (40 km), Furkating (75 km), or Guwahati (200 km).",
      byRoad: "Located directly along NH 715, easily accessible by private taxi from Guwahati in 4 to 5 hours."
    },
    travelTips: [
      "Elephant safari tickets should be booked well in advance through your tour operator as seats are strictly limited.",
      "Bring binoculars and cameras with telephoto lenses for optimal wildlife photography."
    ],
    faqs: [
      {
        question: "Which safari is better: Elephant or Jeep safari?",
        answer: "Both offer unique experiences! The elephant safari gets you very close to rhinos in elephant grass early in the morning, while the open jeep safari covers deeper distances across diverse forest habitats."
      }
    ],
    seoTitle: "Kaziranga Tour Packages, Safari Booking & Taxi | NE Dhaniya Tours",
    seoDescription: "Book Kaziranga safari packages, Guwahati to Kaziranga cabs & comfortable hotel stays. See one-horned rhinos, tigers & wildlife with verified local experts.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "guwahati",
    name: "Guwahati",
    slug: "guwahati",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "The gateway city of Northeast India, famous for Maa Kamakhya Temple, Brahmaputra river cruises & vibrant markets.",
    description: "Guwahati is the bustling metropolitan gateway and commercial capital of Northeast India. Flanked by Nilachal Hill and the mighty Brahmaputra river, Guwahati blends ancient spiritual shaktipeeths like Kamakhya Temple and Umananda Peacock Island with scenic riverfront sunset cruises, museums, and rich silk markets.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    topThingsToDo: [
      "Darshan and blessings at the sacred Kamakhya Temple atop Nilachal Hill",
      "Brahmaputra sunset dinner cruise with live folk music",
      "Ferry ride to Umananda Temple, the smallest inhabited river island in the world",
      "Shopping for pure Muga and Eri silk in Fancy Bazar and Sualkuchi"
    ],
    bestTimeToVisit: "October to April for mild, pleasant weather.",
    howToReach: {
      byAir: "Lokpriya Gopinath Bordoloi International Airport (GAU).",
      byRail: "Guwahati Railway Station (GHY) & Kamakhya Junction (KYQ).",
      byRoad: "Central transit hub connecting all Northeast India states."
    },
    travelTips: [
      "Visit Kamakhya Temple early in the morning to avoid extended queue times, or book VIP pass assistance.",
      "Book your airport transfer in advance to avoid surge pricing."
    ],
    faqs: [
      {
        question: "Can I book outstation cabs from Guwahati Airport for Meghalaya or Kaziranga?",
        answer: "Yes, NE Dhaniya Tours & Travels provides reliable outstation cabs (Sedan, Innova, Traveler) right outside Guwahati Airport with flight-tracking pick-up."
      }
    ],
    seoTitle: "Guwahati Tour Packages & Outstation Taxi Service | NE Dhaniya Tours",
    seoDescription: "Book Guwahati sightseeing tours, Kamakhya temple darshan, and airport taxi transfers across Northeast India with NE Dhaniya Tours & Travels.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // ARUNACHAL PRADESH PLACES
  {
    id: "tawang",
    name: "Tawang",
    slug: "tawang",
    destinationSlug: "arunachal-pradesh",
    destinationName: "Arunachal Pradesh",
    shortDescription: "High-altitude Himalayan wonder boasting India's largest Buddhist monastery, Bumla Pass & Sela Pass.",
    description: "Perched at an elevation of approximately 10,000 feet near the borders of Tibet and Bhutan, Tawang is an awe-inspiring mountain destination. It is celebrated for the 400-year-old Tawang Monastery (Galden Namgey Lhatse), the sacred high-altitude Sangetsar (Madhuri) Lake, the Indo-China border at Bumla Pass (15,200 ft), and the heroic Jaswant Garh War Memorial.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    topThingsToDo: [
      "Pay respects at Tawang Monastery and explore its ancient museum and library",
      "Drive across Sela Pass (13,700 ft) and pause by the frozen Sela Lake",
      "Excursion to Bumla Pass on the Indo-China border and Madhuri Lake",
      "Admire the majestic 100-meter drop of Nuranang (Jang) Falls"
    ],
    bestTimeToVisit: "March to June for clear spring views and blooming rhododendrons; September to November for crisp autumn skies; December to February for snow landscapes.",
    howToReach: {
      byAir: "Guwahati Airport (approx 450 km) or Tezpur Airport (approx 320 km).",
      byRail: "Guwahati or Tezpur / Rangapara railway stations.",
      byRoad: "Travel via Bomdila and Dirang with overnight stopovers to ensure proper acclimatization."
    },
    travelTips: [
      "Inner Line Permit (ILP) is required for Indian tourists, and a special Army / DC permit is needed for Bumla Pass.",
      "Dress in warm layers; even in summer, high-altitude passes can experience cold winds and sub-zero night temperatures."
    ],
    faqs: [
      {
        question: "Can I visit Bumla Pass in my own vehicle?",
        answer: "No, Bumla Pass requires local Arunachal registered 4-wheel drive vehicles (Tata Sumo / Bolero / Scorpio) with military clearance. NE Dhaniya Tours arranges complete Bumla vehicle logistics and permits."
      }
    ],
    seoTitle: "Tawang Tour Packages & Guwahati to Tawang Taxi | NE Dhaniya Tours",
    seoDescription: "Book memorable Tawang tour packages, Sela Pass & Bumla Pass excursions, and reliable Guwahati to Tawang car rentals with local drivers.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // SIKKIM PLACES
  {
    id: "gangtok",
    name: "Gangtok",
    slug: "gangtok",
    destinationSlug: "sikkim",
    destinationName: "Sikkim",
    shortDescription: "Clean, scenic capital city with panoramic Kanchenjunga viewpoints, MG Marg, and ancient monasteries.",
    description: "Gangtok, the pristine capital of Sikkim, balances charming hill-station tranquility with modern vibrancy. Straddling mountain ridges, Gangtok features the pedestrianized, vehicle-free MG Marg, the historic Enchey and Rumtek monasteries, the scenic ropeway cable car, and serves as the gateway to North Sikkim and Tsomgo Lake.",
    heroImage: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
    topThingsToDo: [
      "Stroll along the clean, floral promenades of MG Marg",
      "Ride the Gangtok Ropeway for sweeping valley and city views",
      "Excursion to sacred Tsomgo Lake and Baba Harbhajan Mandir",
      "Explore the majestic Rumtek Monastery, seat of the Karmapa"
    ],
    bestTimeToVisit: "March to June and September to December.",
    howToReach: {
      byAir: "Bagdogra Airport (IXB) is 125 km away (approx 4 to 5 hours drive).",
      byRail: "New Jalpaiguri Railway Station (NJP) is 120 km away.",
      byRoad: "NH 10 connects Siliguri to Gangtok with scenic Teesta river vistas."
    },
    travelTips: [
      "Keep original ID proofs (Voter Card/Passport) handy for Tsomgo and Nathula Pass permits.",
      "Respect local cleanliness rules: Gangtok strictly enforces anti-littering and no-smoking in public zones."
    ],
    faqs: [
      {
        question: "How much time is required to reach Gangtok from NJP or Bagdogra?",
        answer: "It generally takes 4 to 5 hours depending on road and traffic conditions along NH 10."
      }
    ],
    seoTitle: "Gangtok Tour Packages & Taxi Service | NE Dhaniya Tours",
    seoDescription: "Plan your Gangtok trip with NE Dhaniya Tours. Affordable packages, NJP to Gangtok car rentals, Tsomgo Lake day tours & North Sikkim trips.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  }
];

export const initialVehicles: Vehicle[] = [
  {
    id: "force-urbania",
    name: "Force Urbania",
    slug: "force-urbania",
    seatingCapacity: "10-17 Passengers",
    description: "The next-generation luxury van designed for ultimate executive and group comfort. Features individual reclining seats, individual AC vents, panoramic sealed windows, USB charging at every row, and class-leading suspension for smooth long-distance mountain journeys.",
    image: "/images/Urbaniya.avif",
    idealFor: "Premium group tours, corporate delegations, luxury family travel across Meghalaya, Assam, and Bhutan.",
    comfortLevel: "Ultra Premium / Luxury",
    luggageCapacity: "12-16 Large Bags",
    acAvailable: true,
    status: "active"
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    slug: "innova-crysta",
    seatingCapacity: "6-7 Passengers",
    description: "The gold standard for family and hill travel in Northeast India. Renowned for its superior ride comfort, robust hill-climbing power, generous legroom, premium upholstery, and silent cabin across high-altitude roads like Tawang and North Sikkim.",
    image: "/images/tyotainnova.png",
    idealFor: "Families, couples, small private groups traveling across winding mountain highways.",
    comfortLevel: "Premium",
    luggageCapacity: "4-5 Large Bags",
    acAvailable: true,
    status: "active"
  },
  {
    id: "tempo-traveler-13",
    name: "Force Traveler – 13 Seater",
    slug: "tempo-traveler-13",
    seatingCapacity: "13 Passengers + Driver",
    description: "The most popular vehicle choice for mid-sized travel groups, extended families, and student excursions. Equipped with push-back seats, powerful dual AC, music system, and high ground clearance suitable for all terrain.",
    image: "/images/travelr.webp",
    idealFor: "Medium groups, family reunions, multi-day interstate Northeast tours.",
    comfortLevel: "Comfortable Push-Back",
    luggageCapacity: "8-10 Bags (Dedicated rear/roof carrier)",
    acAvailable: true,
    status: "active"
  },
  {
    id: "tempo-traveler-17",
    name: "Force Traveler – 17 Seater",
    slug: "tempo-traveler-17",
    seatingCapacity: "17 Passengers + Driver",
    description: "Spacious passenger van ideal for larger tour groups wanting to travel together in a single comfortable vehicle. Full push-back seating, ample aisle space, and heavy-duty luggage carrier.",
    image: "/images/travelers17.webp",
    idealFor: "Corporate groups, pilgrim tours, larger family parties, student groups.",
    comfortLevel: "Standard Push-Back",
    luggageCapacity: "14-16 Bags",
    acAvailable: true,
    status: "active"
  },
  {
    id: "tempo-traveler-26",
    name: "Force Traveler – 26 Seater",
    slug: "tempo-traveler-26",
    seatingCapacity: "26 Passengers + Driver",
    description: "High-capacity touring van engineered for economical, unified group transportation without the operational constraints of a full-size bus on mountain routes.",
    image: "/images/travelers26.jpg",
    idealFor: "College tours, institutional travel, event transportation, large tourist groups.",
    comfortLevel: "Standard",
    luggageCapacity: "20+ Bags",
    acAvailable: true,
    status: "active"
  },
  {
    id: "premium-sedan",
    name: "Premium Sedan (Dzire / Etios)",
    slug: "premium-sedan",
    seatingCapacity: "4 Passengers + Driver",
    description: "Economical, smooth, and fuel-efficient option for couples, solo travelers, and small families. Perfect for Guwahati airport transfers, Shillong day trips, and Kaziranga highway drives.",
    image: "/images/dzire.avif",
    idealFor: "Couples, honeymooners, solo explorers, budget travelers.",
    comfortLevel: "Standard Sedan",
    luggageCapacity: "2-3 Suitcases",
    acAvailable: true,
    status: "active"
  },
  {
    id: "deluxe-bus-24",
    name: "Deluxe Bus – 24 Seater",
    slug: "deluxe-bus-24",
    seatingCapacity: "24 Passengers",
    description: "Air-conditioned mini-coach designed for organized group pilgrimages, school/college excursions, and destination weddings across Northeast India.",
    image: "/images/delux-bus.jpg",
    idealFor: "Wedding parties, institutional groups, conference tours.",
    comfortLevel: "Deluxe Coach",
    luggageCapacity: "Ample underbelly & interior storage",
    acAvailable: true,
    status: "active"
  },
  {
    id: "luxury-bus-22",
    name: "Luxury Bus – 22 Seater",
    slug: "luxury-bus-22",
    seatingCapacity: "22 Passengers (2x1 Recliner)",
    description: "Ultra-comfortable executive coach featuring plush wide 2x1 reclining seats, ambient cabin lighting, and superior shock absorption for effortless highway cruising.",
    image: "/images/luxury-bus.webp",
    idealFor: "VIP delegations, luxury group travel, long-distance interstate circuits.",
    comfortLevel: "Luxury Recliner",
    luggageCapacity: "Large underbelly baggage holds",
    acAvailable: true,
    status: "active"
  }
];

export const initialTourPackages: TourPackage[] = [
  {
    id: "meghalaya-escape",
    name: "Meghalaya Scenic Escape",
    slug: "meghalaya-escape",
    destinationSlug: "meghalaya",
    destinationName: "Meghalaya",
    duration: "5 Days / 4 Nights",
    tourType: ["family", "honeymoon", "adventure"],
    travelMode: "both",
    shortDescription: "Discover Shillong, Cherrapunji, Dawki's crystal river, and Mawlynnong with customized private or sharing options.",
    description: "Embark on an enchanting 5-day journey through the Abode of Clouds. Marvel at the cascading Nohkalikai Falls, trek through ancient limestone caves, cruise on the crystal-clear waters of Dawki's Umngot River, and visit Asia's cleanest village Mawlynnong. Available as a private personalized tour or budget-friendly sharing group.",
    heroImage: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Scenic drive past Umiam Lake to Shillong",
      "Nohkalikai Falls, Mawsmai Cave & Seven Sisters Falls in Cherrapunji",
      "Boat ride on the crystal clear waters of Dawki's Umngot River",
      "Living Root Bridge and cleanest village walk in Mawlynnong",
      "Laitlum Canyon panoramic mountain valley views"
    ],
    itinerary: [
      {
        day: 1,
        title: "Guwahati Arrival & Drive to Shillong (Scotland of the East)",
        description: "Pick up from Guwahati Airport or Railway Station. Scenic drive to Shillong via NH 6 with a refreshment stop at picturesque Umiam Lake (Barapani). Check in to hotel in Shillong, evening walk around Police Bazar and Ward's Lake.",
        nightStay: "Shillong"
      },
      {
        day: 2,
        title: "Shillong to Cherrapunji (Sohra) Sightseeing",
        description: "Morning departure for Cherrapunji. Visit Elephant Falls, Mawkdok Dympep Valley View Point, Nohkalikai Falls (India's tallest plunge waterfall), Mawsmai limestone cave, and the Eco Park overlooking the Bangladesh plains.",
        nightStay: "Cherrapunji"
      },
      {
        day: 3,
        title: "Cherrapunji to Mawlynnong & Dawki (Crystal Clear Umngot River)",
        description: "Early morning drive to Mawlynnong, recognized as Asia's Cleanest Village. Walk to the single-decker Living Root Bridge in Riwai. Proceed to Dawki for a tranquil country boat ride on the glass-like waters of the Umngot River. Overnight stay in Shnongpdeng riverside tents or Dawki/Pynursla homestay.",
        nightStay: "Dawki / Shnongpdeng"
      },
      {
        day: 4,
        title: "Krang Suri Waterfalls & Return to Shillong via Laitlum Canyon",
        description: "Visit the mesmerizing turquoise pool of Krang Suri Falls in Jowai. Continue towards Shillong with a stop at Laitlum Canyon for sweeping canyon gorge vistas. Evening free for shopping local crafts.",
        nightStay: "Shillong"
      },
      {
        day: 5,
        title: "Kamakhya Temple Visit & Guwahati Departure",
        description: "After breakfast, check out and drive to Guwahati. Visit the revered Maa Kamakhya Temple atop Nilachal Hill. Drop-off at Guwahati Airport or Railway Station with cherished Northeast memories.",
        nightStay: "Departure"
      }
    ],
    inclusions: [
      "Pick up & drop from Guwahati Airport / Railway Station",
      "All transfers & sightseeing in comfortable dedicated vehicle (Innova Crysta / Sedan / Urbania / Traveler)",
      "Accommodations in verified clean 3-star / 4-star hotels or premium homestays with breakfast",
      "All toll taxes, parking fees, driver allowance, and fuel charges",
      "24/7 dedicated trip support on WhatsApp from local Northeast experts"
    ],
    exclusions: [
      "Airfare or train tickets to/from Guwahati",
      "Entry fees to monuments, caves, and boat ride charges",
      "Personal expenses, laundry, tips, and optional adventure activities",
      "Anything not specifically mentioned in inclusions"
    ],
    vehicleOptions: [
      "Toyota Innova Crysta (Best for families)",
      "Premium Sedan (Dzire / Etios - Best for couples)",
      "Force Urbania / Traveler (Best for groups of 8+)"
    ],
    hotelOptions: [
      "Standard Deluxe Homestays & Stays",
      "Premium 3-Star & 4-Star Mountain Resorts"
    ],
    faqs: [
      {
        question: "Can we customize this 5-day Meghalaya itinerary?",
        answer: "Absolutely! We can add Double Decker Root Bridge trekking, riverside camping, or extra days according to your preferences."
      }
    ],
    seoTitle: "Meghalaya Tour Package (5 Days / 4 Nights) | NE Dhaniya Tours",
    seoDescription: "Book our 5-day Meghalaya Tour Package covering Shillong, Cherrapunji, Dawki & Mawlynnong. Choose Personal or Sharing options with custom WhatsApp quotes.",
    featured: true,
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "tawang-mountain-odyssey",
    name: "Tawang Mountain Odyssey",
    slug: "tawang-mountain-odyssey",
    destinationSlug: "arunachal-pradesh",
    destinationName: "Arunachal Pradesh",
    duration: "7 Days / 6 Nights",
    tourType: ["adventure", "group", "family"],
    travelMode: "both",
    shortDescription: "An epic Himalayan expedition from Guwahati through Bomdila, Dirang, Sela Pass (13,700 ft) to Tawang and Bumla Pass.",
    description: "Ascend into the Land of the Dawn-Lit Mountains on a legendary 7-day road trip. Cross the snow-blanketed Sela Pass, pay homage at the 400-year-old Tawang Monastery, witness the thunderous Nuranang Falls, and venture to the Indo-China frontier at Bumla Pass and Madhuri Lake.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Scenic crossing of Sela Pass (13,700 ft) and Sela Lake",
      "Historical 400-year-old Tawang Monastery visit",
      "Bumla Pass (Indo-China border) & Sangetsar (Madhuri) Lake excursion",
      "Majestic Nuranang (Jang) Waterfall photo stop",
      "Acclimatization and monastery walks in Dirang & Bomdila"
    ],
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Bhalukpong / Bomdila",
        description: "Pick up from Guwahati and drive across the Assam plains towards the foothills of Arunachal Pradesh. Check-in at Bhalukpong or Bomdila.",
        nightStay: "Bomdila / Bhalukpong"
      },
      {
        day: 2,
        title: "Bomdila to Dirang Valley",
        description: "Visit Bomdila Monastery and viewpoint. Continue to scenic Dirang Valley, visit Dirang Dzong, Sangti Valley, and kiwi/apple orchards.",
        nightStay: "Dirang"
      },
      {
        day: 3,
        title: "Dirang to Tawang via Sela Pass (13,700 ft)",
        description: "Early departure for Tawang. Ascend to Sela Pass, photo stop at Sela Lake and Jaswant Garh War Memorial. Marvel at Nuranang Falls before reaching Tawang.",
        nightStay: "Tawang"
      },
      {
        day: 4,
        title: "Tawang Monastery & Local Sightseeing",
        description: "Explore the majestic Tawang Monastery, Urgelling Monastery (birthplace of the 6th Dalai Lama), and Tawang War Memorial with evening light & sound show.",
        nightStay: "Tawang"
      },
      {
        day: 5,
        title: "Excursion to Bumla Pass & Madhuri Lake",
        description: "Day excursion in local 4x4 vehicles to Bumla Pass (Indo-China border) and scenic Sangetsar (Madhuri) Lake surrounded by snow-dusted mountains.",
        nightStay: "Tawang"
      },
      {
        day: 6,
        title: "Tawang to Bomdila Return Drive",
        description: "Begin return journey towards Bomdila, enjoying scenic mountain valleys and stopping for local hot momos and butter tea.",
        nightStay: "Bomdila"
      },
      {
        day: 7,
        title: "Bomdila to Guwahati Departure",
        description: "Descend from the hills to Guwahati Airport / Railway Station for departure.",
        nightStay: "Departure"
      }
    ],
    inclusions: [
      "Complete vehicle transfers from Guwahati throughout the circuit",
      "Inner Line Permit (ILP) processing for Indian travelers",
      "Hotel accommodations in Bomdila, Dirang, and Tawang with daily breakfast",
      "Experienced mountain driver with high-altitude terrain expertise"
    ],
    exclusions: [
      "Bumla Pass local 4x4 vehicle charges & special army permits",
      "Lunch, dinner, and personal expenses",
      "Entry tickets to monuments"
    ],
    vehicleOptions: [
      "Toyota Innova Crysta",
      "Scorpio / Bolero (Mountain Terrain)",
      "Force Traveler (for groups)"
    ],
    hotelOptions: [
      "Comfortable Boutique Stays & Mountain Deluxe Hotels"
    ],
    faqs: [
      {
        question: "Is Bumla Pass open all year?",
        answer: "Bumla Pass is generally open from April to November/December, subject to snow conditions and military clearance."
      }
    ],
    seoTitle: "Tawang Tour Package (7 Days / 6 Nights) | NE Dhaniya Tours",
    seoDescription: "Book 7-day Tawang Tour Package from Guwahati. Sela Pass, Bumla Pass, Tawang Monastery & Dirang. Personal & Sharing tour options on WhatsApp.",
    featured: true,
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "kaziranga-wildlife-tour",
    name: "Kaziranga Wildlife Safari & Tea Trail",
    slug: "kaziranga-wildlife-tour",
    destinationSlug: "assam",
    destinationName: "Assam",
    duration: "4 Days / 3 Nights",
    tourType: ["wildlife", "family"],
    travelMode: "both",
    shortDescription: "Experience the thrill of sighting one-horned rhinos, wild elephants, and tigers across Kaziranga National Park.",
    description: "An unforgettable wildlife immersion into UNESCO World Heritage Kaziranga National Park. Enjoy morning elephant safaris, open-top 4x4 jeep safaris in different ranges, visits to the Kaziranga Orchid Biodiversity Park, and serene walks in lush Assam tea gardens.",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Thrilling morning Elephant Safari in Central/Western Range",
      "Jeep Safaris across Kohora & Bagori ranges",
      "Over 500 species of indigenous orchids & Assamese cultural dance at Orchid Park",
      "Maa Kamakhya Temple darshan in Guwahati",
      "Authentic Assamese cuisine experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Kaziranga National Park",
        description: "Pick up from Guwahati Airport / Station. Drive along scenic NH 715 through the Brahmaputra valley to Kaziranga (approx 4.5 hours). Check-in at jungle resort. Evening cultural dance performance.",
        nightStay: "Kaziranga"
      },
      {
        day: 2,
        title: "Kaziranga Elephant Safari & Central Range Jeep Safari",
        description: "Early morning elephant safari for close encounters with one-horned rhinos. Return for breakfast. Afternoon jeep safari in Kohora (Central) Range. Visit the Orchid and Biodiversity Park in the evening.",
        nightStay: "Kaziranga"
      },
      {
        day: 3,
        title: "Western Range Jeep Safari & Drive to Guwahati",
        description: "Morning jeep safari in the Bagori (Western) Range, known for rich rhino and water buffalo populations. Post lunch, drive back to Guwahati. Sunset cruise on the Brahmaputra river.",
        nightStay: "Guwahati"
      },
      {
        day: 4,
        title: "Kamakhya Temple & Departure",
        description: "Morning visit to Kamakhya Temple. Drop at Guwahati Airport / Railway Station.",
        nightStay: "Departure"
      }
    ],
    inclusions: [
      "Guwahati to Kaziranga round-trip cab service",
      "3 Nights accommodation in verified resorts/hotels with breakfast",
      "1 Elephant Safari and 1 Jeep Safari with guide and park entry permits",
      "All driver allowances, tolls, and parking"
    ],
    exclusions: [
      "Camera fees inside the national park",
      "Brahmaputra cruise tickets (can be added on request)",
      "Meals not mentioned"
    ],
    vehicleOptions: [
      "Innova Crysta",
      "Sedan",
      "Force Traveler"
    ],
    hotelOptions: [
      "Eco Jungle Resort",
      "Luxury Wildlife Lodge"
    ],
    faqs: [
      {
        question: "Is Kaziranga safe for families with children and elders?",
        answer: "Kaziranga is extremely safe and comfortable for children and senior citizens, with comfortable resorts and paved safari routes."
      }
    ],
    seoTitle: "Kaziranga Tour Package (4 Days / 3 Nights) | Safari & Cab Booking",
    seoDescription: "Book 4-day Kaziranga Wildlife Safari Tour Package. Elephant safari, jeep safari, orchid park & Guwahati transfers. Request free quote on WhatsApp.",
    featured: true,
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "sikkim-explorer",
    name: "Sikkim Himalayan Explorer",
    slug: "sikkim-explorer",
    destinationSlug: "sikkim",
    destinationName: "Sikkim",
    duration: "6 Days / 5 Nights",
    tourType: ["adventure", "family", "honeymoon"],
    travelMode: "both",
    shortDescription: "Explore Gangtok, high-altitude Tsomgo Lake, Lachung, and the colorful Yumthang Valley of Flowers.",
    description: "Discover the jewel of the Eastern Himalayas. Experience the vibrant culture and mountain vistas of Gangtok, sacred glacial lakes, and journey deep into North Sikkim to Lachung and the Valley of Flowers at Yumthang, with optional excursion to Zero Point.",
    heroImage: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Gangtok city sights & stroll along pedestrian MG Marg",
      "Excursion to holy Tsomgo Lake (12,400 ft) & Baba Mandir",
      "Scenic drive through North Sikkim with Seven Sisters & Naga waterfalls",
      "Overnight stay in alpine village Lachung",
      "Breathtaking Yumthang Valley of Flowers & hot springs"
    ],
    itinerary: [
      {
        day: 1,
        title: "NJP / Bagdogra to Gangtok",
        description: "Pick-up from Bagdogra Airport or NJP Railway Station. Scenic drive along Teesta River to Gangtok. Check-in and evening walk on MG Marg.",
        nightStay: "Gangtok"
      },
      {
        day: 2,
        title: "Tsomgo Lake & Baba Mandir Excursion",
        description: "Day excursion to high-altitude glacial Tsomgo Lake and Baba Harbhajan Singh Mandir (optional Nathula Pass permit subject to availability).",
        nightStay: "Gangtok"
      },
      {
        day: 3,
        title: "Gangtok to Lachung (North Sikkim)",
        description: "Scenic mountain drive towards North Sikkim. Pass Singhik Viewpoint, Seven Sisters Waterfalls, and Chungthang confluence. Arrive at Lachung.",
        nightStay: "Lachung"
      },
      {
        day: 4,
        title: "Yumthang Valley of Flowers & Return to Gangtok",
        description: "Early morning excursion to Yumthang Valley (11,800 ft) and hot sulfur spring (optional Zero Point). Post lunch, drive back to Gangtok.",
        nightStay: "Gangtok"
      },
      {
        day: 5,
        title: "Gangtok Sightseeing & Monasteries",
        description: "Visit Rumtek Monastery, Do Drul Chorten, Namgyal Institute of Tibetology, and Tashi Viewpoint.",
        nightStay: "Gangtok"
      },
      {
        day: 6,
        title: "Gangtok to NJP / Bagdogra Departure",
        description: "Check-out and transfer to Bagdogra Airport or NJP Railway Station for your return journey.",
        nightStay: "Departure"
      }
    ],
    inclusions: [
      "Bagdogra/NJP pick up and drop",
      "Gangtok and North Sikkim transfers with permits",
      "5 Nights accommodation with breakfast and meals in North Sikkim",
      "Experienced mountain hill driver"
    ],
    exclusions: [
      "Nathula Pass permit and vehicle surcharge",
      "Zero Point excursion charges (payable directly to driver)",
      "Personal expenses"
    ],
    vehicleOptions: [
      "Innova Crysta (Gangtok) & Scorpio/Bolero 4x4 (North Sikkim)"
    ],
    hotelOptions: [
      "Deluxe Stays in Gangtok & Cozy Mountain Cottages in Lachung"
    ],
    faqs: [
      {
        question: "Are North Sikkim permits included in the package?",
        answer: "Yes, NE Dhaniya Tours arranges all North Sikkim district permits and Tsomgo Lake permits seamlessly."
      }
    ],
    seoTitle: "Sikkim Tour Package (6 Days / 5 Nights) | Gangtok & North Sikkim",
    seoDescription: "Book 6-day Sikkim Tour Package covering Gangtok, Tsomgo Lake, Lachung & Yumthang Valley. Best price on custom quote via WhatsApp.",
    featured: true,
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "bhutan-experience",
    name: "Bhutan Cultural & Himalayan Experience",
    slug: "bhutan-experience",
    destinationSlug: "bhutan",
    destinationName: "Bhutan",
    duration: "6 Days / 5 Nights",
    tourType: ["family", "honeymoon", "group"],
    travelMode: "both",
    shortDescription: "Experience Thimphu, Punakha Dzong, and the legendary hike to Tiger's Nest Monastery (Paro Taktsang).",
    description: "A soul-stirring journey through the peaceful Himalayan kingdom of Bhutan. Marvel at centuries-old fortress monasteries (Dzongs), traverse Dochula Pass with its 108 stupas and mountain vistas, stroll through scenic Punakha valley, and complete the iconic pilgrimage hike to cliffside Tiger's Nest.",
    heroImage: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Iconic hike to Paro Taktsang (Tiger's Nest Monastery)",
      "Majestic Punakha Dzong located at the confluence of Pho Chhu and Mo Chhu rivers",
      "Dochula Pass panoramic Himalayan views with 108 chortens",
      "Buddha Dordenma (Giant Golden Buddha) in Thimphu",
      "Authentic Bhutanese hospitality and traditional archery experiences"
    ],
    itinerary: [
      {
        day: 1,
        title: "Guwahati / Phuentsholing to Thimphu",
        description: "Meet our representative, complete border immigration formalities, and drive to Thimphu, the peaceful capital of Bhutan. Check-in at hotel.",
        nightStay: "Thimphu"
      },
      {
        day: 2,
        title: "Thimphu Cultural Sightseeing",
        description: "Visit Buddha Dordenma statue overlooking Thimphu valley, National Memorial Chorten, Motithang Takin Preserve, and traditional craft bazaar.",
        nightStay: "Thimphu"
      },
      {
        day: 3,
        title: "Thimphu to Punakha via Dochula Pass (3,100 m)",
        description: "Drive over Dochula Pass with stunning snow-clad Himalayan peaks. Visit the spectacular 17th-century Punakha Dzong and the longest suspension bridge.",
        nightStay: "Punakha"
      },
      {
        day: 4,
        title: "Punakha to Paro Valley",
        description: "Drive to Paro valley. Visit Rinpung Dzong (Paro Dzong) and the National Museum (Ta Dzong). Stroll through traditional Paro town.",
        nightStay: "Paro"
      },
      {
        day: 5,
        title: "Pilgrimage Hike to Tiger's Nest Monastery (Paro Taktsang)",
        description: "Embark on the iconic hike to the cliffside Tiger's Nest Monastery perched 900 meters above Paro valley floor. Evening traditional hot stone bath (optional).",
        nightStay: "Paro"
      },
      {
        day: 6,
        title: "Paro to Guwahati / Phuentsholing Departure",
        description: "Check-out and transfer back to border or Paro Airport for onward journey.",
        nightStay: "Departure"
      }
    ],
    inclusions: [
      "All ground transportation in dedicated tourist vehicle with seasoned Bhutan driver",
      "Bhutan Entry Permit processing assistance",
      "Hotel accommodations with daily breakfast",
      "Certified Bhutanese tour guide where mandated by local regulations"
    ],
    exclusions: [
      "Sustainable Development Fee (SDF) as mandated by Bhutan Royal Government",
      "Monument entry fees",
      "Personal expenses and horse ride charges at Tiger's Nest"
    ],
    vehicleOptions: [
      "Hyundai Tucson / Toyota Innova (Bhutan Tourist Certified)",
      "Coaster Bus / HiAce (for groups)"
    ],
    hotelOptions: [
      "Traditional 3-Star & 4-Star Bhutanese Heritage Hotels"
    ],
    faqs: [
      {
        question: "Can Indians travel to Bhutan with a Voter ID card?",
        answer: "Yes, an original Voter Identity Card issued by the Election Commission of India OR an Indian Passport (minimum 6 months validity) is valid for Bhutan entry permits."
      }
    ],
    seoTitle: "Bhutan Tour Package from India & Assam | NE Dhaniya Tours",
    seoDescription: "Book 6-day Bhutan Tour Package from Guwahati. Visit Thimphu, Punakha & Tiger's Nest Paro. Seamless entry permits and WhatsApp booking.",
    featured: true,
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  }
];

export const initialBlogCategories: BlogCategory[] = [
  { id: "northeast-travel", name: "Northeast India Travel", slug: "northeast-travel-guide" },
  { id: "meghalaya", name: "Meghalaya", slug: "meghalaya" },
  { id: "arunachal-pradesh", name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
  { id: "assam", name: "Assam", slug: "assam" },
  { id: "sikkim", name: "Sikkim", slug: "sikkim" },
  { id: "nagaland", name: "Nagaland", slug: "nagaland" },
  { id: "bhutan", name: "Bhutan", slug: "bhutan" },
  { id: "travel-tips", name: "Travel Tips & Planning", slug: "travel-tips" },
  { id: "car-rental", name: "Car Rental & Taxis", slug: "car-rental" }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: "best-time-to-visit-meghalaya",
    title: "Best Time to Visit Meghalaya: Weather, Waterfalls & Month-by-Month Guide",
    slug: "best-time-to-visit-meghalaya",
    excerpt: "Planning a Meghalaya trip? Here is a complete month-by-month guide detailing waterfall seasons, crystal clear rivers in Dawki, and trekking weather.",
    content: `
# Best Time to Visit Meghalaya: The Complete Travel Guide

Meghalaya, affectionately known as the **Abode of Clouds**, is a destination of dramatic beauty throughout the year. However, whether you should visit during the monsoon or winter depends entirely on what you want to experience: **thundering, roaring waterfalls** or **crystal-clear turquoise rivers and root bridge treks**.

---

## 1. Quick Summary by Season

| Season | Months | Highlights | Best For |
| :--- | :--- | :--- | :--- |
| **Winter / Peak Season** | October – April | Crystal clear waters, mild weather, blooming cherry blossoms | Dawki boating, trekking, families |
| **Monsoon Season** | June – September | Roaring waterfalls, dramatic mist, vibrant green hills | Waterfall lovers, photographers |
| **Spring Transition** | April – May | Pleasant climate, lush greenery, moderate crowds | Sightseeing, budget travelers |

---

## 2. October to April: The Best Overall Time for Tourists

If you want to experience the legendary **crystal-clear waters of the Umngot River in Dawki**, where country boats appear to float in mid-air, you **must plan your trip between November and March**.

During these months:
- The rains subside, and riverbeds settle to transparent clarity.
- Temperatures in Shillong hover comfortably between 10°C and 22°C.
- Trekking routes to the **Double Decker Living Root Bridge** in Nongriat and **Wei Sawdong Falls** are safe and dry.
- The annual **India International Cherry Blossom Festival** takes place in Shillong in mid-November, painting the city in pastel pink hues.

---

## 3. June to September: The Majestic Monsoon Magic

Cherrapunji (Sohra) and Mawsynram receive some of the highest recorded rainfalls on Earth. During the monsoon:
- **Nohkalikai Falls, Seven Sisters Falls, and Dainthlen Falls** transform into roaring torrents of misty power.
- The entire plateau turns into an emerald carpet shrouded in swirling white clouds.
- *Note:* River activities in Dawki are suspended during heavy monsoon runoff, and trekking trails can become slippery.

---

## 4. Personal vs Sharing Travel in Meghalaya

When traveling across Meghalaya's winding hilly terrain, having reliable transportation is essential:
- **Personal / Private Vehicle:** Ideal for families, couples, and groups who want the freedom to pause at scenic roadside stalls, enjoy flexible photo stops, and customize their route.
- **Sharing Tour:** An economical choice for solo travelers and students looking to visit primary attractions like Shillong, Cherrapunji, and Dawki on a budget.

---

## Ready to Plan Your Meghalaya Holiday?

NE Dhaniya Tours & Travels provides private vehicle rentals (Innova Crysta, Sedans, Tempo Travelers), personalized tour itineraries, and hotel reservations across Shillong, Cherrapunji, and Dawki.
    `,
    featuredImage: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=80",
    category: "Meghalaya",
    tags: ["Meghalaya", "Shillong", "Cherrapunji", "Dawki", "Travel Tips"],
    author: "NE Dhaniya Travel Desk",
    readingTime: "5 min read",
    publishedAt: "2025-01-10T10:00:00.000Z",
    updatedAt: "2025-01-10T10:00:00.000Z",
    status: "published",
    seoTitle: "Best Time to Visit Meghalaya | Weather, Waterfalls & Dawki Guide",
    seoDescription: "Discover the best time to visit Meghalaya. Month-by-month analysis of waterfalls in Cherrapunji, crystal waters in Dawki, weather in Shillong, and travel tips.",
    faqs: [
      {
        question: "When can we see clear water in Dawki?",
        answer: "The Umngot river in Dawki is at its most transparent between November and March, when rainfall ceases and the water turns crystal clear."
      },
      {
        question: "Is Meghalaya safe for solo female travelers?",
        answer: "Yes, Meghalaya is one of the safest states in India. The indigenous Khasi and Garo cultures follow a matrilineal system with high respect for women."
      }
    ],
    relatedDestinations: ["meghalaya"],
    relatedPackages: ["meghalaya-escape"],
    createdAt: "2025-01-10T10:00:00.000Z"
  },
  {
    id: "guwahati-to-tawang-road-trip-guide",
    title: "Guwahati to Tawang Road Trip: Complete Route, Sela Pass, Permits & Tips",
    slug: "guwahati-to-tawang-road-trip-guide",
    excerpt: "Planning the ultimate Himalayan road trip to Tawang? Here is the complete route map, acclimatization stopovers, Inner Line Permit (ILP) guide, and vehicle recommendations.",
    content: `
# Guwahati to Tawang Road Trip: The Ultimate Guide

The journey from Guwahati to Tawang in Arunachal Pradesh is widely regarded as one of the most breathtaking and adventurous road trips in the Indian Himalayas. 

From the plains of Assam, you climb steadily past subtropical valleys, pine-fringed rivers, historic Buddhist monasteries, and across the alpine heights of **Sela Pass (13,700 ft)** before reaching the spiritual haven of **Tawang (10,000 ft)**.

---

## 1. Route Map and Acclimatization Itinerary

Attempting to drive from Guwahati to Tawang in a single day is dangerous due to steep altitude gain and mountain road conditions. The recommended route includes strategic acclimatization stops:

- **Day 1: Guwahati to Bomdila or Bhalukpong (Assam-Arunachal Border)**
- **Day 2: Bomdila to Dirang Valley (Visit Kiwi orchards & Dirang Dzong)**
- **Day 3: Dirang to Tawang via Sela Pass (13,700 ft) & Jaswant Garh**
- **Day 4: Tawang Monastery & local sights**
- **Day 5: Excursion to Bumla Pass (Indo-China border) & Madhuri Lake**
- **Day 6: Tawang to Bomdila return**
- **Day 7: Bomdila to Guwahati**

---

## 2. Inner Line Permit (ILP) & Bumla Pass Permits

- **Inner Line Permit (ILP):** Mandatory for all Indian citizens entering Arunachal Pradesh. You can apply online with your Aadhaar/Voter ID or have NE Dhaniya Tours arrange it on your behalf.
- **Bumla Pass & Madhuri Lake Permit:** Requires clearance from the Deputy Commissioner's office in Tawang and Army authorities. Local Arunachal-registered 4WD vehicles (Sumo/Bolero) are required for the Bumla sector.

---

## 3. Which Vehicle is Best for Tawang?

The Trans-Arunachal highway sections are well-built by the Border Roads Organisation (BRO), but high-altitude stretches around Sela Pass and Bumla can feature rough patches, snow, and steep inclines.

- **For Families / Small Groups:** Toyota Innova Crysta or Mahindra Scorpio (comfortable suspension and strong hill climb).
- **For Larger Groups (8 to 15):** Force Traveler or Urbania with experienced high-altitude drivers.
- **For Solo / Sharing:** Sharing seat options in certified mountain cabs.

---

## Plan Your Tawang Journey with Local Experts

NE Dhaniya Tours & Travels manages the entire Guwahati to Tawang circuit with verified mountain drivers, ILP permits, Bumla Pass coordination, and handpicked hotels in Bomdila, Dirang, and Tawang.
    `,
    featuredImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    category: "Arunachal Pradesh",
    tags: ["Arunachal Pradesh", "Tawang", "Sela Pass", "Bumla Pass", "Road Trip"],
    author: "NE Dhaniya Travel Desk",
    readingTime: "6 min read",
    publishedAt: "2025-01-15T10:00:00.000Z",
    updatedAt: "2025-01-15T10:00:00.000Z",
    status: "published",
    seoTitle: "Guwahati to Tawang Road Trip Guide | Route, Sela Pass, Permits",
    seoDescription: "Complete Guwahati to Tawang road trip guide. Itinerary, Sela Pass altitude, Inner Line Permit (ILP), Bumla Pass rules, and car rental options with NE Dhaniya.",
    faqs: [
      {
        question: "How cold does it get in Tawang?",
        answer: "Summer temperatures range from 10°C to 20°C, while winter temperatures (December to February) frequently drop below freezing (-5°C to -10°C) with regular snowfall around Sela Pass."
      }
    ],
    relatedDestinations: ["arunachal-pradesh"],
    relatedPackages: ["tawang-mountain-odyssey"],
    createdAt: "2025-01-15T10:00:00.000Z"
  },
  {
    id: "kaziranga-national-park-safari-guide",
    title: "Kaziranga National Park Safari Guide: Zones, Elephant Safari & Booking Tips",
    slug: "kaziranga-national-park-safari-guide",
    excerpt: "Everything you need to know about booking Elephant and Jeep Safaris in Kaziranga. Compare Central (Kohora), Western (Bagori), and Eastern (Agoratoli) ranges.",
    content: `
# Kaziranga Safari Guide: Elephant Safari, Jeep Safari & Best Ranges

Sprawling along the lush plains of the Brahmaputra River in Assam, **Kaziranga National Park** is a UNESCO World Heritage Site and the world's most successful refuge for the endangered **Great Indian One-Horned Rhinoceros**.

---

## 1. Safari Zones Overview

Kaziranga is divided into four distinct tourism safari ranges:

1. **Central Range (Kohora):** The most popular and accessible zone. Excellent for rhino sightings, wild elephants, swamp deer, and rich wetland birdlife.
2. **Western Range (Bagori):** Boasts the highest density of one-horned rhinos. Highly recommended for first-time visitors and photographers.
3. **Eastern Range (Agoratoli):** Dominated by woodland and wetlands; world-famous for migratory water birds, raptors, and pelicans.
4. **Burapahar Range (Ghorakati):** Hilly terrain featuring trekking trails and gibbon habitats.

---

## 2. Elephant Safari vs Jeep Safari

- **Elephant Safari:** Conducted early in the morning (5:00 AM & 6:00 AM) in Kohora and Bagori ranges. The elephants navigate deep elephant grass, allowing visitors to view rhinos grazing just a few meters away.
- **Jeep Safari:** Conducted in morning and afternoon sessions across all four ranges. Covers large distances and is ideal for spotting wild buffalo herds, tigers, deer, and diverse bird species.

---

## 3. Best Time to Visit

Kaziranga is officially open to visitors from **November 1 to April 30**. During the summer monsoons (May to October), the park is closed as the Brahmaputra floodwaters replenish the wetlands.

---

## 4. How to Reach Kaziranga

- **From Guwahati:** Located 215 km away via NH 715 (approx 4.5 hours drive in a private cab).
- **From Jorhat:** Located 97 km away (approx 2 hours drive).

NE Dhaniya Tours & Travels provides direct pickup from Guwahati Airport / Railway Station with comfortable cabs, hotel bookings, and guaranteed safari permit coordination.
    `,
    featuredImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    category: "Assam",
    tags: ["Assam", "Kaziranga", "Wildlife Safari", "One-Horned Rhino"],
    author: "NE Dhaniya Travel Desk",
    readingTime: "5 min read",
    publishedAt: "2025-01-20T10:00:00.000Z",
    updatedAt: "2025-01-20T10:00:00.000Z",
    status: "published",
    seoTitle: "Kaziranga Safari Guide | Elephant & Jeep Safari Booking | NE Dhaniya",
    seoDescription: "Complete guide to Kaziranga National Park safari booking. Learn about Kohora and Bagori ranges, timings, Guwahati transfers & Assam travel tips.",
    faqs: [
      {
        question: "Can I book Kaziranga elephant safaris in advance?",
        answer: "Yes, elephant safaris have strictly limited seats and should be booked well in advance through your tour operator."
      }
    ],
    relatedDestinations: ["assam"],
    relatedPackages: ["kaziranga-wildlife-tour"],
    createdAt: "2025-01-20T10:00:00.000Z"
  }
];
