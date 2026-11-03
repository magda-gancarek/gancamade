window.SITE = {

  /* ---- Artist ---- */
  artist: { name: "Magdalena Gancarek", tagline: "Things that will last", tagline2: "made by hand", email: "email" },

  portfolio_sub: "Different ways of leaving trace",
  selected_works_sub: "A glimpse of recent pieces",

  footer: "© 2026 Magdalena Gancarek All Rights Reserved.",

  /* ---- Social links in the header. icon: instagram | facebook | tiktok | pinterest ---- */
  socials: [
    { name: "Instagram", url: "https://instagram.com/", icon: "instagram" },
    { name: "Facebook", url: "https://facebook.com/", icon: "facebook" },
    { name: "TikTok", url: "https://tiktok.com/", icon: "tiktok" },
    { name: "Pinterest", url: "https://pinterest.com/", icon: "pinterest" },
  ],

  /* ---- Artist statement ---- */
  statement: "In my work I'm trying catch the moments that would otherwise be {dust:lost}, before we realised it. \nMy work is an attempt to give these intangible things a form that can {slam:last}. \nI adore the {beauty:beauty} of things in the process of {melt:disappearing}: fading light, withering flower, seting sun. \nThe awareness that they will be gone forever makes me appreciate them more. \nI am drawn the possibility that an artwork can outlast the moment that inspired it. \n\nBy my work I want to make people stop for a moment in this {fast:fast-paced-world} to be captivated by its {breathe:n} everlasting beauty.",

  /* ---- Branches of art. A new branch gets its own page and a tile on the main page. ---- */
  categories: [
  { id: "ceramic",  name: "Ceramic",  medium: "Stoneware, glaze", blurb: "Forms shaped by fire and ash" },
  { id: "digital",  name: "Digital",  medium: "Digital", blurb: "Worlds on screen that exist only thanks to electricity" },
  { id: "painting", name: "Painting", medium: "Acrylic on canvas", blurb: "Layers of pigment dissolving into the canvase" },
  { id: "lamps",  name: "Lamps",  medium: "Clay, plywood", blurb: "Form to hold the light in the darkness" }
],

  /* ---- Collections (shown as titled groups on a branch page). Link a piece with `collection: "id"`. ---- */
  collections: [
  { id:"e-m-e", cat:"ceramic", title:"Ephemeral made Ethernal", year:2026, blurb:"I never liked flowers, because they were gone before I even realized that. Now I found a way to make them last forever. However, I captured them in that final moment before they vanish in decay. That's my way to stop the process of faiding. Those flowers will newer die. They will carry this captured moment to the future, for those who will come after us." },
  { id:"comisions", cat:"ceramic", title:"Comisions", year:2026, blurb:"Something out of my usual work, that makes people happy." },
  { id:"v-o-l", cat:"lamps", title:"Vessels of Light", year:2025, blurb:"Light is temporary, because even our sun will someday burn out. However until then we can admire the spectrum of colors, trace of lights and shadows that they cast" },
],

  /* ---- Questions in the contact section. `ex` = ready-to-send example message (optional). ---- */
  faq: [
  { q:"How can I ask you about a piece?", a:"Use the form above or write to me directly. Please mention the title of the work, and whether you would like to know its price, availability or shipping. I usually answer within two or three days. Here is a message you can send as it is:",
    ex:"Hello Magda, I’m interested in “Tulibelle” (ceramic). Is it still available? Could you tell me the price and shipping options? Thank you!" },
  { q:"Do you take commissions?", a:"I can consider them. Tell me what you imagine: the medium, the approximate size and the mood. Here is an example:",
    ex:"Hello Magda, I’d love to commission a piece. What would the process, timeline and budget look like?" },
  { q:"Where do you ship, and how are the works packed?", a:"Currently I'm researching this topic." },
],

  /* ---- ARTWORKS. One record per piece; the order here is the order on the site.
     status:   "available" | "unavailable" (shows "Ask about similar") | "wip" (shows "Work in progress")
     featured: true = shown on the main page
     images:   list of photos. First = main image. { src, alt, caption }; leave out `src` to show a generated
               placeholder; leave out `images` completely for a single placeholder.
     thumb:    optional smaller image used on the tiles
     ratio:    width / height of the photo (0.8 = 4:5, 1.5 = 3:2, 1 = square)
     colors:   hues of the placeholder gradient only (ignored once a photo is added) ---- */
  artworks: [
  {
    id: "failing_tulips",
    title: "Failing tulips",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",       // optional
    medium: "Stoneware, glaze",
    size: "13 × 16 cm",
    status: "available",               // "available" | "unavailable" | "wip"
    featured: false,                    // shown on the main page
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/failing_tulips.jpg",
    images: [
      { src: "images/failing_tulips.jpg", alt: "Front view", caption: "Front" },
      { src: "images/failing_tulips.jpg", alt: "Glaze detail", caption: "Detail" },
    ],
  },
  {
    id: "first_misfire",
    title: "First misfire",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",       
    medium: "Stoneware, glaze",
    size: "12 × 18 cm",
    status: "available", 
    featured: true,
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/first_misfire.jpg",
    images: [
      { src: "images/first_misfire.jpg", alt: "Front view", caption: "Front" }
    ],
  },
  {
    id: "not_enough_water_for_the_roses",
    title: "Not enough water for the roses",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",    
    medium: "Stoneware, glaze",
    size: "25 × 20 cm",
    status: "wip",             
    featured: true,                 
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/not_enough_water_for_the_roses.jpg",
    images: [
      { src: "images/not_enough_water_for_the_roses.jpg", alt: "Front view", caption: "Front" }
    ],
  },
  {
    id: "thrown_bouquet_of_thorns",
    title: "Thrown bouquet of thorns",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",      
    medium: "Stoneware, glaze",
    size: "tbd",
    status: "wip",              
    featured: true,                    
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/thrown_bouquet_of_thorns.jpg",
    images: [
      { src: "images/thrown_bouquet_of_thorns.jpg", alt: "Front view", caption: "Front" }
    ],
  },
  {
    id: "pearls_lamp",
    title: "Pearls lamp",
    year: 2026,
    category: "lamps",
    medium: "Stoneware, glaze",
    collection: "v-o-l",
    size: "25 × 20 cm",
    status: "unavailable",              
    featured: true,                   
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/pearls_lamp_light.jpg",
    images: [
      { src: "images/pearls_lamp_light.jpg", alt: "Light", caption: "Light" },
      { src: "images/pearls_lamp_daylight.jpg", alt: "Daylight", caption: "Daylight" },
      { src: "images/pearls_lamp_dark.jpg", alt: "Dark", caption: "Dark" },
      { src: "images/pearls_lamp_close_up.jpg", alt: "Close_up", caption: "Close" }
    ],
  },
  {
    id: "the_fall_of_a_gladiols_sword",
    title: "The fall of a gladiols sword",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",       
    medium: "Stoneware, glaze",
    size: "45 × 15 cm",
    status: "available",              
    featured: true,                    
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/the_fall_of_a_gladiols_sword.jpg",
    images: [
      { src: "images/the_fall_of_a_gladiols_sword.jpg", alt: "Front view", caption: "Front" }
    ],
  },
  {
    id: "celestial_wings",
    title: "Celestial Wings",
    year: 2023,
    category: "painting",
    medium: "Acrylic on canvas",
    size: "50 x 50 cm",
    status: "available",              
    featured: true,                   
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/celestial_wings.jpg",
    images: [
      { src: "images/celestial_wings.jpg", alt: "Front", caption: "Front" },
      { src: "images/celestial_wings_side.jpg", alt: "Side", caption: "Side" },
      { src: "images/celestial_wings_front.jpg", alt: "Front view", caption: "Front" }
    ],
  },
    {
    id: "two_sides",
    title: "Two sides",
    year: 2023,
    category: "painting",
    medium: "Acrylic on canvas",
    size: "50 x 50 cm",
    status: "available",              
    featured: true,                    
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/two_sides.jpg",
    images: [
      { src: "images/two_sides.jpg", alt: "Front", caption: "Front" },
      { src: "images/two_sides_side.jpg", alt: "Side", caption: "Side" },
      { src: "images/two_sides_front.jpg", alt: "Front view", caption: "Front" }
    ],
  },
  {
    id: "magic_girl_long.jpg",
    title: "Magic girl",
    year: 2023,
    category: "digital",
    medium: "3D",
    size: "",
    status: "",               
    featured: true,                   
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/magic_girl.jpg",
    images: [
      { src: "images/magic_girl.jpg", alt: "Front", caption: "Front" },
      { src: "images/magic_girl_long.jpg", alt: "Long", caption: "Long" },
    ],
  },
  {
    id: "in_magic_forest",
    title: "In Magic Forest",
    year: 2024,
    category: "digital",
    medium: "3D",
    size: "",
    status: "",               
    featured: true,                    
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/in_magic_forest.jpg",
    images: [
      { src: "images/in_magic_forest.jpg", alt: "Front", caption: "Front" },
    ],
  },
  {
    id: "space",
    title: "Space",
    year: 2024,
    category: "digital",
    medium: "3D",
    size: "",
    status: "",               
    featured: true,                   
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/space.png",
    images: [
      { src: "images/space.png", alt: "Front", caption: "Front" },
    ],
  },
  {
    id: "tulibelle",
    title: "Tulibelle",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",       
    medium: "Stoneware, glaze",
    size: "tbd",
    status: "wip",               
    featured: false,                   
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/tulibelle.jpg",
    images: [
      { src: "images/tulibelle.jpg", alt: "Front", caption: "Front" },
    ],
  },
  {
    id: "where_the_tulips_ring",
    title: "Where Tulips Ring",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",     
    medium: "Stoneware, glaze",
    size: "tbd",
    status: "wip",             
    featured: false,               
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/where_tulips_ring.jpg",
    images: [
      { src: "images/where_tulips_ring.jpg", alt: "Front", caption: "Front" },
    ],
  },
  {
    id: "bellalilium",
    title: "Bellalilium",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",      
    medium: "Stoneware, glaze",
    size: "tbd",
    status: "available",             
    featured: true,                    
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/bellalilium.jpg",
    images: [
      { src: "images/bellalilium.jpg", alt: "Front", caption: "Front" },
      { src: "images/bellalilium-bell.jpg", alt: "Front", caption: "Front" }
    ],
  },
 {
    id: "lamp-1",
    title: "Lamp",
    year: 2025,
    category: "lamps",
    collection: "v-o-l",
    medium: "clay, plywood",
    size: "35 x 35 cm",
    status: "available",              
    featured: true,                  
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/lamp-1.jpg",
    images: [
      { src: "images/lamp-1.jpg", alt: "Front", caption: "Front" },
    ],
  },
  {
    id: "lamp-2",
    title: "Lamp",
    year: 2025,
    category: "lamps",
    collection: "v-o-l",
    medium: "clay, plywood",
    size: "35 x 35 cm",
    status: "available",              
    featured: true,                   
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/lamp-2.jpg",
    images: [
      { src: "images/lamp-2.jpg", alt: "Front", caption: "Front" },
    ],
  },
  {
    id: "lamp-3",
    title: "Lamp",
    year: 2025,
    category: "lamps",
    collection: "v-o-l",
    medium: "clay, plywood",
    size: "35 x 35 cm",
    status: "available",              
    featured: true,                
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/lamp-3.jpg",
    images: [
      { src: "images/lamp-3.jpg", alt: "Front", caption: "Front" },
    ],
  },
  {
    id: "lamp-4",
    title: "Lamp",
    year: 2025,
    category: "lamps",
    collection: "v-o-l",
    medium: "clay, plywood",
    size: "35 x 35 cm",
    status: "available",               
    featured: false,                  
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/lamp-4.jpg",
    images: [
      { src: "images/lamp-4.jpg", alt: "Front", caption: "Front" },
    ],
  },
    {
    id: "bez",
    title: "bez",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",    
    medium: "Stoneware, glaze",
    size: "tbd",
    status: "wip",              
    featured: false,                 
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/bellalilium.jpg",
    images: [
      { src: "images/bellalilium.jpg", alt: "Front", caption: "Front" },
      { src: "images/bellalilium-bell.jpg", alt: "Front", caption: "Front" }
    ],
  },
    {
    id: "rose_chimes",
    title: "Rose Chimes",
    year: 2026,
    category: "ceramic",
    collection: "e-m-e",    
    medium: "Stoneware, glaze",
    size: "tbd",
    status: "wip",         
    featured: false,    
    ratio: 1,
    description: "Short text about the piece.",
    thumb: "images/rose_chimes.jpg",
    images: [
      { src: "images/rose_chimes.jpg", alt: "Front", caption: "Front" },
    ],
  },
  ],
};
