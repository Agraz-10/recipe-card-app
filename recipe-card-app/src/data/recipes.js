import momo from "../assets/images/momo.jpg";
import dalbhat from "../assets/images/dalbhat.jpg";
import selroti from "../assets/images/selroti.jpg";
import thukpa from "../assets/images/thukpa.jpg";
import sekuwa from "../assets/images/sekuwa.jpg";

const recipes = [
  {
    id: 1,
    name: "Chicken Momo",
    category: "Dumplings",
    image: momo,
    description:
      "Chicken Momo is one of Nepal's most loved traditional dishes. These steamed dumplings are filled with seasoned minced chicken and served with spicy tomato achar. They are enjoyed across Nepal as a popular snack and main course.",
    time: "40 mins",
    difficulty: "Medium",
    rating: 4.9,
    calories: 320,
    protein: "20 g",
    carbohydrates: "28 g",
    fat: "12 g",
    servings: 4,

    equipment: [
      "Mixing Bowl",
      "Rolling Pin",
      "Knife",
      "Steamer"
    ],

    ingredients: [
      "Flour",
      "Chicken",
      "Onion",
      "Garlic",
      "Ginger"
    ],

    tips: [
      "Do not overfill the wrappers.",
      "Seal the edges tightly.",
      "Steam only after the water starts boiling.",
      "Serve hot with tomato achar."
    ],

    steps: [
      "Prepare a soft dough using flour and water.",
      "Mix minced chicken with onion, garlic, ginger and spices.",
      "Roll the dough into small wrappers.",
      "Fill each wrapper with the chicken mixture.",
      "Fold and seal the momos.",
      "Steam for about 20 minutes.",
      "Serve hot with tomato achar."
    ]
  },

  {
    id: 2,
    name: "Dal Bhat Tarkari",
    category: "Rice",
    image: dalbhat,
    description:
      "Dal Bhat Tarkari is Nepal's national dish. It is a wholesome meal consisting of steamed rice, lentil soup, vegetable curry and pickle. It is eaten daily in many Nepali households.",
    time: "45 mins",
    difficulty: "Easy",
    rating: 5.0,
    calories: 650,
    protein: "18 g",
    carbohydrates: "90 g",
    fat: "10 g",
    servings: 2,

    equipment: [
      "Rice Cooker",
      "Cooking Pot",
      "Pan",
      "Serving Bowl"
    ],

    ingredients: [
      "Rice",
      "Lentils",
      "Mixed Vegetables",
      "Spinach",
      "Pickle"
    ],

    tips: [
      "Cook the rice until fluffy.",
      "Season the lentils with cumin and garlic.",
      "Serve with fresh pickle.",
      "Enjoy while hot."
    ],

    steps: [
      "Wash and cook the rice.",
      "Boil the lentils until soft.",
      "Prepare the vegetable curry.",
      "Cook the spinach.",
      "Serve rice with dal, vegetables and pickle."
    ]
  },

  {
    id: 3,
    name: "Sel Roti",
    category: "Dessert",
    image: selroti,
    description:
      "Sel Roti is a traditional Nepali homemade rice bread prepared during festivals such as Dashain and Tihar. It has a crispy outside with a soft and fluffy center.",
    time: "35 mins",
    difficulty: "Medium",
    rating: 4.8,
    calories: 420,
    protein: "6 g",
    carbohydrates: "68 g",
    fat: "14 g",
    servings: 5,

    equipment: [
      "Mixing Bowl",
      "Blender",
      "Deep Frying Pan",
      "Spatula"
    ],

    ingredients: [
      "Rice Flour",
      "Sugar",
      "Milk",
      "Cardamom"
    ],

    tips: [
      "Prepare a smooth batter.",
      "Use medium heat while frying.",
      "Flip carefully.",
      "Drain excess oil before serving."
    ],

    steps: [
      "Prepare the batter.",
      "Heat oil in a deep pan.",
      "Pour batter in a circular shape.",
      "Fry until golden brown.",
      "Drain and serve."
    ]
  },

  {
    id: 4,
    name: "Thukpa",
    category: "Soup",
    image: thukpa,
    description:
      "Thukpa is a warm noodle soup popular in the Himalayan region of Nepal. It combines noodles, vegetables and meat in a flavorful broth, making it perfect during cold weather.",
    time: "30 mins",
    difficulty: "Medium",
    rating: 4.7,
    calories: 380,
    protein: "16 g",
    carbohydrates: "45 g",
    fat: "8 g",
    servings: 2,

    equipment: [
      "Soup Pot",
      "Knife",
      "Cutting Board",
      "Serving Bowl"
    ],

    ingredients: [
      "Noodles",
      "Chicken",
      "Carrot",
      "Cabbage",
      "Spring Onion"
    ],

    tips: [
      "Do not overcook the noodles.",
      "Use fresh vegetables.",
      "Season the broth well.",
      "Serve immediately."
    ],

    steps: [
      "Prepare the broth.",
      "Cook the chicken.",
      "Add vegetables.",
      "Boil the noodles.",
      "Combine everything and garnish with spring onion."
    ]
  },

  {
    id: 5,
    name: "Sekuwa",
    category: "Meat",
    image: sekuwa,
    description:
      "Sekuwa is a famous Nepali grilled meat dish prepared with aromatic spices and cooked over charcoal. It is a favorite street food enjoyed with onions, lemon and spicy chutney.",
    time: "50 mins",
    difficulty: "Hard",
    rating: 4.9,
    calories: 550,
    protein: "34 g",
    carbohydrates: "5 g",
    fat: "28 g",
    servings: 3,

    equipment: [
      "Mixing Bowl",
      "Skewers",
      "Charcoal Grill",
      "Knife"
    ],

    ingredients: [
      "Chicken",
      "Garlic",
      "Ginger",
      "Mustard Oil",
      "Nepali Spices"
    ],

    tips: [
      "Marinate for at least 2 hours.",
      "Cook over medium charcoal heat.",
      "Turn the meat regularly.",
      "Serve with onions and lemon."
    ],

    steps: [
      "Prepare the marinade.",
      "Marinate the chicken.",
      "Thread onto skewers.",
      "Grill until fully cooked.",
      "Serve hot with onions and lemon."
    ]
  }
];

export default recipes;