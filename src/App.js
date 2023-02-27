import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  //sets initial state for recipes to be an array imported from RecipeData
  //could set this to be a blank array to be filled, using RecipeData to show code works outright
  const [recipes, setRecipes] = useState(RecipeData);

  //define a function to update the recipe array given a "value." Calls setRecipes and spreads all current recipes plus
  // new value into recipes variable
  const updateRecipe = (value) => {
    setRecipes([...recipes, value])
  }

  //define a function to "delete" a given recipe from the recipes list. In reality, we just filter
  const handleDelete = (recipeToDelete)=> {
    const list = recipes.filter(recipe => (recipe !== recipeToDelete))
    setRecipes(list)
  }
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
        <RecipeList recipes={recipes} handleDelete={handleDelete}/>
        <RecipeCreate updateRecipe={updateRecipe} />
    </div>
  );
}

export default App;
