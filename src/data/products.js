const products = [
  {
    id: 1,
    name: "Elegant Bathroom Design",
    description: "Modern bathroom with glass and tile features.",
    price: 3000000,
    category: "Bathroom",
    images: [
      import.meta.env.BASE_URL + "images/bathrooms/bathroom4.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom2.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom3.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom1.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom5.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom6.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom7.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom8.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom9.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom10.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom11.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom12.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom13.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom14.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom15.jpg",
      import.meta.env.BASE_URL + "images/bathrooms/bathroom16.jpg"
    ]
  },
  {
    id: 2,
    name: "Luxury Bedroom",
    description: "Peaceful and cozy master bedroom setup.",
    price: 2700000,
    category: "Bedroom",
    images: [
      import.meta.env.BASE_URL + "images/bedroom/bedroom1.jpg",
      import.meta.env.BASE_URL + "images/bedroom/bedroom2.jpg"
    ]
  },
  {
    id: 3,
    name: "Spacious Dining Room",
    description: "Family dining with classic decor.",
    price: 3500000,
    category: "Dining Room",
    images: [
      import.meta.env.BASE_URL + "images/dining-room/diningroom1.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom2.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom3.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom4.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom5.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom6.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom7.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom8.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom9.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom10.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom11.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom12.jpg",
      import.meta.env.BASE_URL + "images/dining-room/diningroom13.jpg"
    ]
  },
  {
    id: 4,
    name: "Bright Entryway",
    description: "Welcoming foyer with lighting and mirrors.",
    price: 1600000,
    category: "Entryway/Foyer",
    images: [
      import.meta.env.BASE_URL + "images/entryway/foyer5.jpg",
      import.meta.env.BASE_URL + "images/entryway/foyer2.jpg",
      import.meta.env.BASE_URL + "images/entryway/foyer3.jpg",
      import.meta.env.BASE_URL + "images/entryway/foyer4.jpg",
      import.meta.env.BASE_URL + "images/entryway/foyer1.jpg",
      import.meta.env.BASE_URL + "images/entryway/foyer6.jpg"
    ]
  },
  {
    id: 5,
    name: "Family Lounge Area",
    description: "Comfy couches and entertainment space.",
    price: 3200000,
    category: "Family Room",
    images: [
      import.meta.env.BASE_URL + "images/family-room/familyroom5.jpg",
      import.meta.env.BASE_URL + "images/family-room/familyroom2.jpg",
      import.meta.env.BASE_URL + "images/family-room/familyroom3.jpg",
      import.meta.env.BASE_URL + "images/family-room/familyroom4.jpg",
      import.meta.env.BASE_URL + "images/family-room/familyroom1.jpg",
      import.meta.env.BASE_URL + "images/family-room/familyroom6.jpg",
      import.meta.env.BASE_URL + "images/family-room/familyroom7.jpg"
    ]
  },
  {
    id: 6,
    name: "Garden Landscaping",
    description: "Nature-friendly outdoor space for relaxation.",
    price: 2600000,
    category: "Garden",
    images: [
      import.meta.env.BASE_URL + "images/gardens/garden5.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden2.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden3.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden4.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden1.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden6.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden7.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden8.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden9.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden10.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden11.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden12.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden13.jpg",
      import.meta.env.BASE_URL + "images/gardens/garden14.jpg"
    ]
  },
  {
    id: 7,
    name: "Modern Kitchen Design",
    description: "Functional cabinets and island counter.",
    price: 4000000,
    category: "Kitchen",
    images: [
      import.meta.env.BASE_URL + "images/kitchen/kitchen13.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen2.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen3.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen4.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen5.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen6.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen7.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen8.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen9.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen10.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen11.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen12.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen1.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen14.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen15.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen16.jpg",
      import.meta.env.BASE_URL + "images/kitchen/kitchen17.jpg"
    ]
  },
  {
    id: 8,
    name: "Reading Nook & Library",
    description: "Quiet reading space with built-in shelves.",
    price: 1800000,
    category: "Library/Reading Nook",
    images: [
      import.meta.env.BASE_URL + "images/library/library2.jpg",
      import.meta.env.BASE_URL + "images/library/library1.jpg",
      import.meta.env.BASE_URL + "images/library/library3.jpg",
      import.meta.env.BASE_URL + "images/library/library4.jpg",
      import.meta.env.BASE_URL + "images/library/library5.jpg",
      import.meta.env.BASE_URL + "images/library/library6.jpg",
      import.meta.env.BASE_URL + "images/library/library7.jpg",
      import.meta.env.BASE_URL + "images/library/library8.jpg",
      import.meta.env.BASE_URL + "images/library/library9.jpg"
    ]
  },
  {
    id: 9,
    name: "Stylish Living Room",
    description: "Modern living with layered lighting.",
    price: 3400000,
    category: "Living Room",
    images: [
      import.meta.env.BASE_URL + "images/living-room/livingroom1.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom2.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom3.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom4.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom5.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom6.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom7.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom8.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom9.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom10.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom11.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom12.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom13.jpg",
      import.meta.env.BASE_URL + "images/living-room/livingroom14.jpg"
    ]
  },
  {
    id: 10,
    name: "Terrace Lounge",
    description: "Outdoor seating with plant décor.",
    price: 2800000,
    category: "Terrace/Balcony",
    images: [
      import.meta.env.BASE_URL + "images/terrace-balcony/terrace7.jpg",
      import.meta.env.BASE_URL + "images/terrace-balcony/terrace2.jpg",
      import.meta.env.BASE_URL + "images/terrace-balcony/terrace3.jpg",
      import.meta.env.BASE_URL + "images/terrace-balcony/terrace4.jpg",
      import.meta.env.BASE_URL + "images/terrace-balcony/terrace5.jpg",
      import.meta.env.BASE_URL + "images/terrace-balcony/terrace6.jpg",
      import.meta.env.BASE_URL + "images/terrace-balcony/terrace1.jpg",
      import.meta.env.BASE_URL + "images/terrace-balcony/terrace8.jpg"
    ]
  }
];

export default products;
