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
  businessName: "NE Dhanya Tour and Travels",
  tagline: "Your Trusted Travel Partner for Northeast India & Bhutan",
  whatsappNumber: "919678290128",
  phoneNumber: "+91 96782 90128",
  secondaryPhoneNumber: "+91 98640 66495",
  email: "menin.ghy123@gmail.com",
  address: "Guwahati, Assam, India - 781001 (Gateway to Northeast India)",
  businessHours: "Monday - Sunday: 7:00 AM - 10:00 PM (WhatsApp Support 24/7)",
  socialLinks: {
    facebook: "https://facebook.com/nedhanyatours",
    instagram: "https://instagram.com/nedhanyatours",
    youtube: "https://youtube.com/@nedhanyatours",
  },
  defaultMetaTitle: "NE Dhanya Tour and Travels | Northeast India Tour Packages, Car Rental & Taxi Services",
  defaultMetaDescription: "Explore Assam, Meghalaya, Arunachal, Sikkim, Nagaland & Bhutan with NE Dhanya Tour and Travels. Personal & sharing tours, premium car rental, hotel booking & 24/7 local support.",
  defaultOgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  websiteName: "NE Dhanya Tour and Travels",
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
        answer: "Yes! NE Dhanya Tour and Travels offers private vehicles (Innova Crysta, Sedan, Traveler) for families/couples, as well as economical sharing tour options for solo travelers and students."
      },
      {
        question: "Is Inner Line Permit (ILP) required for Indian tourists visiting Meghalaya?",
        answer: "No, Indian citizens currently do not need an Inner Line Permit (ILP) to visit Meghalaya. Valid government photo ID (Aadhaar or Voter ID) is sufficient."
      }
    ],
    seoTitle: "Meghalaya Tour Packages, Taxi & Car Rental | NE Dhanya Tour and Travels",
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
        answer: "Yes, NE Dhanya Tour and Travels provides dedicated outstation cabs, Innova Crysta, Sedans, and Tempo Travelers directly from Guwahati Airport / Railway Station."
      }
    ],
    seoTitle: "Assam Tour Packages, Car Rental & Travel Services | NE Dhanya Tour and Travels",
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
      "Inner Line Permit (ILP) is mandatory for all Indian citizens and Protected Area Permit (PAP) for foreign nationals. NE Dhanya Tour and Travels arranges permits seamlessly.",
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
        answer: "ILP can be applied online with your passport photo and ID proof. When you book your tour with NE Dhanya Tour and Travels, our team assists you with ILP and Bumla Pass permits."
      },
      {
        question: "How many days are required for the Guwahati to Tawang tour?",
        answer: "A minimum of 6 to 8 days is required to safely travel from Guwahati to Tawang and back with proper acclimatization stops in Bomdila or Dirang."
      }
    ],
    seoTitle: "Arunachal Pradesh Tour Packages & Tawang Taxi Service | NE Dhanya",
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
    seoTitle: "Sikkim Tour Packages & Gangtok Taxi Service | NE Dhanya Tour and Travels",
    seoDescription: "Experience Gangtok, North Sikkim, Lachung, Yumthang Valley & Nathula Pass. Book custom Sikkim tour packages and reliable car rentals with NE Dhanya.",
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
    seoTitle: "Nagaland Tour Packages, Hornbill Festival & Dzukou Valley | NE Dhanya",
    seoDescription: "Explore Nagaland with NE Dhanya Tour and Travels. Tailored Kohima packages, Dzukou Valley trek support, Hornbill Festival tours & reliable Nagaland taxi services.",
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
    seoTitle: "Mizoram Tour Packages & Aizawl Car Rental | NE Dhanya Tour and Travels",
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
    seoTitle: "Tripura Tour Packages & Agartala Taxi Service | NE Dhanya Tour and Travels",
    seoDescription: "Visit Ujjayanta Palace, Neermahal, Unakoti & Jampui Hills. Book customized Tripura tour packages & private taxi rentals with NE Dhanya Tour and Travels.",
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
        answer: "Yes! NE Dhanya Tour and Travels operates direct cross-border vehicle transfers and guided Bhutan packages from Guwahati via Samdrup Jongkhar or Phuentsholing."
      },
      {
        question: "Is passport mandatory for Indians visiting Bhutan?",
        answer: "Indian citizens can travel to Bhutan with either a valid Indian Passport (min 6 months validity) OR an original Voter Identity Card issued by the Election Commission of India. Aadhaar is not accepted for entry permit issuance."
      }
    ],
    seoTitle: "Bhutan Tour Packages from India & Assam | NE Dhanya Tour and Travels",
    seoDescription: "Book unforgettable Bhutan tour packages from Guwahati, Assam. Visit Paro Tiger's Nest, Thimphu, Punakha & Dochula Pass with complete permit & car assistance.",
    status: "published",
    featured: true,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  }
];

