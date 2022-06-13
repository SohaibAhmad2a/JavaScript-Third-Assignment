/*Write a JavaScript program to compute the union of two arrays.
(Merge two arrays by removing all duplicates)
var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]
Output should be:
[1,2,3,4,5,6,7,8,9,10,20,40,60,70]*/


// There can be two methods to solve this problem 1. First merge and then remove duplicates 2. First remove duplicates and then merge.



//SOLUTION WITH FIRST METHOD:

var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];
var c=b.slice();
//First, I Unified two arrays:
for (var i=0; i<a.length; i++){
    var aElements=a[i];
    c.push(aElements);
}
// Now, I will remove the repeated number from the Unified array:
for (i=0; i<c.length; i++){
    var compareeVar=c[i];
    for (j=0; j<c.length; j++){
        var searchhVar=c[j];
        if (i!==j && compareeVar===searchhVar){
            c.splice(j,1);
        }
    }
}
console.log("First Method Answers")
console.log(a);
console.log(b);
console.log(c);


//SOLUTION WITH SECOND METHOD:

// First, Store a into d, Remove the repeated elements from d 
var d=a.slice();
for (var k=0; k<d.length; k++){
    var compareiVar=d[k];
    for (var l=0; l<b.length; l++){
        var searchiVar=b[l];
        if (compareiVar===searchiVar){
            d.splice(k,1);
        }
    }
}

// Now merge d and b
var e=b.slice();
for (var m=0; m<d.length; m++ ){
    var dElements=d[m];
    e.push(dElements);
}

console.log("Second Method Answers")
console.log(a);
console.log(b);
console.log(e);