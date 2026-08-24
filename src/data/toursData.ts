export interface TourItinerary {
  day: number;
  title: string;
  description: string;
  meals?: string;
  image?: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  departure: string;
  category: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviewsCount: number;
  company: string;
  pdfFileName: string;
  pdfUrl: string;
  image: string;
  gallery: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: TourItinerary[];
}

export const TOURS_DATA: TourPackage[] = [
  {
    "id": "1",
    "slug": "all-himachal-tour-package-9-nights-10-days",
    "title": "Grand All Himachal Explorer Tour",
    "subtitle": "Complete 10-Day Journey through Shimla, Manali, Dharamshala, Dalhousie, Khajjiar & Amritsar",
    "duration": "9 Nights & 10 Days",
    "departure": "Ex-Delhi",
    "category": "Himachal",
    "price": "24,500",
    "originalPrice": "29,999",
    "rating": 4.9,
    "reviewsCount": 58,
    "company": "Jyoti Travels",
    "pdfFileName": "All Himachal Trip 9 Night 10 Days.  Ex. Delhi ..pdf",
    "pdfUrl": "/packages/All Himachal Trip 9 Night 10 Days.  Ex. Delhi ..pdf",
    "image": "/images/packages/all-himachal-9n10d/Himachal Pradesh panoramic mountain valley landscape wide.webp",
    "gallery": [
      "/images/packages/all-himachal-9n10d/Himachal Pradesh panoramic mountain valley landscape wide.webp",
      "/images/packages/all-himachal-9n10d/Shimla Ridge Christ Church clock tower Himachal Pradesh.jpg",
      "/images/packages/all-himachal-9n10d/Kufri Himachal Pradesh snow mountains pine forest.jpg",
      "/images/packages/all-himachal-9n10d/Solang Valley Manali skiing snow mountains tourists.jpg",
      "/images/packages/all-himachal-9n10d/Atal Tunnel Sissu Lahaul waterfall Himachal Pradesh.jpg",
      "/images/packages/all-himachal-9n10d/Bhagsunag Waterfall McLeodganj Dharamshala.jpg",
      "/images/packages/all-himachal-9n10d/Khajjiar green meadow lake pine forest Himachal Pradesh.jpeg"
    ],
    "inclusions": [
      "09 Nights accommodation on twin/double sharing basis",
      "Daily Breakfasts and Dinners at hotel restaurant",
      "Private Cab / Volvo transportation for the entire tour",
      "Toll taxes, state tax, green tax, parking fees & driver allowances",
      "Pick up & drop at Delhi Airport / Railway Station / Bus Stand",
      "All applicable GST included"
    ],
    "exclusions": [
      "Adventure activities (Paragliding, Skiing, River Rafting)",
      "Rohtang Pass permit and 4x4 vehicle charges if needed for heavy snow",
      "Room heater charges (payable directly at hotel if requested)",
      "Monument entry tickets, guide charges & personal expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi to Shimla Transfer (340 Km / 8-9 hrs)",
        "description": "Board private cab/Volvo from Delhi to Shimla, enjoying scenic hill drives.",
        "meals": "Dinner"
      },
      {
        "day": 2,
        "title": "Shimla & Kufri Local Sightseeing",
        "description": "Visit Kufri - Green Valley, Wild Flower Hall, Indira Tourist Park & Fagu Valley.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/all-himachal-9n10d/Shimla Ridge Christ Church clock tower Himachal Pradesh.jpg"
      },
      {
        "day": 3,
        "title": "Shimla to Manali via Kullu Valley (250 Km / 7-8 hrs)",
        "description": "Drive from Shimla to Manali via Pandoh Dam, Sundernagar Lake, Mandi & Kullu Valley.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/all-himachal-9n10d/Kufri Himachal Pradesh snow mountains pine forest.jpg"
      },
      {
        "day": 4,
        "title": "Solang Valley & Atal Tunnel / Sissu Expedition",
        "description": "Full day excursion to Solang Valley, famous for adventure sports like paragliding & ropeway.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/all-himachal-9n10d/Solang Valley Manali skiing snow mountains tourists.jpg"
      },
      {
        "day": 5,
        "title": "Manali Local Sightseeing & Hadimba Temple",
        "description": "Half day sightseeing covering Hadimba Devi Temple, Vashisht Hot Springs, Club House & Tibetan Monastery.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/all-himachal-9n10d/Atal Tunnel Sissu Lahaul waterfall Himachal Pradesh.jpg"
      },
      {
        "day": 6,
        "title": "Manali to Dharamshala via Palampur Tea Gardens (240 Km / 7-8 hrs)",
        "description": "Depart Manali for Dharamshala via Palampur. Visit Palampur Tea Gardens & Chamunda Devi Temple.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/all-himachal-9n10d/Bhagsunag Waterfall McLeodganj Dharamshala.jpg"
      },
      {
        "day": 7,
        "title": "Dharamshala Sightseeing & Transfer to Dalhousie (120 Km / 4 hrs)",
        "description": "Visit Dalai Lama Temple, St. John in Wilderness Church, Bhagsunag Waterfall & Dal Lake.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/all-himachal-9n10d/Khajjiar green meadow lake pine forest Himachal Pradesh.jpeg"
      },
      {
        "day": 8,
        "title": "Dalhousie & Khajjiar (Mini Switzerland of India) Excursion",
        "description": "Excursion to Khajjiar, surrounded by dense deodar forests and centered around a saucer-shaped meadow.",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "Dalhousie to Amritsar & Wagah Border Ceremony (200 Km / 5 hrs)",
        "description": "Drive to Amritsar. Check in hotel and visit Wagah Border for the retreat ceremony.",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 10,
        "title": "Golden Temple, Jallianwala Bagh & Departure to Delhi",
        "description": "Visit Sri Harmandir Sahib (Golden Temple) and Jallianwala Bagh. Transfer to Delhi for drop-off.",
        "meals": "Breakfast"
      }
    ]
  },
  {
    "id": "2",
    "slug": "dharamshala-dalhousie-tour-package-4-nights-5-days",
    "title": "Dharamshala & Dalhousie Hills Retreat",
    "subtitle": "5-Day Scenic Hill Vacation through McLeodganj, Khajjiar & Chamba Valley",
    "duration": "4 Nights & 5 Days",
    "departure": "Ex-Pathankot / Chakki Bank / Dharamshala",
    "category": "Himachal",
    "price": "12,999",
    "originalPrice": "16,500",
    "rating": 4.8,
    "reviewsCount": 42,
    "company": "Jyoti Travels",
    "pdfFileName": "Dharamshala - Dalhousie (4N-5D).pdf",
    "pdfUrl": "/packages/Dharamshala - Dalhousie (4N-5D).pdf",
    "image": "/images/packages/dharamshala-dalhousie-4n5d/Dharamshala Dhauladhar mountain range panoramic view.jpg",
    "gallery": [
      "/images/packages/dharamshala-dalhousie-4n5d/Dharamshala Dhauladhar mountain range panoramic view.jpg",
      "/images/packages/dharamshala-dalhousie-4n5d/Dalhousie Himachal Pradesh pine cedar forest mountain view.jpeg",
      "/images/packages/dharamshala-dalhousie-4n5d/HPCA Cricket Stadium Dharamshala Dhauladhar mountains.jpg",
      "/images/packages/dharamshala-dalhousie-4n5d/Bhagsunag Waterfall McLeodganj Dharamshala.jpg",
      "/images/packages/dharamshala-dalhousie-4n5d/Khajjiar green meadow lake pine forest Himachal Pradesh.jpeg"
    ],
    "inclusions": [
      "04 Nights hotel accommodation (2N Dharamshala + 2N Dalhousie)",
      "Daily Breakfast and Dinner",
      "Private dedicated Cab for transfers and sightseeing",
      "Toll taxes, parking fees, fuel & driver charges"
    ],
    "exclusions": [
      "Personal expenses & tips",
      "Monument entry tickets",
      "Adventure sports & horse riding"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival Dharamshala / Pathankot & Transfer to McLeodganj",
        "description": "Pick up from Pathankot / Dharamshala and transfer to hotel. Evening at leisure.",
        "meals": "Dinner",
        "image": "/images/packages/dharamshala-dalhousie-4n5d/Dharamshala Dhauladhar mountain range panoramic view.jpg"
      },
      {
        "day": 2,
        "title": "Dharamshala & McLeodganj Sightseeing",
        "description": "Visit Dalai Lama Temple Complex, Bhagsunag Waterfall, Dal Lake & HPCA Cricket Stadium.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/dharamshala-dalhousie-4n5d/HPCA Cricket Stadium Dharamshala Dhauladhar mountains.jpg"
      },
      {
        "day": 3,
        "title": "Dharamshala to Dalhousie Transfer & Local Sightseeing",
        "description": "Drive from Dharamshala to Dalhousie. Visit Mall Road, Subhash Baoli & Panjpulla.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/dharamshala-dalhousie-4n5d/Dalhousie Himachal Pradesh pine cedar forest mountain view.jpeg"
      },
      {
        "day": 4,
        "title": "Dalhousie to Khajjiar & Chamba Excursion",
        "description": "Full day trip to Khajjiar (Mini Switzerland). Enjoy pine forest walks & horse riding.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/dharamshala-dalhousie-4n5d/Khajjiar green meadow lake pine forest Himachal Pradesh.jpeg"
      },
      {
        "day": 5,
        "title": "Dalhousie Departure",
        "description": "Check out after breakfast. Transfer to Pathankot / Dharamshala railway station or airport.",
        "meals": "Breakfast"
      }
    ]
  },
  {
    "id": "3",
    "slug": "kashmir-tour-package-5-nights-6-days",
    "title": "Paradise Kashmir Tour",
    "subtitle": "6-Day Dream Journey in Srinagar, Gulmarg, Pahalgam & Sonmarg with Shikara Ride",
    "duration": "5 Nights & 6 Days",
    "departure": "Ex-Srinagar",
    "category": "Kashmir",
    "price": "18,500",
    "originalPrice": "22,999",
    "rating": 4.9,
    "reviewsCount": 64,
    "company": "Jyoti Travels",
    "pdfFileName": "Kashmir 05 Nights - 06 Days Ex Srinagar (1).pdf",
    "pdfUrl": "/packages/Kashmir 05 Nights - 06 Days Ex Srinagar (1).pdf",
    "image": "/images/packages/kashmir-5n6d/Dal Lake Srinagar Kashmiri houseboat Shikara mountains.jpeg",
    "gallery": [
      "/images/packages/kashmir-5n6d/Dal Lake Srinagar Kashmiri houseboat Shikara mountains.jpeg",
      "/images/packages/kashmir-5n6d/Dal Lake Srinagar Shikara sunset Kashmir mountains.jpeg",
      "/images/packages/kashmir-5n6d/Gulmarg Gondola cable car snow Apharwat peak Kashmir.jpeg",
      "/images/packages/kashmir-5n6d/Betaab Valley Pahalgam Lidder river pine forest Kashmir.jpeg",
      "/images/packages/kashmir-5n6d/Thajiwas Glacier Sonmarg river stream snow mountains.jpeg"
    ],
    "inclusions": [
      "05 Nights stay (1N Deluxe Houseboat + 2N Srinagar + 2N Pahalgam)",
      "Daily Breakfast & Dinner",
      "Complimentary 1 Hour Shikara Ride on Dal Lake",
      "Private Non-AC Sedan/SUV cab for all transfers & sightseeing"
    ],
    "exclusions": [
      "Airfare / Train fare",
      "Gondola cable car tickets",
      "Union taxi in Pahalgam (Aru/Betaab valley)"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival Srinagar Airport & Deluxe Houseboat Stay",
        "description": "Arrival at Srinagar Sheikh ul-Alam International Airport. Check in at Houseboat & enjoy 1 Hour Shikara ride on Dal Lake.",
        "meals": "Dinner",
        "image": "/images/packages/kashmir-5n6d/Dal Lake Srinagar Kashmiri houseboat Shikara mountains.jpeg"
      },
      {
        "day": 2,
        "title": "Srinagar to Gulmarg Excursion (50 Km / 2 hrs)",
        "description": "Drive to Gulmarg (Meadow of Flowers). Ride the famous Gulmarg Gondola to Phase 1 & 2.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/kashmir-5n6d/Gulmarg Gondola cable car snow Apharwat peak Kashmir.jpeg"
      },
      {
        "day": 3,
        "title": "Srinagar to Pahalgam (Valley of Shepherds - 90 Km / 3 hrs)",
        "description": "Drive to Pahalgam via saffron fields of Pampore & Avantipur ruins.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/kashmir-5n6d/Betaab Valley Pahalgam Lidder river pine forest Kashmir.jpeg"
      },
      {
        "day": 4,
        "title": "Pahalgam Local Sightseeing - Aru, Betaab & Chandanwari",
        "description": "Explore Aru Valley, Betaab Valley & Chandanwari by local union cab.",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "Pahalgam to Srinagar & Mughal Gardens Sightseeing",
        "description": "Return to Srinagar. Visit Nishat Bagh, Shalimar Bagh, Chashme Shahi & Shankaracharya Temple.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/kashmir-5n6d/Dal Lake Srinagar Shikara sunset Kashmir mountains.jpeg"
      },
      {
        "day": 6,
        "title": "Departure Srinagar Airport",
        "description": "Check out after breakfast. Transfer to Srinagar Airport for your return flight.",
        "meals": "Breakfast"
      }
    ]
  },
  {
    "id": "4",
    "slug": "kedarnath-yatra-tour-package-4-nights-5-days",
    "title": "Sacred Kedarnath Yatra Package",
    "subtitle": "5-Day Spiritual Pilgrimage to Kedarnath Dham & Haridwar",
    "duration": "4 Nights & 5 Days",
    "departure": "Ex-Haridwar / Rishikesh",
    "category": "Uttarakhand",
    "price": "14,999",
    "originalPrice": "18,999",
    "rating": 4.9,
    "reviewsCount": 76,
    "company": "Jyoti Travels",
    "pdfFileName": "Kedarnath tour package 4N-5D Ex - Haridwar.pdf",
    "pdfUrl": "/packages/Kedarnath tour package 4N-5D Ex - Haridwar.pdf",
    "image": "/images/packages/kedarnath-4n5d/Kedarnath Temple snow mountains Himalayan peaks.jpeg",
    "gallery": [
      "/images/packages/kedarnath-4n5d/Kedarnath Temple snow mountains Himalayan peaks.jpeg",
      "/images/packages/kedarnath-4n5d/Kedarnath temple night lights devotees aarti.jpeg",
      "/images/packages/kedarnath-4n5d/Gaurikund Kedarnath trek Mandakini river valley pilgrims.jpeg",
      "/images/packages/kedarnath-4n5d/Har Ki Pauri Ganga Aarti evening Haridwar.jpeg",
      "/images/packages/kedarnath-4n5d/Lakshman Jhula Rishikesh Ganga river mountains.jpeg"
    ],
    "inclusions": [
      "04 Nights accommodation (2N Guptkashi/Phata + 1N Kedarnath Top + 1N Haridwar)",
      "Daily Breakfast and Dinner",
      "Private vehicle transfer from Haridwar to Gaurikund base",
      "All driver allowance, toll tax & parking fees"
    ],
    "exclusions": [
      "Helicopter tickets to Kedarnath",
      "Pony / Palki charges for trek",
      "VIP Darshan pass fees"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Haridwar / Rishikesh to Guptkashi / Phata Drive (210 Km / 7-8 hrs)",
        "description": "Drive from Haridwar to Guptkashi via Devprayag & Rudraprayag Sangam.",
        "meals": "Dinner",
        "image": "/images/packages/kedarnath-4n5d/Lakshman Jhula Rishikesh Ganga river mountains.jpeg"
      },
      {
        "day": 2,
        "title": "Guptkashi to Gaurikund & Trek to Kedarnath Temple (16 Km Trek)",
        "description": "Early morning drive to Sonprayag/Gaurikund. Trek 16 km to Kedarnath Dham.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/kedarnath-4n5d/Kedarnath Temple snow mountains Himalayan peaks.jpeg"
      },
      {
        "day": 3,
        "title": "Kedarnath Temple Morning Darshan & Trek down to Guptkashi",
        "description": "Attend early morning Abhishekam Puja at Kedarnath Temple. Trek back down to Gaurikund.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/kedarnath-4n5d/Kedarnath temple night lights devotees aarti.jpeg"
      },
      {
        "day": 4,
        "title": "Guptkashi to Haridwar via Rishikesh Sightseeing (210 Km / 7 hrs)",
        "description": "Drive back to Haridwar. Visit Rishikesh Ram Jhula, Laxman Jhula & Triveni Ghat.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/kedarnath-4n5d/Har Ki Pauri Ganga Aarti evening Haridwar.jpeg"
      },
      {
        "day": 5,
        "title": "Haridwar Ganga Aarti & Departure",
        "description": "Morning visit to Har Ki Pauri for Ganga Aarti. Drop at Haridwar Railway Station.",
        "meals": "Breakfast"
      }
    ]
  },
  {
    "id": "5",
    "slug": "manali-volvo-tour-package-3-nights-4-days",
    "title": "Manali Volvo Scenic Getaway",
    "subtitle": "4-Day Budget-Friendly Package with Luxury AC Volvo & Solang Valley Excursion",
    "duration": "3 Nights & 4 Days",
    "departure": "Ex-Delhi (by AC Volvo)",
    "category": "Manali & Kasol",
    "price": "7,499",
    "originalPrice": "9,999",
    "rating": 4.7,
    "reviewsCount": 39,
    "company": "Jyoti Travels",
    "pdfFileName": "Manali 3N-4D by Volvo Ex Delhi.pdf",
    "pdfUrl": "/packages/Manali 3N-4D by Volvo Ex Delhi.pdf",
    "image": "/images/packages/manali-volvo-3n4d/Manali winter landscape Himalayan mountains pine forest.jpeg",
    "gallery": [
      "/images/packages/manali-volvo-3n4d/Manali winter landscape Himalayan mountains pine forest.jpeg",
      "/images/packages/manali-volvo-3n4d/Solang Valley paragliding Manali scenic mountain view.jpeg",
      "/images/packages/manali-volvo-3n4d/Hadimba Devi Temple Manali cedar forest wooden temple.jpeg",
      "/images/packages/manali-volvo-3n4d/Atal Tunnel north entrance Sissu Lahaul mountain road.jpeg",
      "/images/packages/manali-volvo-3n4d/Naggar Castle Manali Kath Kuni architecture.jpeg"
    ],
    "inclusions": [
      "Overnight Delhi-Manali-Delhi Luxury AC Volvo Bus Tickets",
      "03 Nights hotel stay in Manali",
      "Daily Breakfast and Dinner at hotel",
      "Individual Private Cab for Solang Valley & Manali local sightseeing"
    ],
    "exclusions": [
      "Rohtang Pass permit and extra cab charges",
      "Adventure activity costs",
      "Personal shopping & laundry"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Overnight Journey from Delhi to Manali by Volvo",
        "description": "Report at Delhi Majnu ka Tilla / Kashmiri Gate at 5:00 PM. Board luxury AC Volvo bus to Manali.",
        "meals": "None"
      },
      {
        "day": 2,
        "title": "Arrival Manali & Half Day Local Sightseeing",
        "description": "Arrive at Manali in the morning. Visit Hadimba Devi Temple, Club House, Vashisht Hot Springs & Mall Road.",
        "meals": "Dinner",
        "image": "/images/packages/manali-volvo-3n4d/Hadimba Devi Temple Manali cedar forest wooden temple.jpeg"
      },
      {
        "day": 3,
        "title": "Solang Valley & Atal Tunnel / Sissu Snow Excursion",
        "description": "Full day tour to Solang Valley. Enjoy snow sports, cable car rides, paragliding & zorbing.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/manali-volvo-3n4d/Solang Valley paragliding Manali scenic mountain view.jpeg"
      },
      {
        "day": 4,
        "title": "Kullu Valley & Naggar Castle Tour - Departure to Delhi",
        "description": "Visit Naggar Castle & Kullu Shawl Factory. Board evening Volvo back to Delhi.",
        "meals": "Breakfast",
        "image": "/images/packages/manali-volvo-3n4d/Naggar Castle Manali Kath Kuni architecture.jpeg"
      }
    ]
  },
  {
    "id": "6",
    "slug": "manali-kasol-manikaran-tour-package-3-nights-4-days",
    "title": "Manali, Kasol & Manikaran Sahib Delight",
    "subtitle": "4-Day Explorer covering Manali, Parvati Valley & Sacred Manikaran Hot Springs",
    "duration": "3 Nights & 4 Days",
    "departure": "Ex-Delhi",
    "category": "Manali & Kasol",
    "price": "8,999",
    "originalPrice": "11,499",
    "rating": 4.8,
    "reviewsCount": 51,
    "company": "Jyoti Travels",
    "pdfFileName": "Manali Kasol & Manikaran  3N-4D by Volvo Ex  Delhi.pdf",
    "pdfUrl": "/packages/Manali Kasol & Manikaran  3N-4D by Volvo Ex  Delhi.pdf",
    "image": "/images/packages/manali-kasol-manikaran-3n4d/Kasol Parvati Valley river mountains scenic landscape.jpeg",
    "gallery": [
      "/images/packages/manali-kasol-manikaran-3n4d/Kasol Parvati Valley river mountains scenic landscape.jpeg",
      "/images/packages/manali-kasol-manikaran-3n4d/Kasol nature trail Parvati river pine trees.jpeg",
      "/images/packages/manali-kasol-manikaran-3n4d/Manikaran Sahib Gurudwara hot springs Parvati Valley.jpeg",
      "/images/packages/manali-kasol-manikaran-3n4d/Solang Valley snow point Manali tourists winter.jpeg",
      "/images/packages/manali-kasol-manikaran-3n4d/Manali Mall Road evening shops tourists illuminated.jpeg"
    ],
    "inclusions": [
      "Delhi to Manali & Kasol transfers by Luxury Volvo / Private Cab",
      "02 Nights Manali stay + 01 Night Kasol Riverside stay",
      "Breakfasts & Dinners included",
      "Sightseeing to Solang Valley, Kasol Cafe Market & Manikaran Sahib"
    ],
    "exclusions": [
      "Rafting / Paragliding charges in Kullu",
      "Personal food & shopping"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi to Manali Transfer",
        "description": "Overnight journey from Delhi to Manali by Volvo/Cab.",
        "meals": "None"
      },
      {
        "day": 2,
        "title": "Manali Arrival & Local Sightseeing",
        "description": "Check in hotel. Visit Hadimba Temple, Vashisht Temple & Mall Road.",
        "meals": "Dinner",
        "image": "/images/packages/manali-kasol-manikaran-3n4d/Manali Mall Road evening shops tourists illuminated.jpeg"
      },
      {
        "day": 3,
        "title": "Solang Valley & Atal Tunnel Excursion",
        "description": "Excursion to Solang Valley for snow adventures & scenery.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/manali-kasol-manikaran-3n4d/Solang Valley snow point Manali tourists winter.jpeg"
      },
      {
        "day": 4,
        "title": "Manali to Kasol & Manikaran Sahib Gurudwara - Departure",
        "description": "Drive to Kasol (Mini Israel). Visit Manikaran Sahib Gurudwara hot springs.",
        "meals": "Breakfast",
        "image": "/images/packages/manali-kasol-manikaran-3n4d/Manikaran Sahib Gurudwara hot springs Parvati Valley.jpeg"
      }
    ]
  },
  {
    "id": "7",
    "slug": "mussoorie-nainital-tour-package-3-nights-4-days",
    "title": "Mesmerizing Mussoorie & Nainital Hills",
    "subtitle": "4-Day Scenic Gateway to Queen of Hills & City of Lakes",
    "duration": "3 Nights & 4 Days",
    "departure": "Ex-Haridwar / Dehradun",
    "category": "Uttarakhand",
    "price": "11,500",
    "originalPrice": "14,500",
    "rating": 4.7,
    "reviewsCount": 33,
    "company": "Jyoti Travels",
    "pdfFileName": "Mesmerizing Mussorie & Nainital  3N-4D Ex-Haridwar.pdf",
    "pdfUrl": "/packages/Mesmerizing Mussorie & Nainital  3N-4D Ex-Haridwar.pdf",
    "image": "/images/packages/mussoorie-nainital-3n4d/Naini Lake Nainital boating green mountains panoramic.jpeg",
    "gallery": [
      "/images/packages/mussoorie-nainital-3n4d/Naini Lake Nainital boating green mountains panoramic.jpeg",
      "/images/packages/mussoorie-nainital-3n4d/Naina Devi Temple Nainital Naini Lake.jpeg",
      "/images/packages/mussoorie-nainital-3n4d/Kempty Falls Mussoorie Uttarakhand waterfall.jpeg",
      "/images/packages/mussoorie-nainital-3n4d/Mussoorie Gun Hill golden sunset mountain valley.jpeg",
      "/images/packages/mussoorie-nainital-3n4d/Mussoorie Mall Road hill station panoramic view.jpeg"
    ],
    "inclusions": [
      "03 Nights hotel stay (1N Mussoorie + 2N Nainital)",
      "Breakfast and Dinner daily",
      "Private Cab for transfers and lake tours",
      "Toll taxes and parking fees"
    ],
    "exclusions": [
      "Boating fees on Naini Lake",
      "Kempty Falls ropeway ticket",
      "Personal expenses"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Haridwar / Dehradun to Mussoorie Transfer & Local Sightseeing",
        "description": "Drive to Mussoorie. Visit Kempty Falls, Lal Tibba & Mall Road.",
        "meals": "Dinner",
        "image": "/images/packages/mussoorie-nainital-3n4d/Kempty Falls Mussoorie Uttarakhand waterfall.jpeg"
      },
      {
        "day": 2,
        "title": "Mussoorie to Nainital Transfer via Dhanaulti (280 Km / 7 hrs)",
        "description": "Drive to Nainital via Dhanaulti Eco Park. Arrive in Nainital and check in hotel.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/mussoorie-nainital-3n4d/Mussoorie Gun Hill golden sunset mountain valley.jpeg"
      },
      {
        "day": 3,
        "title": "Nainital Lake Tour & Sightseeing",
        "description": "Explore Naini Lake, Bhimtal, Sattal, Naukuchiatal & Naina Devi Temple.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/mussoorie-nainital-3n4d/Naini Lake Nainital boating green mountains panoramic.jpeg"
      },
      {
        "day": 4,
        "title": "Nainital Departure to Haridwar / Delhi",
        "description": "Check out after breakfast. Drop at Kathgodam / Haridwar / Delhi.",
        "meals": "Breakfast"
      }
    ]
  },
  {
    "id": "8",
    "slug": "shimla-manali-cab-tour-package-5-nights-6-days",
    "title": "Classic Shimla & Manali Tour by Cab",
    "subtitle": "6-Day Complete Family Tour through Shimla Ridge, Kufri, Solang Valley & Kullu",
    "duration": "5 Nights & 6 Days",
    "departure": "Ex-Delhi / Chandigarh",
    "category": "Himachal",
    "price": "15,500",
    "originalPrice": "19,999",
    "rating": 4.9,
    "reviewsCount": 88,
    "company": "Jyoti Travels",
    "pdfFileName": "Shimla Manali  5n 6d Memory Make Trip By cab (1).pdf",
    "pdfUrl": "/packages/Shimla Manali  5n 6d Memory Make Trip By cab (1).pdf",
    "image": "/images/packages/shimla-manali-cab-5n6d/Shimla Mall Road Christ Church Ridge Himachal Pradesh.jpeg",
    "gallery": [
      "/images/packages/shimla-manali-cab-5n6d/Shimla Mall Road Christ Church Ridge Himachal Pradesh.jpeg",
      "/images/packages/shimla-manali-cab-5n6d/Shimla Green Valley panoramic pine forest mountain landscape.jpeg",
      "/images/packages/shimla-manali-cab-5n6d/Solang Valley snow point winter travel photography.jpeg",
      "/images/packages/shimla-manali-cab-5n6d/Beas River rafting adventure Kullu travel photography.jpeg",
      "/images/packages/shimla-manali-cab-5n6d/Sissu Lahaul Atal Tunnel landscape waterfall mountains.jpeg"
    ],
    "inclusions": [
      "05 Nights hotel accommodation (2N Shimla + 3N Manali)",
      "Daily Breakfast & Dinner",
      "Private Swift Dzire / Etios / Innova Cab for entire 6 days",
      "All tolls, parking, fuel, state tax & driver allowance"
    ],
    "exclusions": [
      "Rohtang Pass permit and extra cab",
      "Adventure sports charges",
      "Personal tips"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi / Chandigarh to Shimla Drive (340 Km / 8 hrs)",
        "description": "Board private cab from Delhi/Chandigarh and enjoy scenic drive to Shimla.",
        "meals": "Dinner"
      },
      {
        "day": 2,
        "title": "Shimla & Kufri Sightseeing",
        "description": "Explore Kufri snow point, Green Valley, Shimla Mall Road & Ridge.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/shimla-manali-cab-5n6d/Shimla Mall Road Christ Church Ridge Himachal Pradesh.jpeg"
      },
      {
        "day": 3,
        "title": "Shimla to Manali via Kullu Valley (250 Km / 7 hrs)",
        "description": "Drive to Manali stopping at Sundernagar Lake, Pandoh Dam & Kullu Shawl Factory.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/shimla-manali-cab-5n6d/Beas River rafting adventure Kullu travel photography.jpeg"
      },
      {
        "day": 4,
        "title": "Solang Valley & Snow Point Excursion",
        "description": "Full day excursion to Solang Valley for ropeway, paragliding & snow activities.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/shimla-manali-cab-5n6d/Solang Valley snow point winter travel photography.jpeg"
      },
      {
        "day": 5,
        "title": "Manali Local Sightseeing",
        "description": "Visit Hadimba Devi Temple, Vashisht Hot Springs, Club House & Tibetan Monastery.",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 6,
        "title": "Manali to Delhi / Chandigarh Drop",
        "description": "Check out after breakfast. Drive back to Chandigarh / Delhi for drop.",
        "meals": "Breakfast"
      }
    ]
  },
  {
    "id": "9",
    "slug": "spiti-valley-circuit-tour-package-8-nights-9-days",
    "title": "Ultimate Spiti Valley Circuit Expedition",
    "subtitle": "9-Day Thrilling Adventure through Kalpa, Kaza, Key Monastery, Hikkim & Chandratal Lake",
    "duration": "8 Nights & 9 Days",
    "departure": "Ex-Chandigarh / Shimla",
    "category": "Spiti",
    "price": "28,999",
    "originalPrice": "34,999",
    "rating": 5.0,
    "reviewsCount": 29,
    "company": "Jyoti Travels",
    "pdfFileName": "Spiti Circuit 08N-09D Ex- Chandigarh - Vandna Thakur.pdf",
    "pdfUrl": "/packages/Spiti Circuit 08N-09D Ex- Chandigarh - Vandna Thakur.pdf",
    "image": "/images/packages/spiti-circuit-8n9d/Key Monastery Spiti Valley cliff mountain real photograph.jpeg",
    "gallery": [
      "/images/packages/spiti-circuit-8n9d/Key Monastery Spiti Valley cliff mountain real photograph.jpeg",
      "/images/packages/spiti-circuit-8n9d/Chandratal Lake Spiti turquoise crescent moon lake Himalayan mountains.jpeg",
      "/images/packages/spiti-circuit-8n9d/Chicham Bridge Kaza Spiti canyon landscape.jpeg",
      "/images/packages/spiti-circuit-8n9d/Chitkul last village India wooden houses Baspa Valley.jpeg",
      "/images/packages/spiti-circuit-8n9d/Kalpa village Kinner Kailash mountain apple orchards.jpeg"
    ],
    "inclusions": [
      "08 Nights stays in boutique hotels & traditional Spiti homestays",
      "Daily Breakfast & Dinner",
      "Private 4x4 Bolero / Tempo Traveller equipped for high altitude",
      "Inner line permits & driver allowances included"
    ],
    "exclusions": [
      "Monastery entry fees",
      "Personal mountain gear",
      "Emergency evacuation if needed"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Chandigarh to Shimla / Narkanda Transfer (170 Km / 5 hrs)",
        "description": "Pick up from Chandigarh. Drive to Narkanda through pine forests.",
        "meals": "Dinner"
      },
      {
        "day": 2,
        "title": "Narkanda to Sangla / Chitkul (Last Village of India - 180 Km / 7 hrs)",
        "description": "Drive along Sutlej river to Kinnaur Valley. Visit Chitkul, the last inhabited village on Indo-Tibet border.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/spiti-circuit-8n9d/Chitkul last village India wooden houses Baspa Valley.jpeg"
      },
      {
        "day": 3,
        "title": "Sangla to Kalpa & Kinner Kailash View (40 Km / 2 hrs)",
        "description": "Visit Kamru Fort in Sangla. Drive to Kalpa facing the majestic Kinner Kailash peak.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/spiti-circuit-8n9d/Kalpa village Kinner Kailash mountain apple orchards.jpeg"
      },
      {
        "day": 4,
        "title": "Kalpa to Nako & Tabo Monastery (150 Km / 6 hrs)",
        "description": "Enter Spiti Valley. Visit Nako Lake, Geu Mummy Village (500-yr-old monk mummy) & Tabo Monastery.",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 5,
        "title": "Tabo to Dhankar Monastery & Kaza (60 Km / 3 hrs)",
        "description": "Visit cliffside Dhankar Monastery. Drive to Kaza, administrative capital of Spiti.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/spiti-circuit-8n9d/Key Monastery Spiti Valley cliff mountain real photograph.jpeg"
      },
      {
        "day": 6,
        "title": "Kaza Local Exploration - Key Monastery, Kibber, Chicham Bridge & Hikkim",
        "description": "Visit iconic Key Monastery, world's highest post office at Hikkim, Komic (highest motorable village) & Chicham Bridge.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/spiti-circuit-8n9d/Chicham Bridge Kaza Spiti canyon landscape.jpeg"
      },
      {
        "day": 7,
        "title": "Kaza to Chandratal Lake via Kunzum Pass (100 Km / 5 hrs)",
        "description": "Drive over high-altitude Kunzum Pass (4,551 m). Reach magical crescent-shaped Chandratal Lake.",
        "meals": "Breakfast & Dinner",
        "image": "/images/packages/spiti-circuit-8n9d/Chandratal Lake Spiti turquoise crescent moon lake Himalayan mountains.jpeg"
      },
      {
        "day": 8,
        "title": "Chandratal to Manali via Rohtang Pass / Atal Tunnel (110 Km / 6 hrs)",
        "description": "Drive through Batal, Gramphu & Atal Tunnel into Manali.",
        "meals": "Breakfast & Dinner"
      },
      {
        "day": 9,
        "title": "Manali Departure to Chandigarh / Delhi",
        "description": "Check out after breakfast. Drop at Chandigarh Railway Station / Airport.",
        "meals": "Breakfast"
      }
    ]
  }
];
