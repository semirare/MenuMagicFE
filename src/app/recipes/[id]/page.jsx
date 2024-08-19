"use client"

import Link from "next/link";
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

    return (
        loading ? <div>Loading...</div> :
            <div className="flex-1 flex flex-col bg-white">
                <div className="text-4xl justify-center my-2">{recipe.name}</div>
                <div id="recipe" className="flex-col gap-2">
                    {recipe.ingredients?.map((ingredient) => (
                        <div key={ingredient.id} className="text-xl font-bold">{ingredient.name} - {ingredient.quantity} {ingredient.unit}</div>
                    ))}
                </div>
            </div>
    );

};

export default Recipe;