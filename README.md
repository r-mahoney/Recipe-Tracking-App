<h1>Recipe Tracking App</h1>

Front end application built using react in order to track a list of recipes and display them to the user as a table. Also includes a form at the bottom of the table for users to add their own recipes.

<h2>Installation Instructions</h2>

---

To install this repository:
1. Either clone the code or fork and clone the code by clicking the `Code` or `Fork` buttons at the top of the page
2. cd into the new repository
3. run `npm install`
4. run `npm start`

`npm start` will open a webpage letting you view the table with the two included recipes as well as access the form in order to add more recipes

---

<h2>Description</h2>

Two recipes are included to show how the app works with a table with headings "Name", "Cuisine", "Photo", "Ingredients", "Preparation", and "Action."

The action column has two buttons, either a delete button for the recipes included in the table, or a create button in the form. The delete button allows you to delete that specific recipe from the table and teh create button will submit the form and append the user inputed data to the end of the table with the data in teh specified column.

For the form, "Name", "Cuisine", and "Photo" are all text boxes, with "Photo" being a URL input requiring a valid URL in order for the form to be submitted. "Ingredients" and "Preparation" are text areaas allowing the user to write down a list of ingredients and a list of steps in order to prepare the dish. If the text in these areas is too large for the element, a scroll bar will apppear to allow the user to scroll up and down without affecting the other elements.

---

<h2>Build</h2>

This app is built using 4 separate react components. One component builds the table html for a single recipe, one component buils the table and lists of recipes by passing each recipe in the list into the single recipe component, one component cotains the form and updates the list of recipes to then be passed into the list/table building component, and the last component is the default App component which holds all of the other required components as well as specific update and delete handlers to be passed to child compenents.