// Add your functions here

//Your implementation should expect a source array and a function
//All the tests will pass an Array and a block.
//Remember, map returns a new Array.
//Remember, reduce returns a value.
 

//map returns an array with all values made negative
 //create a blank array - call it a 
    // start at 0, itrate over array
    // push the negative numbers inot the new array 
    // return the new array (a)
function map(src) {
    let r = []
    for (let i=0; i < src.length; i++){
        r.push(-1 * src[i])
    }
    return r
}

//map returns an array with the origianl values
function mapOriginal(src) {
    let r = []

    for (let i=0; i < src.length; i++){
        r.push(src[i])
    }
    return r
}

//map returns an array with the original values multiplied by 2

//map returns an array with the original values squared


//reduce returns a running total when not given a starting point

//reduce returns a running total when given a starting point

//reduce reutnrs true when all values are tur

//reduce returns flase when any value is false

//reduce returns true when a true value is present 

//reduce returns false when no true value is present 