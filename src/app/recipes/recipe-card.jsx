
const RecipeCard = ({ recipe }) => {
    return (
        <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-xl font-bold">{recipe.name}</div>
        </div>
    );
}

export default RecipeCard;