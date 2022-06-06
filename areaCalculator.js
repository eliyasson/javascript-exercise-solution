/* Write a function that takes a shape as a param and returns the area of the shape.
Pass shape as an object, 
e.g. {type: "rectangle", sides: { width: 5, height: 6} }

calculate area based on shape.type and shape.sides or the attribute you define.
Implement the area calculation for a triangle, circle and a square.
*/
let shape = {
        
    type: "rectangle", 
    side: {length: 6, width: 7},
};

let shape1 = {

    type: "triangle", 
    side: {base: 7, height: 8}
};
let shape2 = {
    type: "circle", 
    side: {radius: 5}

};
let shape3 = {
    type: "square", 
    side: {length: 6, width: 7}

};

function areaCalculator(shape) {
    if (shape.type == "rectangle") {
        result = shape.side.length * shape.side.width;
    } else if (shape.type == "triangle") {
        result = shape.side.base * shape.side.height * 0.5;
    } else if (shape.type == "circle") {
        result = Math.PI * shape.side.radius**2;
    } else if (shape.type == "square") {
        result = shape.side.length * shape.side.width;
    } 
    return result;
    
    
}
console.log(areaCalculator(shape3));