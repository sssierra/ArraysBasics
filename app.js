/*
Arrays: A single variable that is used to store different elements. A list of variable elements.
Syntax: 
var array = ["index0", "index1", "index2"];
*/

var exArray = ["guitar", "art", "video games", "sleep"];
/*access elements via index, 1st element index = 0.
Syntax: arrayName[index#];
*/
console.log(exArray[0])

//1. Create an array listing ingredients to your favorite recipe.
//Name your array the recipe name.
var smoothie = ["banana", "strawberry", "other fruit", "juice or something"];
//2. Create an array listing the classes you are taking this semester.
//Name your array "SpringSem19"
var SpringSem19 = ["Modern History of Hawaii", "AP English language", "Web Application Development 2"];
//3. Create an array listing your favorite all time movies.
//Name your array "FaveMovies"
var FaveMovies = ["Jurassic Park", "Coraline", "The Silence of The Lambs"];
//4. Create an array listing any other "favorites" you have.
//Name your array the category it is.
var favAnimals = ["snake", "cat", "otter"];
//5. Access the second element in your recipe array and print it as part of the following sentence 
//"The second ingredient to my favorite recipe is ________."
console.log("The second ingredient to my favorite recipe is " + smoothie[1] + ".")
//6. Access the third element in your class list array and print it as part of the following sentence 
//"One of the classes I'm taking this semester is ________."
console.log("One of the classes I'm taking this semester is " + SpringSem19[2] + ".")
//7. Access the first element in your movie list array and print it as part of the following sentence 
//"One of my favorite movies is ________."
console.log("One of my favorite movies is " + FaveMovies[0] + ".")
//8. Access the first element in your last  array and print it as part of the following sentence 
//"One of my favorite __(fill in)__ is ________."
console.log("One of my favorite amimals is a " + favAnimals[0] + ".")
