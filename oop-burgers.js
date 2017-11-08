/*
Define a constructor function that produces objects representing a single food item. Add parameters to the constructor for the given properties and add them as instance variables.

FoodItem
    - name       : string
    - calories   : number
    - vegan      : boolean
    - glutenFree : boolean 

For example, and object returned from the FoodItem constructor might look like this:

```javascript
var FoodItem = function(name, calories, vegan, glutenFree){
    // code goes here
}
var bacon = new FoodItem('bacon', 100, false, true)
console.log(bacon)
/* This object should print to your console:
{
    name: 'bacon',
    calories: 100,
    vegan: false,
    glutenFree: true
}
*/


var FoodItem = function(name,calories,vegan,glutenFree){
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
};

var bacon = new FoodItem('Bacon',100,false,true);

console.log(bacon);

/*
- Define a `stringify` method on the constructor's prototype. It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. `stringify` should not have any side effects.
Instantiate three different FoodItems and store each in a separate variable. Call `stringify()` on each instance and print the result to the console.

```javascript
FoodItem.prototype.stringify = function(){
    // code goes here
}
console.log(bacon.stringify())
/* Something like this should print to the console:
Bacon has 100 calories, is not vegan, and is gluten free.
*/

FoodItem.prototype.stringify = function () {
    var resultString = `${this.name} has ${this.calories} calories, is `;
    if(this.vegan === true){
        resultString += `vegan, and is `;
    } else {
        resultString += `not vegan, and is `;
    }
    if(this.glutenFree === true){
        resultString += `gluten free.`;
    } else {
        resultString += `not gluten free.`;
    }
    return resultString;
};

console.log(bacon.stringify());

/*
Part II
----------
Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.

    - Plate
    - name        : string
    - description : string
    - price       : number
    - ingredients : Array of FoodItem objects

    - Menu
    - name        : string (e.g. "The Lunch Menu", "Happy-hour Menu", etc)
    - plates      : Array of Plate objects

    - Restaurant
    - name        : string
    - description : string
    - menu        : Menu object
*/

class Plate {

    constructor(name, description, price,ingredients){

        this.name = name;
        this. description = description;
        this.price = price;
        this.ingredients = ingredients;
    };
    stringifyIngredients(){
        var ingredientsNamesArr = [];
        for(var i =0; i < this.ingredients.length; i++){
            var ingredientName = this.ingredients[i].name;
            ingredientsNamesArr.push(ingredientName);
        };
        var ingredientsString = ingredientsNamesArr.join(', ');
        return ingredientsString;
    };
    stringify(){
        var string = `${this.name} consists of ${this.description}. It is ${this.price} dollars, and contains the following ingredients: ${this.stringifyIngredients()}.`;
        return string;
    };
};

class Menu {

    constructor(name,plates){

    this.name = name;
    this.plates = plates;

    };

    stringifyPlates (){
        var platesNamesArr = [];
        for(var i =0; i < this.plates.length; i++){
            var plateName = this.plates[i].name;
            platesNamesArr.push(plateName);
        };
        var platesString = platesNamesArr.join(', ');
        return platesString;
    }

    stringify(){
        return `${this.name} contains the following plates: ${this.stringifyPlates()}.`;
    };

};

class Restaurant {

    constructor(name,description,menu){

    this.name = name;
    this.description = description;
    this.menu = menu;

    };

    stringify(){
        var information =`${this.name} is ${this.description}. ${this.menu.stringify()} `;
        var ingredientsArr = [];
        var ingredientsDescriptionsArr = [];
        for(var i = 0; i < this.menu.plates.length; i++){
            ingredientsArr.push(this.menu.plates[i].stringify());
            for(var j =0; j < this.menu.plates[i].ingredients.length; j++){

                ingredientsDescriptionsArr.push(this.menu.plates[i].ingredients[j].stringify());
            }
        };

        var ingredients = ingredientsArr.join(' ');
        var ingredientsDesString = ingredientsDescriptionsArr.join(' ');
        information += ingredients;
        information += ' ';
        information += ingredientsDesString;
        return information;
    };
};

/*
var FishAndChips = new Plate('Fish and Chips','Fried cod on top of fries',12,['fish nuggets','french fries','tartar sauce']);

var RedLobsterMenu = new Menu('Red Lobster Menu',['Fish and Chips', 'Salmon Plate']);

var RedLobster = new Restaurant('Red Lobster','a family-friendly seafood restaurant', RedLobsterMenu);

console.log(RedLobster.stringify());
*/

/*
Define a `stringify` method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. stringify should not have any side effects. You may want to reuse the `stringify` method of the contained objects. (e.g. the Menu object should call `stringify` on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).


- Instantiate all the FoodItems that you would need for a salad Plate and a burger Plate. 
- Instantiate a salad Plate and a burger Plate.
- Instantiate a Menu that contains each of the instantiated Plates.
- Instantiate a Restaurant that contains the instantiated Menu.
- Call the Restaurant's stringify method to have it print out all its information, including the name, description, price of each Plate, and the  the name, calories, and dietary information of each FoodItem in each of those Plates.
*/

// Salad Ingredients, or 'FoodItems'
var lettuce = new FoodItem('Lettuce',30,true,true);
var crutons = new FoodItem('Crutons', 50, true, false);
var dressing = new FoodItem('Salad Dressing',100, true, true);

// Burger
var beef = new FoodItem('Beef', 150, false, true);
var bun = new FoodItem('Bun', 80, true, false);
var bbqSauce = new FoodItem('BBQ Sauce', 70, true, true);

var burger = new Plate('Burger', "a juicy burger on a bun with BBQ Sauce", 10, [beef,bun,bbqSauce]);
var salad = new Plate('Salad', 'a green salad with crutons and dressing', 9, [lettuce,crutons,dressing]);

var lunchMenu = new Menu('Lunch Menu', [burger,salad]);

var luckysRestaurant = new Restaurant('Lucky\'s Restaurant', 'a family-friendly restaurant with American food',lunchMenu);

console.log(luckysRestaurant.stringify());

