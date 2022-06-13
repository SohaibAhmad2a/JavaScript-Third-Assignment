/*Write a program to identify the largest number in the given array.
A = [24, 53, 78, 91, 12].*/


var A = [24, 53, 78, 91, 12];
var compVar=A[0];
for (j=0; j<A.length; j++){
    var searVar=A[j];
    if (compVar<searVar){
        compVar=searVar;
    }
}
console.log(compVar);
