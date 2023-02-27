import React from "react";

function OneRecipe({ recipe, handleDelete }) {
    //takes in a recipe and handleDelete function as props
    //were going to use recipes.map and use this component to make a table row for each recipe in our recipes array
    //create a button at the bottom that uses the handleDelete function and passes the recipe as a value so that when 
    //the delete button is pressed, the recipe associated with that delete event is removed from the table
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={`${recipe.name}`} />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button onClick={() => handleDelete(recipe)}>Delete</button>
      </td>
    </tr>
  );
}

export default OneRecipe;
