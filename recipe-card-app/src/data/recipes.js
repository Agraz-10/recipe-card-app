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
      "Chicken Momo is one of Nepal's most loved traditional dishes. These soft steamed dumplings are filled with seasoned minced chicken, onions, garlic, and ginger. They are served with spicy tomato achar and enjoyed across Nepal as a popular snack and main course.",

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
    "Mix minced chicken with onion, garlic, ginger, and spices.",
    "Roll the dough into small wrappers.",
    "Place the filling inside each wrapper.",
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
    time: "45 mins",
    difficulty: "Easy",
    rating: 5.0,
    calories: 650,
    servings: 2,
    ingredients: [
      "Rice",
      "Lentils",
      "Mixed Vegetables",
      "Spinach",
      "Pickle"
    ],
    steps: [
      "Cook the rice.",
      "Boil the lentils.",
      "Prepare vegetable curry.",
      "Serve with spinach and pickle."
    ]
  },

  {
    id: 3,
    name: "Sel Roti",
    category: "Dessert",
    image: selroti,
    time: "35 mins",
    difficulty: "Medium",
    rating: 4.8,
    calories: 420,
    servings: 5,
    ingredients: [
      "Rice Flour",
      "Sugar",
      "Milk",
      "Cardamom"
    ],
    steps: [
      "Prepare the batter.",
      "Heat the oil.",
      "Pour batter in a circular shape.",
      "Fry until golden brown."
    ]
  },

  {
    id: 4,
    name: "Thukpa",
    category: "Soup",
    image: thukpa,
    time: "30 mins",
    difficulty: "Medium",
    rating: 4.7,
    calories: 380,
    servings: 2,
    ingredients: [
      "Noodles",
      "Chicken",
      "Carrot",
      "Cabbage",
      "Spring Onion"
    ],
    steps: [
      "Boil the noodles.",
      "Cook vegetables and chicken.",
      "Add broth.",
      "Mix everything together.",
      "Garnish with spring onion."
    ]
  },

  {
    id: 5,
    name: "Sekuwa",
    category: "Meat",
    image: sekuwa,
    time: "50 mins",
    difficulty: "Hard",
    rating: 4.9,
    calories: 550,
    servings: 3,
    ingredients: [
      "Chicken",
      "Garlic",
      "Ginger",
      "Mustard Oil",
      "Nepali Spices"
    ],
    steps: [
      "Marinate the chicken.",
      "Rest for 2 hours.",
      "Grill over charcoal.",
      "Serve with onion and lemon."
    ]
  }
];

export default recipes;