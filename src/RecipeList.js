import React from "react";
import OneRecipe from "./Recipe";

function RecipeList({ recipes, handleDelete }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  //for each recipe, pass it and its index into OneRecipe which creates a row with all the relevant data
  //pulled and listed in a table <td>. Also pass delete handler to give the button functionality
  const dataList = recipes.map((recipe, index) => (
    <OneRecipe recipe={recipe} key={index} handleDelete={handleDelete}/>
  ));

  return (
    <div>
      <table className="recipe-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* pass each recipe created by <OneRecipe> into the body of the table */}
        <tbody>{dataList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
