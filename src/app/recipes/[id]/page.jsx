"use client"

import React, { useEffect, useState } from "react";

const Recipe = ({ params }) => {
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/menumagic/api/v1/recipes/${params.id}`, {
                method: 'GET'
            }
            );

            if (response.ok) {
                const data = await response.json();
                setRecipe(data.recipe);
                setLoading(false);
            };
        };

        fetchData().catch(console.error);
    }, []);

    function submitForm(formData) {
        const payload = {
            name: formData.get('name'),
            ingredients: formData.getAll('ingredients')
        };

        fetch(`/menumagic/api/v1/recipes/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                alert('Recipe updated successfully');
            } else {
                alert('Failed to update recipe');
            }
        }).catch(console.error);
    }

    return (
        loading ? <div>Loading...</div> :
            <form action={submitForm} className="flex flex-col">
                <div class="flex justify-center">
                    <input type="text" name="name" className="text-4xl text-center align-self-center w-fit" defaultValue={recipe.name} />
                </div>
                <h2 className="mt-4">Ingredients</h2>
                <div id="recipe" className="flex-col gap-2">
                    {recipe.ingredients?.map((ingredient) => (
                        <div key={ingredient.id} className="text-xl font-bold">{ingredient.name} - {ingredient.quantity} {ingredient.unit}</div>
                    ))}
                </div>
                <button type="submit">Update Recipe</button>
            </form>
    );

};

export default Recipe;