export const initialTouristPlaces: TouristPlace[] = [
  // ==========================================
  // ASSAM TOURIST PLACES (Requested by user)
  // ==========================================
  {
    id: "guwahati",
    name: "Guwahati",
    slug: "guwahati",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "The gateway city of Northeast India, famous for Maa Kamakhya Temple, Brahmaputra river cruises & vibrant markets.",
    description: "Guwahati is the bustling metropolitan gateway and commercial capital of Northeast India. Flanked by Nilachal Hill and the mighty Brahmaputra river, Guwahati blends ancient spiritual shaktipeeths like Kamakhya Temple and Umananda Peacock Island with scenic riverfront sunset cruises, museums, and rich silk markets.",
    heroImage: "/images/assam.jpg",
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
      "Book your airport transfer in advance with NE Dhanya Tour and Travels to avoid surge pricing."
    ],
    faqs: [
      {
        question: "Can I book outstation cabs from Guwahati Airport for Meghalaya or Kaziranga?",
        answer: "Yes, NE Dhanya Tour and Travels provides reliable outstation cabs (Sedan, Innova, Traveler) right outside Guwahati Airport with flight-tracking pick-up."
      }
    ],
    seoTitle: "Guwahati Tour Packages & Outstation Taxi Service | NE Dhanya Tour and Travels",
    seoDescription: "Book Guwahati sightseeing tours, Kamakhya temple darshan, and airport taxi transfers across Northeast India with NE Dhanya Tour and Travels.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "kamakhya-temple",
    name: "Kamakhya Temple",
    slug: "kamakhya-temple",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "Revered Shaktipeeth shrine atop Nilachal Hill, spiritual epicenter of Tantric worship & panoramic Brahmaputra river views.",
    description: "The revered Maa Kamakhya Temple, situated atop Nilachal Hill in Guwahati, is one of the oldest and most venerated of the 51 Shakti Peethas in Hindu spirituality. Dedicated to the mother goddess Kamakhya, the temple features unique bee-hive shaped architecture, ancient stone sculptures, and the sanctum containing the sacred natural rock fissure. It is the epicentre of the grand annual Ambubachi Mela and provides sweeping panoramic views over the Brahmaputra River.",
    heroImage: "/images/assam.jpg",
    topThingsToDo: [
      "Early morning VIP darshan at the sanctum sanctorum of Maa Kamakhya",
      "Visit the ten Mahavidya temples surrounding the Nilachal hill complex",
      "Admire the architectural stone carvings dating back to the Koch and Ahom dynasties",
      "Enjoy breathtaking sunset views overlooking the Brahmaputra River from the temple viewpoints"
    ],
    bestTimeToVisit: "October to March for pleasant temperatures; June for the renowned Ambubachi Mela festival.",
    howToReach: {
      byAir: "Guwahati Airport (GAU) is 20 km away.",
      byRail: "Kamakhya Railway Station (KYQ) is just 6 km away; Guwahati Station (GHY) is 8 km away.",
      byRoad: "Well-paved hill road with taxis and private cabs directly ascending Nilachal Hill."
    },
    travelTips: [
      "Traditional Indian attire is recommended when entering the temple sanctum.",
      "NE Dhanya Tour and Travels arranges VIP queue entry passes and dedicated round-trip vehicle transfers."
    ],
    faqs: [
      {
        question: "What are the temple darshan timings at Kamakhya?",
        answer: "The temple generally opens around 5:30 AM for morning rituals, with general darshan available from 8:00 AM to 1:00 PM and from 2:30 PM until sunset."
      }
    ],
    seoTitle: "Kamakhya Temple Guwahati Darshan, Timings & Taxi | NE Dhanya Tour and Travels",
    seoDescription: "Plan your Kamakhya Temple darshan in Guwahati. Book dedicated taxi transfers, VIP pass assistance & airport pick-up with NE Dhanya Tour and Travels.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "kaziranga-national-park",
    name: "Kaziranga National Park",
    slug: "kaziranga-national-park",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "UNESCO World Heritage Site sheltering two-thirds of the world's great one-horned rhinoceroses.",
    description: "Kaziranga National Park is a premier wildlife sanctuary stretching along the floodplains of the Brahmaputra River. In addition to harboring the world's highest density of one-horned rhinoceroses, Kaziranga is a tiger reserve, home to wild water buffaloes, Asian elephants, swamp deer, and hundreds of migratory bird species across Central, Western, Eastern, and Burapahar ranges.",
    heroImage: "/images/Kaziranga Wildlife Safari & Tea Trail.webp",
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
    seoTitle: "Kaziranga Tour Packages, Safari Booking & Taxi | NE Dhanya Tour and Travels",
    seoDescription: "Book Kaziranga safari packages, Guwahati to Kaziranga cabs & comfortable hotel stays. See one-horned rhinos, tigers & wildlife with verified local experts.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "manas-national-park",
    name: "Manas National Park",
    slug: "manas-national-park",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "UNESCO World Heritage Site, Project Tiger reserve & biosphere on Bhutan foothills, famed for golden langurs & river rafting.",
    description: "Nestled in the serene Himalayan foothills contiguous with the Royal Manas National Park in Bhutan, Manas National Park is celebrated for its exceptional biodiversity and scenic beauty. It is a UNESCO World Heritage Site, Tiger Reserve, Elephant Reserve, and Biosphere Reserve. Manas shelters rare and endangered species including the endemic Golden Langur, Pygmy Hog, Hispid Hare, and Wild Water Buffalo, along with river rafting adventures down the pristine Manas River.",
    heroImage: "/images/assam.jpg",
    topThingsToDo: [
      "Open-top 4x4 Jeep Safari across the lush Bansbari and Bhuyanpara ranges",
      "Gentle river rafting on the crystal-clear waters of the Manas River along the Indo-Bhutan border",
      "Spotting the rare Golden Langur and herds of wild Asian elephants",
      "Visiting the border outpost of Mathanguri for sweeping views of the Bhutan hills"
    ],
    bestTimeToVisit: "November to April for clear weather and best wildlife sighting opportunities.",
    howToReach: {
      byAir: "Guwahati Airport (GAU) is 150 km away (approx 3.5 to 4 hours by road).",
      byRail: "Barpeta Road Railway Station is 40 km away.",
      byRoad: "Smooth highway drive from Guwahati via NH 27 towards Barpeta Road and Bansbari gate."
    },
    travelTips: [
      "Stay at an eco-resort near the Bansbari gate for early morning safari departures.",
      "Bring binoculars for watching Bengal Florican and great hornbills."
    ],
    faqs: [
      {
        question: "How is Manas different from Kaziranga?",
        answer: "Manas features a stunning Himalayan foothill riverine backdrop, denser deciduous forests, rare golden langurs, and river rafting, offering a more tranquil and less crowded safari atmosphere."
      }
    ],
    seoTitle: "Manas National Park Tour Packages & Cab Booking | NE Dhanya Tour and Travels",
    seoDescription: "Explore Manas National Park with NE Dhanya Tour and Travels. Book jeep safaris, Guwahati to Manas taxi services, river rafting & eco jungle resorts.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "majuli-island",
    name: "Majuli Island",
    slug: "majuli-island",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "The world's largest inhabited river island on Brahmaputra, neo-Vaishnavite Satras, traditional mask-making & Mishing tribal culture.",
    description: "Majuli is an ethereal ecological and cultural wonder situated in the middle of the mighty Brahmaputra river. As the world's largest river island, Majuli is the heart of Assamese neo-Vaishnavite philosophy, home to historic Satras (monasteries) dating back to the 15th-century saint Srimanta Sankardeva. Famous for traditional handmade bamboo and clay masks at Samaguri Satra, classical Sattriya dance, pottery, and picturesque Mishing stilt houses, Majuli offers an idyllic escape into tranquility.",
    heroImage: "/images/assam.jpg",
    topThingsToDo: [
      "Ferry ride across the Brahmaputra River from Nimati Ghat (Jorhat)",
      "Witness traditional mask making by master artisans at Sri Sri Samaguri Satra",
      "Explore historic monastic Satras like Dakhinpat, Auniati, and Kamalabari",
      "Rent a bicycle to explore peaceful village trails, paddy fields, and Mishing bamboo stilt huts"
    ],
    bestTimeToVisit: "October to March for pleasant temperatures and cultural festivals like Raas Mahotsav (November).",
    howToReach: {
      byAir: "Jorhat Airport (JRH) is 25 km from Nimati Ghat; Guwahati Airport is 310 km away.",
      byRail: "Jorhat Railway Station is the nearest rail connection.",
      byRoad: "Drive to Nimati Ghat in Jorhat, followed by a scenic Ro-Pax government ferry ride across the Brahmaputra."
    },
    travelTips: [
      "Check government ferry departure timings from Nimati Ghat to plan your crossing comfortably.",
      "Stay in an authentic bamboo cottage homestay for an immersive local cultural experience."
    ],
    faqs: [
      {
        question: "Can we take our car to Majuli Island?",
        answer: "Yes! Modern Ro-Pax ferries operate between Nimati Ghat and Majuli, safely carrying private passenger cars and SUVs."
      }
    ],
    seoTitle: "Majuli Island Tour Packages & Jorhat Ferry Guide | NE Dhanya Tour and Travels",
    seoDescription: "Visit Majuli Island, the world's largest river island. Book Majuli tour packages, cultural Satra visits, homestays & Jorhat taxi rentals with local experts.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "sivasagar",
    name: "Sivasagar",
    slug: "sivasagar",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "Historical capital of the 600-year Ahom Kingdom, Rang Ghar amphitheatre, Talatal Ghar palace & massive Sivadol temple.",
    description: "Sivasagar (the Ocean of Lord Shiva) is the historic epicenter of Assam's royal heritage. For over six centuries, Sivasagar served as the capital of the valiant Ahom dynasty who famously defeated Mughal invasions. Today, Sivasagar showcases marvels of medieval engineering: the two-storied royal pavilion Rang Ghar (Asia's oldest surviving amphitheater), the subterranean secret maze tunnels of Talatal Ghar, the royal palace Kareng Ghar at Gargaon, and the colossal Sivadol temple towering beside the vast man-made Sivasagar water tank.",
    heroImage: "/images/assam.jpg",
    topThingsToDo: [
      "Marvel at the grand architecture of Rang Ghar, the royal sports pavilion of Ahom kings",
      "Explore the underground secret passages and military design of Talatal Ghar",
      "Visit Sivadol, one of the tallest Shiva temple towers in India, by the sacred Borpukhuri tank",
      "Discover the seven-storied royal palace of Kareng Ghar in Gargaon"
    ],
    bestTimeToVisit: "October to April for comfortable weather and cultural celebrations like Shivratri.",
    howToReach: {
      byAir: "Jorhat Airport (55 km) or Dibrugarh Airport (80 km).",
      byRail: "Simaluguri Junction (16 km) is the main railhead connecting Sivasagar.",
      byRoad: "NH 715 connects Jorhat (55 km), Kaziranga (140 km), and Guwahati (360 km)."
    },
    travelTips: [
      "Combine Sivasagar with Kaziranga and Majuli for the quintessential Assam heritage and wildlife circuit.",
      "Hire an authorized local heritage guide to unravel the fascinating secrets of Ahom war architecture."
    ],
    faqs: [
      {
        question: "How old are the monuments in Sivasagar?",
        answer: "Most monuments in Sivasagar were constructed in the 17th and 18th centuries under illustrious Ahom monarchs like Swargadeo Rudra Singha and Pramatta Singha."
      }
    ],
    seoTitle: "Sivasagar Tour Packages & Ahom Heritage Guide | NE Dhanya Tour and Travels",
    seoDescription: "Explore Sivasagar historical monuments: Rang Ghar, Talatal Ghar & Sivadol. Book custom Assam heritage tours and outstation taxi service with NE Dhanya.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "jorhat",
    name: "Jorhat",
    slug: "jorhat",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "The Tea Capital of India, colonial tea estate bungalows, Tocklai Tea Research Institute & gateway to Majuli.",
    description: "Known proudly as the Tea Capital of the World, Jorhat is enveloped by emerald oceans of manicured tea plantations and colonial planters' heritage. It is home to the historic Tocklai Tea Research Association (the world's oldest and largest tea research institute) and the century-old Jorhat Gymkhana Club. Serving as the primary gateway to the river island of Majuli, Jorhat combines colonial charm, world-class orthodox tea tasting, and cultural warmth.",
    heroImage: "/images/assam.jpg",
    topThingsToDo: [
      "Tour rolling tea estates and learn traditional orthodox tea plucking and processing",
      "Stay in a restored British colonial tea planter's heritage bungalow",
      "Board the river ferry from Nimati Ghat to visit Majuli Island",
      "Visit the historic Jorhat Gymkhana Club, one of the oldest golf clubs in Asia"
    ],
    bestTimeToVisit: "October to April for clear, pleasant weather.",
    howToReach: {
      byAir: "Rowriah Airport in Jorhat (JRH) connects to Kolkata and Guwahati.",
      byRail: "Jorhat Town Railway Station and Mariani Junction (17 km).",
      byRoad: "Located along NH 715, approx 300 km east of Guwahati and 90 km from Kaziranga."
    },
    travelTips: [
      "Purchase factory-fresh Assam CTC and orthodox whole leaf black tea directly from estate retail counters.",
      "Combine your stay in Jorhat with early morning transfers to Majuli Island."
    ],
    faqs: [
      {
        question: "Can tourists stay inside tea estates in Jorhat?",
        answer: "Yes! Several heritage tea planter bungalows offer luxurious stays with colonial hospitality, tea factory tours, and gourmet Assamese cuisine."
      }
    ],
    seoTitle: "Jorhat Tea Capital Tours & Taxi Rental | NE Dhanya Tour and Travels",
    seoDescription: "Plan your trip to Jorhat, Assam. Heritage tea garden stays, Majuli ferry transfers, and reliable private cab rentals with NE Dhanya Tour and Travels.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "haflong",
    name: "Haflong",
    slug: "haflong",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "Assam's only hill station, emerald green rolling peaks, Haflong Lake, misty valleys & Jatinga bird phenomenon.",
    description: "Perched at an elevation of 2,300 feet amidst the Borail mountain range in Dima Hasao, Haflong is affectionately hailed as the 'Switzerland of the East' and is Assam's only hill station. Characterized by cool breezes, mist-shrouded valleys, scenic Haflong Lake, sprawling pineapple and orange orchards, and rich Dimasa tribal culture, Haflong offers an enchanting offbeat mountain retreat. Nearby Jatinga is globally renowned for its mysterious migratory bird phenomenon during late monsoons.",
    heroImage: "/images/northeast-hero-bg.jpg",
    topThingsToDo: [
      "Boat ride and leisurely stroll along picturesque Haflong Lake and hanging footbridge",
      "Witness panoramic views of the Borail mountain ranges from Haflong View Point",
      "Visit the mysterious bird-watching ridge of Jatinga",
      "Take the scenic Vistadome tourist train through the lush tunnels and gorges of Dima Hasao"
    ],
    bestTimeToVisit: "October to April for crisp mountain air and clear panoramic valley vistas.",
    howToReach: {
      byAir: "Guwahati Airport (GAU) is approx 310 km away; Silchar Airport (IXS) is 100 km away.",
      byRail: "New Haflong Railway Station (NHLG) is famous for the scenic Vistadome train route from Guwahati.",
      byRoad: "Scenic mountain highway NH 27 connects Guwahati to Haflong in approx 6.5 hours."
    },
    travelTips: [
      "The Guwahati-Haflong Vistadome glass-roof train ride is one of India's most scenic rail journeys; book well in advance.",
      "Pack light woolens as evenings can be pleasantly chilly even in summer."
    ],
    faqs: [
      {
        question: "What is the mystery of Jatinga in Haflong?",
        answer: "During misty, foggy nights of September and October, various species of migratory and resident birds descend towards lights in Jatinga village due to high atmospheric winds and disorientation."
      }
    ],
    seoTitle: "Haflong Hill Station Tour Packages & Vistadome Taxi | NE Dhanya Tour and Travels",
    seoDescription: "Discover Haflong, Assam's only hill station. Book Haflong Lake tours, Jatinga excursions, and private car rentals from Guwahati with NE Dhanya.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "pobitora-wildlife-sanctuary",
    name: "Pobitora Wildlife Sanctuary",
    slug: "pobitora-wildlife-sanctuary",
    destinationSlug: "assam",
    destinationName: "Assam",
    shortDescription: "Highest density of one-horned rhinos in the world, just 45 km from Guwahati, grassland safaris & birdwatching.",
    description: "Located just a scenic 1.5-hour drive from Guwahati along the Brahmaputra floodplains, Pobitora Wildlife Sanctuary boasts the highest ecological density of the Great Indian One-Horned Rhinoceros anywhere on earth. Spanning grasslands, wetlands, and hillocks, Pobitora is ideal for travelers on tight schedules seeking guaranteed close-range rhino sightings on early morning elephant and open jeep safaris, alongside over 375 species of resident and migratory birds.",
    heroImage: "/images/Kaziranga Wildlife Safari & Tea Trail.webp",
    topThingsToDo: [
      "Early morning elephant safari for guaranteed sightings of one-horned rhinos in tall elephant grass",
      "Open 4x4 jeep safari across grassland tracks and Haduk Hanging Bridge",
      "Birdwatching along the wetlands for migratory waterfowls, whistling ducks, and kingfishers",
      "Scenic village drive along the Brahmaputra dyke"
    ],
    bestTimeToVisit: "November to April. The sanctuary is closed during the monsoon season (May to October).",
    howToReach: {
      byAir: "Guwahati Airport (GAU) is approx 65 km away.",
      byRail: "Guwahati Railway Station (GHY) is 45 km away (approx 1.5 hours drive).",
      byRoad: "Direct scenic drive via Chandrapur or NH 27 through Sonapur."
    },
    travelTips: [
      "Pobitora can easily be visited as a convenient half-day or day trip from Guwahati.",
      "Reach before 6:30 AM to catch the magical first elephant safari in the morning mist."
    ],
    faqs: [
      {
        question: "Can I visit Pobitora in a single day from Guwahati?",
        answer: "Yes! Pobitora is located just 45 km from central Guwahati, making it the perfect day trip for wildlife lovers with limited travel time."
      }
    ],
    seoTitle: "Pobitora Safari Booking & Guwahati Day Tour Taxi | NE Dhanya Tour and Travels",
    seoDescription: "Book Pobitora elephant & jeep safari packages, Guwahati to Pobitora day trip cabs, and rhino watching tours with NE Dhanya Tour and Travels.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // ==========================================
  // MEGHALAYA TOURIST PLACES
  // ==========================================
  {
    id: "shillong",
    name: "Shillong",
    slug: "shillong",
    destinationSlug: "meghalaya",
    destinationName: "Meghalaya",
    shortDescription: "The Scotland of the East featuring pine-covered hills, lively Police Bazar, Umiam Lake, and colonial charm.",
    description: "Shillong, the capital of Meghalaya, sits amidst pine-clad mountains and gentle rolling hills that earned it the moniker 'Scotland of the East'. With its vibrant music culture, cafe scene, bustling Police Bazar, scenic golf course, and historic heritage, Shillong serves as the primary base for exploring Meghalaya.",
    heroImage: "/images/meghalaya.png",
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
        answer: "NE Dhanya Tour and Travels offers direct Guwahati to Shillong private car transfers starting with competitive rates for Sedans, Innova Crysta, and sharing options."
      }
    ],
    seoTitle: "Shillong Tour & Travel Guide | Shillong Taxi Service | NE Dhanya",
    seoDescription: "Plan your trip to Shillong, Meghalaya. Top tourist attractions, Guwahati to Shillong taxi fares, hotels, and custom travel packages with NE Dhanya Tour and Travels.",
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
    heroImage: "/images/Meghalaya Scenic Escape.webp",
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
    seoTitle: "Cherrapunji Tour Packages & Shillong to Sohra Taxi | NE Dhanya",
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
    heroImage: "/images/meghalaya.png",
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
    seoTitle: "Dawki Tour Packages, Umngot River Boating & Taxi | NE Dhanya",
    seoDescription: "Experience Dawki crystal clear river boating, Shnongpdeng camping & water sports. Book Shillong to Dawki taxi service & customized Meghalaya tours.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "mawlynnong",
    name: "Mawlynnong",
    slug: "mawlynnong",
    destinationSlug: "meghalaya",
    destinationName: "Meghalaya",
    shortDescription: "Celebrated as Asia's Cleanest Village, single-decker living root bridge in Riwai & pristine bamboo skywalk.",
    description: "Honored by Discover India as 'Asia's Cleanest Village', Mawlynnong is a peaceful rural paradise nestled in the East Khasi Hills. Paved with cobblestone pathways, bamboo waste bins, and blooming orchids, the village showcases centuries-old Khasi matrilineal culture. Nearby Riwai village hosts an accessible Single Decker Living Root Bridge, and the Sky Walk provides panoramic views into the floodplains of Bangladesh.",
    heroImage: "/images/meghalaya.png",
    topThingsToDo: [
      "Walk across the ancient Single Decker Living Root Bridge in neighbouring Riwai",
      "Climb the 85-foot bamboo machan (Sky Walk) overlooking Bangladesh",
      "Marvel at the natural geological wonder of the Balancing Rock",
      "Taste home-cooked Khasi organic meals at traditional village homestays"
    ],
    bestTimeToVisit: "September to May for pleasant, sunny village walks.",
    howToReach: {
      byAir: "Guwahati Airport (approx 190 km).",
      byRail: "Guwahati Railway Station (approx 170 km).",
      byRoad: "90 km from Shillong (approx 2.5 hours drive via Pynursla)."
    },
    travelTips: [
      "Mawlynnong is 100% plastic-free; please dispose of all waste strictly in conical bamboo bins.",
      "Combine with Dawki on the same route for a seamless full-day itinerary."
    ],
    faqs: [
      {
        question: "Is the Living Root Bridge in Mawlynnong easy to reach?",
        answer: "Yes! Unlike the 3,500-step trek to Nongriat, the Riwai root bridge near Mawlynnong is just a gentle 10-minute walk down paved stone steps, suitable for children and elders."
      }
    ],
    seoTitle: "Mawlynnong Cleanest Village Tour & Taxi | NE Dhanya Tour and Travels",
    seoDescription: "Visit Mawlynnong, Asia's Cleanest Village & Riwai Living Root Bridge. Book Shillong to Mawlynnong cab service and customized tours on WhatsApp.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "laitlum-canyon",
    name: "Laitlum Canyon",
    slug: "laitlum-canyon",
    destinationSlug: "meghalaya",
    destinationName: "Meghalaya",
    shortDescription: "Dramatic amphitheater of endless green gorges, mist-covered mountain rims & sweeping Rasong valley vistas.",
    description: "Laitlum, meaning 'End of Hills', is one of Meghalaya's most breathtaking geological wonders. Perched atop the East Khasi Hills, the canyon plunges thousands of feet into winding emerald river valleys below. Often wrapped in dramatic swirling mist, Laitlum offers an awe-inspiring 360-degree panorama of rolling meadows and an ancient steep stairway leading down to the hidden village of Rasong.",
    heroImage: "/images/meghalaya.png",
    topThingsToDo: [
      "Witness mesmerizing sunrise and shifting cloud formations over the canyon abyss",
      "Walk along the precipitous cliff edges and capture breathtaking landscape photographs",
      "Trek down the rustic 3,000-step stone stairway connecting the canyon rim to Rasong valley",
      "Enjoy a serene mountain picnic amidst highland grassy meadows"
    ],
    bestTimeToVisit: "October to April for clearest valley vistas and golden afternoon sunlight.",
    howToReach: {
      byAir: "Guwahati Airport (140 km).",
      byRail: "Guwahati Station (120 km).",
      byRoad: "Located just 24 km from central Shillong (approx 45 minutes to 1 hour drive)."
    },
    travelTips: [
      "Carry a light jacket as winds along the exposed canyon ridge can be brisk and cold.",
      "Keep a safe distance from cliff edges as there are no artificial railings."
    ],
    faqs: [
      {
        question: "Can Laitlum Canyon be visited on the way from Guwahati to Shillong?",
        answer: "Laitlum is best visited on a day tour from Shillong or combined with Krang Suri / Jowai sightseeing."
      }
    ],
    seoTitle: "Laitlum Canyon Sightseeing & Shillong Taxi | NE Dhanya Tour and Travels",
    seoDescription: "Explore Laitlum Canyon Meghalaya. Breathtaking gorge views, photography & private taxi transfers from Shillong with NE Dhanya Tour and Travels.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "krang-suri-falls",
    name: "Krang Suri Falls",
    slug: "krang-suri-falls",
    destinationSlug: "meghalaya",
    destinationName: "Meghalaya",
    shortDescription: "Fairytale waterfall in Jowai featuring an iridescent turquoise natural swimming pool, cave path & boating.",
    description: "Tucked away in the West Jaintia Hills near Amlarem, Krang Suri is arguably the most magical waterfall in Northeast India. The waterfall pours gracefully over a broad limestone ledge into a natural turquoise swimming pool so vibrant it appears illuminated. A stone-carved pathway chiseled into the cliff allows visitors to walk safely behind the waterfall curtain.",
    heroImage: "/images/meghalaya.png",
    topThingsToDo: [
      "Swim in the safe, crystal-clear turquoise natural plunge pool (life jackets mandatory)",
      "Walk along the stone trail behind the roaring curtain of falling water",
      "Paddle boating on the tranquil calm stretch above the waterfall",
      "Camp overnight at riverside eco-campsites nearby"
    ],
    bestTimeToVisit: "September to April for brilliant turquoise water color.",
    howToReach: {
      byAir: "Guwahati Airport (approx 170 km).",
      byRail: "Guwahati Railway Station (150 km).",
      byRoad: "Located 85 km from Shillong via Jowai (approx 2.5 to 3 hours drive)."
    },
    travelTips: [
      "Life jackets are strictly compulsory for swimming and provided on rent at the counter.",
      "Carry extra dry clothes and towels if you plan to enter the water."
    ],
    faqs: [
      {
        question: "Is swimming allowed at Krang Suri Falls?",
        answer: "Yes, supervised swimming is permitted in designated safe areas with rented life jackets."
      }
    ],
    seoTitle: "Krang Suri Falls Jowai Tour & Cab Service | NE Dhanya Tour and Travels",
    seoDescription: "Visit the magical turquoise waters of Krang Suri Falls in Meghalaya. Book Shillong to Krang Suri taxi, swimming permits & day tour packages.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // ==========================================
  // ARUNACHAL PRADESH TOURIST PLACES
  // ==========================================
  {
    id: "tawang",
    name: "Tawang",
    slug: "tawang",
    destinationSlug: "arunachal-pradesh",
    destinationName: "Arunachal Pradesh",
    shortDescription: "High-altitude Himalayan wonder boasting India's largest Buddhist monastery, Bumla Pass & Sela Pass.",
    description: "Perched at an elevation of approximately 10,000 feet near the borders of Tibet and Bhutan, Tawang is an awe-inspiring mountain destination. It is celebrated for the 400-year-old Tawang Monastery (Galden Namgey Lhatse), the sacred high-altitude Sangetsar (Madhuri) Lake, the Indo-China border at Bumla Pass (15,200 ft), and the heroic Jaswant Garh War Memorial.",
    heroImage: "/images/Tawang Mountain Odyssey.avif",
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
        answer: "No, Bumla Pass requires local Arunachal registered 4-wheel drive vehicles (Tata Sumo / Bolero / Scorpio) with military clearance. NE Dhanya Tour and Travels arranges complete Bumla vehicle logistics and permits."
      }
    ],
    seoTitle: "Tawang Tour Packages & Guwahati to Tawang Taxi | NE Dhanya Tour and Travels",
    seoDescription: "Book memorable Tawang tour packages, Sela Pass & Bumla Pass excursions, and reliable Guwahati to Tawang car rentals with local drivers.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "sela-pass",
    name: "Sela Pass & Sela Lake",
    slug: "sela-pass",
    destinationSlug: "arunachal-pradesh",
    destinationName: "Arunachal Pradesh",
    shortDescription: "High-altitude mountain pass at 13,700 ft, frozen turquoise lake, 101 sacred lakes & Jaswant Garh War Memorial.",
    description: "Sela Pass, situated at a breathtaking elevation of 13,700 feet (4,170 m), is the lifeline mountain pass connecting Tawang to the rest of India. Capped in snow for most of the year, the pass is home to the sacred Sela Lake (Paradise Lake), reverently believed by Buddhists to be surrounded by 101 sacred lakes. Nearby lies the revered Jaswant Garh War Memorial, honoring rifleman Jaswant Singh Rawat of the 1962 Sino-Indian War.",
    heroImage: "/images/Arunachal-Pradesh.jpg",
    topThingsToDo: [
      "Photo stop at the iconic Sela Pass gateway gate draped in colorful Buddhist prayer flags",
      "Witness the partially frozen turquoise waters of Sela Lake",
      "Pay solemn respects at Jaswant Garh War Memorial and enjoy complimentary army hot tea",
      "Experience snow walking and panoramic Himalayan alpine photography"
    ],
    bestTimeToVisit: "March to May for spring weather and rhododendron blooms; October to November for clear pass crossings; December to February for pure winter snow.",
    howToReach: {
      byAir: "Guwahati Airport (380 km).",
      byRail: "Guwahati or Tezpur Railway Station.",
      byRoad: "Traversed along the Trans-Arunachal Highway between Dirang (65 km) and Tawang (75 km)."
    },
    travelTips: [
      "Drink plenty of water and avoid vigorous running at the pass summit to prevent sudden altitude sickness.",
      "Always carry thermal jackets, gloves, and snow glasses."
    ],
    faqs: [
      {
        question: "Is Sela Pass open during heavy winter snow?",
        answer: "The Border Roads Organisation (BRO) works year-round to keep Sela Pass clear, and the newly opened Sela Tunnel now ensures seamless all-weather connectivity."
      }
    ],
    seoTitle: "Sela Pass Arunachal Pradesh Travel Guide | NE Dhanya Tour and Travels",
    seoDescription: "Cross Sela Pass at 13,700 ft on your way to Tawang. Sela Lake viewpoints, road status & Guwahati to Tawang car rentals with NE Dhanya Tour and Travels.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "dirang-valley",
    name: "Dirang Valley",
    slug: "dirang-valley",
    destinationSlug: "arunachal-pradesh",
    destinationName: "Arunachal Pradesh",
    shortDescription: "Picturesque temperate mountain valley, kiwi orchards, hot water springs, Dirang Dzong & Sangti Valley.",
    description: "Resting gracefully at 4,900 feet in West Kameng, Dirang is a postcard-perfect mountain valley known for its pleasant microclimate, kiwi and apple orchards, and historical Monpa tribal settlements. Highlights include the 17th-century stone fortress Dirang Dzong, natural hot sulfur water springs, the Thupsung Dhargye Ling Monastery, and the idyllic Sangti Valley where rare Black-Necked Cranes winter.",
    heroImage: "/images/Arunachal-Pradesh.jpg",
    topThingsToDo: [
      "Explore the 500-year-old stone architecture of Dirang Dzong",
      "Dip your feet into therapeutic natural hot springs along the Dirang River",
      "Visit scenic Sangti Valley with its wooden suspension bridge and grazing sheep herds",
      "Meditation and panoramic valley viewpoints at Thupsung Dhargye Ling Monastery"
    ],
    bestTimeToVisit: "September to May for pleasant valley temperatures.",
    howToReach: {
      byAir: "Guwahati Airport (310 km) or Tezpur (180 km).",
      byRail: "Tezpur (Rangapara) or Guwahati railway station.",
      byRoad: "Situated 42 km ahead of Bomdila along the Guwahati-Tawang highway."
    },
    travelTips: [
      "Dirang is the recommended acclimatization stopover before ascending to Sela Pass and Tawang.",
      "Sample fresh locally harvested kiwis, persimmons, and organic mountain honey."
    ],
    faqs: [
      {
        question: "Why is Dirang preferred over Bomdila for an overnight halt?",
        answer: "Dirang lies at a gentler altitude (4,900 ft vs 8,500 ft in Bomdila), offering warmer night temperatures, scenic riverside resorts, and closer proximity to Sela Pass."
      }
    ],
    seoTitle: "Dirang Valley Arunachal Tour Packages | NE Dhanya Tour and Travels",
    seoDescription: "Plan your Dirang Valley stay. Sangti Valley, hot springs, Dirang Dzong & comfortable riverside hotels. Book Guwahati to Tawang cabs on WhatsApp.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // ==========================================
  // SIKKIM TOURIST PLACES
  // ==========================================
  {
    id: "gangtok",
    name: "Gangtok",
    slug: "gangtok",
    destinationSlug: "sikkim",
    destinationName: "Sikkim",
    shortDescription: "Clean, scenic capital city with panoramic Kanchenjunga viewpoints, MG Marg, and ancient monasteries.",
    description: "Gangtok, the pristine capital of Sikkim, balances charming hill-station tranquility with modern vibrancy. Straddling mountain ridges, Gangtok features the pedestrianized, vehicle-free MG Marg, the historic Enchey and Rumtek monasteries, the scenic ropeway cable car, and serves as the gateway to North Sikkim and Tsomgo Lake.",
    heroImage: "/images/sikkim.jpg",
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
    seoTitle: "Gangtok Tour Packages & Taxi Service | NE Dhanya Tour and Travels",
    seoDescription: "Plan your Gangtok trip with NE Dhanya Tour and Travels. Affordable packages, NJP to Gangtok car rentals, Tsomgo Lake day tours & North Sikkim trips.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "tsomgo-lake",
    name: "Tsomgo Lake & Nathula Pass",
    slug: "tsomgo-lake",
    destinationSlug: "sikkim",
    destinationName: "Sikkim",
    shortDescription: "Sacred glacial lake at 12,400 ft, yak rides, Baba Harbhajan Mandir & historic Indo-China border pass at Nathula.",
    description: "Tsomgo Lake (Changu Lake) is a sacred glacial lake perched at an altitude of 12,400 feet, surrounded by steep snow-clad peaks. Its surface mirrors shifting seasons, freezing completely in winter and surrounded by alpine flowers in spring. Further up lies the historic Nathula Pass on the Indo-China border (14,140 ft) along the Old Silk Route, and the sacred memorial shrine of Baba Harbhajan Singh.",
    heroImage: "/images/Sikkim Himalayan Explorer.jpg",
    topThingsToDo: [
      "Ride decorated mountain yaks along the shores of glacial Tsomgo Lake",
      "Stand at the international Indo-China border gate at Nathula Pass (subject to army permit)",
      "Pay homage at the legendary Baba Harbhajan Singh temple",
      "Ride the highest ropeway cable car in the region at Tsomgo"
    ],
    bestTimeToVisit: "March to May for spring flowers; October to December for clear mountain vistas; January to March for frozen snow landscapes.",
    howToReach: {
      byAir: "Bagdogra Airport (160 km via Gangtok).",
      byRail: "NJP Railway Station (155 km).",
      byRoad: "Located 40 km from Gangtok (approx 2 to 2.5 hours drive via Jawaharlal Nehru Road)."
    },
    travelTips: [
      "Nathula Pass is open for Indian tourists Wednesday to Sunday and strictly closed on Mondays and Tuesdays.",
      "Permits must be applied at least 24-48 hours in advance with 2 passport photos and valid Indian ID."
    ],
    faqs: [
      {
        question: "Can foreign nationals visit Nathula Pass?",
        answer: "Foreign nationals are permitted up to Tsomgo Lake and Baba Mandir with Protected Area Permits (PAP), but Nathula Pass border itself is restricted strictly to Indian citizens."
      }
    ],
    seoTitle: "Tsomgo Lake & Nathula Pass Tour Permits | NE Dhanya Tour and Travels",
    seoDescription: "Book Tsomgo Lake day tour, Nathula Pass permits & Baba Mandir excursion from Gangtok. Reliable 4x4 cabs with NE Dhanya Tour and Travels.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "yumthang-valley",
    name: "Yumthang Valley of Flowers & Zero Point",
    slug: "yumthang-valley",
    destinationSlug: "sikkim",
    destinationName: "Sikkim",
    shortDescription: "Alpine rhododendron sanctuary at 11,800 ft, sulfur hot springs & snowbound Zero Point at 15,300 ft.",
    description: "Known popularly as the 'Valley of Flowers of the East', Yumthang Valley in North Sikkim is an ethereal alpine wonderland situated at 11,800 feet. Fringed by pine forests, hot sulfur springs, and the meandering Yumthang River, the valley blossoms into a riot of colors with over 24 species of wild rhododendrons in spring. Higher up lies Zero Point (Yumesamdong) at 15,300 feet, where the civilian road terminates amidst eternal snow.",
    heroImage: "/images/sikkim.jpg",
    topThingsToDo: [
      "Witness blooming rhododendron forests at Shingba Rhododendron Sanctuary in spring",
      "Dip into the natural therapeutic hot sulfur water spring",
      "Excursion to snowbound Zero Point (Yumesamdong) for snow play and alpine views",
      "Experience cozy wooden cottage hospitality in the alpine village of Lachung"
    ],
    bestTimeToVisit: "March to May for spectacular rhododendron blossoms; December to March for heavy snow cover at Zero Point.",
    howToReach: {
      byAir: "Bagdogra Airport (245 km).",
      byRail: "New Jalpaiguri (240 km).",
      byRoad: "Travel via Gangtok to Lachung (overnight stay), then 25 km drive up to Yumthang Valley."
    },
    travelTips: [
      "North Sikkim trips require robust 4x4 vehicles like Innova, Scorpio, or Bolero with experienced local hill drivers.",
      "Rent heavy snow coats and snow gumboots from local stalls in Lachung or Yumthang."
    ],
    faqs: [
      {
        question: "Is Zero Point included in the standard North Sikkim tour?",
        answer: "Zero Point is an optional day excursion from Yumthang Valley that can be added for a nominal direct vehicle surcharge depending on snow and weather."
      }
    ],
    seoTitle: "Yumthang Valley & Zero Point Tour Packages | NE Dhanya Tour and Travels",
    seoDescription: "Book North Sikkim Lachung, Yumthang Valley & Zero Point tour packages with NE Dhanya Tour and Travels. Verified cabs, permits & comfortable stays.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // ==========================================
  // NAGALAND TOURIST PLACES
  // ==========================================
  {
    id: "kohima",
    name: "Kohima",
    slug: "kohima",
    destinationSlug: "nagaland",
    destinationName: "Nagaland",
    shortDescription: "Historic hilltop capital, pivotal 1944 Battle of Kohima WWII Cemetery, State Museum & local bazaars.",
    description: "Kohima, the scenic capital of Nagaland, is steeped in WWII military history, rich indigenous tribal culture, and hilltop charm. Built across mountain ridges at an altitude of 4,738 feet, Kohima is renowned for the beautifully landscaped Commonwealth War Graves Cemetery, the Kohima Cathedral on Aradurah Hill, the Nagaland State Museum, and its proximity to Kisama Heritage Village.",
    heroImage: "/images/nagaland.avif",
    topThingsToDo: [
      "Pay respects at the historic WWII Kohima War Cemetery and read the famous Kohima Epitaph",
      "Explore Naga tribal artifacts, weaponries, and musical instruments at the State Museum",
      "Marvel at the grand architecture of the Catholic Cathedral on Aradurah Hill",
      "Shop for authentic Naga shawls, hand-woven cane baskets, and bamboo pickles"
    ],
    bestTimeToVisit: "October to May. December is peak season for the world-famous Hornbill Festival.",
    howToReach: {
      byAir: "Dimapur Airport (DMU) is 74 km away (approx 2.5 to 3 hours drive).",
      byRail: "Dimapur Railway Station (DMV) has broad-gauge express trains to Guwahati and Kolkata.",
      byRoad: "NH 29 connects Dimapur to Kohima over a scenic mountain highway."
    },
    travelTips: [
      "Inner Line Permit (ILP) is required for Indian citizens and easily arranged online by NE Dhanya.",
      "Book months in advance if traveling during the Hornbill Festival (Dec 1-10)."
    ],
    faqs: [
      {
        question: "How far is Kohima from Dimapur?",
        answer: "Kohima is 74 km from Dimapur, taking around 2.5 to 3 hours by private cab along NH 29."
      }
    ],
    seoTitle: "Kohima Tour Packages & Dimapur to Kohima Taxi | NE Dhanya Tour and Travels",
    seoDescription: "Plan your Kohima Nagaland trip. WWII Cemetery, Hornbill Festival transfers, Dimapur to Kohima cabs & local sightseeing packages with NE Dhanya.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "dzukou-valley",
    name: "Dzukou Valley",
    slug: "dzukou-valley",
    destinationSlug: "nagaland",
    destinationName: "Nagaland",
    shortDescription: "Pristine valley of rolling emerald bamboo hills at 2,452m, natural stream pools & rare endemic Dzukou lilies.",
    description: "Straddling the border of Nagaland and Manipur at an elevation of 2,452 meters, Dzukou Valley is one of India's most extraordinary high-altitude trekking paradises. Characterized by gently rolling, undulating hills carpeted in dwarf bamboo, crystal-clear cold mountain streams, and natural caves, Dzukou transforms in summer with blooming rare endemic Dzukou lilies and wildflowers.",
    heroImage: "/images/nagaland.avif",
    topThingsToDo: [
      "Trek through mossy rainforest trails via Viswema or Jakhama route",
      "Stand in awe of the endless emerald rolling curves of the valley floor",
      "Camp under pristine star-filled dark skies in alpine dormitory rest houses or tents",
      "Photograph rare Dzukou lilies in peak bloom during monsoon months"
    ],
    bestTimeToVisit: "June to September for blooming wildflowers and lush greenery; October to March for clear, crisp trekking skies.",
    howToReach: {
      byAir: "Dimapur Airport (approx 100 km to trek trailhead).",
      byRail: "Dimapur Railway Station.",
      byRoad: "Drive from Kohima (25 km) to Viswema or Jakhama village, from where the hiking trail begins."
    },
    travelTips: [
      "The Viswema trail is longer but gentler; the Jakhama trail is steeper and faster. Most trekkers ascend via Viswema and descend via Jakhama.",
      "Carry raincoats, sturdy hiking boots, and warm fleece layers as valley nights are freezing."
    ],
    faqs: [
      {
        question: "How difficult is the Dzukou Valley trek?",
        answer: "The trek is moderately challenging, requiring 4 to 5 hours of uphill hiking to reach the valley ridge, suitable for anyone with average fitness."
      }
    ],
    seoTitle: "Dzukou Valley Trek Guide & Kohima Taxi | NE Dhanya Tour and Travels",
    seoDescription: "Book Dzukou Valley trekking guides, camp permits, and Kohima to Viswema/Jakhama trailhead taxi service with NE Dhanya Tour and Travels.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // ==========================================
  // BHUTAN TOURIST PLACES
  // ==========================================
  {
    id: "thimphu",
    name: "Thimphu",
    slug: "thimphu",
    destinationSlug: "bhutan",
    destinationName: "Bhutan",
    shortDescription: "Peaceful capital of Bhutan, Buddha Dordenma golden statue, Tashichho Dzong & traditional crafts.",
    description: "Thimphu, the tranquil capital of the Kingdom of Bhutan, uniquely blends centuries-old Buddhist traditions with modern governance. As the only capital city in the world without a single traffic light, Thimphu features the colossal 169-foot Buddha Dordenma bronze statue, the riverside fortress Tashichho Dzong, the National Memorial Chorten, and the Motithang Takin Preserve.",
    heroImage: "/images/bhutan.jpg",
    topThingsToDo: [
      "Visit Buddha Dordenma (Buddha Point) for sweeping panoramas over Thimphu valley",
      "Witness evening lighting and monastic splendour at Tashichho Dzong",
      "Spin prayer wheels alongside locals at the National Memorial Chorten",
      "See the unique national animal Takin at Motithang Preserve and shop at the Craft Bazaar"
    ],
    bestTimeToVisit: "March to May for spring weather; September to November for clear autumn skies and Tshechu festivals.",
    howToReach: {
      byAir: "Paro International Airport (PBH) is 50 km away (approx 1.5 hours drive).",
      byRail: "Hasimara Railway Station in West Bengal (170 km via Phuentsholing border).",
      byRoad: "Smooth highway drive from border towns Phuentsholing (165 km) or Samdrup Jongkhar via Guwahati."
    },
    travelTips: [
      "Dress respectfully in full-sleeved shirts and long trousers when visiting Dzongs and temples.",
      "NE Dhanya Tour and Travels provides end-to-end Bhutan Entry Permit processing."
    ],
    faqs: [
      {
        question: "Do Indian tourists require a passport for Bhutan?",
        answer: "Indian citizens can travel with either an Indian Passport (minimum 6 months validity) or a valid Voter Identity Card issued by the Election Commission of India."
      }
    ],
    seoTitle: "Thimphu Bhutan Tour Packages & Cab Booking | NE Dhanya Tour and Travels",
    seoDescription: "Discover Thimphu with NE Dhanya Tour and Travels. Buddha Point, Dzong visits, entry permit assistance & private Bhutan tourist car rentals.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "paro",
    name: "Paro & Tiger's Nest",
    slug: "paro",
    destinationSlug: "bhutan",
    destinationName: "Bhutan",
    shortDescription: "Iconic cliffside pilgrimage hike to Tiger's Nest Monastery (Paro Taktsang), Rinpung Dzong & National Museum.",
    description: "Paro is a breathtaking mountain valley home to Bhutan's sole international airport and the kingdom's most sacred pilgrimage site: Paro Taktsang (The Tiger's Nest). Clinging miraculously to a sheer granite cliff 900 meters above the valley floor, Tiger's Nest is where Guru Padmasambhava meditated in the 8th century. Paro also boasts the majestic Rinpung Dzong, the ancient Ta Dzong National Museum, and traditional wooden cantilever bridges.",
    heroImage: "/images/Bhutan Cultural & Himalayan Experience.jpg",
    topThingsToDo: [
      "Embark on the iconic 4 to 5 hour pilgrimage hike to cliffside Tiger's Nest Monastery",
      "Walk across the traditional cantilever bridge to historic Rinpung Dzong",
      "Explore Bhutanese natural history and ancient thangkas at Ta Dzong (National Museum)",
      "Unwind after the hike with a traditional Bhutanese hot stone herbal bath"
    ],
    bestTimeToVisit: "March to May and September to November.",
    howToReach: {
      byAir: "Paro International Airport (PBH) is located right in the valley.",
      byRail: "Hasimara or New Alipurduar railway stations in West Bengal.",
      byRoad: "Drive from Thimphu (50 km, 1.5 hours) or Phuentsholing border (145 km)."
    },
    travelTips: [
      "Start the Tiger's Nest hike early (around 7:30 AM) to beat midday sun and crowds.",
      "Horses/ponies can be rented for the uphill stretch up to the cafeteria midpoint."
    ],
    faqs: [
      {
        question: "How difficult is the hike to Tiger's Nest Monastery?",
        answer: "The hike is moderate to demanding, taking around 2 to 3 hours uphill and 1.5 hours downhill, with well-trodden pine forest trails and stone stairs near the gorge."
      }
    ],
    seoTitle: "Tiger's Nest Paro Tour Packages & Hike Guide | NE Dhanya Tour and Travels",
    seoDescription: "Hike to Tiger's Nest Monastery in Paro, Bhutan. Guided pilgrimage tours, entry permit assistance, and dedicated tourist vehicles with NE Dhanya.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // ==========================================
  // MIZORAM TOURIST PLACES
  // ==========================================
  {
    id: "aizawl",
    name: "Aizawl",
    slug: "aizawl",
    destinationSlug: "mizoram",
    destinationName: "Mizoram",
    shortDescription: "Dramatic mountain capital built along vertiginous cliff ridges, Solomon's Temple, Durtlang Hills & Mizo culture.",
    description: "Perched dramatically along steep mountain ridges at an altitude of 3,700 feet, Aizawl is the scenic and cultural capital of Mizoram. Overlooking lush Tlawng river valley, Aizawl is renowned for its tranquil mountain atmosphere, the grand marble Solomon's Temple, panoramic Durtlang Hills viewpoints, the Mizoram State Museum, and the vibrant Bara Bazar.",
    heroImage: "/images/mizoram.jpg",
    topThingsToDo: [
      "Enjoy breathtaking sunset views over the valley from Durtlang Hills",
      "Visit the magnificent white marble Solomon's Temple in Chawlhhmun",
      "Explore traditional Mizo textiles, bamboo crafts, and smoked tea at Bara Bazar",
      "Day trip to the scenic peak and heritage village of Reiek Tlang"
    ],
    bestTimeToVisit: "October to April for cool, pleasant hill weather.",
    howToReach: {
      byAir: "Lengpui Airport (AJL) is located 32 km from Aizawl with flights to Kolkata and Guwahati.",
      byRail: "Bairabi (130 km) or Silchar Railway Station in Assam (170 km).",
      byRoad: "NH 306 connects Silchar to Aizawl via a winding mountain highway."
    },
    travelTips: [
      "Inner Line Permit (ILP) is mandatory for Indian domestic visitors entering Mizoram.",
      "Aizawl is renowned for its exceptional traffic discipline; honking is virtually non-existent."
    ],
    faqs: [
      {
        question: "How do I get an Inner Line Permit (ILP) for Mizoram?",
        answer: "NE Dhanya Tour and Travels assists in obtaining online ILP for travelers entering via Lengpui Airport or Silchar road border."
      }
    ],
    seoTitle: "Aizawl Tour Packages & Car Rental | NE Dhanya Tour and Travels",
    seoDescription: "Visit Aizawl, Mizoram. Solomon's Temple, Durtlang Hills, Lengpui Airport taxi transfers & custom Mizoram tour packages with NE Dhanya.",
    status: "published",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z"
  },

  // ==========================================
  // TRIPURA TOURIST PLACES
  // ==========================================
  {
    id: "agartala",
    name: "Agartala & Ujjayanta Palace",
    slug: "agartala",
    destinationSlug: "tripura",
    destinationName: "Tripura",
    shortDescription: "Imperial royal capital featuring the neoclassical Ujjayanta Palace, Mughal gardens & heritage museums.",
    description: "Agartala, the charming capital of Tripura, is rich in royal Manikya dynasty heritage, royal palaces, and tranquil lakes. The city's crown jewel is the gleaming white Ujjayanta Palace, set amidst formal Mughal-style gardens and fountains. Agartala also features the 14-Gods Temple (Chaturdasha Devata), heritage craft markets, and convenient road connectivity to Neermahal and Unakoti.",
    heroImage: "/images/tripura.jpg",
    topThingsToDo: [
      "Tour the grand halls and heritage museum of Ujjayanta Palace",
      "Witness the border retreat ceremony at Akhaura Integrated Check Post (India-Bangladesh)",
      "Explore the 14-Gods Temple (Chaturdasha Devata) at Old Agartala",
      "Day excursion to the floating lake palace of Neermahal at Rudrasagar Lake"
    ],
    bestTimeToVisit: "October to March for mild, dry winter climate.",
    howToReach: {
      byAir: "Maharaja Bir Bikram Airport (IXA) in Agartala connects to Kolkata, Guwahati, Delhi, and Bangalore.",
      byRail: "Agartala Railway Station (AGTL) has direct broad-gauge trains including Rajdhani Express.",
      byRoad: "NH 8 connects Tripura to Assam and the rest of Northeast India."
    },
    travelTips: [
      "Combine Agartala with Neermahal and the ancient rock carvings of Unakoti for a complete Tripura circuit.",
      "Tripura does not require an Inner Line Permit (ILP) for Indian citizens."
    ],
    faqs: [
      {
        question: "Can Neermahal be visited from Agartala in one day?",
        answer: "Yes! Neermahal is located just 53 km south of Agartala, taking around 1.5 hours by private taxi."
      }
    ],
    seoTitle: "Agartala Tour Packages & Tripura Taxi Service | NE Dhanya Tour and Travels",
    seoDescription: "Book Agartala city tours, Ujjayanta Palace visits, Neermahal transfers & Tripura car rentals with NE Dhanya Tour and Travels.",
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
    heroImage: "/images/Meghalaya Scenic Escape.webp",
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
    seoTitle: "Meghalaya Tour Package (5 Days / 4 Nights) | NE Dhanya Tour and Travels",
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
    heroImage: "/images/Tawang Mountain Odyssey.avif",
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
    seoTitle: "Tawang Tour Package (7 Days / 6 Nights) | NE Dhanya Tour and Travels",
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
    heroImage: "/images/Kaziranga Wildlife Safari & Tea Trail.webp",
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
    heroImage: "/images/Sikkim Himalayan Explorer.jpg",
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
        answer: "Yes, NE Dhanya Tour and Travels arranges all North Sikkim district permits and Tsomgo Lake permits seamlessly."
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
    heroImage: "/images/Bhutan Cultural & Himalayan Experience.jpg",
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
    seoTitle: "Bhutan Tour Package from India & Assam | NE Dhanya Tour and Travels",
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

NE Dhanya Tour and Travels provides private vehicle rentals (Innova Crysta, Sedans, Tempo Travelers), personalized tour itineraries, and hotel reservations across Shillong, Cherrapunji, and Dawki.
    `,
    featuredImage: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=80",
    category: "Meghalaya",
    tags: ["Meghalaya", "Shillong", "Cherrapunji", "Dawki", "Travel Tips"],
    author: "NE Dhanya Travel Desk",
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

- **Inner Line Permit (ILP):** Mandatory for all Indian citizens entering Arunachal Pradesh. You can apply online with your Aadhaar/Voter ID or have NE Dhanya Tour and Travels arrange it on your behalf.
- **Bumla Pass & Madhuri Lake Permit:** Requires clearance from the Deputy Commissioner's office in Tawang and Army authorities. Local Arunachal-registered 4WD vehicles (Sumo/Bolero) are required for the Bumla sector.

---

## 3. Which Vehicle is Best for Tawang?

The Trans-Arunachal highway sections are well-built by the Border Roads Organisation (BRO), but high-altitude stretches around Sela Pass and Bumla can feature rough patches, snow, and steep inclines.

- **For Families / Small Groups:** Toyota Innova Crysta or Mahindra Scorpio (comfortable suspension and strong hill climb).
- **For Larger Groups (8 to 15):** Force Traveler or Urbania with experienced high-altitude drivers.
- **For Solo / Sharing:** Sharing seat options in certified mountain cabs.

---

## Plan Your Tawang Journey with Local Experts

NE Dhanya Tour and Travels manages the entire Guwahati to Tawang circuit with verified mountain drivers, ILP permits, Bumla Pass coordination, and handpicked hotels in Bomdila, Dirang, and Tawang.
    `,
    featuredImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    category: "Arunachal Pradesh",
    tags: ["Arunachal Pradesh", "Tawang", "Sela Pass", "Bumla Pass", "Road Trip"],
    author: "NE Dhanya Travel Desk",
    readingTime: "6 min read",
    publishedAt: "2025-01-15T10:00:00.000Z",
    updatedAt: "2025-01-15T10:00:00.000Z",
    status: "published",
    seoTitle: "Guwahati to Tawang Road Trip Guide | Route, Sela Pass, Permits",
    seoDescription: "Complete Guwahati to Tawang road trip guide. Itinerary, Sela Pass altitude, Inner Line Permit (ILP), Bumla Pass rules, and car rental options with NE Dhanya.",
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

NE Dhanya Tour and Travels provides direct pickup from Guwahati Airport / Railway Station with comfortable cabs, hotel bookings, and guaranteed safari permit coordination.
    `,
    featuredImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    category: "Assam",
    tags: ["Assam", "Kaziranga", "Wildlife Safari", "One-Horned Rhino"],
    author: "NE Dhanya Travel Desk",
    readingTime: "5 min read",
    publishedAt: "2025-01-20T10:00:00.000Z",
    updatedAt: "2025-01-20T10:00:00.000Z",
    status: "published",
    seoTitle: "Kaziranga Safari Guide | Elephant & Jeep Safari Booking | NE Dhanya",
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
