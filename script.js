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



//function which accepts a word

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