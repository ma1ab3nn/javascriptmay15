/*Task 1
Add comments to one of your past JS tasks from a previous lesson*/

//Psuedocode:
//LOOP:
//Set number to 1
//Break until it reaches 20
//increment the number by 1
for (i=1; i<= 20; i++)
{
    if (i % 15 === 0)
    {
        // IF number is multiple of 3 & 5
        //print "Fizz Buzz"
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0)
    {
        //ELSE IF number is multiple of 3
        //print "fizz"
        console.log("Fizz");
    
    }
    else if (i % 5 === 0)
    {
        //ELSIF number is multiple of 5
        //print "Buzz"
        console.log("Buzz");
    
    }
    else {
        //ELSE
        //print number
        console.log(i);
    }

}

/* Task 2
Produce a pseudocode response to one or more of the following challenges. As comments.


1. Reading List

Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and already read (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so: “The Hobbit by J.R.R. Tolkien”.

Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like ‘You already read “The Hobbit” by J.R.R. Tolkien’, and if not, log a string like ‘You still need to read “The Lord of the Rings” by J.R.R. Tolkien.’

 */

//function to log the book title and book author
//List of books
    //Title
    //Author
    //Read/Yet to read (T/F)

//LOOP through the list of books
//Set position to 0
//Break until last book
//increment by 1

    //Log the Title
    //Log the Author
    // Check whether read or not
        // IF you've read the book
            //print "You've already read "Title" by "Author"
        // ELSE 
            //print "You still need to read "Title" by "Author"


/*2.Recipe


Create an object to hold information on your favourite recipes. It should have properties for:
recipeTitle (a string)
servings (a number)
ingredients (an array of strings)
directions (a string)
List all recipes
Create a loop to list all the ingredients. */

//function to list all the ingredients of a recipe
//Recipe
    //Title
    //Servings
    //Ingredients
    //Directions

//LOOP through the list of recipes
//Set position to 0
//Break until last recipe
//increment by 1
//print the recipe title

    //LOOP through the list of ingredients
    //Set position to 0
    //Break until last ingredient
    //increment by 1
    //print the ingredients

/*
3. Fix start

Create a function called fixStart. It should take a single argument, a string, and return a version where all occurrences of its first character have been replaced with ‘*****’, except for the first character itself. You can assume that the string is at least one character long. For example:


fixStart('babble'): 'ba**le'

fixStart('turtle'): 'tur*le'

*/

//function called fixStart which accepts a word

// store the first charachter in variable firstCharachter

//LOOP through a word

//Set position to 0
//Break until last charachter
//incremement by 1

    // compare charachter to firstCharachter
    // IF charachter matches firstCharachter
        //replace charachter with *
    // ELSE 
        //print the word




