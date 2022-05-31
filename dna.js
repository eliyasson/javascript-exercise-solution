/* (The science of this might not be accurate)
Write a function that takes DNA strand as a parameter. 
The four nucleotides found in DNA are 
adenine (A), cytosine (C), guanine (G) and thymine (T).
So, the function should accept any sequence of A, C, G, & T, in any order. 
A matches with T, G matches with C. 

Your function should return the complement of the given strand. 

e.g. if given G, A, T, C the output should be C, T, A, G
*/

function encodeDNA1(strand) {
    let DNA = [];
    for (let i = 0; i < strand.length; i+= 1) {
        if (strand[i] === "A") DNA.push(strand[i]= "T");
        if (strand[i] === "T") DNA.push(strand[i]= "A");
        if (strand[i] === "C") DNA.push(strand[i]= "G");
        if (strand[i] === "G") DNA.push(strand[i]= "C");
    }
    return DNA;
}
console.log(encodeDNA1("AAATTCCGG"));



