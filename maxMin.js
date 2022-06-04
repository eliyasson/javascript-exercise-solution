/* Write a function that takes three numbers and write two more functions 
which calculate and return the largest and smallest of these numbers.
The first function should print what is returned from 
the functions largest and smallest.
*/

function maxMin(a, b, c) {

    function largest(a, b, c){
       if (a > b && a > c ) {
           result = "The largest number is " + a;
        } else if(b > a && b > c) {
            result = "The largest number is " + b;
        } else if(c > a && c > b) {
            result = "The largest number is " + c;  
        }
        return result;

    }
    
    function smallest(a, b, c){
        if (a < b && a < c) {
            result = "The smallest number is " + a;
        } else if(b < a && b < c) {
            result = "The smallest number is " + b;
        } else if ( c < a && c < b) {
            result = "The smallest number is " + c;
        }
        return result;
       
    }
    return largest(a, b, c) + " & " +  smallest(a, b, c);
}

console.log(maxMin(8, -8, 0));