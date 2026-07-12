import momo from "../assets/images/momo.jpg";
import dalbhat from "../assets/images/dalbhat.jpg";
import selroti from "../assets/images/selroti.jpg";
import thukpa from "../assets/images/thukpa.jpg";
import sekuwa from "../assets/images/sekuwa.jpg";

const recipes = [
  {
    id: 1,
    name: "Chicken Momo",
    image: momo,
    time: "40 mins",
    difficulty: "Medium",
    ingredients: [
      "Flour",
      "Chicken",
      "Onion",
      "Garlic",
      "Ginger"
    ]
  },

  {
    id: 2,
    name: "Dal Bhat Tarkari",
    image: dalbhat,
    time: "45 mins",
    difficulty: "Easy",
    ingredients: [
      "Rice",
      "Lentils",
      "Mixed Vegetables",
      "Spinach",
      "Pickle"
    ]
  },

  {
    id: 3,
    name: "Sel Roti",
    image: selroti,
    time: "35 mins",
    difficulty: "Medium",
    ingredients: [
      "Rice Flour",
      "Sugar",
      "Milk",
      "Cardamom"
    ]
  },

  {
    id: 4,
    name: "Thukpa",
    image: thukpa,
    time: "30 mins",
    difficulty: "Medium",
    ingredients: [
      "Noodles",
      "Chicken",
      "Carrot",
      "Cabbage",
      "Spring Onion"
    ]
  },

  {
    id: 5,
    name: "Sekuwa",
    image: sekuwa,
    time: "50 mins",
    difficulty: "Hard",
    ingredients: [
      "Chicken",
      "Garlic",
      "Ginger",
      "Mustard Oil",
      "Nepali Spices"
    ]
  }
];

export default recipes;