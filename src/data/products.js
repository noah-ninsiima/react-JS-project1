const products = [
  {
    id: 1,
    name: "Elegant Bathroom Design",
    description: "Modern bathroom with glass and tile features.",
    price: 3000000,
    category: "Bathroom",
    images: [
      "/images/bathrooms/bathroom4.jpg",
      "/images/bathrooms/bathroom2.jpg",
      "/images/bathrooms/bathroom3.jpg",
      "/images/bathrooms/bathroom1.jpg",
      "/images/bathrooms/bathroom5.jpg",
      "/images/bathrooms/bathroom6.jpg",
      "/images/bathrooms/bathroom7.jpg",
      "/images/bathrooms/bathroom8.jpg",
      "/images/bathrooms/bathroom9.jpg",
      "/images/bathrooms/bathroom10.jpg",
      "/images/bathrooms/bathroom11.jpg",
      "/images/bathrooms/bathroom12.jpg",
      "/images/bathrooms/bathroom13.jpg",
      "/images/bathrooms/bathroom14.jpg",
      "/images/bathrooms/bathroom15.jpg",
       "/images/bathrooms/bathroom16.jpg"
    ]
  },
  {
    id: 2,
    name: "Luxury Bedroom",
    description: "Peaceful and cozy master bedroom setup.",
    price: 2700000,
    category: "Bedroom",
    images: [
      "/images/bedroom/bedroom1.jpg",
      "/images/bedroom/bedroom2.jpg"
    ]
  },
  {
    id: 3,
    name: "Spacious Dining Room",
    description: "Family dining with classic decor.",
    price: 3500000,
    category: "Dining Room",
    images: [
      "/images/dining-room/diningroom1.jpg",
      "/images/dining-room/diningroom2.jpg",
      "/images/dining-room/diningroom3.jpg",
      "/images/dining-room/diningroom4.jpg",
      "/images/dining-room/diningroom5.jpg",
      "/images/dining-room/diningroom6.jpg",
      "/images/dining-room/diningroom7.jpg",
      "/images/dining-room/diningroom8.jpg",
      "/images/dining-room/diningroom9.jpg",
      "/images/dining-room/diningroom10.jpg",
      "/images/dining-room/diningroom11.jpg",
      "/images/dining-room/diningroom12.jpg",
      "/images/dining-room/diningroom13.jpg"
    ]
  },
  {
    id: 4,
    name: "Bright Entryway",
    description: "Welcoming foyer with lighting and mirrors.",
    price: 1600000,
    category: "Entryway/Foyer",
    images: [
      "/images/entryway/foyer5.jpg",
      "/images/entryway/foyer2.jpg",
      "/images/entryway/foyer3.jpg",
      "/images/entryway/foyer4.jpg",
      "/images/entryway/foyer1.jpg",
      "/images/entryway/foyer6.jpg"
    ]
  },
  {
    id: 5,
    name: "Family Lounge Area",
    description: "Comfy couches and entertainment space.",
    price: 3200000,
    category: "Family Room",
    images: [
      "/images/family-room/familyroom5.jpg",
      "/images/family-room/familyroom2.jpg",
      "/images/family-room/familyroom3.jpg",
      "/images/family-room/familyroom4.jpg",
      "/images/family-room/familyroom1.jpg",
      "/images/family-room/familyroom6.jpg",
      "/images/family-room/familyroom7.jpg"
    ]
  },
  {
    id: 6,
    name: "Garden Landscaping",
    description: "Nature-friendly outdoor space for relaxation.",
    price: 2600000,
    category: "Garden",
    images: [
      "/images/gardens/garden5.jpg",
      "/images/gardens/garden2.jpg",
      "/images/gardens/garden3.jpg",
      "/images/gardens/garden4.jpg",
      "/images/gardens/garden1.jpg",
      "/images/gardens/garden6.jpg",
      "/images/gardens/garden7.jpg",
      "/images/gardens/garden8.jpg",
      "/images/gardens/garden9.jpg",
      "/images/gardens/garden10.jpg",
      "/images/gardens/garden11.jpg",
      "/images/gardens/garden12.jpg",
      "/images/gardens/garden13.jpg",
      "/images/gardens/garden14.jpg"
    ]
  },
  {
    id: 7,
    name: "Modern Kitchen Design",
    description: "Functional cabinets and island counter.",
    price: 4000000,
    category: "Kitchen",
    images: [
      "/images/kitchen/kitchen13.jpg",
      "/images/kitchen/kitchen2.jpg",
      "/images/kitchen/kitchen3.jpg",
      "/images/kitchen/kitchen4.jpg",
      "/images/kitchen/kitchen5.jpg",
      "/images/kitchen/kitchen6.jpg",
      "/images/kitchen/kitchen7.jpg",
      "/images/kitchen/kitchen8.jpg",
      "/images/kitchen/kitchen9.jpg",
      "/images/kitchen/kitchen10.jpg",
      "/images/kitchen/kitchen11.jpg",
      "/images/kitchen/kitchen12.jpg",
      "/images/kitchen/kitchen1.jpg",
      "/images/kitchen/kitchen14.jpg",
      "/images/kitchen/kitchen15.jpg",
      "/images/kitchen/kitchen16.jpg",
      "/images/kitchen/kitchen17.jpg"
    ]
  },
  {
    id: 8,
    name: "Reading Nook & Library",
    description: "Quiet reading space with built-in shelves.",
    price: 1800000,
    category: "Library/Reading Nook",
    images: [
      "/images/library/library2.jpg",
      "/images/library/library1.jpg",
      "/images/library/library3.jpg",
      "/images/library/library4.jpg",
      "/images/library/library5.jpg",
      "/images/library/library6.jpg",
      "/images/library/library7.jpg",
      "/images/library/library8.jpg",
      "/images/library/library9.jpg"
    ]
  },
  {
    id: 9,
    name: "Stylish Living Room",
    description: "Modern living with layered lighting.",
    price: 3400000,
    category: "Living Room",
    images: [
      "/images/living-room/livingroom1.jpg",
      "/images/living-room/livingroom2.jpg",
      "/images/living-room/livingroom3.jpg",
      "/images/living-room/livingroom4.jpg",
      "/images/living-room/livingroom5.jpg",
      "/images/living-room/livingroom6.jpg",
      "/images/living-room/livingroom7.jpg",
      "/images/living-room/livingroom8.jpg",
      "/images/living-room/livingroom9.jpg",
      "/images/living-room/livingroom10.jpg",
      "/images/living-room/livingroom11.jpg",
      "/images/living-room/livingroom12.jpg",
      "/images/living-room/livingroom13.jpg",
      "/images/living-room/livingroom14.jpg"
    ]
  },
  {
    id: 10,
    name: "Terrace Lounge",
    description: "Outdoor seating with plant décor.",
    price: 2800000,
    category: "Terrace/Balcony",
    images: [
      "/images/terrace-balcony/terrace7.jpg",
      "/images/terrace-balcony/terrace2.jpg",
      "/images/terrace-balcony/terrace3.jpg",
      "/images/terrace-balcony/terrace4.jpg",
      "/images/terrace-balcony/terrace5.jpg",
      "/images/terrace-balcony/terrace6.jpg",
      "/images/terrace-balcony/terrace1.jpg",
      "/images/terrace-balcony/terrace8.jpg"
    ]
  }
];

export default products;
