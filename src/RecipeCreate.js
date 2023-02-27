import React, { useState } from "react";

function RecipeCreate({ updateRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  //set useState to initialFormState in order to be able to reset the form back to emptry fields onSubmit
  const [formData, setFormData] = useState({ ...initialFormState });
  //create a change handler to watch for changes at any event target given this handler
  //pass the name of the target, in this case the form fields name attribute, and the target value, the user input, into setFormData
  //along with all the original form data in case any field is left blank and use that info to create the formData variable
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //create submit handler to prevent page reload on submit click
  //pass formData into the updateRecipe prop which updates the list of recipes with the user submitted formData
  //set formData back to initialFormState of empty strings
  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(formData)
    setFormData({ ...initialFormState });
  };

  // create a form that has each field we want in our table
  // pass the handleSubmit function we created above into the onSubmit
  // create <td> for each field that we want with value with a value attribute taken from formData
  // for the onChange attribute, pass the handleChange funtion
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table className="form-table">
        <tbody className="table-body">
          <tr>
            <td>
              <input
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                placeholder="Cuisine"
                type="text"
                name="cuisine"
                id="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                placeholder="PhotoUrl"
                type="url"
                name="photo"
                id="photo"
                value={formData.photo}
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <textarea
                placeholder="Ingredients"
                name="ingredients"
                id="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <textarea
                placeholder="Preparation"
                name="preparation"
                id="preparation"
                value={formData.preparation}
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <button name="delete" type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
