import Link from "next/link";

const RecipeCard = ({ recipe }) => {
    return (
        <Link href={`/recipes/${recipe.id}`} key={recipe.id} className="bg-blue-300 p-4 rounded-lg shadow-md">
            <div className="text-xl font-bold">{recipe.name}</div>
            {recipe.ingredients?.map((ingredient) => (
                <div key={ingredient.id} className="text-lg">{ingredient.name} - {ingredient.quantity} {ingredient.unit}</div>
            ))}
        </Link>
    );
}

export default RecipeCard;