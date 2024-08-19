"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import RecipeCard from "./recipe-card";

const Recipes = () => {
    const [loading, setLoading] = useState(false);
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
        <div className="h-[100vw] flex-col bg-white">
            <div className="flex justify-between items-center">
                <div className="text-4xl justify-center my-2">Your Recipes</div>
                <Link href="/" className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium">Add A Recipe</Link>
            </div>
            <div id="recipes" className="grid grid-cols-3 gap-2 p-2">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}

export default Recipes;