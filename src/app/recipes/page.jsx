"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import RecipeCard from "./recipe-card";

const Recipes = () => {
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/menumagic/api/v1/recipes`, {
                method: 'GET'
            }
            );

            if (response.ok) {
                const data = await response.json();
                setRecipes(data.recipes);
                setLoading(false);
            };
        };

        fetchData().catch(console.error);
    }, []);

    return (
        loading ? <div>Loading...</div> :
            <div className="h-[100vw] flex-col bg-white">
                <div id="recipes" className="grid grid-cols-3 gap-2 p-2">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
                <div className="flex p-2 justify-between items-center">
                    <Link href="/" className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium">Add A Recipe</Link>
                </div>
            </div>
    );
}

export default Recipes;