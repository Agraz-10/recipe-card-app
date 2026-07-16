import { useParams } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";
import recipes from "../data/recipes";

function RecipePage({
  addToShoppingList,
}) {
  const { id } = useParams();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Recipe Not Found
      </h1>
    );
  }

  return (
    <RecipeDetails
      recipe={recipe}
      addToShoppingList={addToShoppingList}
    />
  );
}

export default RecipePage;